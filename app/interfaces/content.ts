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
	| Merch
	| RegoPrices;

export type News = {
	title: string;
	description: string;
	image: string;
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
	date: string;
	title: string;
	description: string;
	event: string;
	image: string;
};

export type Resources = {
	title: string;
	description: string;
	image: string;
	link: string;
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
};

export type ImportantDates = {
	date: string;
	title: string;
	description: string;
	event: string;
	image: string;
};

export type Events = {
	title: string;
	date: string;
	description: string;
	event: string;
	image: string;
};

export type RegoPrices = {
	title: string;
	description: string;
	image: string;
	price: string;
	open: boolean;
};

export type Merch = {
	title: string;
	description: string;
	image: string;
	price: string;
	badge: string;
};
