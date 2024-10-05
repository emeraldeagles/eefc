import type { LoaderFunction } from '@remix-run/node';
import type { MetaFunction } from '@remix-run/react';
import { json, useLoaderData } from '@remix-run/react';
import React from 'react';
import Section from '~/components/Section';
import Tiles from '~/components/Tiles';
import { CARD_CATEGORY, SECTION_CATEGORY } from '~/constants/constants';
import { blueCardInfoData, coachesData, coachInfoData, resourcesData } from '~/data/content';
import type { Coaches } from '~/interfaces/content';

export const meta: MetaFunction<typeof loader> = ({ data }) => {
	const canonicalUrl = data?.canonicalUrl ? data.canonicalUrl : 'https://emeraldeagles.com.au/club/coaches';
	return [
		{ title: 'EEFC | Club Coaches' },
		{ name: 'description', content: 'See the latest coaches and coaching staff from Emerald Eagles FC' },
		{ property: 'og:type', content: 'website' },
		{ property: 'og:site_name', content: 'EEFC | Club Coaches' },
		{ charset: 'utf-8' },
		{ name: 'viewport', content: 'width=device-width,initial-scale=1' },
		{ property: 'og:title', content: 'EEFC | Club Coaches' },
		{ property: 'og:description', content: 'See the latest coaches and coaching staff from Emerald Eagles FC' },
		{ property: 'og:url', content: canonicalUrl },
		{ rel: 'canonical', href: canonicalUrl },
	];
};

export const loader: LoaderFunction = async ({ request }) => {
	const url = new URL(request.url);
	const coachesInfo = coachInfoData;
	const resources = resourcesData;
	const coaches = coachesData;
	const blueCardInfo = blueCardInfoData;

	return json({ coachesInfo, coaches, blueCardInfo, resources, canonicalUrl: `${url.origin}${url.pathname}` });
};

export default function Coaches() {
	const { coachesInfo, coaches, blueCardInfo, resources } = useLoaderData<typeof loader>();

	return (
		<>
			<Section category={SECTION_CATEGORY.COACH_INFO} content={coachesInfo} />
			<Section category={SECTION_CATEGORY.BLUE_CARD_INFO} content={blueCardInfo} leftToRight />
			<Tiles category={CARD_CATEGORY.COACHES} content={coaches} />
			<Tiles category={CARD_CATEGORY.RESOURCES} content={resources} />
		</>
	);
}
