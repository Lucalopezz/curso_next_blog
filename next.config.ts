import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // this project needs this config because the images are in next server (public/uploads)
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "3000",
        pathname: "/uploads/**",
      },
    ],
    unoptimized: true,
  },
};
export default nextConfig;
