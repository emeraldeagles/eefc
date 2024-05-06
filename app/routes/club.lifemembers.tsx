import { json, useLoaderData } from '@remix-run/react';
import React from 'react';
import { getLifeMembers } from '~/client/club';
import Tiles from '~/components/Tiles';
import { CARD_CATEGORY } from '~/constants/constants';

export async function loader() {
	const lifeMembers = await getLifeMembers();

	return json({ lifeMembers });
}

export default function LifeMembers() {
	const { lifeMembers } = useLoaderData<typeof loader>();

	return <Tiles category={CARD_CATEGORY.LIFE_MEMBERS} content={lifeMembers} />;
}
