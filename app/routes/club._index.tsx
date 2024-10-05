import type { LoaderFunction } from '@remix-run/node';
import { json } from '@remix-run/node';
import type { MetaFunction } from '@remix-run/react';
import { useLoaderData } from '@remix-run/react';

import { clubInfoData, protectOurGameData, resourcesData } from '~/data/content';

import ClubScreen from '~/screens/club';

export const meta: MetaFunction<typeof loader> = ({ data }) => {
	const canonicalUrl = data?.canonicalUrl ? data.canonicalUrl : 'https://emeraldeagles.com.au/club';
	return [
		{ title: 'EEFC | Club' },
		{
			name: 'description',
			content: 'Explore our club, history, life members, sponsors, volunteers, coaches, committee, and more',
		},
		{ property: 'og:type', content: 'website' },
		{ property: 'og:site_name', content: 'EEFC | Club' },
		{ charset: 'utf-8' },
		{ name: 'viewport', content: 'width=device-width,initial-scale=1' },
		{ property: 'og:title', content: 'EEFC | Club' },
		{
			property: 'og:description',
			content: 'Explore our club, history, life members, sponsors, volunteers, coaches, committee, and more',
		},
		{ property: 'og:url', content: canonicalUrl },
		{ rel: 'canonical', href: canonicalUrl },
	];
};

export const loader: LoaderFunction = async ({ request }) => {
	const url = new URL(request.url);
	const resources = resourcesData;
	const clubInfo = clubInfoData;
	const protectOurGame = protectOurGameData;

	return json({ resources, clubInfo, protectOurGame, canonicalUrl: `${url.origin}${url.pathname}` });
};

const ClubRoute = () => {
	const { resources, clubInfo, protectOurGame } = useLoaderData<typeof loader>();

	return (
		<main>
			<ClubScreen resources={resources} clubInfo={clubInfo} protectOurGame={protectOurGame} />
		</main>
	);
};

export default ClubRoute;
