import { json, useLoaderData } from '@remix-run/react';
import React from 'react';
import { getVolunteerInfo } from '~/client/club';
import Section from '~/components/Section';
import { SECTION_CATEGORY } from '~/constants/constants';
import type { Coaches } from '~/interfaces/content';

export const meta = () => [
	{
		title: 'EEFC | Volunteers',
	},
	{
		charset: 'utf-8',
	},
	{
		viewport: 'width=device-width,initial-scale=1',
	},
];

export async function loader() {
	const volunteerInfo = await getVolunteerInfo();

	return json({ volunteerInfo });
}

export default function Coaches() {
	const { volunteerInfo } = useLoaderData<typeof loader>();

	return (
		<>
			<Section category={SECTION_CATEGORY.VOLUNTEER_INFO} content={volunteerInfo} />
		</>
	);
}
