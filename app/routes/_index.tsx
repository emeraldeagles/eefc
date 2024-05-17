import { Await, defer, useFetcher, useLoaderData } from '@remix-run/react';
import { getMerch, getRegoPrices, mapToCarnivalsData, mapToNewsData } from '~/client/home';
import HomeScreen from '~/screens/home';
import type { LoaderFunction } from '@remix-run/node';
import { fetchFacebookPosts } from '~/utils/facebook';
import type { FacebookPost } from '~/cache.server';
import { getCachedData, setCachedData } from '~/cache.server';
import { Suspense, useEffect } from 'react';
import useStore from '~/store/store';

export const meta = () => [
	{
		title: 'EEFC | Home',
	},
	{
		charset: 'utf-8',
	},
	{
		name: 'viewport',
		content: 'width=device-width, initial-scale=1.0',
	},
];

export const loader: LoaderFunction = async ({ request }) => {
	const url = new URL(request.url);
	const forceRefresh = url.searchParams.get('refresh') === 'true';
	const FBAccessToken = process.env.FACEBOOK_ACCESS_TOKEN;
	const FBPageId = process.env.FACEBOOK_PAGE_ID;

	const cachedPostsPromise = (async () => {
		let cachedPosts = getCachedData('cachedPosts');
		if (!cachedPosts || forceRefresh) {
			cachedPosts = (await fetchFacebookPosts(FBPageId, FBAccessToken)) as FacebookPost[];
			setCachedData('cachedPosts', cachedPosts);
		}
		return cachedPosts;
	})();

	const regoPricesData = await getRegoPrices();
	const merchData = await getMerch();

	return defer({
		regoPricesData,
		merchData,
		cachedPostsPromise,
	});
};

const Index = () => {
	const { merchData, regoPricesData, cachedPostsPromise } = useLoaderData<typeof loader>();
	const fetcher = useFetcher();
	const { setNews, setCarnivals, news, carnivals, loading, setLoading } = useStore(state => ({
		setNews: state.setNews,
		setCarnivals: state.setCarnivals,
		news: state.news,
		carnivals: state.carnivals,
		loading: state.loading,
		setLoading: state.setLoading,
	}));

	// Handle session storage and trigger fetch if necessary
	useEffect(() => {
		if (!sessionStorage.getItem('sessionActive')) {
			sessionStorage.setItem('sessionActive', 'true');
			fetcher.load('/?refresh=true');
		}
	}, [fetcher]);

	// Handle posts and update store
	const handlePosts = (cachedPosts: FacebookPost[]) => {
		console.log('Handling cached posts:', cachedPosts);
		if (!cachedPosts) return; // Safeguard against undefined cachedPosts

		const newsPosts = cachedPosts.filter(post => post.message_tags?.some(tag => tag.name === '#news'));
		const carnivalsPosts = cachedPosts.filter(post =>
			post.message_tags?.some(tag => tag.name.toLowerCase() === '#carnivals'),
		);

		const newsData = mapToNewsData(newsPosts);
		const carnivalsData = mapToCarnivalsData(carnivalsPosts);

		console.log('Mapped news data:', newsData);
		console.log('Mapped carnivals data:', carnivalsData);

		setNews(newsData);
		setCarnivals(carnivalsData);
		setLoading(false);
	};

	return (
		<main>
			{loading && <HomeScreen news={[]} merch={merchData} regoPrices={regoPricesData} carnivals={[]} loading={true} />}
			<Suspense fallback={<div>Loading Facebook posts...</div>}>
				<Await
					resolve={cachedPostsPromise}
					errorElement={<div>Error loading Facebook posts</div>}
					children={(cachedPosts: FacebookPost[]) => {
						if (loading) {
							handlePosts(cachedPosts);
						}
						return (
							<HomeScreen
								news={news}
								merch={merchData}
								regoPrices={regoPricesData}
								carnivals={carnivals}
								loading={loading}
							/>
						);
					}}
				/>
			</Suspense>
		</main>
	);
};

export default Index;
