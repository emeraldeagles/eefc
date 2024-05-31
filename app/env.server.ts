export function getEnv() {
	return {
		MODE: process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : 'https://remix.run',
	};
}

type ENV = ReturnType<typeof getEnv>;

declare global {
	const ENV: ENV;
	interface Window {
		ENV: ENV;
	}
}
