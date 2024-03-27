import { resourcesData, historyData, committeeData, lifeMembersData, sponsorsData, clubInfoData } from '~/data/content';

import type { History, Committee, LifeMembers, Resources, Sponsors, ClubInfo } from '~/interfaces/content';

export const getResources = (): Promise<Resources[]> =>
	new Promise((resolve, reject) => {
		resolve(resourcesData);
		reject(new Error('Something went wrong'));
	});

	export const getClubInfo = (): Promise<ClubInfo[]> =>
	new Promise((resolve, reject) => {
		resolve(clubInfoData);
		reject(new Error('Something went wrong'));
	});

export const getHistory = (): Promise<History[]> =>
	new Promise((resolve, reject) => {
		resolve(historyData);
		reject(new Error('Something went wrong'));
	});

export const getCommittee = (): Promise<Committee[]> =>
	new Promise((resolve, reject) => {
		resolve(committeeData);
		reject(new Error('Something went wrong'));
	});

export const getLifeMembers = (): Promise<LifeMembers[]> =>
	new Promise((resolve, reject) => {
		resolve(lifeMembersData);
		reject(new Error('Something went wrong'));
	});

export const getSponsors = (): Promise<Sponsors[]> =>
	new Promise((resolve, reject) => {
		resolve(sponsorsData);
		reject(new Error('Something went wrong'));
	});
