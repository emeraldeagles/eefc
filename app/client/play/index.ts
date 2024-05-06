import { regoData, seasonInfoData, playerInfoData, coachInfoData, coachesData } from '~/data/content';

import type { CoachInfo, Coaches, PlayerInfo, Rego, SeasonInfo } from '~/interfaces/content';

export const getRego = (): Promise<Rego[]> =>
	new Promise((resolve, reject) => {
		resolve(regoData);
		// reject(new Error('Something went wrong'));
	});

export const getSeasonInfo = (): Promise<SeasonInfo[]> =>
	new Promise((resolve, reject) => {
		resolve(seasonInfoData);
		// reject(new Error('Something went wrong'));
	});

export const getPlayerInfo = (): Promise<PlayerInfo[]> =>
	new Promise((resolve, reject) => {
		resolve(playerInfoData);
		// reject(new Error('Something went wrong'));
	});

export const getCoachInfo = (): Promise<CoachInfo[]> =>
	new Promise((resolve, reject) => {
		resolve(coachInfoData);
		// reject(new Error('Something went wrong'));
	});

	export const getCoaches = (): Promise<Coaches[]> =>
	new Promise((resolve, reject) => {
		resolve(coachesData);
		// reject(new Error('Something went wrong'));
	});