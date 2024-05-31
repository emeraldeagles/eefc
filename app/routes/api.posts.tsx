import type { LoaderFunction } from '@remix-run/node';
import { json } from '@remix-run/node';
import { fetchFacebookPosts } from '~/utils/facebook';
import type { FacebookPost } from '~/cache.server';
import { getCachedData, setCachedData } from '~/cache.server';

export const loader: LoaderFunction = async ({ request }) => {
	const url = new URL(request.url);
	const forceRefresh = url.searchParams.get('refresh') === 'true';
	const FBAccessToken = process.env.FACEBOOK_ACCESS_TOKEN;
	const FBPageId = process.env.FACEBOOK_PAGE_ID;

	let cachedPosts = getCachedData('cachedPosts');
	if (!cachedPosts || forceRefresh) {
		cachedPosts = (await fetchFacebookPosts(FBPageId, FBAccessToken)) as FacebookPost[];
		setCachedData('cachedPosts', cachedPosts);
	}

	return json({ cachedPosts });
};
