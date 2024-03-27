import { json } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';

import { getHistory, getCommittee, getLifeMembers, getSponsors, getResources, getClubInfo } from '~/client/club';

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
	const history = await getHistory();
	const committee = await getCommittee();
	const lifeMembers = await getLifeMembers();
	const sponsors = await getSponsors();

	return json({ resources, clubInfo, history, committee, lifeMembers, sponsors });
};

const ClubRoute = () => {
	const { resources, clubInfo, history, committee, lifeMembers, sponsors } = useLoaderData<typeof loader>();

	return (
		<main>
			<ClubScreen
				resources={resources}
				clubInfo={clubInfo}
				history={history}
				committee={committee}
				lifeMembers={lifeMembers}
				sponsors={sponsors}
			/>
		</main>
	);
};

export default ClubRoute;
