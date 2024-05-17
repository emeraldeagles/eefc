// export async function fetchFacebookPostsByHashtag(FBPageId: string | undefined, FBAccessToken: string | undefined, hashtag: string) {
//     const url = `https://graph.facebook.com/v19.0/${FBPageId}/posts?fields=attachments%2Cmessage_tags%2Cmessage&limit=100&access_token=${FBAccessToken}`;
//     const response = await fetch(url);
//     if (!response.ok) {
//         throw new Error('Facebook API error: ' + response.statusText);
//     }
//     const data = await response.json();
//     // filter through array of posts and check if message_tags contains an array and if it does then search through each item in the array and check if the name field contains the hashtag
//     const posts = data.data.filter((post: any) => {
//         if (post.message_tags) {
//             return post.message_tags.some((tag: any) => tag.name === hashtag);
//         }
//         return false;
//     }); 
//     return posts;
// }

export async function fetchFacebookPosts(FBPageId: string | undefined, FBAccessToken: string | undefined) {
    const url = `https://graph.facebook.com/v19.0/${FBPageId}/posts?fields=attachments%2Cmessage_tags%2Ccreated_time%2Cmessage&limit=100&access_token=${FBAccessToken}`;
    console.log('Fetching Facebook posts from URL:', url);
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error('Facebook API error: ' + response.statusText);
    }
    const data = await response.json();
    console.log('Fetched Facebook posts:', data.data);
    return data.data;
}

// export async function fetchFacebookPostsDirectlyByHashtag(FBPageId: string | undefined, FBAccessToken: string | undefined, hashtag: string) {
//     const url = `https://graph.facebook.com/v19.0/${FBPageId}/search?q=%23${encodeURIComponent(hashtag)}&type=post&fields=message,attachments&access_token=${FBAccessToken}`;
//     const response = await fetch(url);
//     if (!response.ok) {
//         throw new Error('Facebook API error: ' + response.statusText);
//     }
//     const data = await response.json();
//     return data.data;  // Assuming the posts are in the 'data' field
// }


// export async function fetchFacebookPostsByHashtag(FBPageId: string | undefined, FBAccessToken: string | undefined, hashtag: string) {
//     const url = `https://graph.facebook.com/v19.0/${FBPageId}/search?q=%23${encodeURIComponent(hashtag)}&type=post&access_token=${FBAccessToken}`;
//     const response = await fetch(url);
//     if (!response.ok) {
//         throw new Error('Facebook API error: ' + response.statusText);
//     }
//     const data = await response.json();
//     return data.data;  // assuming the posts are in the 'data' field
// }

// export async function fetchPostById(FBAccessToken: string, postId: string) {
//     const url = `https://graph.facebook.com/v19.0/${postId}?access_token=${FBAccessToken}`;
//     const response = await fetch(url);
//     if (!response.ok) {
//         throw new Error('Failed to fetch post: ' + response.statusText);
//     }
//     return await response.json();
// }