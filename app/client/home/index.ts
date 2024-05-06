import { merchData, regoPricesData } from '~/data/content';

import type { Carnivals, MerchProps, News, RegoPrices } from '~/interfaces/content';

export const getMerch = (): Promise<MerchProps[]> =>
	new Promise((resolve, reject) => {
		resolve(merchData);
		// reject(new Error('Something went wrong'));
	});

export const getRegoPrices = (): Promise<RegoPrices[]> =>
	new Promise((resolve, reject) => {
		resolve(regoPricesData);
		// reject(new Error('Something went wrong'));
	});

// map raw facebook news data to our app's event data using News[] interfaces/content
export const mapToNewsData = (data: any): News[] => {
	return data.map((news: any) => ({
		id: news.id,
		date: new Date(news.created_time).toLocaleString('en-AU', { timeZone: 'Australia/Brisbane' }),
		description: news.message,
		images: news.attachments.data[0].type === "photo" ? [news.attachments.data[0].media.image.src] : news.attachments.data[0].subattachments.data.map((subattachment: any) => subattachment.media.image.src),
		link: news.attachments.data[0].url,
	}));
}

// map raw facebook carnival data to our app's carnival data using Carnivals[] interfaces/content
export const mapToCarnivalsData = (data: any): Carnivals[] => {
	return data.map((carnival: any) => ({
		id: carnival.id,
		date: new Date(carnival.created_time).toLocaleString('en-AU', { timeZone: 'Australia/Brisbane' }),
		description: carnival.message,
		images: carnival.attachments.data[0].type === "photo" ? [carnival.attachments.data[0].media.image.src] : carnival.attachments.data[0].subattachments.data.map((subattachment: any) => subattachment.media.image.src),
		link: carnival.attachments.data[0].url,
	}));
}

// export const getNewsPosts = (allPosts: any) => {
// 	allPosts.filter((post: any) => {
// 	if (post.message_tags) {
// 		return post.message_tags.some((tag: any) => tag.name === '#news');
// 	}
// 	return false;
// })};

// export const getCarnivalsPosts = (allPosts: any) => {
// 	allPosts.filter((post: any) => {
// 		if (post.message_tags) {
// 			return post.message_tags.some((tag: any) => tag.name === '#Carnivals');
// 		}
// 		return false;
// 	});
// } 