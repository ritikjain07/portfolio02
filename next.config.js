// module.exports = {
//   images: {
//     domains: ['media2.dev.to'], // Add any other domains as needed
//   },
// };


/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
