/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
		dirs: ['.'],
		// Warning: This allows production builds to successfully complete even if
		// your project has ESLint errors.
		ignoreDuringBuilds: true,
	},
  reactStrictMode: true,
  node: {
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
  },
}

module.exports = nextConfig
