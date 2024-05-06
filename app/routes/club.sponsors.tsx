import { json, useLoaderData } from '@remix-run/react';
import React from 'react';
import { getSponsors } from '~/client/club';
import Tiles from '~/components/Tiles';
import { CARD_CATEGORY } from '~/constants/constants';

export async function loader() {
	const sponsors = await getSponsors();

	return json({ sponsors });
}

export default function Sponsors() {
	const { sponsors } = useLoaderData<typeof loader>();

	return <Tiles category={CARD_CATEGORY.SPONSORS} content={sponsors} />;
}
