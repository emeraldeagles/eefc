import type { LinksFunction } from '@remix-run/node';
import {
	Links,
	LiveReload,
	Meta,
	Outlet,
	Scripts,
	ScrollRestoration,
	json,
	useLoaderData,
	useLocation,
} from '@remix-run/react';

import styles from './tailwind.css';
import globalStyles from './styles/globals.css';
import fontStyles from './styles/fonts.css';
import Footer from './components/Footer';
import Header from './components/Header';
import { getClubSites, getSponsors } from './client/club';
import { useEffect } from 'react';

import * as gtag from './utils/gtag.client';

export const links: LinksFunction = () => [
	{ rel: 'stylesheet', href: styles },
	{ rel: 'stylesheet', href: globalStyles },
	{ rel: 'stylesheet', href: fontStyles },
];

export const loader = async () => {
	const sponsors = await getSponsors();
	const clubSites = await getClubSites();

	return json({ sponsors, clubSites, gaTrackingId: process.env.GA_TRACKING_ID });
};

export default function App() {
	const { sponsors, clubSites, gaTrackingId } = useLoaderData<typeof loader>();
	const location = useLocation();

	useEffect(() => {
		if (gaTrackingId?.length) {
			gtag.pageview(location.pathname, gaTrackingId);
		}
	}, [location, gaTrackingId]);

	return (
		<html lang="en">
			<head>
				<Meta />
				<Links />
			</head>
			<body className="responsive-padding mx-auto w-full max-w-7xl bg-background text-foreground">
				{/* Google Analytics */}
				{process.env.NODE_ENV === 'development' || !gaTrackingId ? null : (
					<>
						<script async src={`https://www.googletagmanager.com/gtag/js?id=${gaTrackingId}`} />
						<script
							async
							id="gtag-init"
							dangerouslySetInnerHTML={{
								__html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', '${gaTrackingId}', {
                  page_path: window.location.pathname,
                });
              `,
							}}
						/>
					</>
				)}

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
