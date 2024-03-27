import { carnivalsData, merchData, newsData, regoPricesData } from '~/data/content';

import type { Carnivals, Merch, News, RegoPrices} from '~/interfaces/content';

export const getNews = (): Promise<News[]> =>
	new Promise((resolve, reject) => {
		resolve(newsData);
		// reject(new Error('Something went wrong'));
	});

export const getMerch = (): Promise<Merch[]> =>
	new Promise((resolve, reject) => {
		resolve(merchData);
		// reject(new Error('Something went wrong'));
	});

export const getRegoPrices = (): Promise<RegoPrices[]> =>
	new Promise((resolve, reject) => {
		resolve(regoPricesData);
		// reject(new Error('Something went wrong'));
	});

    export const getCarnivals = (): Promise<Carnivals[]> =>
	new Promise((resolve, reject) => {
		resolve(carnivalsData);
		// reject(new Error('Something went wrong'));
	});
