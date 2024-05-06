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
	MerchProps,
	News,
	RegoPrices,
	SeasonInfo,
	Rego,
	ClubInfo,
	ClubSitesProps,
	Coaches,
} from '~/interfaces/content';

export const coachInfoData: CoachInfo[] = [
	{
		title: 'Info card 1',
		description: 'Information about the club',
		image: 'club.jpg',
		perks: ["Perk 1", "Perk 2", "Perk 3"]

	},
	{
		title: 'Info card 1',
		description: 'Information about the club',
		image: 'club.jpg',
		perks: ["Perk 1", "Perk 2", "Perk 3"]

	},
	{
		title: 'Info card 1',
		description: 'Information about the club',
		image: 'club.jpg',
		perks: ["Perk 1", "Perk 2", "Perk 3"]
	}
];

export const coachesData: Coaches[] = [
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
		title: 'Patrick Tetteh',
		description: 'U12-16 Coach',
		image: '../../public/images/pat.png',
	},
	{
		title: 'Janelle Booth',
		description: 'U12-16 Coach',
		image: '../../public/images/janelle.png',
	},
	{
		title: 'Madison Beardsmore',
		description: 'U12-16 Coach',
		image: '../../public/images/madison.png',
	},
	{
		title: 'Steve O\'Keefe',
		description: 'U12-16 Coach',
		image: '../../public/images/steve.png',
	},
	{
		title: 'Marc Vandommelle',
		description: 'U10/11 Head Coach',
		image: '../../public/images/marc.png',
	},
	{
		title: 'Bec Langtry',
		description: 'U10/11 Coach',
		image: '../../public/images/becl.png',
	},
	{
		title: 'Kylie Lavis',
		description: 'U10/11 Coach',
		image: '../../public/images/kylie.png',
	},
	{
		title: 'Abhay Kulkarni',
		description: 'U10/11 Coach',
		image: '../../public/images/abhay.png',
	},
	{
		title: 'Jason Sandeman',
		description: 'U8/9 Head Coach',
		image: '../../public/images/jason.png',
	},
	{
		title: 'William Masiya',
		description: 'U8/9 Coach',
		image: '../../public/images/william.png',
	},
	{
		title: 'Eloise Heaps',
		description: 'U8/9 Coach',
		image: '../../public/images/eloise.png',
	},
	{
		title: 'Travis Heaps',
		description: 'U8/9 Coach',
		image: '../../public/images/travis.png',
	},
	{
		title: 'Hayley Johnson',
		description: 'U8/9 Coach',
		image: '../../public/images/hayley.png',
	},
	{
		title: 'Sam Loch',
		description: 'U8/9 Coach',
		image: '../../public/images/sam.png',
	},
	{
		title: 'Tanesha Loch',
		description: 'U8/9 Coach',
		image: '../../public/images/tanesha.png',
	},
	{
		title: 'Rickilee Venardos',
		description: 'U8/9 Coach',
		image: '../../public/images/rickilee.png',
	},
	{
		title: 'Chris Herbig',
		description: 'U8/9 Coach',
		image: '../../public/images/chris.png',
	},
	{
		title: 'Josie Herbig',
		description: 'U8/9 Coach',
		image: '../../public/images/josie.png',
	},
	{
		title: 'Mandy Nugent',
		description: 'U8/9 Coach',
		image: '../../public/images/mandy.png',
	},
	{
		title: 'Joel Nugent',
		description: 'U8/9 Coach',
		image: '../../public/images/joel.png',
	},
	{
		title: 'Jessica Bailey',
		description: 'U8/9 Coach',
		image: '../../public/images/jessicab.png',
	},
	{
		title: 'Jessica Hazelgrove',
		description: 'U8/9 Coach',
		image: '../../public/images/jessicah.png',
	},
	{
		title: 'Zac Wood',
		description: 'U6/7 Head Coach',
		image: '../../public/images/zac.png',
	},
	{
		title: 'Mace Powell',
		description: 'U6/7 Coach',
		image: '../../public/images/mace.png',
	},
	{
		title: 'Chrissy Curran',
		description: 'U6/7 Coach',
		image: '../../public/images/chrissy.png',
	},
	{
		title: 'Matt Wearne',
		description: 'U6/7 Coach',
		image: '../../public/images/matt.png',
	},
	{
		title: 'Ally Baker',
		description: 'U6/7 Coach',
		image: '../../public/images/ally.png',
	},
	{
		title: 'Kalila Grevel',
		description: 'U6/7 Coach',
		image: '../../public/images/kalila.png',
	},
	{
		title: 'Bec Macdonald',
		description: 'U6/7 Coach',
		image: '../../public/images/becm.png',
	},
	{
		title: 'Fleur Pavlicevich',
		description: 'U6/7 Coach',
		image: '../../public/images/fleur.png',
	},
	{
		title: 'Kelly Vassallo',
		description: 'U6/7 Coach',
		image: '../../public/images/kelly.png',
	},
	{
		title: 'Sandy McCallum',
		description: 'U6/7 Coach',
		image: '../../public/images/sandy.png',
	},
	{
		title: 'Leith',
		description: 'Miniroos Head Coach',
		image: '../../public/images/leith.png',
	},
	{
		title: 'Daniel Stickley',
		description: 'Miniroos Coach',
		image: '../../public/images/daniel.png',
	},
	{
		title: 'Jason Sandeman',
		description: 'Miniroos Coach',
		image: '../../public/images/jason.png',
	},
	{
		title: 'Mace Powell',
		description: 'Miniroos Coach',
		image: '../../public/images/mace.png',
	},
	{
		title: 'Matt Wearne',
		description: 'Miniroos Coach',
		image: '../../public/images/matt.png',
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
		email: 'admin@emeraldeagles.com',
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
		email: 'admin@emeraldeagles.com',
	},
	{
		title: 'Noah Silberg',
		description: 'Coaching Co-ordinator',
		image: 'noah.jpg',
		email: 'admin@emeraldeagles.com',
	},
	{
		title: 'Chrissy Curran',
		description: 'Social Media Co-ordinator',
		image: 'chrissy.jpg',
		email: 'admin@emeraldeagles.com',
	},
	{
		title: 'Vacant',
		description: 'Canteen Co-ordinator',
		image: 'vacant.jpg',
		email: 'admin@emeraldeagles.com',
	},
	{
		title: 'Vacant',
		description: 'Juniors Co-ordinator',
		image: 'vacant.jpg',
		email: 'admin@emeraldeagles.com',
	},
	{
		title: 'Vacant',
		description: 'Carnival Co-ordinator',
		image: 'vacant.jpg',
		email: 'admin@emeraldeagles.com',
	},
	{
		title: 'Vacant',
		description: 'Events Co-ordinator',
		image: 'vacant.jpg',
		email: 'admin@emeraldeagles.com',
	},
	{
		title: 'Vacant',
		description: 'Groundskeeper',
		image: 'vacant.jpg',
		email: 'admin@emeraldeagles.com',
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
		type: "platinum",
	},
	{
		title: 'Sponsors',
		description: 'Information about sponsors',
		image: 'sponsors.jpg',
		link: 'https://www.google.com',
		type: "platinum",
	},
	{
		title: 'Sponsors',
		description: 'Information about sponsors',
		image: 'sponsors.jpg',
		link: 'https://www.google.com',
		type: "gold",
	},
	{
		title: 'Sponsors',
		description: 'Information about sponsors',
		image: 'sponsors.jpg',
		link: 'https://www.google.com',
		type: "silver",
	},
	{
		title: 'Sponsors',
		description: 'Information about sponsors',
		image: 'sponsors.jpg',
		link: 'https://www.google.com',
		type: "bronze",
	},
];

export const importantDatesData: ImportantDates[] = [
	{
		date: '2024-05-06',
		title: 'EEFC Fun Day',
		description: 'A fun day to get together with the surrounding towns and play some soccer.',
		eventInfo: 'New Year',
		image: 'newYear.jpg',
		clubLogo: '/images/eefclogo.png',
		location: 'Emerald',
		mapLink: 'https://www.google.com',
	},
	{
		date: '2024-06-07',
		title: 'Christmas',
		description: 'Merry Christmas!',
		eventInfo: 'New Year',
		image: 'newYear.jpg',
		clubLogo: '/images/eefclogo.png',
		location: 'Blackwater',
		mapLink: 'https://www.google.com',
	},
];

export const carnivalsData: Carnivals[] = [
	{
		id: '1',
		date: '2021-01-01',
		title: 'New Year',
		description: 'Happy New Year!',
		event: 'New Year',
		image: 'newYear.jpg',
	},
	{
		id: '2',
		date: '2021-12-25',
		title: 'Christmas',
		description: 'Merry Christmas!',
		event: 'Christmas',
		image: 'christmas.jpg',
	},
	{
		id: '3',
		date: '2021-12-25',
		title: 'Christmas',
		description: 'Merry Christmas!',
		event: 'Christmas',
		image: 'christmas.jpg',
	},
	{
		id: '4',
		date: '2021-12-25',
		title: 'Christmas',
		description: 'Merry Christmas!',
		event: 'Christmas',
		image: 'christmas.jpg',
	},
];

export const eventsData: Events[] = [
	{
		id: '1',
		date: '2021-01-01',
		title: 'New Year',
		description: 'Happy New Year!',
		event: 'New Year',
		image: 'newYear.jpg',
	},
	{
		id: '2',
		date: '2021-12-25',
		title: 'Christmas',
		description: 'Merry Christmas!',
		event: 'Christmas',
		image: 'christmas.jpg',
	},
	{
		id: '3',
		date: '2021-12-25',
		title: 'Christmas',
		description: 'Merry Christmas!',
		event: 'Christmas',
		image: 'christmas.jpg',
	},
	{
		id: '4',
		date: '2021-12-25',
		title: 'Christmas',
		description: 'Merry Christmas!',
		event: 'Christmas',
		image: 'christmas.jpg',
	},
];

export const merchData: MerchProps[] = [
	{
		title: 'Club Jersey',
		description: 'Official EEFC Jersey',
		image: 'merch.jpg',
		price: '$50',
		badge: 'POPULAR',
		badgeColour: "default"
	},
	{
		title: 'Backpack',
		description: 'Training Backpack',
		image: 'merch.jpg',
		price: '$40',
		badge: 'LIMITED STOCK',
		badgeColour: "destructive"
	},
	{
		title: 'EEFC Cap',
		description: 'EEFC Cap',
		image: 'merch.jpg',
		price: '$25',
		badge: 'KIDS',
		badgeColour: "secondary"
	},
];

export const newsData: News[] = [
	{
		id: '1',
		title: 'News',
		description: 'The latest news',
		image: 'news.jpg',
		link: 'https://www.google.com',
	},
	{
		id: '2',
		title: 'News',
		description: 'The latest news',
		image: 'news.jpg',
		link: 'https://www.google.com',
	},
	{
		id: '3',
		title: 'News',
		description: 'The latest news',
		image: 'news.jpg',
		link: 'https://www.google.com',
	},
];

export const regoPricesData: RegoPrices[] = [
	{
		title: 'Miniroos',
		description: 'Register in the 2024 miniroos comp',
		image: 'rego.jpg',
		price: '$65',
		open: false,
		info: ["Ages 4-5 years old", "Registrations through Gameday", "12 weeks of training & matches", "No travel required", "Matches/Training 10-11am Saturdays", "Player packs provided (Football, training shirt, certificate)" ]
	},
	{
		title: 'Juniors',
		description: 'Register in the 2024 junior comp',
		image: 'rego.jpg',
		price: '$200',
		open: true,
		info: ["Ages 6-16 years old", "Registrations through Squadi", "16 weeks of training & matches", "No travel required", "Matches 830-11am Saturdays", "Training 430-6pm Tuesdays", "Player packs provided (Training shirt, shorts, socks)", "Club Carnivals (Fun Day & Barraclough)", "Optional Carnivals around CQ", "Access to Euro Star Football Clinics", "End of year presentation" ]
	},
	{
		title: 'Seniors',
		description: 'Register in the 2024 senior comp',
		image: 'rego.jpg',
		price: '$100',
		open: true,
		info: ["Ages 15 years and older", "Registrations through Squadi", "16 weeks of matches and finals", "No travel required", "Matches 630-830pm Tuesdays" ]
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
	{
		title: 'Fair Play Vouchers',
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

export const resourcesData: Resources[] = [
	{
		title: 'Privacy Policy',
		description: 'EEFC Pricacy Policy',
		image: 'resources.jpg',
		link: 'https://www.google.com',
		category: "club",
	},
	{
		title: 'Playing Formats and Rules',
		description: 'Rules of the game for Juniors',
		image: 'juniorrules.jpg',
		link: 'https://www.google.com',
		category: "club",

	},
	{
		title: 'Player Information',
		description: 'Information about players',
		image: 'players.jpg',
		link: 'https://www.google.com',
		category: "club",

	},
	{
		title: 'Training Drill 1',
		description: 'Training drill for players',
		image: 'coaches.jpg',
		link: 'https://www.google.com',
		category: "coaches",
	},
];

export const clubSitesData: ClubSitesProps[] = [
	{
		title: "Blackwater Bandits",
		image: "/images/blackwaterbandits.jpg",
		link: "https://www.facebook.com/p/Blackwater-Bandits-Football-Club-2022-100083293393665/"
	},
	{
		title: "Clermont Tigers",
		image: "/images/clermonttigers.jpg",
		link: "https://clermont-tigers-junior-soccer-association.square.site/"
	},
	{
		title: "Moranbah Hawks FF",
		image: "/images/moranbahhawks.jpg",
		link: "https://www.facebook.com/MHJSF/"
	},
	{
		title: "Longreach Soccer",
		image: "/images/longreach.jpg",
		link: "https://www.facebook.com/longreachsoccer/"
	},
	{
		title: "Frenchville Roos SC",
		image: "/images/frenchville.jpg",
		link: "https://www.frenchvillesportsclub.com.au/sports/frenchville-roos-competitivefrenchville"
	},
	{
		title: "Bluebirds United FC",
		image: "/images/bluebirdsunited.jpg",
		link: "https://bluebirdsufc.com.au/"
	},
	{
		title: "Southside United SC",
		image: "/images/southsideunited.jpg",
		link: "https://www.facebook.com/suscfootball/"
	},
	{
		title: "Berserker Bears FC",
		image: "/images/berserkerbears.jpg",
		link: "https://www.facebook.com/BerserkerBears/"
	},
	{
		title: "Capricorn Coast FC",
		image: "/images/capcoast.jpg",
		link: "https://www.capricorncoastfc.com.au/"
	},
	{
		title: "Nerimbera FC",
		image: "/images/nerimbera.jpg",
		link: "https://www.nerimberafc.com.au/"
	},
	{
		title: "Gracemere Redbacks FC",
		image: "/images/gracemereredbacks.jpg",
		link: "https://gracemereredbacks.com.au/index.php"
	},
	{
		title: "Souths United FC",
		image: "/images/southsunited.jpg",
		link: "https://southsunited.org.au/"
	},
]
