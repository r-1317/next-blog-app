/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "w1980.blob.core.windows.net",
      },
      { protocol: "https", hostname: "placehold.jp" },
    ],
  },
};

export default nextConfig;
