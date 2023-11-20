const nextConfig = {
	experimental: {
		appDir: true,
	},
	reactStrictMode: false,
	images: {
		domains: [
			"images.dog.ceo",
			"randomuser.me",
			"plus.unsplash.com",
			"random.imagecdn.app",
		],
	},
};
module.exports = nextConfig;
