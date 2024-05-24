import type { LinksFunction } from '@remix-run/node';
import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration, json, useLoaderData } from '@remix-run/react';

import styles from './tailwind.css';
import globalStyles from './styles/globals.css';
import fontStyles from './styles/fonts.css';
import Footer from './components/Footer';
import Header from './components/Header';
import { getClubSites, getSponsors } from './client/club';

export const links: LinksFunction = () => [
	{ rel: 'stylesheet', href: styles },
	{ rel: 'stylesheet', href: globalStyles },
	{ rel: 'stylesheet', href: fontStyles },
];

export const loader = async () => {
	const sponsors = await getSponsors();
	console.log('sponsors loader => ', sponsors);
	const clubSites = await getClubSites();

	return json({ sponsors, clubSites });
};

export default function App() {
	const { sponsors, clubSites } = useLoaderData<typeof loader>();
	console.log('sponsors => ', sponsors);
	console.log('clubSites => ', clubSites);

	return (
		<html lang="en">
			<head>
				<Meta />
				<Links />
			</head>
			{/* <body className="mx-auto w-full max-w-7xl bg-gray-100 px-12"> */}
			<body className="mx-auto w-full max-w-7xl bg-gray-100 px-4 sm:px-6 lg:px-0">
				<Header />
				<Outlet />
				<ScrollRestoration />
				<Scripts />
				<LiveReload />
				<Footer sponsors={sponsors} clubSites={clubSites} />
			</body>
		</html>
	);
}
