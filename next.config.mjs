/** @type {import("next").NextConfig} */
const nextConfig = {
  productionBrowserSourceMaps: true,
  images: {
    remotePatterns: [
      {
        hostname: "res.cloudinary.com",
      },
    ],
  },
};

export default nextConfig;
