import { json } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';

import { getResources, getClubInfo } from '~/client/club';

import ClubScreen from '~/screens/club';

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
	const resources = await getResources();
	const clubInfo = await getClubInfo();

	return json({ resources, clubInfo });
};

const ClubRoute = () => {
	const { resources, clubInfo } = useLoaderData<typeof loader>();

	return (
		<main>
			<ClubScreen resources={resources} clubInfo={clubInfo} />
		</main>
	);
};

export default ClubRoute;
