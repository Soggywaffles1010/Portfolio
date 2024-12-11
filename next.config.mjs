import { withNextVideo } from "next-video/process";

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: '', // No port needed for Cloudinary
        pathname: '/**', // This matches all paths for Cloudinary images
      },
    ],
  },
};

export default withNextVideo(nextConfig);
