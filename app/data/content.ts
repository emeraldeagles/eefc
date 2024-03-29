import type {
	CoachInfo,
	Committee,
	LifeMembers,
	PlayerInfo,
	Resources,
	Sponsors,
	History,
	ImportantDates,
	Carnivals,
	Events,
	Merch,
	News,
	RegoPrices,
	SeasonInfo,
	Rego,
	ClubInfo,
} from '~/interfaces/content';

export const coachInfoData: CoachInfo[] = [
	{
		title: 'c1',
		description:
			"I'm Maximilian and I've worked as a freelance web developer for years. Let me help you become a developer as well!",
		image: 'Maximilian Schwarzmüller',
	},
	{
		title: 'c2',
		description:
			'I am Julie and as a senior developer in a big tech company, I can help you get your first job or progress in your current one.',
		image: 'Julie Jones',
	},
];

export const playerInfoData: PlayerInfo[] = [
	{
		title: 'Club Information',
		description: 'Information about the club',
		image: 'club.jpg',
	},
	{
		title: 'Merchandise',
		description: 'Buy some club merchandise',
		image: 'merch.jpg',
	},
	{
		title: 'Events',
		description: 'Upcoming events',
		image: 'events.jpg',
	},
	{
		title: 'Rego',
		description: 'Register for the club',
		image: 'rego.jpg',
	},
	{
		title: 'Carnivals',
		description: 'Information about carnivals',
		image: 'carnivals.jpg',
	},
	{
		title: 'Resources',
		description: 'Resources for players and coaches',
		image: 'resources.jpg',
	},
	{
		title: 'Season Information',
		description: 'Information about the season',
		image: 'season.jpg',
	},
	{
		title: 'Player Information',
		description: 'Information about players',
		image: 'players.jpg',
	},
	{
		title: 'Coach Information',
		description: 'Information about coaches',
		image: 'coaches.jpg',
	},
];

export const resourcesData: Resources[] = [
	{
		title: 'Resources',
		description: 'Resources for players and coaches',
		image: 'resources.jpg',
		link: 'https://www.google.com',
	},
	{
		title: 'Season Information',
		description: 'Information about the season',
		image: 'season.jpg',
		link: 'https://www.google.com',
	},
	{
		title: 'Player Information',
		description: 'Information about players',
		image: 'players.jpg',
		link: 'https://www.google.com',
	},
	{
		title: 'Coach Information',
		description: 'Information about coaches',
		image: 'coaches.jpg',
		link: 'https://www.google.com',
	},
];

export const historyData: History[] = [
	{
		title: 'History',
		description: 'The history of the club',
		image: 'history.jpg',
	},
	{
		title: 'History',
		description: 'The history of the club',
		image: 'history.jpg',
	},
	{
		title: 'History',
		description: 'The history of the club',
		image: 'history.jpg',
	},
	{
		title: 'History',
		description: 'The history of the club',
		image: 'history.jpg',
	},
];

export const committeeData: Committee[] = [
	{
		title: 'Committee',
		description: 'Information about the committee',
		image: 'committee.jpg',
	},
	{
		title: 'Committee',
		description: 'Information about the committee',
		image: 'committee.jpg',
	},
	{
		title: 'Committee',
		description: 'Information about the committee',
		image: 'committee.jpg',
	},
	{
		title: 'Committee',
		description: 'Information about the committee',
		image: 'committee.jpg',
	},
	{
		title: 'Committee',
		description: 'Information about the committee',
		image: 'committee.jpg',
	},
	{
		title: 'Committee',
		description: 'Information about the committee',
		image: 'committee.jpg',
	},
	{
		title: 'Committee',
		description: 'Information about the committee',
		image: 'committee.jpg',
	},
];

export const lifeMembersData: LifeMembers[] = [
	{
		title: 'Life Members',
		description: 'Information about life members',
		image: 'lifeMembers.jpg',
	},
	{
		title: 'Life Members',
		description: 'Information about life members',
		image: 'lifeMembers.jpg',
	},
	{
		title: 'Life Members',
		description: 'Information about life members',
		image: 'lifeMembers.jpg',
	},
];

export const sponsorsData: Sponsors[] = [
	{
		title: 'Sponsors',
		description: 'Information about sponsors',
		image: 'sponsors.jpg',
	},
	{
		title: 'Sponsors',
		description: 'Information about sponsors',
		image: 'sponsors.jpg',
	},
	{
		title: 'Sponsors',
		description: 'Information about sponsors',
		image: 'sponsors.jpg',
	},
	{
		title: 'Sponsors',
		description: 'Information about sponsors',
		image: 'sponsors.jpg',
	},
	{
		title: 'Sponsors',
		description: 'Information about sponsors',
		image: 'sponsors.jpg',
	},
];

export const importantDatesData: ImportantDates[] = [
	{
		date: '2021-01-01',
		title: 'New Year',
		description: 'Happy New Year!',
		event: 'New Year',
		image: 'newYear.jpg',
	},
	{
		date: '2021-12-25',
		title: 'Christmas',
		description: 'Merry Christmas!',
		event: 'Christmas',
		image: 'christmas.jpg',
	},
];

export const carnivalsData: Carnivals[] = [
	{
		date: '2021-01-01',
		title: 'New Year',
		description: 'Happy New Year!',
		event: 'New Year',
		image: 'newYear.jpg',
	},
	{
		date: '2021-12-25',
		title: 'Christmas',
		description: 'Merry Christmas!',
		event: 'Christmas',
		image: 'christmas.jpg',
	},
	{
		date: '2021-12-25',
		title: 'Christmas',
		description: 'Merry Christmas!',
		event: 'Christmas',
		image: 'christmas.jpg',
	},
	{
		date: '2021-12-25',
		title: 'Christmas',
		description: 'Merry Christmas!',
		event: 'Christmas',
		image: 'christmas.jpg',
	},
];

export const eventsData: Events[] = [
	{
		date: '2021-01-01',
		title: 'New Year',
		description: 'Happy New Year!',
		event: 'New Year',
		image: 'newYear.jpg',
	},
	{
		date: '2021-12-25',
		title: 'Christmas',
		description: 'Merry Christmas!',
		event: 'Christmas',
		image: 'christmas.jpg',
	},
	{
		date: '2021-12-25',
		title: 'Christmas',
		description: 'Merry Christmas!',
		event: 'Christmas',
		image: 'christmas.jpg',
	},
	{
		date: '2021-12-25',
		title: 'Christmas',
		description: 'Merry Christmas!',
		event: 'Christmas',
		image: 'christmas.jpg',
	},
];

export const merchData: Merch[] = [
	{
		title: 'Club Jersey',
		description: 'Official EEFC Jersey',
		image: 'merch.jpg',
		price: '$50',
		badge: 'POPULAR',
	},
	{
		title: 'Backpack',
		description: 'Training Backpack',
		image: 'merch.jpg',
		price: '$40',
		badge: 'LIMITED STOCK',
	},
	{
		title: 'EEFC Cap',
		description: 'EEFC Cap',
		image: 'merch.jpg',
		price: '$25',
		badge: 'KIDS',
	},
];

export const newsData: News[] = [
	{
		title: 'News',
		description: 'The latest news',
		image: 'news.jpg',
		link: 'https://www.google.com',
	},
	{
		title: 'News',
		description: 'The latest news',
		image: 'news.jpg',
		link: 'https://www.google.com',
	},
	{
		title: 'News',
		description: 'The latest news',
		image: 'news.jpg',
		link: 'https://www.google.com',
	},
];

export const regoPricesData: RegoPrices[] = [
	{
		title: 'Miniroos',
		description: 'Register for the club',
		image: 'rego.jpg',
		price: '$50',
		open: false,
	},
	{
		title: 'Juniors',
		description: 'Register for the club',
		image: 'rego.jpg',
		price: '$200',
		open: true,
	},
	{
		title: 'Seniors',
		description: 'Register for the club',
		image: 'rego.jpg',
		price: '$100',
		open: true,
	},
];

export const regoData: Rego[] = [
	{
		title: 'Miniroos',
		description: 'Register for the club',
		image: 'rego.jpg',
	},
	{
		title: 'Juniors',
		description: 'Register for the club',
		image: 'rego.jpg',
	},
	{
		title: 'Seniors',
		description: 'Register for the club',
		image: 'rego.jpg',
	},
];

export const seasonInfoData: SeasonInfo[] = [
	{
		title: 'Season Information',
		description: 'Information about the season',
		image: 'season.jpg',
	},
	{
		title: 'Season Information',
		description: 'Information about the season',
		image: 'season.jpg',
	},
	{
		title: 'Season Information',
		description: 'Information about the season',
		image: 'season.jpg',
	},
];

export const clubInfoData: ClubInfo[] = [
	{
		title: 'History',
		description: 'Information about the club',
		image: 'club.jpg',
	},
	{
		title: 'Committee',
		description: 'Meet the 2024 Committee',
		image: 'club.jpg',
	},
	{
		title: 'Life Members',
		description: 'The honour board',
		image: 'club.jpg',
	},
	{
		title: 'Sponsors',
		description: 'Meet the 2024 Sponosors',
		image: 'club.jpg',
	},
	{
		title: 'Contact',
		description: 'Get in touch with the club',
		image: 'club.jpg',
	},
];
