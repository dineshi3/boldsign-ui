/** @type {import('next').NextConfig} */

const port = process.env.PORT || 3000;

const HOST_MAP = {
  prod: '',
  dev: `localhost:${port}`,
  qe: '',
};

const nextConfig = {
  reactStrictMode: true,
  env: {
    HOST: HOST_MAP[process.env.NODE_ENV],
    BOLDSIGN_API_HOST: 'https://api.boldsign.com',
    BOLDSIGN_API_KEY: 'YTcyZWYwM2ItMzFlNS00ZjY5LTllMzgtYzlhNzRhZjI3ZGEy',
  },
};

module.exports = nextConfig;
