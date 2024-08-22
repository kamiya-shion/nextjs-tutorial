/** @type {import('next').NextConfig} */
const nextConfig = {
  logging: {
    fetches: {
      // キャッシュがヒットしたかターミナルで確認できる(cache hit)
      fullUrl: true,
    },
  },
};

export default nextConfig;
