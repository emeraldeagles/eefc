import { json, useLoaderData } from '@remix-run/react';
import React from 'react';
import { getHistory } from '~/client/club';
import Section from '~/components/Section';
import { SECTION_CATEGORY } from '~/constants/constants';

export const meta = () => [
	{
		title: 'EEFC | Club History',
	},
	{
		charset: 'utf-8',
	},
	{
		viewport: 'width=device-width,initial-scale=1',
	},
];

export async function loader() {
	const history = await getHistory();

	return json({ history });
}

export default function History() {
	const { history } = useLoaderData<typeof loader>();

	return <Section category={SECTION_CATEGORY.HISTORY_INFO} content={history} />;
}
