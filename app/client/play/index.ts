import { regoData, seasonInfoData, playerInfoData, coachInfoData } from '~/data/content';

import type { CoachInfo, PlayerInfo, Rego, SeasonInfo } from '~/interfaces/content';

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
