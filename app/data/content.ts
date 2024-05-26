import type {
	Committee,
	LifeMembers,
	Resources,
	Sponsors,
	ImportantDates,
	MerchProps,
	RegoPrices,
	ClubInfo,
	ClubSitesProps,
	Coaches,
	SectionCardInfo,
} from '~/interfaces/content';

export const currentYear = new Date().getFullYear();

export const coachesData: Coaches[] = [
	{
		title: 'Noah Silberg',
		description: 'Coaching Co-ordinator',
		image: '',
		team: '',
		ageGroup: '',
	},
	{
		title: 'Peter Sanson',
		description: 'Head Coach',
		image: 'https://eefc.syd1.cdn.digitaloceanspaces.com/Coaches/Peter.jpg',
		team: 'Liverpool',
		ageGroup: 'U12-16',
	},
	{
		title: 'Patrick Tetteh',
		description: '',
		image: 'https://eefc.syd1.cdn.digitaloceanspaces.com/Coaches/Patrick.jpg',
		team: 'Tottenham',
		ageGroup: 'U12-16',
	},
	{
		title: 'Janelle Booth',
		description: '',
		image: 'https://eefc.syd1.cdn.digitaloceanspaces.com/Coaches/Janelle.jpg',
		team: 'Everton',
		ageGroup: 'U12-16',
	},
	{
		title: 'Madison Beardsmore',
		description: '',
		image: '',
		team: 'Everton',
		ageGroup: 'U12-16',
	},
	{
		title: "Steve O'Keefe",
		description: '',
		image: 'https://eefc.syd1.cdn.digitaloceanspaces.com/Coaches/Steve.jpg',
		team: 'Arsenal',
		ageGroup: 'U12-16',
	},
	{
		title: 'Marc Vandommelle',
		description: '',
		image: 'https://eefc.syd1.cdn.digitaloceanspaces.com/Coaches/Marc.jpg',
		team: 'Aston Villa',
		ageGroup: 'U10/11',
	},
	{
		title: 'Brett Holloway',
		description: '',
		image: 'https://eefc.syd1.cdn.digitaloceanspaces.com/Coaches/Brett.jpg',
		team: 'Chelsea',
		ageGroup: 'U10/11',
	},
	{
		title: 'Bec Langtry',
		description: '',
		image: '',
		team: 'Manchester City',
		ageGroup: 'U10/11',
	},
	{
		title: 'Kylie Lavis',
		description: '',
		image: 'https://eefc.syd1.cdn.digitaloceanspaces.com/Coaches/Kylie.jpg',
		team: 'Manchester City',
		ageGroup: 'U10/11',
	},
	{
		title: 'Abhay Kulkarni',
		description: '',
		image: 'https://eefc.syd1.cdn.digitaloceanspaces.com/Coaches/Abhay.jpg',
		team: 'Manchester United',
		ageGroup: 'U10/11',
	},
	{
		title: 'Jason Sandeman',
		description: 'Head Coach',
		image: 'https://eefc.syd1.cdn.digitaloceanspaces.com/Coaches/Jason.jpg',
		team: 'Pumas/Cheetahs',
		ageGroup: 'U8/9',
	},
	{
		title: 'William Masiya',
		description: '',
		image: 'https://eefc.syd1.cdn.digitaloceanspaces.com/Coaches/William.jpg',
		team: 'Pumas',
		ageGroup: 'U8/9',
	},
	{
		title: 'Eloise Heaps',
		description: '',
		image: 'https://eefc.syd1.cdn.digitaloceanspaces.com/Coaches/Elle.jpeg',
		team: 'Tigers',
		ageGroup: 'U8/9',
	},
	{
		title: 'Travis Heaps',
		description: '',
		image: 'https://eefc.syd1.cdn.digitaloceanspaces.com/Coaches/Travis.jpg',
		team: 'Tigers',
		ageGroup: 'U8/9',
	},
	{
		title: 'Rickilee Venardos',
		description: '',
		image: 'https://eefc.syd1.cdn.digitaloceanspaces.com/Coaches/Ricki-Lee.jpg',
		team: 'Jaguars',
		ageGroup: 'U8/9',
	},
	{
		title: 'Hayley Johnson',
		description: '',
		image: 'https://eefc.syd1.cdn.digitaloceanspaces.com/Coaches/Hayley.jpg',
		team: 'Jaguars',
		ageGroup: 'U8/9',
	},
	{
		title: 'Sam Loch',
		description: '',
		image: 'https://eefc.syd1.cdn.digitaloceanspaces.com/Coaches/Sam.jpg',
		team: 'Cheetahs',
		ageGroup: 'U8/9',
	},
	{
		title: 'Chris Herbig',
		description: '',
		image: 'https://eefc.syd1.cdn.digitaloceanspaces.com/Coaches/Chris.jpg',
		team: 'Panthers',
		ageGroup: 'U8/9',
	},
	{
		title: 'Josie Herbig',
		description: '',
		image: 'https://eefc.syd1.cdn.digitaloceanspaces.com/Coaches/Josie.jpg',
		team: 'Panthers',
		ageGroup: 'U8/9',
	},
	{
		title: 'Tom Quinn',
		description: '',
		image: 'https://eefc.syd1.cdn.digitaloceanspaces.com/Coaches/Tom.jpg',
		team: 'Cougars',
		ageGroup: 'U8/9',
	},
	{
		title: 'Joel Nugent',
		description: '',
		image: 'https://eefc.syd1.cdn.digitaloceanspaces.com/Coaches/Joel.jpg',
		team: 'Cougars',
		ageGroup: 'U8/9',
	},
	{
		title: 'Jessica Bailey',
		description: '',
		image: 'https://eefc.syd1.cdn.digitaloceanspaces.com/Coaches/JessB.jpg',
		team: 'Lions',
		ageGroup: 'U8/9',
	},
	{
		title: 'Jessica Hazelgrove',
		description: '',
		image: 'https://eefc.syd1.cdn.digitaloceanspaces.com/Coaches/JessH.jpg',
		team: 'Leopards',
		ageGroup: 'U8/9',
	},
	{
		title: 'Zac Wood',
		description: 'Head Coach',
		image: 'https://eefc.syd1.cdn.digitaloceanspaces.com/Coaches/Zac.jpg',
		team: 'Scorpians',
		ageGroup: 'U6/7',
	},
	{
		title: 'Chrissy Curran',
		description: '',
		image: 'https://eefc.syd1.cdn.digitaloceanspaces.com/Coaches/Chrissy.jpg',
		team: 'Raptors',
		ageGroup: 'U6/7',
	},
	{
		title: 'Matt Wearne',
		description: '',
		image: 'https://eefc.syd1.cdn.digitaloceanspaces.com/Coaches/Matt.jpg',
		team: 'Hornets',
		ageGroup: 'U6/7',
	},
	{
		title: 'Bec Macdonald',
		description: '',
		image: '',
		team: 'Bears',
		ageGroup: 'U6/7',
	},
	{
		title: 'Sandy McCallum',
		description: '',
		image: 'https://eefc.syd1.cdn.digitaloceanspaces.com/Coaches/Sandy.jpg',
		team: 'Red Backs',
		ageGroup: 'U6/7',
	},
	{
		title: 'Kamahn Bastin',
		description: '',
		image: '',
		team: 'Dragons',
		ageGroup: 'U6/7',
	},
	{
		title: 'Leith Gowlett',
		description: 'Head Coach',
		image: 'https://eefc.syd1.cdn.digitaloceanspaces.com/Coaches/Leith.jpg',
		team: '',
		ageGroup: 'U4/5',
	},
	{
		title: 'Daniel Stickley',
		description: '',
		image: 'https://eefc.syd1.cdn.digitaloceanspaces.com/Coaches/Daniel.jpg',
		team: '',
		ageGroup: 'U4/5',
	},
	{
		title: 'Sandy McCallum',
		description: '',
		image: 'https://eefc.syd1.cdn.digitaloceanspaces.com/Coaches/Sandy.jpg',
		team: '',
		ageGroup: 'U4/5',
	},
	{
		title: 'Jason Sandeman',
		description: '',
		image: 'https://eefc.syd1.cdn.digitaloceanspaces.com/Coaches/Jason.jpg',
		team: '',
		ageGroup: 'U4/5',
	},
	{
		title: 'Alisha Rickert',
		description: '',
		image: 'https://eefc.syd1.cdn.digitaloceanspaces.com/Coaches/Alisha.jpg',
		team: '',
		ageGroup: 'U4/5',
	},
	{
		title: 'Kate Grieves',
		description: '',
		image: '',
		team: '',
		ageGroup: 'U4/5',
	},
	{
		title: 'Andrew Sheales',
		description: '',
		image: 'https://eefc.syd1.cdn.digitaloceanspaces.com/Coaches/Andrew.jpg',
		team: '',
		ageGroup: 'U4/5',
	},
];

export const committeeData: Committee[] = [
	{
		title: 'Darrin Milner',
		description: 'President & Academy Co-ordinator',
		image: 'https://eefc.syd1.cdn.digitaloceanspaces.com/2024-Committee/Darrin.jpg',
		email: 'president@emeraldeagles.com',
	},
	{
		title: 'Maureen King',
		description: 'Vice President',
		image: '',
		email: 'vp@emeraldeagles.com',
	},
	{
		title: 'Katie Sandeman',
		description: 'Treasurer',
		image: '',
		email: 'treasurer@emeraldeagles.com',
	},
	{
		title: 'Eleasha Ramiah',
		description: 'Secretary',
		image: 'https://eefc.syd1.cdn.digitaloceanspaces.com/2024-Committee/Eleasha.jpg',
		email: 'secretary@emeraldeagles.com',
	},
	{
		title: 'Jessica Chay',
		description: 'Sponsorships & Grants',
		image: 'https://eefc.syd1.cdn.digitaloceanspaces.com/2024-Committee/Jess.jpg',
		email: 'sponsors@emeraldeagles.com',
	},
	{
		title: 'Jason Sandeman',
		description: 'Registrar',
		image: 'https://eefc.syd1.cdn.digitaloceanspaces.com/Coaches/Jason.jpg',
		email: 'registrations@emeraldeagles.com',
	},
	{
		title: 'Tom Conway',
		description: 'Seniors Co-ordinator',
		image: '',
		email: 'seniors@emeraldeagles.com',
	},
	{
		title: 'Noah Silberg',
		description: 'Coaching Co-ordinator',
		image: 'https://eefc.syd1.cdn.digitaloceanspaces.com/2024-Committee/Noah.jpg',
		email: 'coaching@emeraldeagles.com',
	},
	{
		title: 'Chrissy Curran',
		description: 'Social Media Co-ordinator',
		image: 'https://eefc.syd1.cdn.digitaloceanspaces.com/Coaches/Chrissy.jpg',
		email: 'socials@emeraldeagles.com',
	},
	{
		title: 'Cheryl Dell',
		description: 'Canteen Co-ordinator',
		image: '',
		email: 'canteen@emeraldeagles.com',
	},
	{
		title: 'Vacant',
		description: 'Juniors Co-ordinator',
		image: '',
		email: 'juniors@emeraldeagles.com',
	},
	{
		title: 'Vacant',
		description: 'Carnival Co-ordinator',
		image: '',
		email: 'carnivals@emeraldeagles.com',
	},
	{
		title: 'Vacant',
		description: 'Events Co-ordinator',
		image: '',
		email: 'events@emeraldeagles.com',
	},
	{
		title: 'Vacant',
		description: 'Groundskeeper',
		image: '',
		email: 'groundskeeper@emeraldeagles.com',
	},
];

export const lifeMembersData: LifeMembers[] = [
	{
		title: 'V. EALES',
		year: '1984',
	},
	{
		title: 'B. EALES',
		year: '1984',
	},
	{
		title: 'L. MORGAN',
		year: '1985',
	},
	{
		title: 'R. ANDERSON',
		year: '1986',
	},
	{
		title: 'R. EATON',
		year: '1986',
	},
	{
		title: 'C. SMERDON',
		year: '1986',
	},
	{
		title: 'H. STEYGER',
		year: '1987',
	},
	{
		title: 'R. BANKS',
		year: '1988',
	},
	{
		title: 'D. BANKS',
		year: '1988',
	},
	{
		title: 'M. ANTHONY',
		year: '1988',
	},
	{
		title: 'J. ANDERSON',
		year: '1989',
	},
	{
		title: 'M. HYNES',
		year: '1990',
	},
	{
		title: 'E. HYNES',
		year: '1990',
	},
	{
		title: 'L. ENFANTE',
		year: '1995',
	},
	{
		title: 'C. CARROLL',
		year: '1998',
	},
	{
		title: 'J. HEISKARI',
		year: '2003',
	},
	{
		title: 'M. STROUD',
		year: '2006',
	},
	{
		title: 'B. ZIEGLAAR',
		year: '2007',
	},
	{
		title: 'J. MCQUILLAN',
		year: '2008',
	},
	{
		title: 'K.HELLMUTH',
		year: '2008',
	},
	{
		title: 'M. SMALE',
		year: '2008',
	},
	{
		title: 'D. MAYNE',
		year: '2016',
	},
	{
		title: 'B. STANLEY',
		year: '2016',
	},
	{
		title: 'G. GILMOUR',
		year: '2016',
	},
	{
		title: 'M. HOLZIGAL',
		year: '2016',
	},
	{
		title: 'K. MATHESON',
		year: '2017',
	},
	{
		title: 'D.MATHESON',
		year: '2017',
	},
];

export const sponsorsData: Sponsors[] = [
	{
		title: 'AB Power',
		description: 'Specialists in Electrical, Civil and Power Generation',
		image: 'https://eefc.syd1.cdn.digitaloceanspaces.com/2024-Logos/sponsors/AB%20POWER.jpg',
		link: 'https://abpower.com.au/',
		type: 'platinum',
	},
	{
		title: 'ABM Mining',
		description: 'General services to support high production mines',
		image: 'https://eefc.syd1.cdn.digitaloceanspaces.com/2024-Logos/sponsors/ABN_MINING.png',
		link: 'https://www.abmcontractors.com.au/',
		type: 'gold',
	},
	{
		title: 'Active Mining Services',
		description: 'Mining Services',
		image: 'https://eefc.syd1.cdn.digitaloceanspaces.com/2024-Logos/sponsors/ACTIVE%20MINING%20SERVICES%20(3).png',
		link: '',
		type: 'gold',
	},
	{
		title: 'APH Glass and Aluminium',
		description: 'Glass & Aluminium Services In Emerald',
		image: 'https://eefc.syd1.cdn.digitaloceanspaces.com/2024-Logos/sponsors/APH.png',
		link: 'https://www.aphglass.com.au/',
		type: 'donation',
	},
	{
		title: "Boiso's Electrical Services ",
		description: 'Your Central Highlands Electrical, Solar, & Air-Conditioning Specialist',
		image: 'https://eefc.syd1.cdn.digitaloceanspaces.com/2024-Logos/sponsors/BOISO_S%20ELECTRICAL%20SERVICES.png',
		link: 'https://www.boisoselectricalservices.com/',
		type: 'gold',
	},
	{
		title: 'Central Highlands Regional Council',
		description: 'A progressive region creating opportunities for all',
		image: 'https://eefc.syd1.cdn.digitaloceanspaces.com/2024-Logos/sponsors/CHRC.png',
		link: 'https://www.chrc.qld.gov.au/',
		type: 'grant',
	},
	{
		title: "Child's Emerald Tyre Service",
		description: 'Wheel & Tyre Suppliers in Emerald',
		image:
			'https://eefc.syd1.cdn.digitaloceanspaces.com/2024-Logos/sponsors/CHILDS%20EMERALD%20TYRE%20SERVICE%20vector-v1-01.jpg',
		link: 'https://www.childsemeraldtyreservice.com.au/',
		type: 'gold',
	},
	{
		title: 'CNW Electrical Wholesale',
		description: '100% Australian owned Electrical Wholesaler',
		image: 'https://eefc.syd1.cdn.digitaloceanspaces.com/2024-Logos/sponsors/CNW.png',
		link: 'https://shop.cnw.com.au/',
		type: 'bronze',
	},
	{
		title: "Domino's Pizza",
		description: 'Hungry to be better',
		image: 'https://eefc.syd1.cdn.digitaloceanspaces.com/2024-Logos/sponsors/DOMINOS.png',
		link: 'https://www.dominos.com.au/',
		type: 'donation',
	},
	{
		title: 'Emerald Coaches',
		description: 'Reinventing the wheel. Together',
		image: 'https://eefc.syd1.cdn.digitaloceanspaces.com/2024-Logos/sponsors/Emerald%20Coaches-01.png',
		link: 'https://www.emeraldcoaches.com.au/',
		type: 'gold',
	},
	{
		title: 'Emerald Isuzu',
		description: 'Registered Isuzu UTE dealer in Emerald QLD',
		image: 'https://eefc.syd1.cdn.digitaloceanspaces.com/2024-Logos/sponsors/Emerald%20Izuzu%20Ute-01.png',
		link: 'https://www.emeraldisuzuute.com.au/',
		type: 'gold',
	},
	{
		title: 'Enwise',
		description: 'Commercial & Domestic Electrical Services',
		image: 'https://eefc.syd1.cdn.digitaloceanspaces.com/2024-Logos/sponsors/Enwise_logo_pdf_v2-01.png',
		link: 'https://www.enwise.com.au/',
		type: 'gold',
	},
	{
		title: 'Fairbairn Bakery',
		description: 'Best pies in Central Queensland',
		image: 'https://eefc.syd1.cdn.digitaloceanspaces.com/2024-Logos/sponsors/FAIRBAIRN%20BAKERY%20(1).png',
		link: 'https://www.facebook.com/p/Fairbairn-Bakery-Emerald-100063648667015/',
		type: 'platinum',
	},
	{
		title: 'GBA Consulting Engineers',
		description: 'Engineering the outback',
		image: 'https://eefc.syd1.cdn.digitaloceanspaces.com/2024-Logos/sponsors/GBA_ENGINEERS.png',
		link: 'https://www.gbaengineers.com.au/',
		type: 'silver',
	},
	{
		title: 'Gricon Industries',
		description: 'Leading provider for technical support and overhaul of hazardous area equipment',
		image: 'https://eefc.syd1.cdn.digitaloceanspaces.com/2024-Logos/sponsors/GRICON%20INDUSTRIES.png',
		link: 'https://griconindustries.com/',
		type: 'gold',
	},
	{
		title: 'GT Hoses',
		description: '24/7 Hydraulic and Grease solutions',
		image: 'https://eefc.syd1.cdn.digitaloceanspaces.com/2024-Logos/sponsors/GT_HOSES.png',
		link: 'https://www.facebook.com/GTHOSES/',
		type: 'bronze',
	},
	{
		title: 'Haymans',
		description: 'Leading distributor of electrical, communications, data, solar, and lighting products',
		image:
			'https://eefc.syd1.cdn.digitaloceanspaces.com/2024-Logos/sponsors/HAYMANS%20LOGO%20KEYLINE%20-%20PNG%20(1)-01.png',
		link: 'https://haymans.mmem.com.au/',
		type: 'bronze',
	},
	{
		title: 'HEME',
		description:
			'Heavy metal fabrication, precision machining, sand blasting and painting, and hydraulic cylinder repair',
		image: 'https://eefc.syd1.cdn.digitaloceanspaces.com/2024-Logos/sponsors/HEME_Logo_transparent-01.png',
		link: 'https://www.heme.com.au/',
		type: 'gold',
	},
	{
		title: 'Jason Ross Earthmoving',
		description: 'A diverse earthmoving and heavy haulage business',
		image: 'https://eefc.syd1.cdn.digitaloceanspaces.com/2024-Logos/sponsors/JASON_ROSS_EARTHMOVING.png',
		link: 'https://jasonrossearthmoving.com.au/',
		type: 'bronze',
	},
	{
		title: 'JENNMAR',
		description: 'Focused on developing and manufacturing a complete range of high quality ground control products',
		image: 'https://eefc.syd1.cdn.digitaloceanspaces.com/2024-Logos/sponsors/JENNMAR%20(2).png',
		link: 'https://www.jennmar.com.au/',
		type: 'gold',
	},
	{
		title: 'Kestrel Coal Resources',
		description: 'One of the world’s largest producing underground coking coal mines',
		image: 'https://eefc.syd1.cdn.digitaloceanspaces.com/2024-Logos/sponsors/KESTREL_COAL.png',
		link: 'https://kestrelcoal.com/',
		type: 'grant',
	},
	{
		title: 'Lawrence & Hanson',
		description: "Australia's electrical wholesaler since 1886",
		image: 'https://eefc.syd1.cdn.digitaloceanspaces.com/2024-Logos/sponsors/LAWRENCE%20&%20HANSON.png',
		link: 'https://www.lh.com.au/',
		type: 'gold',
	},
	{
		title: 'Pirtek',
		description: 'Industrial maintenance specialists',
		image: 'https://eefc.syd1.cdn.digitaloceanspaces.com/2024-Logos/sponsors/PIRTEK.png',
		link: 'https://www.pirtek.com.au/',
		type: 'gold',
	},
	{
		title: "Sheffield's Coffee",
		description: 'Bringing specialty coffee to rural Queensland',
		image: 'https://eefc.syd1.cdn.digitaloceanspaces.com/2024-Logos/sponsors/PIRTEK.png',
		link: 'https://www.shelfieldcoffeebrewers.com/',
		type: 'donation',
	},
	{
		title: 'The Mayfair Emerald',
		description:
			'The perfect family-friendly venue to relax, unwind with friends or stay over for as many nights as you please',
		image: 'https://eefc.syd1.cdn.digitaloceanspaces.com/2024-Logos/sponsors/THE%20MAYFAIR%20EMERALD.png',
		link: 'https://themayfairemerald.com.au/',
		type: 'gold',
	},
	{
		title: 'Triple Torque Services',
		description:
			'Specializing in underground diesel repairs, servicing, overhauls, code D Mechanicals and small engine repairs',
		image: 'https://eefc.syd1.cdn.digitaloceanspaces.com/2024-Logos/sponsors/TRIPLE%20TORQUE%20SERVICES.png',
		link: 'https://www.tripletorque.com.au/',
		type: 'gold',
	},
];

export const importantDatesData: ImportantDates[] = [
	{
		date: '2024-02-20',
		title: '⚽️ EEFC Seniors First Round (Season 1) ⚽️',
		description: 'Come down and watch our seniors kick off the first round of the year',
		eventInfo: '',
		image:
			'https://scontent.fbne9-2.fna.fbcdn.net/v/t39.30808-6/442420529_901367161794065_16498248918379145_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=VazCSVFNZqYQ7kNvgHyep4g&_nc_ht=scontent.fbne9-2.fna&oh=00_AYCohEXyy478gQQ5DoAvOARidYeY0qpGaFHizCU33dYTyg&oe=664B5067',
		clubLogo: 'https://eefc.syd1.cdn.digitaloceanspaces.com/EEFC-Logos/EEFCLogoSquareWhite.png',
		location: 'Emerald',
		mapLink: 'https://maps.app.goo.gl/MfuxQJP67uceYqMr5',
	},
	{
		date: '2024-03-09',
		title: '🛠️ EEFC Working Bee 🛠️',
		description:
			'Help us get our club and football fields ready for the upcoming season! \n Without the help of our volunteers each season the club would not be where it is today.',
		eventInfo: '',
		image:
			'https://scontent.fbne9-2.fna.fbcdn.net/v/t39.30808-6/442420529_901367161794065_16498248918379145_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=VazCSVFNZqYQ7kNvgHyep4g&_nc_ht=scontent.fbne9-2.fna&oh=00_AYCohEXyy478gQQ5DoAvOARidYeY0qpGaFHizCU33dYTyg&oe=664B5067',
		clubLogo: 'https://eefc.syd1.cdn.digitaloceanspaces.com/EEFC-Logos/EEFCLogoSquareWhite.png',
		location: 'Emerald',
		mapLink: 'https://maps.app.goo.gl/MfuxQJP67uceYqMr5',
	},
	{
		date: '2024-03-16',
		title: '⚽️ EEFC Juniors Come & Try Day ⚽️',
		description:
			"Come down and see what its all about! \n Wether you've played before or this is your first year, this is your chance tocome down and have some fun. \n We will have a jumping castle set up and a food van to help with those pre-season vibes.",
		eventInfo: '',
		image:
			'https://scontent.fbne9-1.fna.fbcdn.net/v/t39.30808-6/429809320_1136566891074560_3840948839392771427_n.jpg?stp=dst-jpg_s1080x2048&_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_ohc=aYkhjnHfIlkQ7kNvgEarec9&_nc_ht=scontent.fbne9-1.fna&oh=00_AYDcDNzDnf2_JTdADCCvVoKs6VWNhg_xFiILtnPLeneicg&oe=664B44EA',
		clubLogo: 'https://eefc.syd1.cdn.digitaloceanspaces.com/EEFC-Logos/EEFCLogoSquareWhite.png',
		location: 'Emerald',
		mapLink: 'https://maps.app.goo.gl/MfuxQJP67uceYqMr5',
	},
	{
		date: '2024-03-23',
		title: '⚽️ EEFC Juniors Gradings ⚽️',
		description:
			"Its time to see what you've got! \n Come down and participate in our gradings matches to help our coaches make sure the teams are fair and balanced for the whole season.",
		eventInfo: '',
		image:
			'https://scontent.fbne9-1.fna.fbcdn.net/v/t39.30808-6/432764695_1146267070104542_5657867713861784061_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=cpdy-M9Q8EIQ7kNvgFtchEw&_nc_ht=scontent.fbne9-1.fna&oh=00_AYDssWMhDzGwJiDE0ZpZnPDPiKUH8-46CVhzfzmdxKAQ-A&oe=664B43E5',
		clubLogo: 'https://eefc.syd1.cdn.digitaloceanspaces.com/EEFC-Logos/EEFCLogoSquareWhite.png',
		location: 'Emerald',
		mapLink: 'https://maps.app.goo.gl/MfuxQJP67uceYqMr5',
	},
	{
		date: '2024-04-20',
		title: '⚽️ EEFC Juniors 1st Round ⚽️',
		description:
			"First round of the season kicks off today! \n Don't forget your boots, shin parseDeferredReadableStream, bucket hats and wate rbottles!.",
		eventInfo: '',
		image:
			'https://scontent.fbne9-2.fna.fbcdn.net/v/t39.30808-6/438197162_1165613624836553_4472878705879451442_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=-A6YHRVIJ1UQ7kNvgHJsoga&_nc_ht=scontent.fbne9-2.fna&oh=00_AYA3Xvt-xFiop6kZaC25ggYHqBtoA_ATp_GhuaCyZKqfZw&oe=664B5B89',
		clubLogo: 'https://eefc.syd1.cdn.digitaloceanspaces.com/EEFC-Logos/EEFCLogoSquareWhite.png',
		location: 'Emerald',
		mapLink: 'https://maps.app.goo.gl/MfuxQJP67uceYqMr5',
	},
	{
		date: '2024-05-11',
		title: '⚽️ EEFC Miniroos 1st Round (Season 1) ⚽️',
		description: 'Release the miniroos!!! \n Bring down your miniroos and help us kick off the season in style.',
		eventInfo: '',
		image:
			'https://scontent.fbne9-2.fna.fbcdn.net/v/t39.30808-6/439734601_1168324194565496_1237587325096654240_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=_QYOdbmAC5QQ7kNvgE9BZh0&_nc_ht=scontent.fbne9-2.fna&oh=00_AYBLExH_ectJjDetSxpHGy-aJ4GqRp6WNLhu-3US-zvkRw&oe=664B6581',
		clubLogo: 'https://eefc.syd1.cdn.digitaloceanspaces.com/EEFC-Logos/EEFCLogoSquareWhite.png',
		location: 'Emerald',
		mapLink: 'https://maps.app.goo.gl/MfuxQJP67uceYqMr5',
	},
	{
		date: '2024-06-02',
		title: '⚽️ Clermont Tigers Fun Day ⚽️',
		description:
			'Join us as we head to Clermont for their Fun Day Carnival \n To nominate your players, head to our facebook page parents groups and keep an eye out for the carnival player nominations post.',
		eventInfo: '',
		image:
			'https://scontent.fbne9-2.fna.fbcdn.net/v/t39.30808-6/442420529_901367161794065_16498248918379145_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=VazCSVFNZqYQ7kNvgHyep4g&_nc_ht=scontent.fbne9-2.fna&oh=00_AYCohEXyy478gQQ5DoAvOARidYeY0qpGaFHizCU33dYTyg&oe=664B5067',
		clubLogo: 'https://eefc.syd1.cdn.digitaloceanspaces.com/CQ-Club-Logos/clermonttigers.jpeg',
		location: 'Emerald',
		mapLink: 'https://maps.app.goo.gl/CajpEpYxREDZwjPH9',
	},
	{
		date: '2024-06-09',
		title: '⚽️ Blackwater Bandits Fun Day ⚽️',
		description:
			'Join us as we head to Blackwater for their Fun Day Carnival \n To nominate your players, head to our facebook page parents groups and keep an eye out for the carnival player nominations post.',
		eventInfo: '',
		image:
			'https://scontent.fbne9-2.fna.fbcdn.net/v/t39.30808-6/442420529_901367161794065_16498248918379145_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=VazCSVFNZqYQ7kNvgHyep4g&_nc_ht=scontent.fbne9-2.fna&oh=00_AYCohEXyy478gQQ5DoAvOARidYeY0qpGaFHizCU33dYTyg&oe=664B5067',
		clubLogo: 'https://eefc.syd1.cdn.digitaloceanspaces.com/CQ-Club-Logos/blackwaterbandits.jpeg',
		location: 'Emerald',
		mapLink: 'https://maps.app.goo.gl/N54TPKhLVTRomNaA7',
	},
	{
		date: '2024-06-11',
		title: '🏆 EEFC Seniors Grand Final Night (Season 1) 🏆',
		description: 'Come down and watch as our top 2 seniors teams go head to head in the Season 1 Grand Final',
		eventInfo: '',
		image:
			'https://scontent.fbne9-2.fna.fbcdn.net/v/t39.30808-6/442420529_901367161794065_16498248918379145_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=VazCSVFNZqYQ7kNvgHyep4g&_nc_ht=scontent.fbne9-2.fna&oh=00_AYCohEXyy478gQQ5DoAvOARidYeY0qpGaFHizCU33dYTyg&oe=664B5067',
		clubLogo: 'https://eefc.syd1.cdn.digitaloceanspaces.com/EEFC-Logos/EEFCLogoSquareWhite.png',
		location: 'Emerald',
		mapLink: 'https://maps.app.goo.gl/MfuxQJP67uceYqMr5',
	},
	{
		date: '2024-06-15',
		title: '⚽️ EEFC Miniroos Final Round (Season 1) ⚽️',
		description: 'Has it been 6 weeks already? Come down and watch our miniroos play their final game of the season.',
		eventInfo: '',
		image:
			'https://scontent.fbne9-2.fna.fbcdn.net/v/t39.30808-6/442420529_901367161794065_16498248918379145_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=VazCSVFNZqYQ7kNvgHyep4g&_nc_ht=scontent.fbne9-2.fna&oh=00_AYCohEXyy478gQQ5DoAvOARidYeY0qpGaFHizCU33dYTyg&oe=664B5067',
		clubLogo: 'https://eefc.syd1.cdn.digitaloceanspaces.com/EEFC-Logos/EEFCLogoSquareWhite.png',
		location: 'Emerald',
		mapLink: 'https://maps.app.goo.gl/MfuxQJP67uceYqMr5',
	},
	{
		date: '2024-06-16',
		title: '⚽️ Emerald Eagles Fun Day ⚽️',
		description:
			'Join us on our home ground for our Fun Day Carnival \n To nominate your players, head to our facebook page parents groups and keep an eye out for the carnival player nominations post.',
		eventInfo: '',
		image:
			'https://scontent.fbne9-2.fna.fbcdn.net/v/t39.30808-6/442420529_901367161794065_16498248918379145_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=VazCSVFNZqYQ7kNvgHyep4g&_nc_ht=scontent.fbne9-2.fna&oh=00_AYCohEXyy478gQQ5DoAvOARidYeY0qpGaFHizCU33dYTyg&oe=664B5067',
		clubLogo: 'https://eefc.syd1.cdn.digitaloceanspaces.com/EEFC-Logos/EEFCLogoSquareWhite.png',
		location: 'Emerald',
		mapLink: 'https://maps.app.goo.gl/MfuxQJP67uceYqMr5',
	},
	{
		date: '2024-07-06',
		title: '⚽️ CEC Babbage Carnival ⚽️',
		description:
			'Join us as we head to Rockhampton for the Bluebirds Fun Day Carnival \n To nominate your players, head to our facebook page parents groups and keep an eye out for the carnival player nominations post.',
		eventInfo: '',
		image:
			'https://scontent.fbne9-2.fna.fbcdn.net/v/t39.30808-6/442420529_901367161794065_16498248918379145_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=VazCSVFNZqYQ7kNvgHyep4g&_nc_ht=scontent.fbne9-2.fna&oh=00_AYCohEXyy478gQQ5DoAvOARidYeY0qpGaFHizCU33dYTyg&oe=664B5067',
		clubLogo: 'https://eefc.syd1.cdn.digitaloceanspaces.com/CQ-Club-Logos/bluebirdsunited.jpeg',
		location: 'Emerald',
		mapLink: 'https://maps.app.goo.gl/FvYTAPQaXqPrf4YT8',
	},
	{
		date: '2024-07-09',
		title: '⚽️ EEFC Seniors First Round (Season 2) ⚽️',
		description: 'Come down and watch our seniors kick off the first round of season 2',
		eventInfo: '',
		image:
			'https://scontent.fbne9-2.fna.fbcdn.net/v/t39.30808-6/442420529_901367161794065_16498248918379145_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=VazCSVFNZqYQ7kNvgHyep4g&_nc_ht=scontent.fbne9-2.fna&oh=00_AYCohEXyy478gQQ5DoAvOARidYeY0qpGaFHizCU33dYTyg&oe=664B5067',
		clubLogo: 'https://eefc.syd1.cdn.digitaloceanspaces.com/EEFC-Logos/EEFCLogoSquareWhite.png',
		location: 'Emerald',
		mapLink: 'https://maps.app.goo.gl/MfuxQJP67uceYqMr5',
	},
	{
		date: '2024-07-13',
		title: '⚽️ EEFC Miniroos First Round (Season 2) ⚽️',
		description:
			'Join us for the first round of season 2 as our miniroos return to the field for another season of fun!',
		eventInfo: '',
		image:
			'https://scontent.fbne9-2.fna.fbcdn.net/v/t39.30808-6/442420529_901367161794065_16498248918379145_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=VazCSVFNZqYQ7kNvgHyep4g&_nc_ht=scontent.fbne9-2.fna&oh=00_AYCohEXyy478gQQ5DoAvOARidYeY0qpGaFHizCU33dYTyg&oe=664B5067',
		clubLogo: 'https://eefc.syd1.cdn.digitaloceanspaces.com/EEFC-Logos/EEFCLogoSquareWhite.png',
		location: 'Emerald',
		mapLink: 'https://maps.app.goo.gl/MfuxQJP67uceYqMr5',
	},
	{
		date: '2024-07-14',
		title: '⚽️ Moranbah Hawks Fun Day ⚽️',
		description:
			'Join us as we head to Moranbah for their Fun Day Carnival \n To nominate your players, head to our facebook page parents groups and keep an eye out for the carnival player nominations post.',
		eventInfo: '',
		image:
			'https://scontent.fbne9-2.fna.fbcdn.net/v/t39.30808-6/442420529_901367161794065_16498248918379145_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=VazCSVFNZqYQ7kNvgHyep4g&_nc_ht=scontent.fbne9-2.fna&oh=00_AYCohEXyy478gQQ5DoAvOARidYeY0qpGaFHizCU33dYTyg&oe=664B5067',
		clubLogo: 'https://eefc.syd1.cdn.digitaloceanspaces.com/CQ-Club-Logos/moranbahhawks.jpeg',
		location: 'Emerald',
		mapLink: 'https://maps.app.goo.gl/hSHM4rbm7pAyQXCc8',
	},
	{
		date: '2024-07-27',
		title: '⚽️ EEFC Inter-City Club Night ⚽️',
		description:
			'Join us for our first ever Inter-City Club night hoested right here in Emerald as we go head to head against another Club. \n There will be 3 x Exhibition matches played with food, drinks and entertainment in what will surely be a night to remember. More details to come soon!',
		eventInfo: '',
		image:
			'https://scontent.fbne9-2.fna.fbcdn.net/v/t39.30808-6/442420529_901367161794065_16498248918379145_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=VazCSVFNZqYQ7kNvgHyep4g&_nc_ht=scontent.fbne9-2.fna&oh=00_AYCohEXyy478gQQ5DoAvOARidYeY0qpGaFHizCU33dYTyg&oe=664B5067',
		clubLogo: 'https://eefc.syd1.cdn.digitaloceanspaces.com/EEFC-Logos/EEFCLogoSquareWhite.png',
		location: 'Emerald',
		mapLink: 'https://maps.app.goo.gl/MfuxQJP67uceYqMr5',
	},
	{
		date: '2024-07-28',
		title: '⚽️ Clermont Tigers Fun Day ⚽️',
		description:
			'Join us as we head to Clermont for their Fun Day Carnival \n To nominate your players, head to our facebook page parents groups and keep an eye out for the carnival player nominations post.',
		eventInfo: '',
		image:
			'https://scontent.fbne9-2.fna.fbcdn.net/v/t39.30808-6/442420529_901367161794065_16498248918379145_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=VazCSVFNZqYQ7kNvgHyep4g&_nc_ht=scontent.fbne9-2.fna&oh=00_AYCohEXyy478gQQ5DoAvOARidYeY0qpGaFHizCU33dYTyg&oe=664B5067',
		clubLogo: 'https://eefc.syd1.cdn.digitaloceanspaces.com/CQ-Club-Logos/clermonttigers.jpeg',
		location: 'Emerald',
		mapLink: 'https://maps.app.goo.gl/CajpEpYxREDZwjPH9',
	},
	{
		date: '2024-08-11',
		title: '⚽️ Clinton Cup ⚽️',
		description:
			'Join us as we head to Gladstone for their Clinton Cup Carnival \n To nominate your players, head to our facebook page parents groups and keep an eye out for the carnival player nominations post.',
		eventInfo: '',
		image:
			'https://scontent.fbne9-2.fna.fbcdn.net/v/t39.30808-6/442420529_901367161794065_16498248918379145_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=VazCSVFNZqYQ7kNvgHyep4g&_nc_ht=scontent.fbne9-2.fna&oh=00_AYCohEXyy478gQQ5DoAvOARidYeY0qpGaFHizCU33dYTyg&oe=664B5067',
		clubLogo: 'https://eefc.syd1.cdn.digitaloceanspaces.com/CQ-Club-Logos/ClintonFC.jpeg',
		location: 'Emerald',
		mapLink: 'https://maps.app.goo.gl/k319uSSbgNgJDjtR8',
	},
	{
		date: '2024-08-11',
		title: "⚽️ Dysart Devil's Fun Day ⚽️",
		description:
			'Join us as we head to Dysart for their Fun Day Carnival \n To nominate your players, head to our facebook page parents groups and keep an eye out for the carnival player nominations post.',
		eventInfo: '',
		image:
			'https://scontent.fbne9-2.fna.fbcdn.net/v/t39.30808-6/442420529_901367161794065_16498248918379145_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=VazCSVFNZqYQ7kNvgHyep4g&_nc_ht=scontent.fbne9-2.fna&oh=00_AYCohEXyy478gQQ5DoAvOARidYeY0qpGaFHizCU33dYTyg&oe=664B5067',
		clubLogo: 'https://eefc.syd1.cdn.digitaloceanspaces.com/CQ-Club-Logos/Dysart_Devils.jpeg',
		location: 'Emerald',
		mapLink: 'https://maps.app.goo.gl/XBSv54wNNzD2DkAq9',
	},
	{
		date: '2024-08-17',
		title: '⚽️ EEFC Miniroos Final Round (Season 2) ⚽️',
		description:
			'And thats a wrap for our miniroos this year, come down and watch our miniroos play their final game of the season.',
		eventInfo: '',
		image:
			'https://scontent.fbne9-2.fna.fbcdn.net/v/t39.30808-6/442420529_901367161794065_16498248918379145_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=VazCSVFNZqYQ7kNvgHyep4g&_nc_ht=scontent.fbne9-2.fna&oh=00_AYCohEXyy478gQQ5DoAvOARidYeY0qpGaFHizCU33dYTyg&oe=664B5067',
		clubLogo: 'https://eefc.syd1.cdn.digitaloceanspaces.com/EEFC-Logos/EEFCLogoSquareWhite.png',
		location: 'Emerald',
		mapLink: 'https://maps.app.goo.gl/MfuxQJP67uceYqMr5',
	},
	{
		date: '2024-08-25',
		title: '⚽️ EEFC Barraclough Shield ⚽️',
		description:
			'Join us for the Emerald Eagles biggest event of the year, The Brraclough Shield! \n To nominate your players, head to our facebook page parents groups and keep an eye out for the carnival player nominations post.',
		eventInfo: '',
		image:
			'https://scontent.fbne9-2.fna.fbcdn.net/v/t39.30808-6/442420529_901367161794065_16498248918379145_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=VazCSVFNZqYQ7kNvgHyep4g&_nc_ht=scontent.fbne9-2.fna&oh=00_AYCohEXyy478gQQ5DoAvOARidYeY0qpGaFHizCU33dYTyg&oe=664B5067',
		clubLogo: 'https://eefc.syd1.cdn.digitaloceanspaces.com/EEFC-Logos/EEFCLogoSquareWhite.png',
		location: 'Emerald',
		mapLink: 'https://maps.app.goo.gl/MfuxQJP67uceYqMr5',
	},
	{
		date: '2024-08-31',
		title: '🏆 EEFC Juniors Breakup/Presentation Day 🏆',
		description:
			"Join us as for a day of fun and entertainment as we celebrate our players, coaches and volunteers' achievements throughout the season",
		eventInfo: '',
		image:
			'https://scontent.fbne9-2.fna.fbcdn.net/v/t39.30808-6/442420529_901367161794065_16498248918379145_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=VazCSVFNZqYQ7kNvgHyep4g&_nc_ht=scontent.fbne9-2.fna&oh=00_AYCohEXyy478gQQ5DoAvOARidYeY0qpGaFHizCU33dYTyg&oe=664B5067',
		clubLogo: 'https://eefc.syd1.cdn.digitaloceanspaces.com/EEFC-Logos/EEFCLogoSquareWhite.png',
		location: 'Emerald',
		mapLink: 'https://maps.app.goo.gl/MfuxQJP67uceYqMr5',
	},
	{
		date: '2024-09-01',
		title: '⚽️ Blackwater Bandits Fun Day ⚽️',
		description:
			'Join us as we head to Blackwater for their Fun Day Carnival \n To nominate your players, head to our facebook page parents groups and keep an eye out for the carnival player nominations post.',
		eventInfo: '',
		image:
			'https://scontent.fbne9-2.fna.fbcdn.net/v/t39.30808-6/442420529_901367161794065_16498248918379145_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=VazCSVFNZqYQ7kNvgHyep4g&_nc_ht=scontent.fbne9-2.fna&oh=00_AYCohEXyy478gQQ5DoAvOARidYeY0qpGaFHizCU33dYTyg&oe=664B5067',
		clubLogo: 'https://eefc.syd1.cdn.digitaloceanspaces.com/CQ-Club-Logos/blackwaterbandits.jpeg',
		location: 'Emerald',
		mapLink: 'https://maps.app.goo.gl/N54TPKhLVTRomNaA7',
	},
	{
		date: '2024-09-07',
		title: '🎉 EEFC End of Season Sponsors Gala 🎉',
		description:
			'Join us for a night of fun and entertainment as we celebrate our sponsors, club volunteers and the end of another successful season. This is an adult only event so make sure you have your babysitters lined up well in advance!',
		eventInfo: '',
		image:
			'https://scontent.fbne9-2.fna.fbcdn.net/v/t39.30808-6/442420529_901367161794065_16498248918379145_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=VazCSVFNZqYQ7kNvgHyep4g&_nc_ht=scontent.fbne9-2.fna&oh=00_AYCohEXyy478gQQ5DoAvOARidYeY0qpGaFHizCU33dYTyg&oe=664B5067',
		clubLogo: 'https://eefc.syd1.cdn.digitaloceanspaces.com/EEFC-Logos/EEFCLogoSquareWhite.png',
		location: 'Emerald',
		mapLink: 'https://maps.app.goo.gl/MfuxQJP67uceYqMr5',
	},
	{
		date: '2024-12-03',
		title: '🏆 EEFC Seniors Grand Finals Night (Season 2) 🏆',
		description: 'Come down and watch as our top 2 seniors teams go head to head in the Season 2 Grand Final',
		eventInfo: '',
		image:
			'https://scontent.fbne9-2.fna.fbcdn.net/v/t39.30808-6/442420529_901367161794065_16498248918379145_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=VazCSVFNZqYQ7kNvgHyep4g&_nc_ht=scontent.fbne9-2.fna&oh=00_AYCohEXyy478gQQ5DoAvOARidYeY0qpGaFHizCU33dYTyg&oe=664B5067',
		clubLogo: 'https://eefc.syd1.cdn.digitaloceanspaces.com/EEFC-Logos/EEFCLogoSquareWhite.png',
		location: 'Emerald',
		mapLink: 'https://maps.app.goo.gl/MfuxQJP67uceYqMr5',
	},
];

// not needed as this comes from facebook
// export const carnivalsData: Carnivals[] = [
// 	{
// 		id: '1',
// 		date: '2024-05-01',
// 		description: 'Happy New Year!',
// 		link: '/',
// 		images: ['newYear.jpg'],
// 	},
// 	{
// 		id: '2',
// 		date: '2024-05-01',
// 		description: 'Happy New Year!',
// 		link: '/',
// 		images: ['newYear.jpg'],
// 	},
// 	{
// 		id: '3',
// 		date: '2024-05-01',
// 		description: 'Happy New Year!',
// 		link: '/',
// 		images: ['newYear.jpg'],
// 	},
// 	{
// 		id: '4',
// 		date: '2024-05-01',
// 		description: 'Happy New Year!',
// 		link: '/',
// 		images: ['newYear.jpg'],
// 	},
// ];

// not needed as this comes from facebook
// export const eventsData: Events[] = [
// 	{
// 		id: '1',
// 		date: '2024-05-01',
// 		description: 'Happy New Year!',
// 		link: '/',
// 		images: ['newYear.jpg'],
// 	},
// 	{
// 		id: '2',
// 		date: '2024-05-01',
// 		description: 'Happy New Year!',
// 		link: '/',
// 		images: ['newYear.jpg'],
// 	},
// 	{
// 		id: '3',
// 		date: '2024-05-01',
// 		description: 'Happy New Year!',
// 		link: '/',
// 		images: ['newYear.jpg'],
// 	},
// 	{
// 		id: '4',
// 		date: '2024-05-01',
// 		description: 'Happy New Year!',
// 		link: '/',
// 		images: ['newYear.jpg'],
// 	},
// ];

// not needed as this comes from facebook
// export const newsData: News[] = [
// 	{
// 		id: '1',
// 		date: '2021-05-04',
// 		description: 'The latest news',
// 		images: ['news.jpg'],
// 		link: 'https://www.google.com',
// 	},
// 	{
// 		id: '2',
// 		date: '2021-05-11',
// 		description: 'The latest news',
// 		images: ['news.jpg'],
// 		link: 'https://www.google.com',
// 	},
// 	{
// 		id: '3',
// 		date: '2021-05-08',
// 		description: 'The latest news',
// 		images: ['news.jpg'],
// 		link: 'https://www.google.com',
// 	},
// ];

export const merchData: MerchProps[] = [
	{
		title: 'Training Shirt',
		description: 'Official EEFC Training Shirt',
		image: 'https://eefc.syd1.cdn.digitaloceanspaces.com/Merch/Training-Shirt.PNG',
		price: '$40',
		badge: 'POPULAR',
		link: 'https://emeraldeagles-shop.square.site/product/2024-eefc-training-shirt/7?cp=true&sa=true&sbp=false&q=false',
		badgeColour: 'secondary',
	},
	{
		title: 'Backpack',
		description: 'Backpack',
		image: 'https://eefc.syd1.cdn.digitaloceanspaces.com/Merch/Backpack.PNG',
		price: '$25',
		badge: 'LOW STOCK',
		link: 'https://emeraldeagles-shop.square.site/product/backpack/30?cp=true&sa=true&sbp=false&q=false',
		badgeColour: 'destructive',
	},
	{
		title: 'Bucket Hat',
		description: 'EEFC Bucket Hat',
		image: 'https://eefc.syd1.cdn.digitaloceanspaces.com/Merch/Bucket-Hat.PNG',
		price: '$12',
		badge: 'LIMITED EDITION',
		link: 'https://emeraldeagles-shop.square.site/product/bucket-hat/9?cp=true&sa=true&sbp=false&q=false',
		badgeColour: 'accent',
	},
];

export const regoPricesData: RegoPrices[] = [
	{
		title: 'Miniroos',
		description: 'Register in the 2024 miniroos comp',
		image: 'rego.jpg',
		price: '$65',
		open: true,
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
			'20 weeks of training & matches per season',
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
		open: false,
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

export const regoInfoData: SectionCardInfo = {
	title: '2024 Season Registration',
	description:
		"ALL registrations must be made via Squadi (excluding Miniroos). Make sure you select 'Emerald Eagles Football Club' as your organisation. Those that played the 2023 season can log in as an 'Exisiting Member'. Any new players must create a new User Profile. \n\n If a player is being registered by their parent then the parent will need to create a profile for themselves firstbefore then creating a profile for their child. Once they have created their child's profile they will then be able to register that child to one of our competitions. \n\n Our current age groups are: \n - Miniroos (4-5yo) \n - Juniors (6-16yo) \n - Seniors (15yo+) \n\n Miniroos registrations are through a different platform called Gameday and can be accessed via the Gameday link below. \n\n If you have any questions or need help with the registration process, please contact our Registrar at registrations@emeraldeagles.com.au",
	images: [
		'https://eefc.syd1.cdn.digitaloceanspaces.com/Website/Info-Sections/Squadi_Benefits.jpeg',
		'https://eefc.syd1.cdn.digitaloceanspaces.com/Website/Info-Sections/Squadi_Setup.jpeg',
	],
	link: [
		'https://registration.squadi.com/finder?organisationKey=74f39f3a-6e73-48a8-b837-705aba4c4512&yearId=6&competitionUniqueKey=bcfbdf76-c792-4ae5-ab46-c622a0db692c&teamId=-1&divisionId=2752&membershipType=%5B-1%5D&postCode=4720',
		'https://membership.mygameday.app/regoform.cgi?formID=88700&programID=68127',
	],
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

export const fairPlayInfoData: SectionCardInfo = {
	title: '2024 FairPlay Vouchers',
	description:
		'Parents, carers or guardians can apply for a FairPlay voucher valued up to $150 for their child to use towards their sport and active recreation membership, registration or participation fees with registered activity provider. \n\n An eligible parent, carer or guardian must hold a valid Services Australia Health Care Card or Pensioner Concession Card. \n\n Parents, carers and guardians need to register for an Enquire account before applying for a voucher. Registering for an Enquire account is only required once, for example, those people that registered in 2023, do not need to register again in 2024. \n\n If you would like to find out more information, please don’t hesitate to click the link below and send us a message on Facebook or send us an email at registrations@emeraldeagles.com.au.',
	images: ['https://eefc.syd1.cdn.digitaloceanspaces.com/Website/Info-Sections/Fair_Play_Info.png'],
	link: 'https://www.qld.gov.au/recreation/sports/funding/fairplay/apply',
	info: [
		'Check if your child is eligible for a FairPlay voucher and confirm you have a Services Australia Health Care Card or Pensioner Concession Card',
		'Register in the grant portal system, Enquire, and complete your user profile.',
		'When voucher applications are open, apply for FairPlay voucher/s online via the Enquire portal.',
		'Wait for the approved outcome of the application.',
		'Present the FairPlay voucher/s number during the Squadi registration process',
	],
};

export const miniroosInfoData: SectionCardInfo = {
	title: '2024 Miniroos Player Information',
	description:
		"The Aldi Miniroos Kick- Off Program is a great introduction for our little ones and promotes football-based exercise and activity for younger children between the ages of 4 and 5 years old. We run 2 separate seasons each year in Term 2 and Term 3 and is not a 'technical coaching' program, but a tempered introduction to the sport of football. The very basics of the game are introduced and experienced by the participants through different drills, practices and games. \n\n This is a great opportunity to get your kids out onto the field and develop their motor skills, as well as their social skills. The soccer ball itself is the main tool and this is utilised as much as possible. Elite players are not the ultimate outcome but rather the focus is on development of the individual participant’s gross motor skills in ball control, jumping, turning, balance, agility, movement and general co-ordination. \n\n The program enhances the opportunities for young children to receive quality, consistent coaching. In acquiring basic skills free of competition, participating children will not only learn correct technique but will likely develop a love of the “world game”. \n\n Our dedicated coaches, who are also Emerald Eagles parents, ensure that this introduction for your little one is fun and fulfilling. Players are encouraged to wear their Miniroos training shirt to matches. We also have club training shirts and other apparel available for purchase at the club house or online via our store. \n\n Players are required to bring a water bottle to all games and arrive 15 minutes prior to their training/game on Saturdays. All players must wear football boots (no steel tags) and shin pads during training/games. Shin pads can be purchased at the canteen, and we also have a limited number of second-hand boots available for purchase. \n\n If you would like to find out more information, please don’t hesitate to click the link below and send us a message on Facebook or send us an email at registrations@emeraldeagles.com.au.",
	images: [
		'https://eefc.syd1.cdn.digitaloceanspaces.com/Website/Info-Sections/Miniroos_Info_1.jpeg',
		'https://eefc.syd1.cdn.digitaloceanspaces.com/Website/Info-Sections/Miniroos_Info_2.jpeg',
	],
	link: 'https://membership.mygameday.app/regoform.cgi?formID=88700&programID=68127',
	info: [
		'Ages 4-5 years old',
		'1-hour training/game day – Saturdays starting at 10:00 am for Miniroos',
		'Player packs will be provided and delivered straight to your door (the club does not handle the distribution)',
		'No travel required (for weekly training/matches)',
		'2 x 6-week seasons (Term 2 and Term 3)',
	],
};

export const juniorsInfoData: SectionCardInfo = {
	title: '2024 Juniors Player Information',
	description:
		"Our Junior competition consists of players between the ages of 6 and 16 years old. The competition runs for one season every year over a 20-week period starting at the end of Term 1 and finishing at the end of Term 3. We welcome all players of all levels regardless of whether they are returning members or this is their first season. \n\n Our dedicated coaches (who are all Emerald Eagles parents) will do their best to ensure that all teams and divisions are balanced and fair, providing players with the best possible experience at the Emerald Eagles Football Club. We are extremely grateful to these coaches for dedicating their time to not only coach their own kids but also all the other kids, and as a token of appreciation, they receive discounted registrations, end-of-season gifts, and tickets to our exclusive end-of-season function at The Mayfair Emerald. \n\n Players are encouraged to wear the club training shirt to training, and game jerseys will be provided for their regular season Saturday games. Our Football Fields are located on Dundas St in Emerald and all games unless otherwise stated will be played there with game times (season draw) available via the website and the Squadi app. \n\n Carnival jerseys will be provided on the day of the carnival and need to be returned at the end of the day to the coach. Additionally, there is other apparel available for purchase at the club house or online via our store. \n\n Players are required to bring a water bottle to all training sessions and games, and should arrive 15 minutes prior to training and 30 minutes prior to games. If a player is unable to attend training or games, they should inform their coach either via the Facebook parents group for their age group or through their team's chat on the Squadi app. \n\n ALL players MUST wear football boots (no steel tags) and shin pads during training and matches. Shin pads can be purchased at the canteen, and we also have a limited number of second-hand boots available for purchase. \n\n If you would like to find out more information, please don’t hesitate to click the link below and send us a message on Facebook or send us an email at juniors@emeraldeagles.com.au.",
	images: [
		'https://eefc.syd1.cdn.digitaloceanspaces.com/Website/Info-Sections/Juniors_Info_1.jpeg',
		'https://eefc.syd1.cdn.digitaloceanspaces.com/Website/Info-Sections/Junior_Info_2.jpeg',
		'https://eefc.syd1.cdn.digitaloceanspaces.com/Website/Info-Sections/Junior_Info_3.jpeg',
	],
	link: 'https://registration.squadi.com/finder?organisationKey=74f39f3a-6e73-48a8-b837-705aba4c4512&yearId=6&competitionUniqueKey=bcfbdf76-c792-4ae5-ab46-c622a0db692c&teamId=-1&divisionId=2752&membershipType=%5B-1%5D&postCode=4720',
	info: [
		'Ages 6-16 years old',
		'1hr weekly training session – Tuesdays starting at 4:30pm',
		'1hr game day – Saturdays starting at 8:30am for Juniors',
		'Player packs will be provided and can be collected from the Canteen',
		'NO TRAVEL REQUIRED (for weekly fixtures)',
		'1 x 20-week season (Term 1 - Term 3)',
		'Home club carnivals – Emerald Fun Day & Barraclough Shield',
		'Away club carnivals - Opportunity to participate in local carnivals around CQ: Rockhampton, Gladstone, Clermont, Dysart, Moranbah, Blackwater',
		'Opportunity to participate in EuroStar Football training clinics',
		'End of Year Presentation',
	],
};

export const seniorsInfoData: SectionCardInfo = {
	title: '2024 Seniors Player Information',
	description:
		"Our social seniors Six a Side competition consists of players from the ages of 15 years and above. Each year the competiton runs for 2 separate seasons over a 16-week period, including regular fixtures and finals. The 1st season kicks off in Term 1 (late January/early February) and finishes at the end of Term 2 (late March), and the 2nd season starts in Term 3 (early July) and concludes at the end of Term 4 (late November/early December). \n\n We welcome players of all levels, whether they are returning members or new to the club. Our Football Fields are located on Dundas St in Emerald and all games unless otherwise stated will be played here and game times (season draw) and competiton ladders can accessed via the Squadi app. \n\n Before registering for the seniors competition, players will need to find a team to play on, as the senior teams manage themselves and not the club. There are 2 weeks of scratch matches at the start of each season, where new players are encouraged to try out for teams before the season kicks off. After this 2-week period, any players who take to the field will be required to be registered to a team and will play for that team for the duration of the season. \n\n Players are encouraged to wear their team's jerseys to make it easier for everyone on the field, however jerseys are not mandatory and bibs can be supplied for teams if required. There is also other apparel available for purchase at the club house or online via our store. \n\n Seniors matches run for 55 minutes with 2 x 25-minute halves and a 5-minute halftime break. These matches are played on Tuesday nights over 2 timeslots (6:30pm and 7:30pm), with the competition traditionally fielding 8 or 9 teams. If there is an uneven number of teams, then a bye week will be introduced as needed. There is no training for seniors unless the teams organize it themselves, which they are free to do so at their own discretion. Access to the training shed can be organized on a case-by-case basis with a committee member. \n\n Players in the seniors competition will also be eligible for selection to play in our Emerald Eagles seniors team in our Inter-Club carnival nights. If selected, they will be required to play 2 x matches against another club, one match will be a home game and the other match will be an away game (most likely on the Capricorn Coast). These Inter-Club nights will be a draw card for the community and will help the club build relationships with other CQ clubs. More information for this event will be provided closer to the date. \n\n All players must wear football boots (no steel tags) and shin pads during matches. Shin pads can be purchased at the canteen, and we also have a limited number of second-hand boots available for purchase. Players are to familiarize themselves with our Seniors 6-a-side rules and regulations, which can be found on our website in the 'Club > Resources' section. \n\n If you would like to find out more information, please don’t hesitate to click the link below and send us a message on Facebook or send us an email at seniors@emeraldeagles.com.au.",
	images: [
		'https://eefc.syd1.cdn.digitaloceanspaces.com/Website/Info-Sections/Seniors_Info_1.jpeg',
		'https://eefc.syd1.cdn.digitaloceanspaces.com/Website/Info-Sections/Seniors_Info_2.jpeg',
		'https://eefc.syd1.cdn.digitaloceanspaces.com/Website/Info-Sections/Seniors_Info_3.jpeg',
		'https://eefc.syd1.cdn.digitaloceanspaces.com/Website/Info-Sections/Seniors_Info_4.jpeg',
	],
	link: 'https://registration.squadi.com/finder?organisationKey=74f39f3a-6e73-48a8-b837-705aba4c4512&yearId=6&competitionUniqueKey=bcfbdf76-c792-4ae5-ab46-c622a0db692c&teamId=-1&divisionId=2752&membershipType=%5B-1%5D&postCode=4720',
	info: [
		'Ages 15 years and older',
		'1hr game day – Tuesdays starting at 6:30pm and 7:30pm',
		'NO TRAVEL REQUIRED (for weekly fixtures)',
		'2 x 16-week seasons (Term 1 - Term 2 & Term 3 - Term 4)',
		'Opportunity to be selected for our representative seniors team (TRAVEL REQUIRED FOR ONE GAME)',
		'End of season/Grand Final break up night',
	],
};

export const coachInfoData: SectionCardInfo = {
	title: '2024 Coaches Information',
	description:
		'All our coaches are volunteers with current blue cards and graciously donate their time to ensure our kids have a great experience at the soccer club. While they may not have Premier League level coaching skills, they are dedicated parents who do their best for all the kids. \n\n As a token of appreciation, coaches receive discounted registrations, end-of-season gifts, and tickets to our exclusive end-of-season function at The Mayfair Emerald. \n\n If you are interested in volunteering as a coach, please click the link below to send us a message on Facebook or email our coaching coordinator, at coaching@emeraldeagles.com.au.',
	images: [
		'https://eefc.syd1.cdn.digitaloceanspaces.com/Website/Info-Sections/Coaches_Info_1.jpeg',
		'https://eefc.syd1.cdn.digitaloceanspaces.com/Website/Info-Sections/Coaches_Info_2.jpeg',
	],
	link: 'https://www.m.me/emeraldeagles',
	info: [
		'1-hour weekly training session',
		'1-hour weekly match reffing',
		'Build relationships with fellow volunteers and club members',
		'Access to coaching resources and support from the club',
		'Free EuroStar Football training clinics',
		'Coaches pack provided (Whistle, Polo Shirt, Clipboard & pen, Training drills and Manuals, sunscreen, and a backpack)',
		'1 x discounted registration fee for themselves (Seniors) or their child (Juniors)',
		'2 x tickets to our exclusive end-of-season function at the Mayfair Hotel',
		'End-of-season gift',
	],
};

export const blueCardInfoData: SectionCardInfo = {
	title: '2024 Blue Card Information',
	description:
		"All our coaches an committee members who volunteer will need to obtain a Blue Card or an Exemption Card and then link it to the Emeradl Eagles Football Club. If you have an eixsitng Blue Card then you will need to renew it (if it has expired) and then link it to our football club. \n\n If you would like to find out more information regarding this process or have any questions please don't hesitate to reach out to our club secretary either by clicking the link below to send a message on Facebook or by emailing secretary@emeraldeagles.com.au.",
	images: ['https://eefc.syd1.cdn.digitaloceanspaces.com/Website/Info-Sections/Blue_Card_Info_1.png'],
	link: [
		'https://www.publications.qld.gov.au/ckan-publications-attachments-prod/resources/71b9357b-04ed-43da-8633-6c691bbb6db6/blue_0112_applying-for-a-blue-card-online-and-offline_01.pdf?ETag=1385dbbe38544ce6b0262d8ab0f10237',
		'https://www.publications.qld.gov.au/ckan-publications-attachments-prod/resources/3686fadb-8cc7-4d85-aca8-9f4f631492a7/bcs-card_holder_renewing_online_02.pdf?ETag=650c6f6e3512d2b0b622309cb6a32d75',
	],
	info: [
		'Navigate to the online portal and register an online account',
		'Fill out the online application form',
		'Record your application reference number',
		'Send your reference number, date of birth, and full name to secretary@emeraldeagles.com.au',
		'If you already have a Blue Card you will need to send that to us as well',
		'Once we have received your details we will link your Blue Card to the Emerald Eagles Football Club',
		'Once you are linked you will be able to log back into the online portal and submit your application',
		'Once your application has been approved you will receive your Blue Card in the mail',
	],
};

export const volunteerInfoData: SectionCardInfo = {
	title: '2024 Volunteer Information',
	description:
		'Like any other sporting club, it is the dedicated volunteers that ensure soccer in Emerald continues to grow and thrive for generations to come. \n\n We are currently seeking help in the following areas: \n - Canteen (food preparation, sales, clean-up) \n - Carnivals/Fun Days (Set-up/Pack-up, Canteen, BBQ, Food donations, Match Officials) \n - Working Bees \n - AGM Committee members \n\n Each time you volunteer for the club, you will be entered into a draw to win 2 x tickets to our exclusive end-of-season function at The Mayfair Emerald. \n\n If you would like to get involved, please don’t hesitate to click the link below and add yourself to a timeslot for one of our game days, your help means the world to us! Alternatively you can also send us an email at admin@emeraldeagles.com.au to find out more info.',
	images: [
		'https://eefc.syd1.cdn.digitaloceanspaces.com/Website/Info-Sections/Volunteer_Info_1.jpeg',
		'https://eefc.syd1.cdn.digitaloceanspaces.com/Website/Info-Sections/Volunteer_Info_3.jpeg',
	],
	link: 'https://signup.zone/eDMZ8LDXbNQfambvm',
	info: [
		'Help steer the club towards a bigger and better future',
		'Be an active part of the EEFC community',
		'Build relationships with fellow volunteers and club members',
		'Enjoy a $5 canteen food discount each time you volunteer',
		'Get a chance to win 2 tickets to our exclusive end-of-season function at The Mayfair Emerald',
	],
};

export const committeeInfoData: SectionCardInfo = {
	title: '2024 Committee Information',
	description:
		'Like any other sporting club, it is the dedicated committee working behind the scenes that ensures soccer in Emerald continues to grow and thrive for generations to come. The committee members are responsible for making important decisions, organizing events, managing finances, and overseeing the overall operations of the club. They play a crucial role in shaping the future of the club and creating a positive environment for players, coaches, volunteers, and supporters. \n\n If you are passionate about soccer and want to make a difference, joining the committee is a great way to contribute to the success of the Emerald Eagles Football Club. Whether you have experience in sports administration or are simply enthusiastic about supporting the club, your skills and dedication are valuable. \n\n As a committee member, you will have the opportunity to help steer the club towards a bigger and better future, give back to the community, and be actively involved in decision-making processes. You will also receive a volunteer polo shirt to proudly represent the club. \n\n As a token of appreciation, committee members receive discounted registrations, end-of-season gifts, end-of-year one-time bonus payment, and tickets to our exclusive end-of-season function at The Mayfair Emerald. If you would like to get involved with the committee, please don’t hesitate to click the link below and send us a message on Facebook or send us an email at admin@emeraldeagles.com.au',
	images: [
		'https://eefc.syd1.cdn.digitaloceanspaces.com/Website/Info-Sections/Committee_Info_1.jpg',
		'https://eefc.syd1.cdn.digitaloceanspaces.com/Website/Info-Sections/Committee_Info_2.jpeg',
	],
	link: 'https://www.m.me/emeraldeagles',
	info: [
		'Help steer the club towards a bigger and better future',
		'Be an active part of the EEFC community',
		'Enjoy a $5 canteen food discount each week',
		'Be actively involved in decision-making processes',
		'Build relationships with fellow volunteers and club members',
		'Receive a volunteer club polo shirt',
		'1 x discounted registration fee for themselves (Seniors) or their child (Juniors)',
		'2 x tickets to our exclusive end-of-season function at the Mayfair Hotel',
		'End-of-season gift',
		'End-of-year one-time bonus payment',
	],
};

export const historyInfoData: SectionCardInfo = {
	title: 'Emerald Eagles Football Club History',
	description:
		'The Emerald Eagles formed on 28 February 1977 and was formally known as the Emerald Junior Soccer Association but we’ve always called Morton Park home. The Club provides opportunities for kids (and adults) to be active, fit and healthy and teaches sportsmanship, teamwork and accountability, whilst building character,	discipline and a love of the sport. \n\n In 2010/11, the Emerald Junior Soccer Association merged with the Senior side of the club, forming the Emerald Eagles Football Club. \n\n The Emerald Eagles Football Club has grown to over 340 players across our junior and senior bases with players coming from Emerald and the surrounding areas. \n\n If you would like to find out more about the history of the club, please don’t hesitate to click the link below and send us a message on Facebook or send us an email at admin@emeraldeagle.com.au',
	images: ['https://eefc.syd1.cdn.digitaloceanspaces.com/Website/Info-Sections/History_Info_1.jpeg'],
	link: 'https://www.m.me/emeraldeagles',
	info: [
		'The club was formed on 28 February 1977',
		'The club has grown to over 340 players across our junior and senior bases',
		'We have a strong focus on youth development and have produced several scholorship winning players',
		'We organize community events and charity fundraisers throughout the year',
	],
};

export const sponsorsInfoData: SectionCardInfo = {
	title: 'Community Sponsors',
	description:
		'The Emerald Eagles Football Club would like to thank all our sponsors for their continued support. Without their support, we would not be able to provide the facilities and opportunities that we do for our players. \n\n As a non-for profit Club we rely on the support of local organisations such as yourself, to ensure we are able to operate each season and provide sporting opportunities for our local youth. Your	support will not only make a significant difference in our Clubs success but also showcase your	businesses commitment to our local community. \n\n If you would like to find out more about becoming one of our sponsors, please don’t hesitate to click the link below and send us a message on Facebook or send us an email at sponsorships@emeraldeagles.com.au',
	images: ['https://eefc.syd1.cdn.digitaloceanspaces.com/Website/Info-Sections/Sponsors_Info_1.jpeg'],
	link: 'https://www.m.me/emeraldeagles',
	info: [
		'Our sponsors play a vital role in supporting our club and community',
		'We offer various sponsorship packages to suit different businesses',
		'Sponsorship opportunities include logo placement, advertising, and event sponsorship',
		'Sponsors receive recognition on our website, social media, and at club events',
		'Join our community of sponsors and make a positive impact on local soccer',
		'2 x tickets to our exclusive end-of-season function at The Mayfair Hotel',
		'Oppurtunity to sponsor a Junior team, Senior Club team, or our Junior Academy team and have your logo on their jerseys',
	],
};

export const lifeMembersInfoData: SectionCardInfo = {
	title: 'Emerald Eagles Football Club Life Members',
	description:
		'Over the years, the Emerald Eagles Football Club has had many dedicated members who have gone above and beyond for the club. These members have been awarded Life Membership for their dedication and service to the club. Life Members are recognized for their significant contributions and are highly respected within the club community.',
	images: ['https://eefc.syd1.cdn.digitaloceanspaces.com/Website/Info-Sections/Life_Members_Info_1.jpeg'],
	link: 'https://www.m.me/emeraldeagles',
	info: [
		'Life Members have made a lasting impact on the club through their leadership and commitment.',
		"They have played a crucial role in shaping the club's culture and success.",
		'Life Members have dedicated countless hours to the club, volunteering their time and expertise.',
		'They have contributed to the development of players, coaches, and the overall growth of the club.',
		'Life Members are role models for current and future members, inspiring them to strive for excellence.',
		'They continue to support the club and its initiatives, ensuring its continued success.',
		'Life Members are honored at special club events and their achievements are celebrated by the entire club community.',
	],
};

export const clubInfoData: ClubInfo[] = [
	{
		title: 'History',
		description: 'Information about the club',
		image: 'https://eefc.syd1.cdn.digitaloceanspaces.com/Website/Info-Sections/History_Info_1.jpeg',
		link: '/club/history',
	},
	{
		title: 'Committee',
		description: 'Meet the 2024 Committee',
		image: 'https://eefc.syd1.cdn.digitaloceanspaces.com/Website/Info-Sections/Committee_Info_1.jpg',
		link: '/club/committee',
	},
	{
		title: 'Life Members',
		description: 'The honour board',
		image: 'https://eefc.syd1.cdn.digitaloceanspaces.com/Website/Info-Sections/Life_Members_Info_1.jpeg',
		link: '/club/life-members',
	},
	{
		title: 'Sponsors',
		description: 'Meet the 2024 Sponosors',
		image: 'https://eefc.syd1.cdn.digitaloceanspaces.com/Website/Info-Sections/Sponsors_Info_2.jpeg',
		link: '/club/sponsors',
	},
	{
		title: 'Coaches',
		description: 'Get to know our coaches',
		image: 'https://eefc.syd1.cdn.digitaloceanspaces.com/Website/Info-Sections/Coaches_Info_1.jpeg',
		link: '/club/coaches',
	},
	{
		title: 'Volunteers',
		description: 'Celebrate our community with us!',
		image: 'https://eefc.syd1.cdn.digitaloceanspaces.com/Website/Info-Sections/Volunteer_Info_2.jpeg',
		link: '/club/volunteers',
	},
];

export const resourcesData: Resources[] = [
	{
		title: 'EEFC Pricacy Policy',
		description: 'EEFC Pricacy Policy',
		image: 'resources.jpg',
		link: 'https://drive.google.com/file/d/1Vs-Ea22LtlD0FI-F7pti9r8Ubdgzp24k/view?usp=sharing',
		category: 'club',
	},
	{
		title: 'Seniors playing formats and rules',
		description: 'Seniors playing formats and rules',
		image: 'juniorrules.jpg',
		link: 'https://eefc.syd1.cdn.digitaloceanspaces.com/Playing-Rules/Seniors-6-A-Side-Rules.pdf',
		category: 'rules',
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
		description: 'Community League playing formats and rules',
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
		title: 'Berserker Bears FC',
		image: 'https://eefc.syd1.cdn.digitaloceanspaces.com/CQ-Club-Logos/berserkerbears.jpeg',
		link: 'https://www.facebook.com/BerserkerBears/',
	},
	{
		title: 'Blackwater Bandits',
		image: 'https://eefc.syd1.cdn.digitaloceanspaces.com/CQ-Club-Logos/blackwaterbandits.jpeg',
		link: 'https://www.facebook.com/p/Blackwater-Bandits-Football-Club-2022-100083293393665/',
	},
	{
		title: 'Bluebirds United FC',
		image: 'https://eefc.syd1.cdn.digitaloceanspaces.com/CQ-Club-Logos/bluebirdsunited.jpeg',
		link: 'https://bluebirdsufc.com.au/',
	},
	{
		title: 'Boyne Tannum FC',
		image: 'https://eefc.syd1.cdn.digitaloceanspaces.com/CQ-Club-Logos/BITS.webp',
		link: 'https://www.boynetannumfc.com/',
	},
	{
		title: 'Capricorn Coast FC',
		image: 'https://eefc.syd1.cdn.digitaloceanspaces.com/CQ-Club-Logos/capcoast.webp',
		link: 'https://www.capricorncoastfc.com.au/',
	},
	{
		title: 'Clermont Tigers',
		image: 'https://eefc.syd1.cdn.digitaloceanspaces.com/CQ-Club-Logos/clermonttigers.jpeg',
		link: 'https://clermont-tigers-junior-soccer-association.square.site/',
	},
	{
		title: 'Clinton FC',
		image: 'https://eefc.syd1.cdn.digitaloceanspaces.com/CQ-Club-Logos/ClintonFC.jpeg',
		link: 'https://www.facebook.com/ClintonFootballClub/',
	},
	{
		title: "Dysart Devil's FC",
		image: 'https://eefc.syd1.cdn.digitaloceanspaces.com/CQ-Club-Logos/Dysart_Devils.jpeg',
		link: 'https://www.facebook.com/p/Dysart-Devils-FC-100057481516607/',
	},
	{
		title: 'Frenchville Roos SC',
		image: 'https://eefc.syd1.cdn.digitaloceanspaces.com/CQ-Club-Logos/frenchville.png',
		link: 'https://www.frenchvillesportsclub.com.au/sports/frenchville-roos-competitivefrenchville',
	},
	{
		title: 'Gracemere Redbacks FC',
		image: 'https://eefc.syd1.cdn.digitaloceanspaces.com/CQ-Club-Logos/gracemereredbacks.jpeg',
		link: 'https://gracemereredbacks.com.au/index.php',
	},
	{
		title: 'Longreach FC',
		image: 'https://eefc.syd1.cdn.digitaloceanspaces.com/CQ-Club-Logos/longreachfc.png',
		link: 'https://www.facebook.com/longreachsoccer/',
	},
	{
		title: 'Moranbah Hawks FF',
		image: 'https://eefc.syd1.cdn.digitaloceanspaces.com/CQ-Club-Logos/moranbahhawks.jpeg',
		link: 'https://www.facebook.com/MHJSF/',
	},
	{
		title: 'Nerimbera FC',
		image: 'https://eefc.syd1.cdn.digitaloceanspaces.com/CQ-Club-Logos/nerimbera.webp',
		link: 'https://www.nerimberafc.com.au/',
	},
	{
		title: 'Souths United FC',
		image: 'https://eefc.syd1.cdn.digitaloceanspaces.com/CQ-Club-Logos/southsunited.png',
		link: 'https://southsunited.org.au/',
	},
	{
		title: 'Southside United SC',
		image: 'https://eefc.syd1.cdn.digitaloceanspaces.com/CQ-Club-Logos/southsideunited.png',
		link: 'https://www.facebook.com/suscfootball/',
	},
];
