/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // Example redirect (uncomment and modify when needed)
      // {
      //   source: '/old-service-page',
      //   destination: '/services/web-development',
      //   permanent: true, // 301 redirect
      // },
    ];
  },
};

export default nextConfig;
