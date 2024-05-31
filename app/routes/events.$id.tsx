import type { LoaderFunction } from '@remix-run/node';
import { Await, defer, useFetcher, useLoaderData } from '@remix-run/react';
import { Suspense, useCallback, useEffect, useState } from 'react';
import type { FacebookPost } from '~/cache.server';
import { getCachedData, setCachedData } from '~/cache.server';
import { mapToEventsData } from '~/client/events';
import Article from '~/components/Article';
import Tiles from '~/components/Tiles';
import { CARD_CATEGORY } from '~/constants/constants';
import useStore from '~/store/store';
import { fetchFacebookPosts } from '~/utils/facebook';

export const meta = () => [
	{
		title: 'EEFC | Event',
	},
	{
		charset: 'utf-8',
	},
	{
		viewport: 'width=device-width,initial-scale=1',
	},
];

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

export default function Events() {
	const { id, cachedPostsPromise } = useLoaderData<typeof loader>();
	const fetcher = useFetcher();
	const { setEvents, events, loading, setLoading } = useStore(state => ({
		setEvents: state.setEvents,
		events: state.events,
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
			const eventsPosts = cachedPosts.filter(post =>
				post.message_tags?.some(tag => tag.name.toLowerCase() === '#events'),
			);

			const eventsData = mapToEventsData(eventsPosts);

			setEvents(eventsData);
			setLoading(false);
		}
	}, [cachedPosts, setEvents, setLoading]);

	const eventPost = events.find(item => item.id === id);

	if (!eventPost) {
		return <div>Post not found</div>;
	}

	return (
		<div>
			<Article category={CARD_CATEGORY.EVENTS} content={eventPost} isLoading={loading} />
			<Tiles category={CARD_CATEGORY.EVENTS} content={events} isLoading={loading} />
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
