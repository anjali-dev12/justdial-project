/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "akam.cdn.jdmagicbox.com",
      },
      {
        protocol: "https",
        hostname: "content.jdmagicbox.com",
      },
      {
        protocol: "https",
        hostname: "content2.jdmagicbox.com", 
      },
      {
        protocol: "https",
        hostname: "images.jdmagicbox.com",
      },

       {
        protocol: "https",
        hostname: "tpc.googlesyndication.com",
      },
    ],
  },
};

export default nextConfig;