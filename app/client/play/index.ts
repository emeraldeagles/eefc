import {
	regoInfoData,
	fairPlayInfoData,
	seasonInfoData,
	playerInfoData,
	coachInfoData,
	coachesData,
} from '~/data/content';

import type { CoachInfo, Coaches, PlayerInfo, RegoInfo, FairPlayInfo, SeasonInfo } from '~/interfaces/content';

export const getRegoInfo = (): Promise<RegoInfo> =>
	new Promise((resolve, reject) => {
		resolve(regoInfoData);
		// reject(new Error('Something went wrong'));
	});

export const getFairPlayInfo = (): Promise<FairPlayInfo> =>
	new Promise((resolve, reject) => {
		resolve(fairPlayInfoData);
		// reject(new Error('Something went wrong'));
	});

export const getSeasonInfo = (): Promise<SeasonInfo> =>
	new Promise((resolve, reject) => {
		resolve(seasonInfoData);
		// reject(new Error('Something went wrong'));
	});

export const getPlayerInfo = (): Promise<PlayerInfo> =>
	new Promise((resolve, reject) => {
		resolve(playerInfoData);
		// reject(new Error('Something went wrong'));
	});

export const getCoachInfo = (): Promise<CoachInfo> =>
	new Promise((resolve, reject) => {
		resolve(coachInfoData);
		// reject(new Error('Something went wrong'));
	});

export const getCoaches = (): Promise<Coaches[]> =>
	new Promise((resolve, reject) => {
		resolve(coachesData);
		// reject(new Error('Something went wrong'));
	});
