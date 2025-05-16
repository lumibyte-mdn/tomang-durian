import { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "cdn.sanity.io"
            }
        ]
    },
    siteUrl: 'https://tomangdurian.com',
    generateRobotsTxt: true,
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);