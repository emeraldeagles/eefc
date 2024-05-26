import { json } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { getRegoPrices } from '~/client/home';

import { getRegoInfo, getFairPlayInfo, getSeniorsInfo, getJuniorsInfo, getMiniroosInfo } from '~/client/play';

import PlayScreen from '~/screens/play';

// nodejs route

export const meta = () => [
	{
		title: 'EEFC | Play',
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
	const miniroosInfo = await getMiniroosInfo();
	const juniorsInfo = await getJuniorsInfo();
	const seniorsInfo = await getSeniorsInfo();

	return json({ rego, regoPrices, fairPlay, miniroosInfo, juniorsInfo, seniorsInfo });
};

const PlayRoute = () => {
	const { rego, regoPrices, fairPlay, miniroosInfo, juniorsInfo, seniorsInfo } = useLoaderData<typeof loader>();

	return (
		<main>
			<PlayScreen
				regoInfo={rego}
				regoPrices={regoPrices}
				fairPlayInfo={fairPlay}
				miniroosInfo={miniroosInfo}
				juniorsInfo={juniorsInfo}
				seniorsInfo={seniorsInfo}
			/>
		</main>
	);
};

export default PlayRoute;
