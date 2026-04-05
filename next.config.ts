import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'blogger.googleusercontent.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  
  // Moved this OUTSIDE of experimental
  serverExternalPackages: [
    "@genkit-ai/firebase", 
    "@opentelemetry/exporter-jaeger",
    "@opentelemetry/sdk-node"
  ],

  experimental: {
    serverActions: {
      bodySizeLimit: '2mb',
    },
  },
};

export default nextConfig;