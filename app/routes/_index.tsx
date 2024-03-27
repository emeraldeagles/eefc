import { useLoaderData } from '@remix-run/react';
import { json } from '@remix-run/node';

import { getNews, getMerch, getRegoPrices, getCarnivals } from '~/client/home';

import HomeScreen from '~/screens/home';

export const meta = () => [
	{
		title: 'EEFC | Home',
	},
	{
		charset: 'utf-8',
	},
	{
		name: 'viewport',
		content: 'width=device-width, initial-scale=1.0',
	},
];

export const loader = async () => {
	const news = await getNews();
	const merch = await getMerch();
	const regoPrices = await getRegoPrices();
	const carnivals = await getCarnivals();

	return json({ news, merch, regoPrices, carnivals });
};

const Index = () => {
	const { news, merch, regoPrices, carnivals } = useLoaderData<typeof loader>();

	console.log('merch', merch);

	return (
		<main>
			<HomeScreen news={news} merch={merch} regoPrices={regoPrices} carnivals={carnivals} />
		</main>
	);
};
export default Index;
