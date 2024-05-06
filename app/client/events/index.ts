import { importantDatesData } from '~/data/content';

import type { Events, ImportantDates } from '~/interfaces/content';

export const getImportantDates = (): Promise<ImportantDates[]> =>
	new Promise((resolve, reject) => {
		resolve(importantDatesData);
		// reject(new Error('Something went wrong'));
	});

	// map raw facebook event data to our app's event data using Events[] interfaces/content
	export const mapToEventsData = (data: any): Events[] => {
		return data.map((event: any) => ({
			id: event.id,
			date: "placeholder event date property",
			description: event.message,
			image: event.attachments.data[0].media.image.src,
			images: event.attachments.data[0].type === "photo" ? [event.attachments.data[0].media.image.src] : event.attachments.data[0].subattachments.data.map((subattachment: any) => subattachment.media.image.src),
			link: event.attachments.data[0].url,
		}));
	}