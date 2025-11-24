import type { NextConfig } from "next";

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co', // 允許假圖網站
      },
      // 之後如果你把圖片上傳到 Cloudflare Images 或其他地方，要在這裡加網域
    ],
  },
};

export default nextConfig;
