import type { LoaderFunction } from '@remix-run/node';
import type { MetaFunction } from '@remix-run/react';
import { json, useLoaderData } from '@remix-run/react';
import React from 'react';
import Section from '~/components/Section';
import Tiles from '~/components/Tiles';
import { CARD_CATEGORY, SECTION_CATEGORY, SPONSOR_TYPE } from '~/constants/constants';
import { sponsorsData, sponsorsInfoData } from '~/data/content';

export const meta: MetaFunction<typeof loader> = ({ data }) => {
	const year = new Date().getFullYear();
	const canonicalUrl = data?.canonicalUrl ? data.canonicalUrl : 'https://emeraldeagles.com.au/club/sponsors';
	return [
		{ title: 'EEFC | Club Sponsors' },
		{
			name: 'description',
			content: `Without the help of our ${year} sponsors, Emerald Eagles FC would not be able to exist`,
		},
		{ property: 'og:type', content: 'website' },
		{ property: 'og:site_name', content: 'EEFC | Club Sponsors' },
		{ charset: 'utf-8' },
		{ name: 'viewport', content: 'width=device-width,initial-scale=1' },
		{ property: 'og:title', content: 'EEFC | Club Sponsors' },
		{
			property: 'og:description',
			content: `Without the help of our ${year} sponsors, Emerald Eagles FC would not be able to exist`,
		},
		{ property: 'og:url', content: canonicalUrl },
		{ rel: 'canonical', href: canonicalUrl },
	];
};

export const loader: LoaderFunction = async ({ request }) => {
	const url = new URL(request.url);
	const sponsors = sponsorsData;
	const sponsorsInfo = sponsorsInfoData;

	return json({ sponsors, sponsorsInfo, canonicalUrl: `${url.origin}${url.pathname}` });
};

export default function Sponsors() {
	const { sponsors, sponsorsInfo } = useLoaderData<typeof loader>();

	const platinumSponsors = sponsors.filter(sponsor => sponsor.type === SPONSOR_TYPE.PLATINUM);
	const goldSponsors = sponsors.filter(sponsor => sponsor.type === SPONSOR_TYPE.GOLD);
	const silverSponsors = sponsors.filter(sponsor => sponsor.type === SPONSOR_TYPE.SILVER);
	const bronzeSponsors = sponsors.filter(sponsor => sponsor.type === SPONSOR_TYPE.BRONZE);
	const donationSponsors = sponsors.filter(sponsor => sponsor.type === SPONSOR_TYPE.DONATION);
	const grantSponsors = sponsors.filter(sponsor => sponsor.type === SPONSOR_TYPE.GRANT);

	return (
		<>
			<Section category={SECTION_CATEGORY.SPONSORS_INFO} content={sponsorsInfo} />
			<Tiles category={CARD_CATEGORY.PLATINUM_SPONSORS} content={platinumSponsors} />
			<Tiles category={CARD_CATEGORY.GOLD_SPONSORS} content={goldSponsors} />
			<Tiles category={CARD_CATEGORY.SILVER_SPONSORS} content={silverSponsors} />
			<Tiles category={CARD_CATEGORY.BRONZE_SPONSORS} content={bronzeSponsors} />
			<Tiles category={CARD_CATEGORY.DONATION_SPONSORS} content={donationSponsors} />
			<Tiles category={CARD_CATEGORY.GRANT_SPONSORS} content={grantSponsors} />
		</>
	);
}
