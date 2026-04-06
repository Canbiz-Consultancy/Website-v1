import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "cozy-wealth-e317ea2edd.strapiapp.com" },
      { protocol: "https", hostname: "powerful-power-1ed8c789c0.strapiapp.com" },
    ],
  },
};

export default nextConfig;
