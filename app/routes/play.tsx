import type { LoaderFunction } from '@remix-run/node';
import { json } from '@remix-run/node';
import type { MetaFunction } from '@remix-run/react';
import { useLoaderData } from '@remix-run/react';
import {
	fairPlayInfoData,
	juniorsInfoData,
	miniroosInfoData,
	regoInfoData,
	regoPricesData,
	seniorsInfoData,
} from '~/data/content';
import PlayScreen from '~/screens/play';

export const meta: MetaFunction<typeof loader> = ({ data }) => {
	const canonicalUrl = data?.canonicalUrl ? data.canonicalUrl : 'https://emeraldeagles.com.au/play';
	return [
		{ title: 'EEFC | Play' },
		{ name: 'description', content: 'Find out how to start playing for the Emerald Eagles FC' },
		{ property: 'og:type', content: 'website' },
		{ property: 'og:site_name', content: 'EEFC | Play' },
		{ charset: 'utf-8' },
		{ name: 'viewport', content: 'width=device-width,initial-scale=1' },
		{ property: 'og:title', content: 'EEFC | Play' },
		{ property: 'og:description', content: 'Find out how to start playing for the Emerald Eagles FC' },
		{ property: 'og:url', content: canonicalUrl },
		{ rel: 'canonical', href: canonicalUrl },
	];
};

export const loader: LoaderFunction = async ({ request }) => {
	const url = new URL(request.url);
	const rego = regoInfoData;
	const regoPrices = regoPricesData;
	const fairPlay = fairPlayInfoData;
	const miniroosInfo = miniroosInfoData;
	const juniorsInfo = juniorsInfoData;
	const seniorsInfo = seniorsInfoData;

	return json({
		rego,
		regoPrices,
		fairPlay,
		miniroosInfo,
		juniorsInfo,
		seniorsInfo,
		canonicalUrl: `${url.origin}${url.pathname}`,
	});
};

const PlayRoute = () => {
	const { rego, regoPrices, fairPlay, miniroosInfo, juniorsInfo, seniorsInfo } = useLoaderData<typeof loader>();

	return (
		<main>
			<PlayScreen
				regoInfo={rego}
				regoPrices={regoPrices}
				fairPlayInfo={fairPlay}
				miniroosInfo={miniroosInfo}
				juniorsInfo={juniorsInfo}
				seniorsInfo={seniorsInfo}
			/>
		</main>
	);
};

export default PlayRoute;
