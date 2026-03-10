import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "poscat.team",
        port: "",
        pathname: "/img/**"

      }
    ]
  }
};

export default nextConfig;
