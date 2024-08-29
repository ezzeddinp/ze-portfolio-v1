/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        formats: ['image/avif', 'image/webp'],
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'avatars.githubusercontent.com',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'opengraph.githubassets.com',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'assets.aceternity.com',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'images.unsplash.com',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'images.dog.ceo',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'res.cloudinary.com',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'media.dev.to',
                pathname: '/**',
            },
        ],
    },
    // Optional: Add additional configurations
    reactStrictMode: true,
    swcMinify: true,
}

module.exports = nextConfig;
