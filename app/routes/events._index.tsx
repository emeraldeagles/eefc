import type { LoaderFunction } from '@remix-run/node';
import type { MetaFunction } from '@remix-run/react';
import { Await, defer, useFetcher, useLoaderData } from '@remix-run/react';
import { Suspense, useCallback, useEffect, useState } from 'react';
import type { FacebookPost } from '~/cache.server';
import { getCachedData, setCachedData } from '~/cache.server';
import { mapToEventsData } from '~/client/events';
import { mapToCarnivalsData } from '~/client/home';
import { importantDatesData } from '~/data/content';
import EventsScreen from '~/screens/events';
import useStore from '~/store/store';
import { fetchFacebookPosts } from '~/utils/facebook';

export const meta: MetaFunction<typeof loader> = ({ data }) => {
	const canonicalUrl = data?.canonicalUrl ? data.canonicalUrl : 'https://emeraldeagles.com.au/events';
	return [
		{ title: 'EEFC | Events' },
		{ name: 'description', content: 'Catch up on the latest Emerald Eagles FC events' },
		{ property: 'og:type', content: 'website' },
		{ property: 'og:site_name', content: 'EEFC | Events' },
		{ charset: 'utf-8' },
		{ name: 'viewport', content: 'width=device-width,initial-scale=1' },
		{ property: 'og:title', content: 'EEFC | Events' },
		{ property: 'og:description', content: 'Catch up on the latest Emerald Eagles FC events' },
		{ property: 'og:url', content: canonicalUrl },
		{ rel: 'canonical', href: canonicalUrl },
	];
};

export const loader: LoaderFunction = async ({ request }) => {
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

	const importantDates = importantDatesData;

	return defer({
		importantDates,
		cachedPostsPromise,
	});
};

const EventsRoute = () => {
	const { importantDates, cachedPostsPromise } = useLoaderData<typeof loader>();
	const fetcher = useFetcher();
	const { setCarnivals, carnivals, loading, setLoading, setEvents, events } = useStore(state => ({
		setEvents: state.setEvents,
		setCarnivals: state.setCarnivals,
		events: state.events,
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
			const eventsPosts = cachedPosts.filter(post =>
				post.message_tags?.some(tag => tag.name.toLowerCase() === '#events'),
			);
			const carnivalsPosts = cachedPosts.filter(post =>
				post.message_tags?.some(tag => tag.name.toLowerCase() === '#carnivals'),
			);

			const eventsData = mapToEventsData(eventsPosts);
			const carnivalsData = mapToCarnivalsData(carnivalsPosts);

			setEvents(eventsData);
			setCarnivals(carnivalsData);
			setLoading(false);
		}
	}, [cachedPosts, setEvents, setCarnivals, setLoading]);

	return (
		<main>
			<EventsScreen carnivals={carnivals} events={events} importantDates={importantDates} loading={loading} />
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

export default EventsRoute;
