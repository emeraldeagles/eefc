import NodeCache from 'node-cache';

// Define an interface for the structure of a Facebook post
export type FacebookPost = {
	id: string;
	message: string;
	message_tags?: Array<{ name: string }>;
	attachments?: {
		data: Array<{
			type: string;
			media?: {
				image: {
					src: string;
				};
			};
			subattachments?: {
				data: Array<{
					media: {
						image: {
							src: string;
						};
					};
				}>;
			};
			url?: string;
		}>;
	};
};

const myCache = new NodeCache({ stdTTL: 4 * 60 * 60 }); // Cache TTL of 4 hours

export function getCachedData(key: string): FacebookPost[] | null {
	return myCache.get(key) as FacebookPost[] | null;
}

export function setCachedData(key: string, data: FacebookPost[]): void {
	myCache.set(key, data, 4 * 60 * 60); // Optionally set TTL per key
}
