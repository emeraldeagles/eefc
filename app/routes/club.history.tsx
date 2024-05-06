import { json, useLoaderData } from '@remix-run/react';
import React from 'react';
import { getHistory } from '~/client/club';
import Article from '~/components/Article';
import { CARD_CATEGORY } from '~/constants/constants';

export async function loader() {
	const history = await getHistory();

	return json({ history });
}

export default function History() {
	const { history } = useLoaderData<typeof loader>();

	return <Article category={CARD_CATEGORY.HISTORY} content={history} />;
}
