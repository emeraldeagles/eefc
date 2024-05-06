import { useFetcher, useLoaderData } from '@remix-run/react';
import { getMerch, getRegoPrices, mapToCarnivalsData, mapToNewsData } from '~/client/home';
import HomeScreen from '~/screens/home';
import type { LoaderFunction } from '@remix-run/node';
import { json } from '@remix-run/node';
import { fetchFacebookPosts } from '~/utils/facebook';
import type { FacebookPost } from '~/cache.server';
import { getCachedData, setCachedData } from '~/cache.server';
import { useEffect } from 'react';
import useStore from '~/store/store';

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

export const loader: LoaderFunction = async ({ request }) => {
	// const url = new URL(request.url);
	// const forceRefresh = url.searchParams.get('refresh') === 'true';
	const FBAccessToken = process.env.FACEBOOK_ACCESS_TOKEN;
	const FBPageId = process.env.FACEBOOK_PAGE_ID;

	let cachedPosts = getCachedData('cachedPosts');
	// if (!cachedPosts || forceRefresh) {
	if (!cachedPosts) {
		cachedPosts = (await fetchFacebookPosts(FBPageId, FBAccessToken)) as FacebookPost[];
		setCachedData('cachedPosts', cachedPosts);
	}

	const regoPricesData = await getRegoPrices();
	const merchData = await getMerch();
	const newsPosts = cachedPosts.filter(post => post.message_tags?.some(tag => tag.name === '#news'));
	const carnivalsPosts = cachedPosts.filter(post => post.message_tags?.some(tag => tag.name === '#Carnivals'));

	console.log('home loader allPosts ===>', cachedPosts);

	return json({
		newsData: mapToNewsData(newsPosts),
		newsPosts,
		carnivalsPosts,
		merchData,
		regoPricesData,
		carnivalsData: mapToCarnivalsData(carnivalsPosts),
	});
};

const Index = () => {
	const { newsData, merchData, regoPricesData, carnivalsData } = useLoaderData<typeof loader>();
	const fetcher = useFetcher();
	const { setNews, setCarnivals } = useStore();

	useEffect(() => {
		if (!sessionStorage.getItem('sessionActive')) {
			sessionStorage.setItem('sessionActive', 'true');
			fetcher.load('/?refresh=true');
		}
	}, []);

	// store news and carnivals in store
	useEffect(() => {
		setNews(newsData);
		setCarnivals(carnivalsData);
	}, []);

	console.log('home index carnivalsData ==>', carnivalsData);

	return (
		<main>
			<HomeScreen news={newsData} merch={merchData} regoPrices={regoPricesData} carnivals={carnivalsData} />
		</main>
	);
};
export default Index;
