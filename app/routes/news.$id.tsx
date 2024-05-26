import type { LoaderFunction } from '@remix-run/node';
import { json, useLoaderData } from '@remix-run/react';
import Article from '~/components/Article';
import Tiles from '~/components/Tiles';
import { CARD_CATEGORY } from '~/constants/constants';
import useStore from '~/store/store';

export const meta = () => [
	{
		title: 'EEFC | News',
	},
	{
		charset: 'utf-8',
	},
	{
		viewport: 'width=device-width,initial-scale=1',
	},
];

export const loader: LoaderFunction = async ({ params }) => {
	const { id } = params;
	return json({ id });
};

export default function News() {
	const { id } = useLoaderData<typeof loader>();
	const { news, carnivals, events } = useStore();
	const allPosts = [...news, ...carnivals, ...events];
	const post = allPosts.find(item => item.id === id);
	if (!post) {
		return <div>Post not found</div>;
	}

	return (
		<div>
			<Article category={CARD_CATEGORY.NEWS} content={post} />
			<Tiles category={CARD_CATEGORY.NEWS} content={news} isLoading={!news.length} />
		</div>
	);
}
