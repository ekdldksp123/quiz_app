/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  reactStrictMode: true,
  assetPrefix: isProd ? 'https://ekdldksp123.github.io/quiz_app' : '',
  images: {
    loader: 'akamai',
    path: '',
    formats: ['image/avif', 'image/webp'],
    deviceSizes : [ 640 , 750 , 828 , 1080 , 1200 , 1920 , 2048 , 3840 ],
  },
}

module.exports = nextConfig;
