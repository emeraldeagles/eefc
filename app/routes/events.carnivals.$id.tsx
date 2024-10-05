import type { LoaderFunction } from '@remix-run/node';
import type { MetaFunction } from '@remix-run/react';
import { Await, defer, useFetcher, useLoaderData } from '@remix-run/react';
import { useState, useEffect, useCallback, Suspense } from 'react';
import type { FacebookPost } from '~/cache.server';
import { getCachedData, setCachedData } from '~/cache.server';
import { mapToCarnivalsData } from '~/client/home';
import Article from '~/components/Article';
import Tiles from '~/components/Tiles';
import { CARD_CATEGORY } from '~/constants/constants';
import useStore from '~/store/store';
import { fetchFacebookPosts } from '~/utils/facebook';

export const meta: MetaFunction<typeof loader> = ({ data }) => {
	const canonicalUrl = data?.canonicalUrl ? data.canonicalUrl : 'https://emeraldeagles.com.au/events/carnivals';
	return [
		{ title: 'EEFC | Events - Carnivals' },
		{ name: 'description', content: 'Stay up to date with the latest Emerald Eagles FC carnivals' },
		{ property: 'og:type', content: 'website' },
		{ property: 'og:site_name', content: 'EEFC | Events - Carnivals' },
		{ charset: 'utf-8' },
		{ name: 'viewport', content: 'width=device-width,initial-scale=1' },
		{ property: 'og:title', content: 'EEFC | Events - Carnivals' },
		{ property: 'og:description', content: 'Stay up to date with the latest Emerald Eagles FC carnivals' },
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

export default function Carnivals() {
	const { id, cachedPostsPromise } = useLoaderData<typeof loader>();
	const fetcher = useFetcher();
	const { setCarnivals, carnivals, loading, setLoading } = useStore(state => ({
		setCarnivals: state.setCarnivals,
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
		if (cachedPosts.length > 0) {
			const carnivalsPosts = cachedPosts.filter(post =>
				post.message_tags?.some(tag => tag.name.toLowerCase() === '#carnivals'),
			);

			const newsData = mapToCarnivalsData(carnivalsPosts);

			setCarnivals(newsData);
			setLoading(false);
		}
	}, [cachedPosts, setCarnivals, setLoading]);

	const carnivalPost = carnivals.find(item => item.id === id);

	if (!carnivalPost) {
		return <div>Post not found</div>;
	}

	return (
		<div>
			<Article category={CARD_CATEGORY.CARNIVALS} content={carnivalPost} isLoading={loading} />
			<Tiles category={CARD_CATEGORY.CARNIVALS} content={carnivals} isLoading={loading} />
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
