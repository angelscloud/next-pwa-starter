import { Inter } from 'next/font/google';

export const metadata = {
    title: 'Next.js PWA Starter',
    description: 'Next.js PWA starter template with push notifications and offline pages.',
};

type TRootLayoutProps = {
    children: React.ReactNode;
};

const inter = Inter({ subsets: ['vietnamese'] });

export default function RootLayout({ children }: TRootLayoutProps) {
    return (
        <html lang="en">
            <head>
                <link rel="manifest" href="/manifest.json" />
                <link rel="icon" href="/icons/logo-192x192.png" />
                <meta name="theme-color" content="#000000" />
            </head>

            <body className={inter.className}>{children}</body>
        </html>
    );
}
