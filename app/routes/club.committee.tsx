import { json, useLoaderData } from '@remix-run/react';
import React from 'react';
import { getCommittee, getCommitteeInfo } from '~/client/club';
import Section from '~/components/Section';
import Tiles from '~/components/Tiles';
import { CARD_CATEGORY, SECTION_CATEGORY } from '~/constants/constants';

export async function loader() {
	const committee = await getCommittee();
	const committeeInfo = await getCommitteeInfo();

	return json({ committee, committeeInfo });
}

export default function Committee() {
	const { committee, committeeInfo } = useLoaderData<typeof loader>();

	return (
		<>
			<Section category={SECTION_CATEGORY.COMMITTEE_INFO} content={committeeInfo} />
			<Tiles category={CARD_CATEGORY.COMMITTEE} content={committee} />
		</>
	);
}
