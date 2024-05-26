import { json, useLoaderData } from '@remix-run/react';
import React from 'react';
import { getBlueCardInfo, getCoachInfo, getCoaches, getResources } from '~/client/club';
import Section from '~/components/Section';
import Tiles from '~/components/Tiles';
import { CARD_CATEGORY, SECTION_CATEGORY } from '~/constants/constants';
import type { Coaches } from '~/interfaces/content';

export const meta = () => [
	{
		title: 'EEFC | Coaches',
	},
	{
		charset: 'utf-8',
	},
	{
		viewport: 'width=device-width,initial-scale=1',
	},
];

export async function loader() {
	const coachesInfo = await getCoachInfo();
	const resources = await getResources();
	const coaches = await getCoaches();
	const blueCardInfo = await getBlueCardInfo();
	console.log('debug coaches =>', coaches);

	return json({ coachesInfo, coaches, blueCardInfo, resources });
}

export default function Coaches() {
	const { coachesInfo, coaches, blueCardInfo, resources } = useLoaderData<typeof loader>();
	console.log('coaches =>', coaches);

	return (
		<>
			<Section category={SECTION_CATEGORY.COACH_INFO} content={coachesInfo} />
			<Section category={SECTION_CATEGORY.BLUE_CARD_INFO} content={blueCardInfo} leftToRight />
			<Tiles category={CARD_CATEGORY.COACHES} content={coaches} />
			<Tiles category={CARD_CATEGORY.RESOURCES} content={resources} />
		</>
	);
}
