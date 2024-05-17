import { importantDatesData } from '~/data/content';

import type { Events, ImportantDates } from '~/interfaces/content';

export const getImportantDates = (): Promise<ImportantDates[]> =>
	new Promise((resolve, reject) => {
		resolve(importantDatesData);
		// reject(new Error('Something went wrong'));
	});

// map raw facebook event data to our app's event data using Events[] interfaces/content
export const mapToEventsData = (data: any): Events[] => {
    return data.map((event: any) => {
        // Safeguard against missing attachments or subattachments
        const attachments = event.attachments?.data ?? [];
        const firstAttachment = attachments[0] ?? {};
        const isPhoto = firstAttachment.type === 'photo';
        const subAttachments = firstAttachment.subattachments?.data ?? [];

        return {
            id: event.id,
            date: new Date(event.created_time).toLocaleString('en-AU', { timeZone: 'Australia/Brisbane' }),
            description: event.message,
            images: isPhoto
                ? [firstAttachment.media?.image?.src]
                : subAttachments.map((subattachment: any) => subattachment.media?.image?.src).filter(Boolean),
            link: firstAttachment.url,
        };
    });
};
