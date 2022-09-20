// /** @type {import('next').NextConfig} */

// const withPWA = require("next-pwa")({
//   dest: "public",
//   register: true,
//   skipWaiting: true,
// });

// module.exports = withPWA({
//   reactStrictMode: true,
//   swcMinify: true,
//   images: {
//     domains: ["rb.gy", "image.tmdb.org"],
//   },
// });

/** @type {import('next').NextConfig} */

const NextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["rb.gy", "image.tmdb.org"],
  },
};

module.exports = NextConfig;
