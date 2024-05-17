import { json, useLoaderData } from '@remix-run/react';
import React from 'react';
import { getCoachInfo, getCoaches, getResources } from '~/client/club';
import Section from '~/components/Section';
import Tiles from '~/components/Tiles';
import { CARD_CATEGORY, SECTION_CATEGORY } from '~/constants/constants';
import type { Coaches } from '~/interfaces/content';

export async function loader() {
	const coachesInfo = await getCoachInfo();
	const resources = await getResources();
	const coaches = await getCoaches();
	console.log('debug coaches =>', coaches);

	return json({ coachesInfo, coaches, resources });
}

export default function Coaches() {
	const { coachesInfo, coaches, resources } = useLoaderData<typeof loader>();
	console.log('coaches =>', coaches);

	return (
		<>
			<Section category={SECTION_CATEGORY.COACH_INFO} content={coachesInfo} />
			<Tiles category={CARD_CATEGORY.COACHES} content={coaches} />
			<Tiles category={CARD_CATEGORY.RESOURCES} content={resources} />
		</>
	);
}
