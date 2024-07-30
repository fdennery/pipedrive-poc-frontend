/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [],
  },async headers() {
    return [
      {
        // Appliquer ces en-têtes à toutes les routes
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: "frame-ancestors *", // Remplacez '*' par les domaines spécifiques si nécessaire
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
