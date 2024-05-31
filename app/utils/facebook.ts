export async function fetchFacebookPosts(FBPageId: string | undefined, FBAccessToken: string | undefined) {
	const url = `https://graph.facebook.com/v19.0/${FBPageId}/posts?fields=attachments%2Cmessage_tags%2Ccreated_time%2Cmessage&limit=100&access_token=${FBAccessToken}`;
	const response = await fetch(url);
	if (!response.ok) {
		throw new Error('Facebook API error: ' + response.statusText);
	}
	const data = await response.json();
	return data.data;
}
