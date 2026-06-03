import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Move it to the root level of the object
  allowedDevOrigins: ["192.168.2.173", "localhost:3000"],
  
  // Keep Turbopack happy and bypass webpack warnings
  turbopack: {},
};

export default nextConfig;