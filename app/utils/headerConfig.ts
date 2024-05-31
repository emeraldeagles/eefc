export type VideoSrcConfig = { '4k': string; '1080p': string; '720p': string };

type QualityKey = keyof VideoSrcConfig; // Define a type for the keys of VideoSrcConfig

type RouteConfig = {
	type: 'video' | 'image';
	src: string | VideoSrcConfig;
	aspectRatio: string;
	fallback?: string; // Make fallback optional
};

const routeConfig: { [key: string]: RouteConfig } = {
	'/': {
		type: 'video',
		src: {
			'4k': 'https://eefc.syd1.cdn.digitaloceanspaces.com/Website/Website-Banners/EEFC-Home-4k.mp4',
			'1080p': 'https://eefc.syd1.cdn.digitaloceanspaces.com/Website/Website-Banners/EEFC-Home-1080p.mp4',
			'720p': 'https://eefc.syd1.cdn.digitaloceanspaces.com/Website/Website-Banners/EEFC-Home-720p.mp4',
		},
		aspectRatio: '3840/2176',
		fallback: 'https://eefc.syd1.cdn.digitaloceanspaces.com/Website/Website-Banners/EEFC-Home.png',
	},
	'/events': {
		type: 'image',
		src: 'https://eefc.syd1.cdn.digitaloceanspaces.com/Website/Website-Banners/EEFC-Events.png',
		aspectRatio: '1400/425',
	},
	'/club': {
		type: 'image',
		src: 'https://eefc.syd1.cdn.digitaloceanspaces.com/Website/Website-Banners/EEFC-Club.png',
		aspectRatio: '1400/425',
	},
	'/play': {
		type: 'image',
		src: 'https://eefc.syd1.cdn.digitaloceanspaces.com/Website/Website-Banners/EEFC-Play.png',
		aspectRatio: '1400/425',
	},
};

export const getRoute = (pathname: string): string => {
	const lowerPathname = pathname.toLowerCase();

	if (lowerPathname === '/') return '/';
	if (lowerPathname.includes('/news')) return '/club';
	if (lowerPathname.includes('/club')) return '/club';
	if (lowerPathname.includes('/events')) return '/events';
	if (lowerPathname.includes('/carnivals')) return '/events';
	if (lowerPathname.includes('/play')) return '/play';
	return '/'; // Default route if no match is found
};

export const getNetworkAwareVideoSource = (srcConfig: VideoSrcConfig): string => {
	const connection =
		(navigator as any).connection || (navigator as any).mozConnection || (navigator as any).webkitConnection;
	let qualityKey: QualityKey = '4k'; // Default to highest quality

	if (connection) {
		switch (connection.effectiveType) {
			case 'slow-2g':
			case '2g':
			case '3g':
				qualityKey = '720p';
				break;
			case '4g':
				qualityKey = '1080p';
				break;
			default:
				qualityKey = '4k';
				break;
		}
	} else {
		// Enhanced fallback logic if connection is undefined
		const userAgent = navigator.userAgent.toLowerCase();
		if (
			/mobile|android|iphone|ipad|ipod|opera mini|blackberry|palm|bada|windows phone|iemobile|mobile.+firefox|meego/.test(
				userAgent,
			)
		) {
			qualityKey = '720p'; // Assume slower connection on mobile devices
		} else {
			qualityKey = '1080p'; // Assume a decent connection on desktop devices
		}
	}

	return srcConfig[qualityKey];
};

export const getHeaderConfig = (pathname: string): RouteConfig | null => {
	const route = getRoute(pathname);
	return routeConfig[route] || null;
};
