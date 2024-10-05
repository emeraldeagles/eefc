import type { LoaderFunction } from '@remix-run/node';
import type { MetaFunction } from '@remix-run/react';
import { json, useLoaderData } from '@remix-run/react';
import React from 'react';
import Section from '~/components/Section';
import { SECTION_CATEGORY } from '~/constants/constants';
import { historyInfoData } from '~/data/content';

export const meta: MetaFunction<typeof loader> = ({ data }) => {
	const canonicalUrl = data?.canonicalUrl ? data.canonicalUrl : 'https://emeraldeagles.com.au/club/history';
	return [
		{ title: 'EEFC | Club History' },
		{ name: 'description', content: 'View the history of Emerald Eagles FC Club' },
		{ property: 'og:type', content: 'website' },
		{ property: 'og:site_name', content: 'EEFC | Club History' },
		{ charset: 'utf-8' },
		{ name: 'viewport', content: 'width=device-width,initial-scale=1' },
		{ property: 'og:title', content: 'EEFC | Club History' },
		{ property: 'og:description', content: 'View the history of Emerald Eagles FC Club' },
		{ property: 'og:url', content: canonicalUrl },
		{ rel: 'canonical', href: canonicalUrl },
	];
};

export const loader: LoaderFunction = async ({ request }) => {
	const url = new URL(request.url);
	const history = historyInfoData;

	return json({ history, canonicalUrl: `${url.origin}${url.pathname}` });
};

export default function History() {
	const { history } = useLoaderData<typeof loader>();

	return <Section category={SECTION_CATEGORY.HISTORY_INFO} content={history} />;
}
