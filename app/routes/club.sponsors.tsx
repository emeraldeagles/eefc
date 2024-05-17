import { json, useLoaderData } from '@remix-run/react';
import React from 'react';
import { getSponsors, getSponsorsInfo } from '~/client/club';
import Section from '~/components/Section';
import Tiles from '~/components/Tiles';
import { CARD_CATEGORY, SECTION_CATEGORY, SPONSOR_TYPE } from '~/constants/constants';

export async function loader() {
	const sponsors = await getSponsors();
	const sponsorsInfo = await getSponsorsInfo();

	return json({ sponsors, sponsorsInfo });
}

export default function Sponsors() {
	const { sponsors, sponsorsInfo } = useLoaderData<typeof loader>();

	const platinumSponsors = sponsors.filter(sponsor => sponsor.type === SPONSOR_TYPE.PLATINUM);
	const goldSponsors = sponsors.filter(sponsor => sponsor.type === SPONSOR_TYPE.GOLD);
	const silverSponsors = sponsors.filter(sponsor => sponsor.type === SPONSOR_TYPE.SILVER);
	const bronzeSponsors = sponsors.filter(sponsor => sponsor.type === SPONSOR_TYPE.BRONZE);

	return (
		<>
			<Section category={SECTION_CATEGORY.SPONSORS_INFO} content={sponsorsInfo} />
			<Tiles category={CARD_CATEGORY.PLATINUM_SPONSORS} content={platinumSponsors} />
			<Tiles category={CARD_CATEGORY.GOLD_SPONSORS} content={goldSponsors} />
			<Tiles category={CARD_CATEGORY.SILVER_SPONSORS} content={silverSponsors} />
			<Tiles category={CARD_CATEGORY.BRONZE_SPONSORS} content={bronzeSponsors} />
		</>
	);
}
