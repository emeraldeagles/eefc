import { json, useLoaderData } from '@remix-run/react';
import React from 'react';
import { getResources } from '~/client/club';
import { getCoachInfo, getCoaches } from '~/client/play';
import Section from '~/components/Section';
import Tiles from '~/components/Tiles';
import { CARD_CATEGORY, SECTION_CATEGORY } from '~/constants/constants';

export async function loader() {
	const coachesInfo = await getCoachInfo();
	const resources = await getResources();
	const coaches = getCoaches();

	return json({ coachesInfo, coaches, resources });
}

export default function Coaches() {
	const { coachesInfo, coaches, resources } = useLoaderData<typeof loader>();

	return (
		<>
			<Tiles category={CARD_CATEGORY.COACH_INFO} content={coaches} />
			<Tiles category={CARD_CATEGORY.RESOURCES} content={resources} />
			{/* may need different data source for this as this is the actual coach info where as the same section on the play pgae route is just a quick overview of this section, essentially  a link */}
			{/* also need to figure out how to pass in the content here as a section only displays category data. maybe i just add the coaches info into the category object */}
			{/* <Section category={SECTION_CATEGORY.COACH_INFO} content={coachesInfo} /> */}
			<Section category={SECTION_CATEGORY.COACH_INFO} />
		</>
	);
}
