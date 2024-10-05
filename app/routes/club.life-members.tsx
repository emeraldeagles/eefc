import type { LoaderFunction } from '@remix-run/node';
import type { MetaFunction } from '@remix-run/react';
import { json, useLoaderData } from '@remix-run/react';
import React from 'react';
import LifeMembersTable from '~/components/LifeMembersTable';
import Section from '~/components/Section';
import SectionTitle from '~/components/SectionTitle';
import { SECTION_CATEGORY } from '~/constants/constants';
import { lifeMembersData, lifeMembersInfoData } from '~/data/content';

export const meta: MetaFunction<typeof loader> = ({ data }) => {
	const canonicalUrl = data?.canonicalUrl ? data.canonicalUrl : 'https://emeraldeagles.com.au/club/life-members';
	return [
		{ title: 'EEFC | Club Life Members' },
		{ name: 'description', content: 'Celebrating the life members of the Emerald Eagles FC Club' },
		{ property: 'og:type', content: 'website' },
		{ property: 'og:site_name', content: 'EEFC | Club Life Members' },
		{ charset: 'utf-8' },
		{ name: 'viewport', content: 'width=device-width,initial-scale=1' },
		{ property: 'og:title', content: 'EEFC | Club Life Members' },
		{ property: 'og:description', content: 'Celebrating the life members of the Emerald Eagles FC Club' },
		{ property: 'og:url', content: canonicalUrl },
		{ rel: 'canonical', href: canonicalUrl },
	];
};

export const loader: LoaderFunction = async ({ request }) => {
	const url = new URL(request.url);
	const lifeMembers = lifeMembersData;
	const lifeMembersInfo = lifeMembersInfoData;

	return json({ lifeMembers, lifeMembersInfo, canonicalUrl: `${url.origin}${url.pathname}` });
};

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
