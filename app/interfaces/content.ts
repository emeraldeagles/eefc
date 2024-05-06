export type Content =
	| News
	| ClubInfo
	| Rego
	| Carnivals
	| Resources
	| SeasonInfo
	| PlayerInfo
	| CoachInfo
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
};

export type Rego = {
	title: string;
	description: string;
	image: string;
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

export type SeasonInfo = {
	title: string;
	description: string;
	image: string;
};

export type PlayerInfo = {
	title: string;
	description: string;
	image: string;
};

export type CoachInfo = {
	title: string;
	description: string;
	perks: string[];
	image: string;
};

export type Coaches = {
	title: string;
	description: string;
	image: string;
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
	description: string;
	image: string;
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
	info: string[];
};

export type MerchProps = {
	title: string;
	description: string;
	image: string;
	price: string;
	badge: string;
	badgeColour: 'default' | 'destructive' | 'outline' | 'secondary' | null | undefined;
};

export type ClubSitesProps = {
	title: string;
	image: string;
	link: string;
};
