/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  remotePatterns: [
    {
      protocol: "https",
      hostname: "files.cinerama.uz",
      port: "",
      pathname: "/files.cinerama.uz/**",
    },
  ],
};

module.exports = nextConfig;
