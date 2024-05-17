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

export const mapToNewsData = (data: any): News[] => {
	return data.map((news: any) => {
        // Safeguard against missing attachments or subattachments
        const attachments = news.attachments?.data ?? [];
        const firstAttachment = attachments[0] ?? {};
        const isPhoto = firstAttachment.type === 'photo';
        const subAttachments = firstAttachment.subattachments?.data ?? [];

        return {
            id: news.id,
            date: new Date(news.created_time).toLocaleString('en-AU', { timeZone: 'Australia/Brisbane' }),
            description: news.message,
            images: isPhoto
                ? [firstAttachment.media?.image?.src]
                : subAttachments.map((subattachment: any) => subattachment.media?.image?.src).filter(Boolean),
            link: firstAttachment.url,
        };
    });
}

export const mapToCarnivalsData = (data: any): Carnivals[] => {
	return data.map((carnival: any) => {
        // Safeguard against missing attachments or subattachments
        const attachments = carnival.attachments?.data ?? [];
        const firstAttachment = attachments[0] ?? {};
        const isPhoto = firstAttachment.type === 'photo';
        const subAttachments = firstAttachment.subattachments?.data ?? [];

        return {
            id: carnival.id,
            date: new Date(carnival.created_time).toLocaleString('en-AU', { timeZone: 'Australia/Brisbane' }),
            description: carnival.message,
            images: isPhoto
                ? [firstAttachment.media?.image?.src]
                : subAttachments.map((subattachment: any) => subattachment.media?.image?.src).filter(Boolean),
            link: firstAttachment.url,
        };
    });
}