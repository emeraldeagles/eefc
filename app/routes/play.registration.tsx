import { json, useLoaderData } from '@remix-run/react';
import React from 'react';
import { getRego } from '~/client/play';
import Article from '~/components/Article';
import { CARD_CATEGORY } from '~/constants/constants';

export async function loader() {
	const rego = await getRego();

	return json({ rego });
}

export default function Rego() {
	const { rego } = useLoaderData<typeof loader>();

	return (
		<>
			<Article category={CARD_CATEGORY.COACH_INFO} content={rego} />
		</>
	);
}
