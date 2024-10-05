import type { LoaderFunction } from '@remix-run/node';
import { fetchFacebookPosts } from '~/utils/facebook';
import { type FacebookPost, getCachedData, setCachedData } from '~/cache.server'; // Cache functions

export const loader: LoaderFunction = async ({ request }) => {
	const baseUrl = new URL(request.url).origin;
	const FBAccessToken = process.env.FACEBOOK_ACCESS_TOKEN;
	const FBPageId = process.env.FACEBOOK_PAGE_ID;

	// Check if posts are cached
	let cachedPosts: FacebookPost[] | null = getCachedData('cachedPosts');

	if (!cachedPosts) {
		// Fetch posts if cache is empty
		try {
			cachedPosts = await fetchFacebookPosts(FBPageId, FBAccessToken);
		} catch (error) {
			console.error('Failed to fetch posts:', error);
			return new Response('Error fetching posts', { status: 500 });
		}

		// Ensure cachedPosts is not null before caching and filtering
		if (cachedPosts && cachedPosts.length > 0) {
			setCachedData('cachedPosts', cachedPosts);
		} else {
			// If fetch fails or returns empty, set cachedPosts to an empty array
			cachedPosts = [];
		}
	}

	// Now cachedPosts is guaranteed to be a valid array
	const newsPosts = cachedPosts.filter(post => post.message_tags?.some(tag => tag.name.toLowerCase() === '#news'));

	const eventPosts = cachedPosts.filter(post => post.message_tags?.some(tag => tag.name.toLowerCase() === '#events'));

	const carnivalPosts = cachedPosts.filter(post =>
		post.message_tags?.some(tag => tag.name.toLowerCase() === '#carnivals'),
	);

	// Generate the sitemap
	const sitemap = generateSitemap({ baseUrl, newsPosts, eventPosts, carnivalPosts });

	// Return the sitemap as XML response
	return new Response(sitemap, {
		headers: {
			'Content-Type': 'application/xml',
			'Cache-Control': `max-age=${60 * 60 * 24}`, // Cache for 24 hours
		},
	});
};

type GenerateSitemapProps = {
	baseUrl: string;
	newsPosts: FacebookPost[];
	eventPosts: FacebookPost[];
	carnivalPosts: FacebookPost[];
};

// Function to generate the sitemap
function generateSitemap({ baseUrl, newsPosts, eventPosts, carnivalPosts }: GenerateSitemapProps) {
	// Static URLs
	const staticUrls = [
		{ url: `${baseUrl}/`, changeFreq: 'daily', lastMod: new Date().toISOString() },
		{ url: `${baseUrl}/play`, changeFreq: 'monthly', lastMod: new Date().toISOString() },
		{ url: `${baseUrl}/links`, changeFreq: 'monthly', lastMod: new Date().toISOString() },
		{ url: `${baseUrl}/club`, changeFreq: 'monthly', lastMod: new Date().toISOString() },
		{ url: `${baseUrl}/club/coaches`, changeFreq: 'monthly', lastMod: new Date().toISOString() },
		{ url: `${baseUrl}/club/committee`, changeFreq: 'monthly', lastMod: new Date().toISOString() },
		{ url: `${baseUrl}/club/history`, changeFreq: 'monthly', lastMod: new Date().toISOString() },
		{ url: `${baseUrl}/club/life-members`, changeFreq: 'monthly', lastMod: new Date().toISOString() },
		{ url: `${baseUrl}/club/sponsors`, changeFreq: 'monthly', lastMod: new Date().toISOString() },
		{ url: `${baseUrl}/club/volunteers`, changeFreq: 'monthly', lastMod: new Date().toISOString() },
		{ url: `${baseUrl}/news`, changeFreq: 'weekly', lastMod: new Date().toISOString() },
		{ url: `${baseUrl}/events`, changeFreq: 'weekly', lastMod: new Date().toISOString() },
	];

	// News URLs
	const newsUrls = newsPosts.map(post => ({
		url: `${baseUrl}/news/${post.id}`,
		lastMod: new Date().toISOString(),
		changeFreq: 'weekly',
	}));

	// Event URLs
	const eventUrls = eventPosts.map(post => ({
		url: `${baseUrl}/events/${post.id}`,
		lastMod: new Date().toISOString(),
		changeFreq: 'weekly',
	}));

	// Carnival URLs
	const carnivalUrls = carnivalPosts.map(post => ({
		url: `${baseUrl}/events/carnivals/${post.id}`,
		lastMod: new Date().toISOString(),
		changeFreq: 'weekly',
	}));

	// Combine all URLs into one array
	const urls = [...staticUrls, ...newsUrls, ...eventUrls, ...carnivalUrls];

	// Return the XML sitemap
	return `
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${urls.map(renderUrlTag).join('')}
    </urlset>
  `.trim();
}

type RenderUrlTagProps = {
	url: string;
	lastMod?: string;
	changeFreq?: string;
};

// Function to render each URL in XML format
function renderUrlTag({ url, lastMod, changeFreq }: RenderUrlTagProps) {
	return `
    <url>
      <loc>${url}</loc>
      <lastmod>${lastMod || new Date().toISOString()}</lastmod>
      <changefreq>${changeFreq || 'monthly'}</changefreq>
    </url>
  `.trim();
}
