import type { LinksFunction } from '@remix-run/node';
import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration, json, useLoaderData } from '@remix-run/react';

import styles from './tailwind.css';
import globalStyles from './styles/globals.css';
import Footer from './components/Footer';
import Header from './components/Header';
import { getClubSites, getSponsors } from './client/club';
import { getEnv } from './env.server';

export const links: LinksFunction = () => [
	{ rel: 'stylesheet', href: styles },
	{ rel: 'stylesheet', href: globalStyles },
];

export const loader = async () => {
	const sponsors = await getSponsors();
	console.log('sponsors loader => ', sponsors);
	const clubSites = await getClubSites();

	return json({ sponsors, clubSites, ENV: getEnv() });
};

export default function App() {
	const { sponsors, clubSites, ENV } = useLoaderData<typeof loader>();
	console.log('sponsors => ', sponsors);
	console.log('clubSites => ', clubSites);
	console.log('ENV variables => ', ENV);

	return (
		<html lang="en">
			<head>
				<Meta />
				<Links />
			</head>
			<body className="bg-gray-100">
				<Header />
				<div className="bg-gray-100">
					<div className="container mx-auto px-4">
						<Outlet />
					</div>
				</div>
				<ScrollRestoration />
				<script dangerouslySetInnerHTML={{ __html: `window.ENV = ${JSON.stringify(ENV)}` }} />
				<Scripts />
				<LiveReload />
				<Footer sponsors={sponsors} clubSites={clubSites} />
			</body>
		</html>
	);
}
