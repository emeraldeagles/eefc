import { regoInfoData, fairPlayInfoData, seasonInfoData, playerInfoData } from '~/data/content';

import type { SectionCardInfo } from '~/interfaces/content';

export const getRegoInfo = (): Promise<SectionCardInfo> =>
	new Promise((resolve, reject) => {
		resolve(regoInfoData);
		// reject(new Error('Something went wrong'));
	});

export const getFairPlayInfo = (): Promise<SectionCardInfo> =>
	new Promise((resolve, reject) => {
		resolve(fairPlayInfoData);
		// reject(new Error('Something went wrong'));
	});

export const getSeasonInfo = (): Promise<SectionCardInfo> =>
	new Promise((resolve, reject) => {
		resolve(seasonInfoData);
		// reject(new Error('Something went wrong'));
	});

export const getPlayerInfo = (): Promise<SectionCardInfo> =>
	new Promise((resolve, reject) => {
		resolve(playerInfoData);
		// reject(new Error('Something went wrong'));
	});
