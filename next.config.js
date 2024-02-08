/** @type {import('next').NextConfig} */
module.exports = {
    images: {
      formats: ['image/avif', 'image/webp'],
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'junwei-portfolio.s3.ap-southeast-1.amazonaws.com',
          port: '',
          pathname: '/**',
        },
      ],
    },
    reactStrictMode: false,
  }
