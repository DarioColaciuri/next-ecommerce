/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'i.pinimg.com',
            },
            {
                protocol: 'https',
                hostname: 'e00-marca.uecdn.es',
            },
            {
                protocol: 'https',
                hostname: 'firebasestorage.googleapis.com',
            },
            {
                protocol: 'https',
                hostname: 'media.revistagq.com',
            },
            {
                protocol: 'https',
                hostname: 'qph.cf2.quoracdn.net',
            }
        ],
    },
};

export default nextConfig;
