import { json } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';

import { getCarnivals, getEvents, getImportantDates } from '~/client/events';

import EventsScreen from '~/screens/events';

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

export const loader = async () => {
	const carnivals = await getCarnivals();
	const events = await getEvents();
	const importantDates = await getImportantDates();

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
