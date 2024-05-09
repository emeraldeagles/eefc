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
	RegoInfo,
	ClubInfo,
	ClubSitesProps,
	Coaches,
	FairPlayInfo,
} from '~/interfaces/content';

export const coachesData: Coaches[] = [
	{
		title: 'Noah Silberg',
		description: 'Coaching Co-ordinator',
		image: '../../public/images/noah.png',
		team: '',
	},
	{
		title: 'Peter Sanson',
		description: 'U12-16 Head Coach',
		image: '../../public/images/peter.png',
		team: '',
	},
	{
		title: 'Patrick Tetteh',
		description: 'U12-16 Coach',
		image: '../../public/images/pat.png',
		team: '',
	},
	{
		title: 'Janelle Booth',
		description: 'U12-16 Coach',
		image: '../../public/images/janelle.png',
		team: '',
	},
	{
		title: 'Madison Beardsmore',
		description: 'U12-16 Coach',
		image: '../../public/images/madison.png',
		team: '',
	},
	{
		title: "Steve O'Keefe",
		description: 'U12-16 Coach',
		image: '../../public/images/steve.png',
		team: '',
	},
	{
		title: 'Marc Vandommelle',
		description: 'U10/11 Head Coach',
		image: '../../public/images/marc.png',
		team: '',
	},
	{
		title: 'Bec Langtry',
		description: 'U10/11 Coach',
		image: '../../public/images/becl.png',
		team: '',
	},
	{
		title: 'Kylie Lavis',
		description: 'U10/11 Coach',
		image: '../../public/images/kylie.png',
		team: '',
	},
	{
		title: 'Abhay Kulkarni',
		description: 'U10/11 Coach',
		image: '../../public/images/abhay.png',
		team: '',
	},
	{
		title: 'Jason Sandeman',
		description: 'U8/9 Head Coach',
		image: '../../public/images/jason.png',
		team: '',
	},
	{
		title: 'William Masiya',
		description: 'U8/9 Coach',
		image: '../../public/images/william.png',
		team: '',
	},
	{
		title: 'Eloise Heaps',
		description: 'U8/9 Coach',
		image: '../../public/images/eloise.png',
		team: '',
	},
	{
		title: 'Travis Heaps',
		description: 'U8/9 Coach',
		image: '../../public/images/travis.png',
		team: '',
	},
	{
		title: 'Hayley Johnson',
		description: 'U8/9 Coach',
		image: '../../public/images/hayley.png',
		team: '',
	},
	{
		title: 'Sam Loch',
		description: 'U8/9 Coach',
		image: '../../public/images/sam.png',
		team: '',
	},
	{
		title: 'Tanesha Loch',
		description: 'U8/9 Coach',
		image: '../../public/images/tanesha.png',
		team: '',
	},
	{
		title: 'Rickilee Venardos',
		description: 'U8/9 Coach',
		image: '../../public/images/rickilee.png',
		team: '',
	},
	{
		title: 'Chris Herbig',
		description: 'U8/9 Coach',
		image: '../../public/images/chris.png',
		team: '',
	},
	{
		title: 'Josie Herbig',
		description: 'U8/9 Coach',
		image: '../../public/images/josie.png',
		team: '',
	},
	{
		title: 'Mandy Nugent',
		description: 'U8/9 Coach',
		image: '../../public/images/mandy.png',
		team: '',
	},
	{
		title: 'Joel Nugent',
		description: 'U8/9 Coach',
		image: '../../public/images/joel.png',
		team: '',
	},
	{
		title: 'Jessica Bailey',
		description: 'U8/9 Coach',
		image: '../../public/images/jessicab.png',
		team: '',
	},
	{
		title: 'Jessica Hazelgrove',
		description: 'U8/9 Coach',
		image: '../../public/images/jessicah.png',
		team: '',
	},
	{
		title: 'Zac Wood',
		description: 'U6/7 Head Coach',
		image: '../../public/images/zac.png',
		team: '',
	},
	{
		title: 'Mace Powell',
		description: 'U6/7 Coach',
		image: '../../public/images/mace.png',
		team: '',
	},
	{
		title: 'Chrissy Curran',
		description: 'U6/7 Coach',
		image: '../../public/images/chrissy.png',
		team: '',
	},
	{
		title: 'Matt Wearne',
		description: 'U6/7 Coach',
		image: '../../public/images/matt.png',
		team: '',
	},
	{
		title: 'Ally Baker',
		description: 'U6/7 Coach',
		image: '../../public/images/ally.png',
		team: '',
	},
	{
		title: 'Kalila Grevel',
		description: 'U6/7 Coach',
		image: '../../public/images/kalila.png',
		team: '',
	},
	{
		title: 'Bec Macdonald',
		description: 'U6/7 Coach',
		image: '../../public/images/becm.png',
		team: '',
	},
	{
		title: 'Fleur Pavlicevich',
		description: 'U6/7 Coach',
		image: '../../public/images/fleur.png',
		team: '',
	},
	{
		title: 'Kelly Vassallo',
		description: 'U6/7 Coach',
		image: '../../public/images/kelly.png',
		team: '',
	},
	{
		title: 'Sandy McCallum',
		description: 'U6/7 Coach',
		image: '../../public/images/sandy.png',
		team: '',
	},
	{
		title: 'Leith',
		description: 'Miniroos Head Coach',
		image: '../../public/images/leith.png',
		team: '',
	},
	{
		title: 'Daniel Stickley',
		description: 'Miniroos Coach',
		image: '../../public/images/daniel.png',
		team: '',
	},
	{
		title: 'Jason Sandeman',
		description: 'Miniroos Coach',
		image: '../../public/images/jason.png',
		team: '',
	},
	{
		title: 'Mace Powell',
		description: 'Miniroos Coach',
		image: '../../public/images/mace.png',
		team: '',
	},
	{
		title: 'Matt Wearne',
		description: 'Miniroos Coach',
		image: '../../public/images/matt.png',
		team: '',
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
		title: 'Katie Sandeman',
		description: 'Treasurer',
		image: 'katie.jpg',
		email: 'treasurer@emeraldeagles.com',
	},
	{
		title: 'Eleasha Ramiah',
		description: 'Secretary',
		image: 'eleasha.jpg',
		email: 'secretary@emeraldeagles.com',
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
		type: 'platinum',
	},
	{
		title: 'Sponsors',
		description: 'Information about sponsors',
		image: 'sponsors.jpg',
		link: 'https://www.google.com',
		type: 'platinum',
	},
	{
		title: 'Sponsors',
		description: 'Information about sponsors',
		image: 'sponsors.jpg',
		link: 'https://www.google.com',
		type: 'gold',
	},
	{
		title: 'Sponsors',
		description: 'Information about sponsors',
		image: 'sponsors.jpg',
		link: 'https://www.google.com',
		type: 'silver',
	},
	{
		title: 'Sponsors',
		description: 'Information about sponsors',
		image: 'sponsors.jpg',
		link: 'https://www.google.com',
		type: 'bronze',
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

// not needed as this comes from facebook
export const carnivalsData: Carnivals[] = [
	{
		id: '1',
		date: '2024-05-01',
		description: 'Happy New Year!',
		link: '/',
		images: ['newYear.jpg'],
	},
	{
		id: '2',
		date: '2024-05-01',
		description: 'Happy New Year!',
		link: '/',
		images: ['newYear.jpg'],
	},
	{
		id: '3',
		date: '2024-05-01',
		description: 'Happy New Year!',
		link: '/',
		images: ['newYear.jpg'],
	},
	{
		id: '4',
		date: '2024-05-01',
		description: 'Happy New Year!',
		link: '/',
		images: ['newYear.jpg'],
	},
];

// not needed as this comes from facebook
export const eventsData: Events[] = [
	{
		id: '1',
		date: '2024-05-01',
		description: 'Happy New Year!',
		link: '/',
		images: ['newYear.jpg'],
	},
	{
		id: '2',
		date: '2024-05-01',
		description: 'Happy New Year!',
		link: '/',
		images: ['newYear.jpg'],
	},
	{
		id: '3',
		date: '2024-05-01',
		description: 'Happy New Year!',
		link: '/',
		images: ['newYear.jpg'],
	},
	{
		id: '4',
		date: '2024-05-01',
		description: 'Happy New Year!',
		link: '/',
		images: ['newYear.jpg'],
	},
];

export const merchData: MerchProps[] = [
	{
		title: 'Club Jersey',
		description: 'Official EEFC Jersey',
		image: 'merch.jpg',
		price: '$50',
		badge: 'POPULAR',
		badgeColour: 'default',
	},
	{
		title: 'Backpack',
		description: 'Training Backpack',
		image: 'merch.jpg',
		price: '$40',
		badge: 'LIMITED STOCK',
		badgeColour: 'destructive',
	},
	{
		title: 'EEFC Cap',
		description: 'EEFC Cap',
		image: 'merch.jpg',
		price: '$25',
		badge: 'KIDS',
		badgeColour: 'secondary',
	},
];

// not needed as this comes from facebook
export const newsData: News[] = [
	{
		id: '1',
		date: '2021-05-04',
		description: 'The latest news',
		images: ['news.jpg'],
		link: 'https://www.google.com',
	},
	{
		id: '2',
		date: '2021-05-11',
		description: 'The latest news',
		images: ['news.jpg'],
		link: 'https://www.google.com',
	},
	{
		id: '3',
		date: '2021-05-08',
		description: 'The latest news',
		images: ['news.jpg'],
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
		link: 'https://membership.mygameday.app/regoform.cgi?formID=88700&programID=68127',
		info: [
			'Ages 4-5 years old',
			'Registrations through Gameday',
			'6 weeks of training & matches per season',
			'2 seasons per year',
			'No travel required',
			'Matches/Training 10-11am Saturdays',
			'Player packs provided (Football, training shirt, certificate)',
		],
	},
	{
		title: 'Juniors',
		description: 'Register in the 2024 junior comp',
		image: 'rego.jpg',
		price: '$200',
		open: true,
		link: 'https://registration.squadi.com/finder?organisationKey=74f39f3a-6e73-48a8-b837-705aba4c4512&yearId=6&competitionUniqueKey=bcfbdf76-c792-4ae5-ab46-c622a0db692c&teamId=-1&divisionId=2752&membershipType=%5B-1%5D&postCode=4720',
		info: [
			'Ages 6-16 years old',
			'Registrations through Squadi',
			'16 weeks of training & matches per season',
			'1 season per year',
			'No travel required',
			'Matches 830-11am Saturdays',
			'Training 430-6pm Tuesdays',
			'Player packs provided (Training shirt, shorts, socks)',
			'Club Carnivals (Fun Day & Barraclough)',
			'Optional Carnivals around CQ',
			'Access to Euro Star Football Clinics',
			'End of year presentation',
		],
	},
	{
		title: 'Seniors',
		description: 'Register in the 2024 senior comp',
		image: 'rego.jpg',
		price: '$100',
		open: true,
		link: 'https://registration.squadi.com/finder?organisationKey=74f39f3a-6e73-48a8-b837-705aba4c4512&yearId=6&competitionUniqueKey=bcfbdf76-c792-4ae5-ab46-c622a0db692c&teamId=-1&divisionId=2752&membershipType=%5B-1%5D&postCode=4720',
		info: [
			'Ages 15 years and older',
			'Registrations through Squadi',
			'16 weeks of matches and finals per season',
			'2 seasons per year',
			'No travel required',
			'Matches 630-830pm Tuesdays',
		],
	},
];

export const regoInfoData: RegoInfo = {
	title: '2024 Season Registration',
	description:
		"ALL registrations must be made via Squadi (excluding Miniroos). Make sure you select 'Emerald Eagles Football Club' as your organisation. Those that played the 2023 season can log in as an 'Exisiting Member'. Any new players must create a new User Profile. \n\n Our current age groups are: \n - Miniroos (4-5yo) \n - Juniors (6-16yo) \n - Seniors (15yo+) \n\n Miniroos registrations are through a different platform called Gameday and can be accessed via this link - https://membership.mygameday.app/regoform.cgi?formID=88700&programID=68127 \n\n If you have any questions or need help with the registration process, please contact our Registrar at registrations@emeraldeagles.com.au",
	image: 'https://eefc.syd1.cdn.digitaloceanspaces.com/Squadi-Setup.jpeg',
	link: 'https://registration.squadi.com/finder?organisationKey=74f39f3a-6e73-48a8-b837-705aba4c4512&yearId=6&competitionUniqueKey=bcfbdf76-c792-4ae5-ab46-c622a0db692c&teamId=-1&divisionId=2752&membershipType=%5B-1%5D&postCode=4720',
	info: [
		'On a Web Browser: Click on the link below, select Emerald Eagles and sign in. If you do NOT have a Squadi profile, select Create User Profile and create a new profile. THIS MUST BE SOMEONE 18 OR OLDER FOR PLAYERS UNDER 18.',
		"On the Squadi app: Select 'More' (bottom right) and then select 'Register Profile'.",
		"For new players (never registered in Squadi), select 'New Participant Registration' and then register player (enter details requested - NOTING THIS IS FOR THE PLAYER). Otherwise for existing players just select the player.",
		"Confirm/update Participant Details for player and select 'Next'.",
		'Under Find a Competition start typing Emerald Eagles Football Club into the Organisation name and select it once it appears.',
		'Select the relevant Competition (Juniors - 6yo-16yo, Seniors - 15yo+).',
		"Select the relevant Membership Details (a player is an 'Outdoor Player').",
		"Select the relevant Age Group and then select 'Add Competition and Membership'.",
		"Update Additional Personal Information and select 'Add Competition and Membership'.",
		"Confirm/update Your Details, accept Terms and Conditions and select 'Continue'.",
		"Under Secure Payment Options select the payment option, enter the details and select 'Submit'.",
		"A summary of the registration will appear, select the 'X' (top left) to finish.",
		'If the registration was successful, you will receive a confirmation email.',
	],
};

export const fairPlayInfoData: FairPlayInfo = {
	title: '2024 FairPlay Vouchers',
	description:
		'Parents, carers or guardians can apply for a FairPlay voucher valued up to $150 for their child to use towards their sport and active recreation membership, registration or participation fees with registered activity provider. \n\n An eligible parent, carer or guardian must hold a valid Services Australia Health Care Card or Pensioner Concession Card. \n\n Parents, carers and guardians need to register for an Enquire account before applying for a voucher. Registering for an Enquire account is only required once, for example, those people that registered in 2023, do not need to register again in 2024.',
	image: 'https://eefc.syd1.cdn.digitaloceanspaces.com/FairPlay.png',
	link: 'https://www.qld.gov.au/recreation/sports/funding/fairplay/apply',
	info: [
		'Check if your child is eligible for a FairPlay voucher and confirm you have a Services Australia Health Care Card or Pensioner Concession Card',
		'Register in the grant portal system, Enquire, and complete your user profile.',
		'When voucher applications are open, apply for FairPlay voucher/s online via the Enquire portal.',
		'Wait for the approved outcome of the application.',
		'Present the FairPlay voucher/s number during the Squadi registration process',
	],
};

export const seasonInfoData: SeasonInfo = {
	title: 'Season Information',
	description: 'Seniors season kicks off in the first term of the school year and finishes in the last term of the school year. \n\n Juniors and Miniroos season kicks off in the second term of the school year and finishes in the 3rd term of the school year.',
	image: 'https://eefc.syd1.cdn.digitaloceanspaces.com/EEFCHeader.png',
	link: '',
	info: [
		'Club carnivals – Emerald Fun Day & Barraclough Shield (Juniors only)',
		'Opportunity to participate in local carnivals around CQ: Rockhampton, Gladstone, Clermont, Dysart, Moranbah, Blackwater',
		'Opportunity to participate in EuroStar Football training clinics',
		'End of Year Presentation',
	],
};

export const playerInfoData: PlayerInfo = {
	title: '2024 Player Information',
	description:
		"All players must wear soccer boots (no steel tags) and shin pads. Players are also encouraged to wear the club training shirt to training. Training shirts are available for purchase at the club house or online via our store. \n\n Players are to bring a water bottle to all training sessions and games. Players are to arrive 15 minutes prior to training and 30 minutes prior to games. \n\n Players are to advise their coach if they are unable to attend training or games either via the facebook parents group for their age group or via their team's chat on the Squadi app.",
	image: 'https://eefc.syd1.cdn.digitaloceanspaces.com/EEFCHeader.png',
	link: '',
	info: [
		'1hr weekly training session – Tuesdays starting at 4:30pm (Juniors only)',
		'1hr game day – Saturdays starting at 8:30am for Juniors',
		'1hr game day – Saturdays starting at 10:00am for Miniroos',
		'1hr game day – Tuesdays starting at 6:30pm for Seniors',
		'Player packs provided (Juniors and Miniroos only)',
		'NO TRAVEL REQUIRED (for weekly fixtures)',
	],
};

export const coachInfoData: CoachInfo = {
	title: 'Info card 1',
	description: 'Information about the club',
	image: 'club.jpg',
	link: '/club#resources',
	info: ['Perk 1', 'Perk 2', 'Perk 3'],
};

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
		title: 'EEFC Pricacy Policy',
		description: 'EEFC Pricacy Policy',
		image: 'resources.jpg',
		link: 'https://www.google.com',
		category: 'club',
	},
	{
		title: 'Juniors playing formats and rules',
		description: 'Juniors playing formats and rules',
		image: 'juniorrules.jpg',
		link: 'https://eefc.syd1.cdn.digitaloceanspaces.com/Playing-Rules/Juniors-Playing-Formats-and-Rules.pdf',
		category: 'rules',
	},
	{
		title: 'U12 playing formats and rules',
		description: 'U12 playing formats and rules',
		image: 'juniorrules.jpg',
		link: 'https://eefc.syd1.cdn.digitaloceanspaces.com/Playing-Rules/2024-U12-Playing-Format-Rules.pdf',
		category: 'rules',
	},
	{
		title: 'U13 playing formats and rules',
		description: 'U13 playing formats and rules',
		image: 'juniorrules.jpg',
		link: 'https://eefc.syd1.cdn.digitaloceanspaces.com/Playing-Rules/2024-U13-Playing-Format-Rules.pdf',
		category: 'rules',
	},
	{
		title: 'Community League playing formats and rules',
		description: 'U13 playing formats and rules',
		image: 'juniorrules.jpg',
		link: 'https://eefc.syd1.cdn.digitaloceanspaces.com/Playing-Rules/2024-FQ-Rules-of-Competition-for-Community-Leagues.pdf',
		category: 'rules',
	},
	{
		title: 'Squadi guide for parents',
		description: 'Squadi guide for parents',
		image: 'players.jpg',
		link: 'https://eefc.syd1.cdn.digitaloceanspaces.com/Squadi/Squadi-Help-Guide-Parents-App-V1.pdf',
		category: 'squadi',
	},
	{
		title: 'Squadi guide for coaches and managers',
		description: 'Squadi guide for coaches and managers',
		image: 'players.jpg',
		link: 'https://eefc.syd1.cdn.digitaloceanspaces.com/Squadi/Squadi-Help-Guide-Manager-Coach-V1.pdf',
		category: 'squadi',
	},
	{
		title: 'Squadi guide for referees',
		description: 'Squadi guide for referees',
		image: 'players.jpg',
		link: 'https://eefc.syd1.cdn.digitaloceanspaces.com/Squadi/Squadi-Help-Guide-Referees-V1.pdf',
		category: 'squadi',
	},
	{
		title: 'Training Drill: 2v2 Marking the target',
		description: 'Training Drill: 2v2 Marking the target',
		image: 'coaches.jpg',
		link: 'https://eefc.syd1.cdn.digitaloceanspaces.com/Training-Drills/2v2-Marking-The-Target.pdf',
		category: 'drills',
	},
	{
		title: 'Training Drill: Breaking lines',
		description: 'Training Drill: Breaking lines',
		image: 'coaches.jpg',
		link: 'https://eefc.syd1.cdn.digitaloceanspaces.com/Training-Drills/Breaking-Lines.pdf',
		category: 'drills',
	},
	{
		title: 'Training Drill: Getting past oponents',
		description: 'Training Drill: Getting past oponents',
		image: 'coaches.jpg',
		link: 'https://eefc.syd1.cdn.digitaloceanspaces.com/Training-Drills/Getting-Past-Opponents-V2.pdf',
		category: 'drills',
	},
	{
		title: 'Training Drill: Intercept, break and score',
		description: 'Training Drill: Intercept, break and score',
		image: 'coaches.jpg',
		link: 'https://eefc.syd1.cdn.digitaloceanspaces.com/Training-Drills/Intercept-Break-And-Score.pdf',
		category: 'drills',
	},
	{
		title: 'Training Drill: Making your moves',
		description: 'Training Drill: Making your moves',
		image: 'coaches.jpg',
		link: 'https://eefc.syd1.cdn.digitaloceanspaces.com/Training-Drills/Making-Your-Moves.pdf',
		category: 'drills',
	},
	{
		title: 'Training Drill: Receiving under pressure',
		description: 'Training Drill: Receiving under pressure',
		image: 'coaches.jpg',
		link: 'https://eefc.syd1.cdn.digitaloceanspaces.com/Training-Drills/Receiving-Under-Pressure.pdf',
		category: 'drills',
	},
];

export const clubSitesData: ClubSitesProps[] = [
	{
		title: 'Blackwater Bandits',
		image: '/images/blackwaterbandits.jpg',
		link: 'https://www.facebook.com/p/Blackwater-Bandits-Football-Club-2022-100083293393665/',
	},
	{
		title: 'Clermont Tigers',
		image: '/images/clermonttigers.jpg',
		link: 'https://clermont-tigers-junior-soccer-association.square.site/',
	},
	{
		title: 'Moranbah Hawks FF',
		image: '/images/moranbahhawks.jpg',
		link: 'https://www.facebook.com/MHJSF/',
	},
	{
		title: 'Longreach Soccer',
		image: '/images/longreach.jpg',
		link: 'https://www.facebook.com/longreachsoccer/',
	},
	{
		title: 'Frenchville Roos SC',
		image: '/images/frenchville.jpg',
		link: 'https://www.frenchvillesportsclub.com.au/sports/frenchville-roos-competitivefrenchville',
	},
	{
		title: 'Bluebirds United FC',
		image: '/images/bluebirdsunited.jpg',
		link: 'https://bluebirdsufc.com.au/',
	},
	{
		title: 'Southside United SC',
		image: '/images/southsideunited.jpg',
		link: 'https://www.facebook.com/suscfootball/',
	},
	{
		title: 'Berserker Bears FC',
		image: '/images/berserkerbears.jpg',
		link: 'https://www.facebook.com/BerserkerBears/',
	},
	{
		title: 'Capricorn Coast FC',
		image: '/images/capcoast.jpg',
		link: 'https://www.capricorncoastfc.com.au/',
	},
	{
		title: 'Nerimbera FC',
		image: '/images/nerimbera.jpg',
		link: 'https://www.nerimberafc.com.au/',
	},
	{
		title: 'Gracemere Redbacks FC',
		image: '/images/gracemereredbacks.jpg',
		link: 'https://gracemereredbacks.com.au/index.php',
	},
	{
		title: 'Souths United FC',
		image: '/images/southsunited.jpg',
		link: 'https://southsunited.org.au/',
	},
];
