import { importantDatesData, eventsData, carnivalsData } from '~/data/content';

import type { Carnivals, Events, ImportantDates } from '~/interfaces/content';

export const getImportantDates = (): Promise<ImportantDates[]> =>
	new Promise((resolve, reject) => {
		resolve(importantDatesData);
		// reject(new Error('Something went wrong'));
	});

export const getCarnivals = (): Promise<Carnivals[]> =>
	new Promise((resolve, reject) => {
		resolve(carnivalsData);
		// reject(new Error('Something went wrong'));
	});

export const getEvents = (): Promise<Events[]> =>
	new Promise((resolve, reject) => {
		resolve(eventsData);
		reject(new Error('Something went wrong'));
	});
