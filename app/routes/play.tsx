import { json } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { getRegoPrices } from '~/client/home';

import { getRegoInfo, getFairPlayInfo, getSeasonInfo, getPlayerInfo, getCoachInfo } from '~/client/play';

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
	const rego = await getRegoInfo();
	const regoPrices = await getRegoPrices();
	const fairPlay = await getFairPlayInfo();
	const seasonInfo = await getSeasonInfo();
	const playerInfo = await getPlayerInfo();
	const coachInfo = await getCoachInfo();

	return json({ rego, regoPrices, fairPlay, seasonInfo, playerInfo, coachInfo });
};

const PlayRoute = () => {
	const { rego, regoPrices, fairPlay, seasonInfo, playerInfo, coachInfo } = useLoaderData<typeof loader>();

	return (
		<main>
			<PlayScreen
				regoInfo={rego}
				regoPrices={regoPrices}
				fairPlayInfo={fairPlay}
				seasonInfo={seasonInfo}
				playerInfo={playerInfo}
				coachInfo={coachInfo}
			/>
		</main>
	);
};

export default PlayRoute;
