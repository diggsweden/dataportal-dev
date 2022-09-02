const nextTranslate = require('next-translate');
module.exports = nextTranslate({
  webpack: (config) => {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
      os: false,
      https: false,
      http: false,
      zlib: false,
      events: false,
      net: false,
      dgram: false,
      tls: false,
    };

    return config;
  },
  productionBrowserSourceMaps: true,
  images: {
    domains: [process.env.IMAGE_DOMAIN || 'localhost'],
  },
  env: {
    REVALIDATE_INTERVAL: process.env.REVALIDATE_INTERVAL,
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '0',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), battery=(), geolocation=(), microphone=()',
          },
          {
            key: 'Access-Control-Allow-Origin',
            value: 'https://dev.dataportal.se'
          },
          {
            key: 'Content-Security-Policy',
            value: "frame-ancestors 'none'",
          },
        ],
      },
    ];
  },
});
