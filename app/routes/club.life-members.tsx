import { json, useLoaderData } from '@remix-run/react';
import React from 'react';
import { getLifeMembers, getLifeMembersInfo } from '~/client/club';
import LifeMembersTable from '~/components/LifeMembersTable';
import Section from '~/components/Section';
import SectionTitle from '~/components/SectionTitle';
import { SECTION_CATEGORY } from '~/constants/constants';

export async function loader() {
	const lifeMembers = await getLifeMembers();
	const lifeMembersInfo = await getLifeMembersInfo();

	return json({ lifeMembers, lifeMembersInfo });
}

export default function LifeMembers() {
	const { lifeMembers, lifeMembersInfo } = useLoaderData<typeof loader>();

	return (
		<>
			<Section category={SECTION_CATEGORY.LIFE_MEMBERS_INFO} content={lifeMembersInfo} />
			<SectionTitle category="Life Members" />
			<LifeMembersTable lifeMembers={lifeMembers} />
			{/* <Tiles category={CARD_CATEGORY.LIFE_MEMBERS} content={lifeMembers} /> */}
		</>
	);
}
