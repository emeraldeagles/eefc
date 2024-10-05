import type { LoaderFunction, LoaderFunctionArgs } from '@remix-run/node';
import type { MetaFunction } from '@remix-run/react';
import { Await, defer, useFetcher, useLoaderData } from '@remix-run/react';
import { Suspense, useCallback, useEffect, useState } from 'react';
import type { FacebookPost } from '~/cache.server';
import { getCachedData, setCachedData } from '~/cache.server';
import { mapToNewsData } from '~/client/home';
import Article from '~/components/Article';
import Tiles from '~/components/Tiles';
import { CARD_CATEGORY } from '~/constants/constants';
import useStore from '~/store/store';
import { fetchFacebookPosts } from '~/utils/facebook';

export const meta: MetaFunction<typeof loader> = ({ data }) => {
	const canonicalUrl = data?.canonicalUrl ? data.canonicalUrl : 'https://emeraldeagles.com.au/news';
	return [
		{ title: 'EEFC | News' },
		{ name: 'description', content: 'Stay up to date with the latest Emerald Eagles FC news' },
		{ property: 'og:type', content: 'website' },
		{ property: 'og:site_name', content: 'EEFC | News' },
		{ charset: 'utf-8' },
		{ name: 'viewport', content: 'width=device-width,initial-scale=1' },
		{ property: 'og:title', content: 'EEFC | News' },
		{ property: 'og:description', content: 'Stay up to date with the latest Emerald Eagles FC news' },
		{ property: 'og:url', content: canonicalUrl },
		{ rel: 'canonical', href: canonicalUrl },
	];
};

export const loader: LoaderFunction = async ({ params }) => {
	const { id } = params;
	const FBAccessToken = process.env.FACEBOOK_ACCESS_TOKEN;
	const FBPageId = process.env.FACEBOOK_PAGE_ID;

	const cachedPostsPromise = (async () => {
	let cachedPosts = getCachedData('cachedPosts');
	if (!cachedPosts) {
		cachedPosts = (await fetchFacebookPosts(FBPageId, FBAccessToken)) as FacebookPost[];
		setCachedData('cachedPosts', cachedPosts);
	}
		return cachedPosts;
	})();

	return defer({ id, cachedPostsPromise });
};

export default function News() {
	const { id, cachedPostsPromise } = useLoaderData<typeof loader>();
	const fetcher = useFetcher();
	const { setNews, news, loading, setLoading } = useStore(state => ({
		setNews: state.setNews,
		news: state.news,
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
		if (cachedPosts.length > 0) {
			const newsPosts = cachedPosts.filter(post => post.message_tags?.some(tag => tag.name.toLowerCase() === '#news'));

			const newsData = mapToNewsData(newsPosts);

			setNews(newsData);
			setLoading(false);
		}
	}, [cachedPosts, setNews, setLoading]);

	const newsPost = news.find(item => item.id === id);

	if (!newsPost) {
		return <div>Post not found</div>;
	}

	return (
		<div>
			<Article category={CARD_CATEGORY.NEWS} content={newsPost} isLoading={loading} />
			<Tiles category={CARD_CATEGORY.NEWS} content={news} isLoading={loading} />
			<Suspense fallback={<div>Loading Facebook posts...</div>}>
				<Await
					resolve={cachedPostsPromise}
					errorElement={<div>Error loading Facebook posts, please refresh the page</div>}
					children={() => null}
				/>
			</Suspense>
		</div>
	);
}
