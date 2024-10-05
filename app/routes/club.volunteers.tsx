import type { LoaderFunction } from '@remix-run/node';
import type { MetaFunction } from '@remix-run/react';
import { json, useLoaderData } from '@remix-run/react';
import React from 'react';
import Section from '~/components/Section';
import { SECTION_CATEGORY } from '~/constants/constants';
import { volunteerInfoData } from '~/data/content';
import type { Coaches } from '~/interfaces/content';

export const meta: MetaFunction<typeof loader> = ({ data }) => {
	const canonicalUrl = data?.canonicalUrl ? data.canonicalUrl : 'https://emeraldeagles.com.au/club/volunteers';
	return [
		{ title: 'EEFC | Club Volunteers' },
		{
			name: 'description',
			content: 'Want to help the Emerald Eagles reach new heights? Find out how to volunteer today!',
		},
		{ property: 'og:type', content: 'website' },
		{ property: 'og:site_name', content: 'EEFC | Club Volunteers' },
		{ charset: 'utf-8' },
		{ name: 'viewport', content: 'width=device-width,initial-scale=1' },
		{ property: 'og:title', content: 'EEFC | Club Volunteers' },
		{
			property: 'og:description',
			content: 'Want to help the Emerald Eagles reach new heights? Find out how to volunteer today!',
		},
		{ property: 'og:url', content: canonicalUrl },
		{ rel: 'canonical', href: canonicalUrl },
	];
};

export const loader: LoaderFunction = async ({ request }) => {
	const url = new URL(request.url);
	const volunteerInfo = volunteerInfoData;

	return json({ volunteerInfo, canonicalUrl: `${url.origin}${url.pathname}` });
};

export default function Coaches() {
	const { volunteerInfo } = useLoaderData<typeof loader>();

	return (
		<>
			<Section category={SECTION_CATEGORY.VOLUNTEER_INFO} content={volunteerInfo} />
		</>
	);
}
