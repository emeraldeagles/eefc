import type {
	Committee,
	LifeMembers,
	Resources,
	Sponsors,
	ImportantDates,
	Carnivals,
	Events,
	MerchProps,
	News,
	RegoPrices,
	ClubInfo,
	ClubSitesProps,
	Coaches,
	SectionCardInfo,
} from '~/interfaces/content';

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
		image: '',
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
		image: 'https://eefc.syd1.cdn.digitaloceanspaces.com/Coaches/kylie.jpeg',
		team: 'Manchester City',
		ageGroup: 'U10/11',
	},
	{
		title: 'Abhay Kulkarni',
		description: '',
		image: 'https://eefc.syd1.cdn.digitaloceanspaces.com/Coaches/abhay.jpeg',
		team: 'Manchester United',
		ageGroup: 'U10/11',
	},
	{
		title: 'Jason Sandeman',
		description: 'Head Coach',
		image: 'https://eefc.syd1.cdn.digitaloceanspaces.com/Coaches/jason.jpeg',
		team: 'Pumas/Cheetahs',
		ageGroup: 'U8/9',
	},
	{
		title: 'William Masiya',
		description: '',
		image: 'https://eefc.syd1.cdn.digitaloceanspaces.com/Coaches/william.jpeg',
		team: 'Pumas',
		ageGroup: 'U8/9',
	},
	{
		title: 'Eloise Heaps',
		description: '',
		image: 'https://eefc.syd1.cdn.digitaloceanspaces.com/Coaches/elle.jpeg',
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
		image: '',
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
		image: 'https://eefc.syd1.cdn.digitaloceanspaces.com/Coaches/tom.jpeg',
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
		image: 'https://eefc.syd1.cdn.digitaloceanspaces.com/Coaches/zac.jpeg',
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
		image: 'https://eefc.syd1.cdn.digitaloceanspaces.com/Coaches/sandy.jpeg',
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
		image: '',
		team: '',
		ageGroup: 'U4/5',
	},
	{
		title: 'Daniel Stickley',
		description: '',
		image: '',
		team: '',
		ageGroup: 'U4/5',
	},
	{
		title: 'Sandy McCallum',
		description: '',
		image: 'https://eefc.syd1.cdn.digitaloceanspaces.com/Coaches/sandy.jpeg',
		team: '',
		ageGroup: 'U4/5',
	},
	{
		title: 'Jason Sandeman',
		description: '',
		image: 'https://eefc.syd1.cdn.digitaloceanspaces.com/Coaches/jason.jpeg',
		team: '',
		ageGroup: 'U4/5',
	},
	{
		title: 'Alisha Rickert',
		description: '',
		image: '',
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
		image: '',
		team: '',
		ageGroup: 'U4/5',
	},
	{
		title: 'Chenoa Lowe-Brock',
		description: '',
		image: '',
		team: '',
		ageGroup: 'U4/5',
	},
];

export const committeeData: Committee[] = [
	{
		title: 'Darrin Milner',
		description: 'President & Academy Co-ordinator',
		image: '',
		email: 'president@emeraldeagles.com',
	},
	{
		title: 'Maureen King',
		description: 'Vice President',
		image: '',
		email: 'admin@emeraldeagles.com',
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
		image: '',
		email: 'secretary@emeraldeagles.com',
	},
	{
		title: 'Jessica Chay',
		description: 'Sponsorships & Grants',
		image: '',
		email: 'sponsors@emeraldeagles.com',
	},
	{
		title: 'Jason Sandeman',
		description: 'Registrar',
		image: '',
		email: 'registrations@emeraldeagles.com',
	},
	{
		title: 'Tom Conway',
		description: 'Seniors Co-ordinator',
		image: '',
		email: 'admin@emeraldeagles.com',
	},
	{
		title: 'Noah Silberg',
		description: 'Coaching Co-ordinator',
		image: '',
		email: 'admin@emeraldeagles.com',
	},
	{
		title: 'Chrissy Curran',
		description: 'Social Media Co-ordinator',
		image: '',
		email: 'admin@emeraldeagles.com',
	},
	{
		title: 'Vacant',
		description: 'Canteen Co-ordinator',
		image: '',
		email: 'admin@emeraldeagles.com',
	},
	{
		title: 'Vacant',
		description: 'Juniors Co-ordinator',
		image: '',
		email: 'admin@emeraldeagles.com',
	},
	{
		title: 'Vacant',
		description: 'Carnival Co-ordinator',
		image: '',
		email: 'admin@emeraldeagles.com',
	},
	{
		title: 'Vacant',
		description: 'Events Co-ordinator',
		image: '',
		email: 'admin@emeraldeagles.com',
	},
	{
		title: 'Vacant',
		description: 'Groundskeeper',
		image: '',
		email: 'admin@emeraldeagles.com',
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
		title: 'Sponsors',
		description: 'Information about sponsors',
		image: 'https://eefc.syd1.cdn.digitaloceanspaces.com/2024-Logos/eefclogo.png',
		link: 'https://www.google.com',
		type: 'platinum',
	},
	{
		title: 'Sponsors',
		description: 'Information about sponsors',
		image: 'https://eefc.syd1.cdn.digitaloceanspaces.com/2024-Logos/eefclogo.png',
		link: 'https://www.google.com',
		type: 'platinum',
	},
	{
		title: 'Sponsors',
		description: 'Information about sponsors',
		image: 'https://eefc.syd1.cdn.digitaloceanspaces.com/2024-Logos/eefclogo.png',
		link: 'https://www.google.com',
		type: 'gold',
	},
	{
		title: 'Sponsors',
		description: 'Information about sponsors',
		image: 'https://eefc.syd1.cdn.digitaloceanspaces.com/2024-Logos/eefclogo.png',
		link: 'https://www.google.com',
		type: 'gold',
	},
	{
		title: 'Sponsors',
		description: 'Information about sponsors',
		image: 'https://eefc.syd1.cdn.digitaloceanspaces.com/2024-Logos/eefclogo.png',
		link: 'https://www.google.com',
		type: 'silver',
	},
	{
		title: 'Sponsors',
		description: 'Information about sponsors',
		image: 'https://eefc.syd1.cdn.digitaloceanspaces.com/2024-Logos/eefclogo.png',
		link: 'https://www.google.com',
		type: 'silver',
	},
	{
		title: 'Sponsors',
		description: 'Information about sponsors',
		image: 'https://eefc.syd1.cdn.digitaloceanspaces.com/2024-Logos/eefclogo.png',
		link: 'https://www.google.com',
		type: 'silver',
	},
	{
		title: 'Sponsors',
		description: 'Information about sponsors',
		image: 'https://eefc.syd1.cdn.digitaloceanspaces.com/2024-Logos/eefclogo.png',
		link: 'https://www.google.com',
		type: 'bronze',
	},
	{
		title: 'Sponsors',
		description: 'Information about sponsors',
		image: 'https://eefc.syd1.cdn.digitaloceanspaces.com/2024-Logos/eefclogo.png',
		link: 'https://www.google.com',
		type: 'bronze',
	},
	{
		title: 'Sponsors',
		description: 'Information about sponsors',
		image: 'https://eefc.syd1.cdn.digitaloceanspaces.com/2024-Logos/eefclogo.png',
		link: 'https://www.google.com',
		type: 'bronze',
	},
	{
		title: 'Sponsors',
		description: 'Information about sponsors',
		image: 'https://eefc.syd1.cdn.digitaloceanspaces.com/2024-Logos/eefclogo.png',
		link: 'https://www.google.com',
		type: 'bronze',
	},
];

export const importantDatesData: ImportantDates[] = [
	{
		date: '2024-03-09',
		title: '🛠️ EEFC Working Bee 🛠️',
		description: 'Help us get our club and football fields ready for the upcoming season! \n Without the help of our volunteers each season the club would not be where it is today.',
		eventInfo: '',
		image: 'https://scontent.fbne9-2.fna.fbcdn.net/v/t39.30808-6/442420529_901367161794065_16498248918379145_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=VazCSVFNZqYQ7kNvgHyep4g&_nc_ht=scontent.fbne9-2.fna&oh=00_AYCohEXyy478gQQ5DoAvOARidYeY0qpGaFHizCU33dYTyg&oe=664B5067',
		clubLogo: 'https://eefc.syd1.cdn.digitaloceanspaces.com/2024-Logos/eefclogo.png',
		location: 'Emerald',
		mapLink: 'https://www.google.com/maps/place/Emerald+Eagles+Football+Club/@-23.5220121,148.1532463,16z/data=!3m1!4b1!4m6!3m5!1s0x6bcf4d089aa6f487:0x6ceadc2cbfff2320!8m2!3d-23.522017!4d148.1558212!16s%2Fg%2F11csb05lb2?entry=ttu',
	},
	{
		date: '2024-03-16',
		title: '⚽️ EEFC Juniors Come & Try Day ⚽️',
		description: "Come down and see what its all about! \n Wether you've played before or this is your first year, this is your chance tocome down and have some fun. \n We will have a jumping castle set up and a food van to help with those pre-season vibes.",
		eventInfo: '',
		image: 'https://scontent.fbne9-1.fna.fbcdn.net/v/t39.30808-6/429809320_1136566891074560_3840948839392771427_n.jpg?stp=dst-jpg_s1080x2048&_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_ohc=aYkhjnHfIlkQ7kNvgEarec9&_nc_ht=scontent.fbne9-1.fna&oh=00_AYDcDNzDnf2_JTdADCCvVoKs6VWNhg_xFiILtnPLeneicg&oe=664B44EA',
		clubLogo: 'https://eefc.syd1.cdn.digitaloceanspaces.com/2024-Logos/eefclogo.png',
		location: 'Emerald',
		mapLink: 'https://www.google.com/maps/place/Emerald+Eagles+Football+Club/@-23.5220121,148.1532463,16z/data=!3m1!4b1!4m6!3m5!1s0x6bcf4d089aa6f487:0x6ceadc2cbfff2320!8m2!3d-23.522017!4d148.1558212!16s%2Fg%2F11csb05lb2?entry=ttu',
	},
	{
		date: '2024-03-23',
		title: '⚽️ EEFC Juniors Gradings ⚽️',
		description: "Its time to see what you've got! \n Come down and participate in our gradings matches to help our coaches make sure the teams are fair and balanced for the whole season.",
		eventInfo: '',
		image: 'https://scontent.fbne9-1.fna.fbcdn.net/v/t39.30808-6/432764695_1146267070104542_5657867713861784061_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=cpdy-M9Q8EIQ7kNvgFtchEw&_nc_ht=scontent.fbne9-1.fna&oh=00_AYDssWMhDzGwJiDE0ZpZnPDPiKUH8-46CVhzfzmdxKAQ-A&oe=664B43E5',
		clubLogo: 'https://eefc.syd1.cdn.digitaloceanspaces.com/2024-Logos/eefclogo.png',
		location: 'Emerald',
		mapLink: 'https://www.google.com/maps/place/Emerald+Eagles+Football+Club/@-23.5220121,148.1532463,16z/data=!3m1!4b1!4m6!3m5!1s0x6bcf4d089aa6f487:0x6ceadc2cbfff2320!8m2!3d-23.522017!4d148.1558212!16s%2Fg%2F11csb05lb2?entry=ttu',
	},
	{
		date: '2024-04-20',
		title: '⚽️ EEFC Juniors 1st Round ⚽️',
		description: "First round of the season kicks off today! \n Don't forget your boots, shin parseDeferredReadableStream, bucket hats and wate rbottles!.",
		eventInfo: '',
		image: 'https://scontent.fbne9-2.fna.fbcdn.net/v/t39.30808-6/438197162_1165613624836553_4472878705879451442_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=-A6YHRVIJ1UQ7kNvgHJsoga&_nc_ht=scontent.fbne9-2.fna&oh=00_AYA3Xvt-xFiop6kZaC25ggYHqBtoA_ATp_GhuaCyZKqfZw&oe=664B5B89',
		clubLogo: 'https://eefc.syd1.cdn.digitaloceanspaces.com/2024-Logos/eefclogo.png',
		location: 'Emerald',
		mapLink: 'https://www.google.com/maps/place/Emerald+Eagles+Football+Club/@-23.5220121,148.1532463,16z/data=!3m1!4b1!4m6!3m5!1s0x6bcf4d089aa6f487:0x6ceadc2cbfff2320!8m2!3d-23.522017!4d148.1558212!16s%2Fg%2F11csb05lb2?entry=ttu',
	},
	{
		date: '2024-05-11',
		title: '⚽️ EEFC Miniroos 1st Round (Season 1) ⚽️',
		description: 'Release the miniroos!!! \n Bring down your miniroos and help us kick off the season in style.',
		eventInfo: '',
		image: 'https://scontent.fbne9-2.fna.fbcdn.net/v/t39.30808-6/439734601_1168324194565496_1237587325096654240_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=_QYOdbmAC5QQ7kNvgE9BZh0&_nc_ht=scontent.fbne9-2.fna&oh=00_AYBLExH_ectJjDetSxpHGy-aJ4GqRp6WNLhu-3US-zvkRw&oe=664B6581',
		clubLogo: 'https://eefc.syd1.cdn.digitaloceanspaces.com/2024-Logos/eefclogo.png',
		location: 'Emerald',
		mapLink: 'https://www.google.com/maps/place/Emerald+Eagles+Football+Club/@-23.5220121,148.1532463,16z/data=!3m1!4b1!4m6!3m5!1s0x6bcf4d089aa6f487:0x6ceadc2cbfff2320!8m2!3d-23.522017!4d148.1558212!16s%2Fg%2F11csb05lb2?entry=ttu',
	},
	{
		date: '2024-06-02',
		title: '⚽️ Clermont Tigers Fun Day ⚽️',
		description: 'Join us as we head to Clermont for their Fun Day Carnival \n To nominate your players, head to our facebook page parents groups and keep an eye out for the carnival player nominations post.',
		eventInfo: '',
		image: 'https://scontent.fbne9-2.fna.fbcdn.net/v/t39.30808-6/442420529_901367161794065_16498248918379145_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=VazCSVFNZqYQ7kNvgHyep4g&_nc_ht=scontent.fbne9-2.fna&oh=00_AYCohEXyy478gQQ5DoAvOARidYeY0qpGaFHizCU33dYTyg&oe=664B5067',
		clubLogo: 'https://eefc.syd1.cdn.digitaloceanspaces.com/CQ-Club-Logos/clermonttigers.jpeg',
		location: 'Emerald',
		mapLink: 'https://www.google.com/maps/place/Football+Fields/@-22.8321006,147.6217744,17z/data=!4m10!1m2!2m1!1sclermont+soccer!3m6!1s0x6bceffda7665c8ab:0x8fe3bb5a270d5abb!8m2!3d-22.8319719!4d147.623927!15sCg9jbGVybW9udCBzb2NjZXKSAQtzcG9ydHNfY2x1YuABAA!16s%2Fg%2F11gxvv5zq4?entry=ttu',
	},
	{
		date: '2024-06-02',
		title: '⚽️ Clermont Tigers Fun Day ⚽️',
		description: 'Join us as we head to Clermont for their Fun Day Carnival \n To nominate your players, head to our facebook page parents groups and keep an eye out for the carnival player nominations post.',
		eventInfo: '',
		image: 'https://scontent.fbne9-2.fna.fbcdn.net/v/t39.30808-6/442420529_901367161794065_16498248918379145_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=VazCSVFNZqYQ7kNvgHyep4g&_nc_ht=scontent.fbne9-2.fna&oh=00_AYCohEXyy478gQQ5DoAvOARidYeY0qpGaFHizCU33dYTyg&oe=664B5067',
		clubLogo: 'https://eefc.syd1.cdn.digitaloceanspaces.com/CQ-Club-Logos/clermonttigers.jpeg',
		location: 'Emerald',
		mapLink: 'https://www.google.com/maps/place/Football+Fields/@-22.8321006,147.6217744,17z/data=!4m10!1m2!2m1!1sclermont+soccer!3m6!1s0x6bceffda7665c8ab:0x8fe3bb5a270d5abb!8m2!3d-22.8319719!4d147.623927!15sCg9jbGVybW9udCBzb2NjZXKSAQtzcG9ydHNfY2x1YuABAA!16s%2Fg%2F11gxvv5zq4?entry=ttu',
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
		title: 'Training Shirt',
		description: 'Official EEFC Training Shirt',
		image: 'https://eefc.syd1.cdn.digitaloceanspaces.com/Merch/Training-Shirt.PNG',
		price: '$40',
		badge: 'POPULAR',
		badgeColour: 'secondary',
	},
	{
		title: 'Backpack',
		description: 'Backpack',
		image: 'https://eefc.syd1.cdn.digitaloceanspaces.com/Merch/Backpack.PNG',
		price: '$25',
		badge: 'LOW STOCK',
		badgeColour: 'destructive',
	},
	{
		title: 'Bucket Hat',
		description: 'EEFC Bucket Hat',
		image: 'https://eefc.syd1.cdn.digitaloceanspaces.com/Merch/Bucket-Hat.PNG',
		price: '$12',
		badge: 'LIMITED EDITION',
		badgeColour: 'accent',
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

export const fairPlayInfoData: SectionCardInfo = {
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

export const seasonInfoData: SectionCardInfo = {
	title: 'Season Information',
	description:
		'Our Football Fields are located on Dundas St in Emerald and all games unless otherwise stated will be played here. \n\n Games times (season draw) and competiton ladders can accessed via the Squadi app. \n\n Seniors season kicks off in the first term of the school year and finishes in the last term of the school year. \n\n Juniors and Miniroos season kicks off in the second term of the school year and finishes in the 3rd term of the school year.',
	image: 'https://eefc.syd1.cdn.digitaloceanspaces.com/EEFCHeader.png',
	link: '',
	info: [
		'Club carnivals – Emerald Fun Day & Barraclough Shield (Juniors only)',
		'Opportunity to participate in local carnivals around CQ: Rockhampton, Gladstone, Clermont, Dysart, Moranbah, Blackwater',
		'Opportunity to participate in EuroStar Football training clinics',
		'End of Year Presentation',
	],
};

export const playerInfoData: SectionCardInfo = {
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

export const coachInfoData: SectionCardInfo = {
	title: '2024 Coaches Information',
	description:
		'All our coaches are volunteers with current blue cards and are graciously volunteering their time so please be respectful and understanding (they do not have premier league level coaching skills). They are all parents and are doing their best to make sure our kids get the most out of their time at the soccer club. \n\n If you want to find out more about volunteering as a coach, click the link below and send us a message on facebook or send an email to Noah our coaching coordinator at coaching@emeraldeagles.com.au',
	image: 'https://eefc.syd1.cdn.digitaloceanspaces.com/Coaches-Info.jpeg',
	link: 'https://www.m.me/emeraldeagles',
	info: [
		'1 hour weekly training session',
		'1 hour weekly match reffing',
		'Free EuroStar Football training clinics',
		'Coaches pack provided (Whistle, Polo Shirt, Clipboard & pen, Training drills and Manuals, sunscreen and a backpack)',
		'1 x discounted registration fee for their child (Juniors only)',
		'2 x tickets to our end of year function at the Mayfair Hotel',
		'End of season gift',
	],
};

export const volunteerInfoData: SectionCardInfo = {
	title: '2024 Volunteer Information',
	description:
		'Like any other sporting club, it is the dedicated volunteers that ensure soccer in Emerald continues to grow and thrive for generations to come. \n\n We are currently seeking help in the following areas: \n - Canteen (food preparation, sales, clean-up) \n - Carnivals/Fun Days (Set-up/Pack-up, Canteen, BBQ, Match Officials) \n - Working Bees \n - AGM Committee members \n\nIf you would like to get involved, please don’t hesitate to click the link below and send us a message on facebook or send us an email at admin@emeraldeagles.com.au',
	image: 'https://eefc.syd1.cdn.digitaloceanspaces.com/Volunteer-Info.jpeg',
	link: 'https://www.m.me/emeraldeagles',
	info: [
		'Help steer the club towards a bigger and better future',
		'Give back to the community',
		'Volunteer Polo shirt',
	],
};

export const committeeInfoData: SectionCardInfo = {
	title: '2024 Committee Information',
	description:
		'Like any other sporting club, it is the dedicated committee working behind the scenes that ensures soccer in Emerald continues to grow and thrive for generations to come. \n\n If you would like to get involved with the committee, please don’t hesitate to click the link below and send us a message on facebook or send us an email at admin@emeraldeagles.com.au',
	image: '',
	link: 'https://www.m.me/emeraldeagles',
	info: [
		'Help steer the club towards a bigger and better future',
		'Give back to the community',
		'Volunteer Polo shirt',
	],
};

export const historyInfoData: SectionCardInfo = {
	title: 'Emerald Eagles Football Club History',
	description:
		'The Emerald Eagles formed on 28 February 1977 and was formally known as the Emerald Junior Soccer Association but we’ve always called Morton Park home. The club has a rich history of success and community involvement and has been a breeding ground for many talented footballers over the years. \n\n In 2010/11, the Emerald Junior Soccer Association merged with the Senior side of the club, forming the Emerald Eagles Football Club. \n\n The Emerald Eagles Football Club has grown to over 330 players across our junior and senior bases with players coming from Emerald and the surrounding areas. \n\n If you would like to find out more about the history of the club, please don’t hesitate to click the link below and send us a message on facebook or send us an email at admin@emeraldeagle.com.au',
	image: 'https://eefc.syd1.cdn.digitaloceanspaces.com/History-Info.jpeg',
	link: 'https://www.m.me/emeraldeagles',
	info: [
		'Fun fact 1',
		'Fun fact 2',
		'Fun fact 3',
		'Our club has suffered not one but 2 seperate cases of embezzlement',
	],
};

export const sponsorsInfoData: SectionCardInfo = {
	title: 'Community Sponsors',
	description:
		'The Emerald Eagles Football Club would like to thank all our sponsors for their continued support. Without their support, we would not be able to provide the facilities and opportunities that we do for our players. \n\n If you would like to find out more about our sponsors, please don’t hesitate to click the link below and send us a message on facebook or send us an email at sponsorships@emeraldeagles.com.au',
	image: 'https://eefc.syd1.cdn.digitaloceanspaces.com/Sponsors_Info.jpeg',
	link: 'https://www.m.me/emeraldeagles',
	info: ['Fun fact 1', 'Fun fact 2', 'Fun fact 3'],
};

export const lifeMembersInfoData: SectionCardInfo = {
	title: 'Emerald Eagles Football Club Life Members',
	description:
		'Over the years, the Emerald Eagles Football Club has had many dedicated members who have gone above and beyond for the club. These members have been awarded Life Membership for their dedication and service to the club',
	image: 'https://eefc.syd1.cdn.digitaloceanspaces.com/Life-Members-Info.jpeg',
	link: 'https://www.m.me/emeraldeagles',
	info: [
		'Fun fact 1',
		'Fun fact 2',
		'Fun fact 3',
		'Our club has suffered not one but 2 seperate cases of embezzlement',
	],
};

export const clubInfoData: ClubInfo[] = [
	{
		title: 'History',
		description: 'Information about the club',
		image: 'https://eefc.syd1.cdn.digitaloceanspaces.com/History-Info.jpeg',
		link: '/club/history',
	},
	{
		title: 'Committee',
		description: 'Meet the 2024 Committee',
		image: 'https://eefc.syd1.cdn.digitaloceanspaces.com/Committee-Info.jpeg',
		link: '/club/committee',
	},
	{
		title: 'Life Members',
		description: 'The honour board',
		image: 'https://eefc.syd1.cdn.digitaloceanspaces.com/Life-Members-Info.jpeg',
		link: '/club/life-members',
	},
	{
		title: 'Sponsors',
		description: 'Meet the 2024 Sponosors',
		image: 'https://eefc.syd1.cdn.digitaloceanspaces.com/Sponsors-Jerseys.jpeg',
		link: '/club/sponsors',
	},
	{
		title: 'Coaches',
		description: 'Get to know our coaches',
		image: 'https://eefc.syd1.cdn.digitaloceanspaces.com/Coaches-Info.jpeg',
		link: '/club/coaches',
	},
	{
		title: 'Volunteers',
		description: 'Celebrate our community with us!',
		image: 'https://eefc.syd1.cdn.digitaloceanspaces.com/Volunteer_Info1.jpeg',
		link: '/club/volunteers',
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
		title: 'Longreach Soccer',
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
