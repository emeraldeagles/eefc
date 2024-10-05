import type { LoaderFunction } from '@remix-run/node';
import type { MetaFunction } from '@remix-run/react';
import { json, useLoaderData } from '@remix-run/react';
import React from 'react';
import Section from '~/components/Section';
import Tiles from '~/components/Tiles';
import { CARD_CATEGORY, SECTION_CATEGORY } from '~/constants/constants';
import { committeeData, committeeInfoData } from '~/data/content';

export const meta: MetaFunction<typeof loader> = ({ data }) => {
	const year = new Date().getFullYear();
	const canonicalUrl = data?.canonicalUrl ? data.canonicalUrl : 'https://emeraldeagles.com.au/club/committee';
	return [
		{ title: 'EEFC | Club Committee' },
		{ name: 'description', content: `Meet the ${year} committee of Emerald Eagles FC` },
		{ property: 'og:type', content: 'website' },
		{ property: 'og:site_name', content: 'EEFC | Club Committee' },
		{ charset: 'utf-8' },
		{ name: 'viewport', content: 'width=device-width,initial-scale=1' },
		{ property: 'og:title', content: 'EEFC | Club Committee' },
		{ property: 'og:description', content: `Meet the ${year} committee of Emerald Eagles FC` },
		{ property: 'og:url', content: canonicalUrl },
		{ rel: 'canonical', href: canonicalUrl },
	];
};

export const loader: LoaderFunction = async ({ request }) => {
	const url = new URL(request.url);
	const committee = committeeData;
	const committeeInfo = committeeInfoData;

	return json({ committee, committeeInfo, canonicalUrl: `${url.origin}${url.pathname}` });
};

export default function Committee() {
	const { committee, committeeInfo } = useLoaderData<typeof loader>();

	return (
		<>
			<Section category={SECTION_CATEGORY.COMMITTEE_INFO} content={committeeInfo} />
			<Tiles category={CARD_CATEGORY.COMMITTEE} content={committee} />
		</>
	);
}
