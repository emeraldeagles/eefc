import { regoInfoData, fairPlayInfoData, miniroosInfoData, juniorsInfoData, seniorsInfoData } from '~/data/content';

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

export const getMiniroosInfo = (): Promise<SectionCardInfo> =>
	new Promise((resolve, reject) => {
		resolve(miniroosInfoData);
		// reject(new Error('Something went wrong'));
	});

export const getJuniorsInfo = (): Promise<SectionCardInfo> =>
	new Promise((resolve, reject) => {
		resolve(juniorsInfoData);
		// reject(new Error('Something went wrong'));
	});

export const getSeniorsInfo = (): Promise<SectionCardInfo> =>
	new Promise((resolve, reject) => {
		resolve(seniorsInfoData);
		// reject(new Error('Something went wrong'));
	});
