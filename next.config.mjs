/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  allowedDevOrigins: [
    "192.168.68.66:3001",
    "192.168.68.85:3001",
    "192.168.68.84:3001",
    "localhost:3001",
  ],
};

export default nextConfig;
