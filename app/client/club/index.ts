import {
	resourcesData,
	committeeData,
	lifeMembersData,
	sponsorsData,
	clubInfoData,
	clubSitesData,
	coachInfoData,
	coachesData,
	volunteerInfoData,
	committeeInfoData,
	historyInfoData,
	lifeMembersInfoData,
	sponsorsInfoData,
	blueCardInfoData,
	protectOurGameData,
} from '~/data/content';

import type {
	Committee,
	LifeMembers,
	Resources,
	Sponsors,
	ClubInfo,
	ClubSitesProps,
	Coaches,
	SectionCardInfo,
	ProtectOurGameProps,
} from '~/interfaces/content';

export const getResources = (): Promise<Resources[]> =>
	new Promise((resolve, reject) => {
		resolve(resourcesData);
		// reject(new Error('Something went wrong'));
	});

export const getClubInfo = (): Promise<ClubInfo[]> =>
	new Promise((resolve, reject) => {
		resolve(clubInfoData);
		// reject(new Error('Something went wrong'));
	});

export const getHistory = (): Promise<SectionCardInfo> =>
	new Promise((resolve, reject) => {
		resolve(historyInfoData);
		// reject(new Error('Something went wrong'));
	});

export const getCommittee = (): Promise<Committee[]> =>
	new Promise((resolve, reject) => {
		resolve(committeeData);
		// reject(new Error('Something went wrong'));
	});

export const getCommitteeInfo = (): Promise<SectionCardInfo> =>
	new Promise((resolve, reject) => {
		resolve(committeeInfoData);
		// reject(new Error('Something went wrong'));
	});

export const getLifeMembers = (): Promise<LifeMembers[]> =>
	new Promise((resolve, reject) => {
		resolve(lifeMembersData);
		// reject(new Error('Something went wrong'));
	});

export const getLifeMembersInfo = (): Promise<SectionCardInfo> =>
	new Promise((resolve, reject) => {
		resolve(lifeMembersInfoData);
		// reject(new Error('Something went wrong'));
	});

export const getSponsors = (): Promise<Sponsors[]> =>
	new Promise((resolve, reject) => {
		resolve(sponsorsData);
		// reject(new Error('Something went wrong'));
	});

export const getSponsorsInfo = (): Promise<SectionCardInfo> =>
	new Promise((resolve, reject) => {
		resolve(sponsorsInfoData);
		// reject(new Error('Something went wrong'));
	});

export const getClubSites = (): Promise<ClubSitesProps[]> =>
	new Promise((resolve, reject) => {
		resolve(clubSitesData);
		// reject(new Error('Something went wrong'));
	});

export const getCoachInfo = (): Promise<SectionCardInfo> =>
	new Promise((resolve, reject) => {
		resolve(coachInfoData);
		// reject(new Error('Something went wrong'));
	});

export const getBlueCardInfo = (): Promise<SectionCardInfo> =>
	new Promise((resolve, reject) => {
		resolve(blueCardInfoData);
		// reject(new Error('Something went wrong'));
	});

export const getCoaches = (): Promise<Coaches[]> =>
	new Promise((resolve, reject) => {
		resolve(coachesData);
		// reject(new Error('Something went wrong'));
	});

export const getVolunteerInfo = (): Promise<SectionCardInfo> =>
	new Promise((resolve, reject) => {
		resolve(volunteerInfoData);
		// reject(new Error('Something went wrong'));
	});

export const getProtectOurGame = (): Promise<ProtectOurGameProps[]> =>
	new Promise((resolve, reject) => {
		resolve(protectOurGameData);
		// reject(new Error('Something went wrong'));
	});
