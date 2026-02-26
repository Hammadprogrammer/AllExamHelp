import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // Static Site Generation ke liye
  trailingSlash: true, // hireclassbuddy.com/about/ jese clean URLs ke liye
  images: {
    unoptimized: true, // Static images ko load karne ke liye zaroori hai
  },
};

export default nextConfig;