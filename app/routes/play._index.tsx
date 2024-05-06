import { json } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';

import { getRego, getSeasonInfo, getPlayerInfo, getCoachInfo } from '~/client/play';

import PlayScreen from '~/screens/play';

// nodejs route

export const meta = () => [
	{
		title: 'EEFC | Club',
	},
	{
		charset: 'utf-8',
	},
	{
		viewport: 'width=device-width,initial-scale=1',
	},
];

export const loader = async () => {
	const rego = await getRego();
	const seasonInfo = await getSeasonInfo();
	const playerInfo = await getPlayerInfo();
	const coachInfo = await getCoachInfo();

	return json({ rego, seasonInfo, playerInfo, coachInfo });
};

const ClubRoute = () => {
	const { rego, seasonInfo, playerInfo, coachInfo } = useLoaderData<typeof loader>();

	return (
		<main>
			<PlayScreen rego={rego} seasonInfo={seasonInfo} playerInfo={playerInfo} coachInfo={coachInfo} />
		</main>
	);
};

export default ClubRoute;
