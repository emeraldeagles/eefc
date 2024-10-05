import type { MetaFunction } from '@remix-run/react';
import { Await, defer, useFetcher, useLoaderData } from '@remix-run/react';
import { mapToCarnivalsData, mapToNewsData } from '~/client/home';
import HomeScreen from '~/screens/home';
import type { LoaderFunction } from '@remix-run/node';
import { fetchFacebookPosts } from '~/utils/facebook';
import type { FacebookPost } from '~/cache.server';
import { getCachedData, setCachedData } from '~/cache.server';
import { Suspense, useCallback, useEffect, useState } from 'react';
import useStore from '~/store/store';
import { merchData, regoPricesData } from '~/data/content';

export const meta: MetaFunction<typeof loader> = ({ data }) => {
	const canonicalUrl = data?.canonicalUrl ? data.canonicalUrl : 'https://emeraldeagles.com.au/home';
	return [
		{ title: 'EEFC | Home' },
		{ name: 'description', content: 'See the latest news and update from the club' },
		{ property: 'og:type', content: 'website' },
		{ property: 'og:site_name', content: 'EEFC | Home' },
		{ charset: 'utf-8' },
		{ name: 'viewport', content: 'width=device-width,initial-scale=1' },
		{ property: 'og:title', content: 'EEFC | Home' },
		{ property: 'og:description', content: 'See the latest news and updates from the club' },
		{ property: 'og:url', content: canonicalUrl },
		{ rel: 'canonical', href: canonicalUrl },
	];
};

export const loader: LoaderFunction = async ({ request }) => {
	const url = new URL(request.url);
	// const forceRefresh = url.searchParams.get('refresh') === 'true';
	const FBAccessToken = process.env.FACEBOOK_ACCESS_TOKEN;
	const FBPageId = process.env.FACEBOOK_PAGE_ID;

	const cachedPostsPromise = (async () => {
		let cachedPosts = getCachedData('cachedPosts');
		// if (!cachedPosts || forceRefresh) {
		if (!cachedPosts) {
			cachedPosts = (await fetchFacebookPosts(FBPageId, FBAccessToken)) as FacebookPost[];
			setCachedData('cachedPosts', cachedPosts);
		}
		return cachedPosts;
	})();

	const regoPrices = regoPricesData;
	const merch = merchData;

	return defer({
		regoPrices,
		merch,
		cachedPostsPromise,
		canonicalUrl: `${url.origin}${url.pathname}`,
	});
};

// export const loader: LoaderFunction = async (args: LoaderFunctionArgs) => {
// 	const url = new URL(args.request.url);

// 	// Fetch critical data (use await)
// 	const regoPricesData = await getRegoPrices();
// 	const merchData = await getMerch();

// 	// Do NOT await deferred data, just call the function and return its promise
// 	const deferredData = loadDeferredData(args);

// 	return defer({
// 		regoPricesData,
// 		merchData,
// 		...deferredData, // Deferred data is returned as a promise
// 		canonicalUrl: `${url.origin}${url.pathname}`,
// 	});
// };

// const loadDeferredData = async ({ context, request }: LoaderFunctionArgs) => {
// 	const FBAccessToken = process.env.FACEBOOK_ACCESS_TOKEN;
// 	const FBPageId = process.env.FACEBOOK_PAGE_ID;

// 	const cachedPosts = getCachedData('cachedPosts');

// 	if (!cachedPosts) {
// 		const cachedPostsPromise = fetchFacebookPosts(FBPageId, FBAccessToken);

// 		cachedPostsPromise.then(posts => {
// 			setCachedData('cachedPosts', posts);
// 		});

// 		return { cachedPostsPromise };
// 	} else {
// 		return { cachedPostsPromise: Promise.resolve(cachedPosts) };
// 	}
// };

const Index = () => {
	const { merch, regoPrices, cachedPostsPromise } = useLoaderData<typeof loader>();
	const fetcher = useFetcher();
	const { setNews, setCarnivals, news, carnivals, loading, setLoading } = useStore(state => ({
		setNews: state.setNews,
		setCarnivals: state.setCarnivals,
		news: state.news,
		carnivals: state.carnivals,
		loading: state.loading,
		setLoading: state.setLoading,
	}));

	const [cachedPosts, setCachedPosts] = useState<FacebookPost[]>([]);

	// Handle session storage and trigger fetch if necessary
	useEffect(() => {
		if (!sessionStorage.getItem('sessionActive')) {
			sessionStorage.setItem('sessionActive', 'true');
			fetcher.load('/?refresh=true');
		}
	}, [fetcher]);

	// Load Facebook posts and update store
	const loadFacebookPosts = useCallback(async () => {
		try {
			const posts = await cachedPostsPromise;
			setCachedPosts(posts);
		} catch (error) {
			console.error('Error loading Facebook posts:', error);
			setLoading(false);
		}
	}, [cachedPostsPromise, setLoading]);

	useEffect(() => {
		loadFacebookPosts();
	}, [loadFacebookPosts]);

	useEffect(() => {
		if (cachedPosts && cachedPosts.length > 0) {
			const newsPosts = cachedPosts.filter(post => post.message_tags?.some(tag => tag.name.toLowerCase() === '#news'));
			const carnivalsPosts = cachedPosts.filter(post =>
				post.message_tags?.some(tag => tag.name.toLowerCase() === '#carnivals'),
			);

			const newsData = mapToNewsData(newsPosts);
			const carnivalsData = mapToCarnivalsData(carnivalsPosts);

			setNews(newsData);
			setCarnivals(carnivalsData);
			setLoading(false);
		}
	}, [cachedPosts, setNews, setCarnivals, setLoading]);

	return (
		<main>
			<HomeScreen news={news} merch={merch} regoPrices={regoPrices} carnivals={carnivals} loading={loading} />
			<Suspense fallback={<div>Loading Facebook posts...</div>}>
				<Await
					resolve={cachedPostsPromise}
					errorElement={<div>Error loading Facebook posts, please refresh the page</div>}
					children={() => null}
				/>
			</Suspense>
		</main>
	);
};

export default Index;
