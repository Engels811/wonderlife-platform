/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['cdn.discordapp.com'],
  },
  env: {
    NEXT_PUBLIC_DISCORD_CLIENT_ID: process.env.DISCORD_CLIENT_ID,
  },
};

module.exports = nextConfig;
