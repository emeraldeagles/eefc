export type Content =
	| News
	| ClubInfo
	| SectionCardInfo
	| Carnivals
	| Resources
	| History
	| Committee
	| LifeMembers
	| Sponsors
	| ImportantDates
	| Events
	| MerchProps
	| RegoPrices;

export type News = {
	id: string;
	date: string;
	description: string;
	images: string[];
	link: string;
};

export type ClubInfo = {
	title: string;
	description: string;
	image: string;
	link: string;
};

export type Carnivals = {
	id: string;
	date: string;
	description: string;
	images: string[];
	link: string;
};

export type Resources = {
	title: string;
	description: string;
	image: string;
	link: string;
	category: string;
};

export type SectionCardInfo = {
	title: string;
	description: string;
	images: string[];
	link: string | string[];
	info: string[];
};

export type Coaches = {
	title: string;
	description: string;
	image: string;
	team: string;
	ageGroup: string;
};

export type History = {
	title: string;
	description: string;
	image: string;
};

export type Committee = {
	title: string;
	description: string;
	image: string;
	email: string;
};

export type LifeMembers = {
	title: string;
	year: string;
};

export type Sponsors = {
	title: string;
	description: string;
	image: string;
	link: string;
	type: string;
};

export type ImportantDates = {
	date: string;
	title: string;
	description: string;
	eventInfo: string;
	image: string;
	clubLogo: string;
	location: string;
	mapLink: string;
};

export type Events = {
	id: string;
	date: string;
	description: string;
	images: string[];
	link: string;
};

export type RegoPrices = {
	title: string;
	description: string;
	image: string;
	price: string;
	open: boolean;
	link: string;
	info: string[];
};

export type MerchProps = {
	title: string;
	description: string;
	image: string;
	price: string;
	link: string;
	badge: string;
	badgeColour: 'primary' | 'accent' | 'secondary' | 'destructive';
};

export type ClubSitesProps = {
	title: string;
	image: string;
	link: string;
};

export type ProtectOurGameProps = {
	title: string;
	image: string;
	link: string;
};
