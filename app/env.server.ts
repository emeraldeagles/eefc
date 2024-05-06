export function getEnv() {
  return {
    MODE: process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : 'https://remix.run',
    // FACEBOOK_APP_ID: process.env.FACEBOOK_APP_ID,
    // FACEBOOK_PAGE_ID: process.env.FACEBOOK_PAGE_ID,
    // FACEBOOK_ACCESS_TOKEN: process.env.FACEBOOK_ACCESS_TOKEN,
  };
} 

type ENV = ReturnType<typeof getEnv>;

declare global {
    const ENV : ENV;
    interface Window {
        ENV : ENV;
    }
}