import { json, useLoaderData } from '@remix-run/react';
import React from 'react';
import { getSeasonInfo } from '~/client/play';
import Tiles from '~/components/Tiles';
import { CARD_CATEGORY } from '~/constants/constants';

export async function loader() {
	const seasonInfo = await getSeasonInfo();

	return json({ seasonInfo });
}

export default function SeasonInfo() {
	const { seasonInfo } = useLoaderData<typeof loader>();

	return <Tiles category={CARD_CATEGORY.SEASON_INFO} content={seasonInfo} />;
}
