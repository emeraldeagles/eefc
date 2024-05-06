import { json, useLoaderData } from '@remix-run/react';
import React from 'react';
import { getCommittee } from '~/client/club';
import Tiles from '~/components/Tiles';
import { CARD_CATEGORY } from '~/constants/constants';

export async function loader() {
	const committee = await getCommittee();

	return json({ committee });
}

export default function Committee() {
	const { committee } = useLoaderData<typeof loader>();

	return <Tiles category={CARD_CATEGORY.COMMITTEE} content={committee} />;
}
