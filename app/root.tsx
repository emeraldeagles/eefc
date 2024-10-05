import type { LinksFunction, HeadersFunction } from '@remix-run/node';
import type { MetaFunction } from '@remix-run/react';
import {
	Link,
	Links,
	LiveReload,
	Meta,
	Outlet,
	Scripts,
	ScrollRestoration,
	isRouteErrorResponse,
	json,
	redirect,
	useLoaderData,
	useLocation,
	useRouteError,
} from '@remix-run/react';

import styles from './tailwind.css';
import globalStyles from './styles/globals.css';
import fontStyles from './styles/fonts.css';
import Footer from './components/Footer';
import Header from './components/Header';
import { useEffect } from 'react';

import * as gtag from './utils/gtag.client';
// import crypto from 'crypto';
import { clubSitesData, sponsorsData } from './data/content';

// Helper function to generate a nonce
// function generateNonce() {
// 	return crypto.randomBytes(16).toString('base64');
// }

export const headers: HeadersFunction = ({ loaderHeaders }) => {
	// const nonce = loaderHeaders.get('nonce') || 'default-nonce'; // Fallback in case nonce is null

	return {
		'Content-Security-Policy': [
			// `default-src 'self';`, // Uncomment when ready to refine
			// `script-src 'self' 'nonce-${nonce}' https://maps.googleapis.com https://graph.facebook.com https://eefc.syd1.cdn.digitaloceanspaces.com;`,
			// `report-uri /csp-violation-report-endpoint;`,
			// `style-src 'self' 'unsafe-inline';`,
			// `img-src 'self' data: https://eefc.syd1.cdn.digitaloceanspaces.com https://scontent.*.fna.fbcdn.net https://graph.facebook.com;`,
			// `media-src 'self' data: https://eefc.syd1.cdn.digitaloceanspaces.com https://graph.facebook.com https://scontent.*.fna.fbcdn.net;`,
			// `font-src 'self' data:;`,
			// `frame-src 'self' https://registration.squadi.com;`,
			// `frame-ancestors 'none';`,
			// `connect-src 'self' https://graph.facebook.com;`,
		].join(' '),
		'X-Frame-Options': 'DENY',
		'X-Content-Type-Options': 'nosniff',
		'Strict-Transport-Security': 'max-age=31536000; includeSubDomains; preload',
		'X-XSS-Protection': '1; mode=block',
		'Cache-Control': 'public, max-age=31536000, immutable',
		'Permissions-Policy': 'fullscreen=(), geolocation=(), camera=()',
	};
};

export const links: LinksFunction = () => [
	{ rel: 'stylesheet', href: styles },
	{ rel: 'stylesheet', href: globalStyles },
	{ rel: 'stylesheet', href: fontStyles },
];

export const loader = async ({ request }: { request: Request }) => {
	const url = new URL(request.url);
	// const nonce = generateNonce(); // Generate nonce here

	// Redirect HTTP to HTTPS
	if (url.protocol === 'http:' && process.env.NODE_ENV === 'production') {
		url.protocol = 'https:';
		return redirect(url.toString());
	}

	// Redirect non-WWW to WWW
	if (!url.hostname.startsWith('www') && process.env.NODE_ENV === 'production') {
		url.hostname = `www.${url.hostname}`;
		return redirect(url.toString());
	}

	const sponsors = sponsorsData;
	const clubSites = clubSitesData;

	return json({
		sponsors,
		clubSites,
		gaTrackingId: process.env.GA_TRACKING_ID,
		// nonce,
		canonicalUrl: `${url.origin}${url.pathname}`,
	});
};

export const meta: MetaFunction<typeof loader> = ({ data }) => {
	const canonicalUrl = data?.canonicalUrl ? data.canonicalUrl : 'https://emeraldeagles.com.au/';
	return [
		{ title: 'Emerald Eagles Football Club' },
		{ name: 'description', content: 'Emerald Eagles FC Club Website' },
		{ property: 'og:type', content: 'website' },
		{ property: 'og:site_name', content: 'EEFC | Home' },
		{ charset: 'utf-8' },
		{ name: 'viewport', content: 'width=device-width,initial-scale=1' },
		{ property: 'og:title', content: 'EEFC | Home' },
		{ property: 'og:description', content: 'Emerald Eagles FC Club Website' },
		{ property: 'og:url', content: canonicalUrl },
		{ rel: 'canonical', href: canonicalUrl },
	];
};

export default function App() {
	// const { sponsors, clubSites, gaTrackingId, nonce } = useLoaderData<typeof loader>();
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
						{/* <script async src={`https://www.googletagmanager.com/gtag/js?id=${gaTrackingId}`} nonce={nonce} /> */}
						<script async src={`https://www.googletagmanager.com/gtag/js?id=${gaTrackingId}`} />
						<script
							async
							// nonce={nonce}
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
