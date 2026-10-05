import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Old link keeps working: /october-27 -> /free-live-event
  async redirects() {
    return [
      { source: "/october-27", destination: "/free-live-event", permanent: true },
    ];
  },
};

export default nextConfig;
