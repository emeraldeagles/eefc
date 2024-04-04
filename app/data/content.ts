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
		title: 'Jason Sandeman',
		description: 'U8/9 Head Coach',
		image: '../../public/images/jason.png',
	},
	{
		title: 'Patrick Tetteh',
		description: 'U12-16 Coach',
		image: '../../public/images/pat.png',
	},
	{
		title: 'Noah Silberg',
		description: 'Coaching Co-ordinator',
		image: '../../public/images/noah.png',
	},
	{
		title: 'Peter Sanson',
		description: 'U12-16 Head Coach',
		image: '../../public/images/peter.png',
	},
	{
		title: 'Mace Powell',
		description: 'U6/7 Coach',
		image: '../../public/images/mace.png',
	},
	{
		title: 'Marc Vandommelle',
		description: 'U10/11 Head Coach',
		image: '../../public/images/marc.png',
	},
	{
		title: 'Janelle Booth',
		description: 'U12-16 Coach',
		image: '../../public/images/janelle  .png',
	},
	{
		title: 'Chrissy Curran',
		description: 'U6/7 Coach',
		image: '../../public/images/chrissy.png',
	},
];

// Is this supposed to be categoriesData?
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
		title: 'Darrin Milner',
		description: 'President & Academy Co-ordinator',
		image: 'darrin.jpg',
		email: 'president@emeraldeagles.com',
	},
	{
		title: 'Maureen King',
		description: 'Vice President',
		image: 'maureen.jpg',
		email: 'enquiries@emeraldeagles.com',
	},
	{
		title: 'Eleasha Ramiah',
		description: 'Secretary',
		image: 'eleasha.jpg',
		email: 'secretary@emeraldeagles.com',
	},
	{
		title: 'Katie Sandeman',
		description: 'Treasurer',
		image: 'katie.jpg',
		email: 'treasurer@emeraldeagles.com',
	},
	{
		title: 'Jessica Chay',
		description: 'Sponsorships & Grants',
		image: 'jess.jpg',
		email: 'sponsors@emeraldeagles.com',
	},
	{
		title: 'Jason Sandeman',
		description: 'Registrar',
		image: 'jason.jpg',
		email: 'registrations@emeraldeagles.com',
	},
	{
		title: 'Tom Conway',
		description: 'Seniors Co-ordinator',
		image: 'tom.jpg',
		email: 'enquiries@emeraldeagles.com',
	},
	{
		title: 'Noah Silberg',
		description: 'Coaching Co-ordinator',
		image: 'noah.jpg',
		email: 'enquiries@emeraldeagles.com',
	},
	{
		title: 'Chrissy Curran',
		description: 'Social Media Co-ordinator',
		image: 'chrissy.jpg',
		email: 'enquiries@emeraldeagles.com',
	},
	{
		title: 'Vacant',
		description: 'Canteen Co-ordinator',
		image: 'vacant.jpg',
		email: 'enquiries@emeraldeagles.com',
	},
	{
		title: 'Vacant',
		description: 'Carnival Co-ordinator',
		image: 'vacant.jpg',
		email: 'enquiries@emeraldeagles.com',
	},
	{
		title: 'Vacant',
		description: 'Events Co-ordinator',
		image: 'vacant.jpg',
		email: 'enquiries@emeraldeagles.com',
	},
	{
		title: 'Vacant',
		description: 'Groundskeeper',
		image: 'vacant.jpg',
		email: 'enquiries@emeraldeagles.com',
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
		link: 'https://www.google.com',
	},
	{
		title: 'Sponsors',
		description: 'Information about sponsors',
		image: 'sponsors.jpg',
		link: 'https://www.google.com',
	},
	{
		title: 'Sponsors',
		description: 'Information about sponsors',
		image: 'sponsors.jpg',
		link: 'https://www.google.com',
	},
	{
		title: 'Sponsors',
		description: 'Information about sponsors',
		image: 'sponsors.jpg',
		link: 'https://www.google.com',
	},
	{
		title: 'Sponsors',
		description: 'Information about sponsors',
		image: 'sponsors.jpg',
		link: 'https://www.google.com',
	},
];

export const importantDatesData: ImportantDates[] = [
	{
		date: '2021-01-01',
		title: 'EEFC Fun Day',
		description: 'A fun day to get together with the surrounding towns and play some soccer.',
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

export const resourcesData: Resources[] = [
	{
		title: 'Privacy Policy',
		description: 'EEFC Pricacy Policy',
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
