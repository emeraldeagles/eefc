import type { LoaderFunction } from '@remix-run/node';
import { json } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { getImportantDates, mapToEventsData } from '~/client/events';

import EventsScreen from '~/screens/events';
import { fetchFacebookPostsByHashtag } from '~/utils/facebook';

// nodejs route

export const meta = () => [
	{
		title: 'EEFC | Events',
	},
	{
		charset: 'utf-8',
	},
	{
		viewport: 'width=device-width,initial-scale=1',
	},
];

export const loader: LoaderFunction = async ({ request }) => {
	const FBAccessToken = process.env.FACEBOOK_ACCESS_TOKEN;
	const FBPageId = process.env.FACEBOOK_PAGE_ID;
	const eventPosts = await fetchFacebookPostsByHashtag(FBPageId, FBAccessToken, 'events');
	const carnivals = await fetchFacebookPostsByHashtag(FBPageId, FBAccessToken, '#Carnivals');
	const importantDates = await getImportantDates();
	const events = mapToEventsData(eventPosts);
	// const carnivals = mapToCarnivalsData(carnivalPosts);

	return json({ carnivals, events, importantDates });
};

const ClubRoute = () => {
	const { carnivals, events, importantDates } = useLoaderData<typeof loader>();

	return (
		<main>
			<EventsScreen carnivals={carnivals} events={events} importantDates={importantDates} />
		</main>
	);
};

export default ClubRoute;
