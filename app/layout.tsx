import type { Metadata } from 'next';
import SiteHeader from './components/SiteHeader';
import 'rsuite/dist/rsuite-no-reset.min.css';
import './globals.css';

const SITE_URL = 'https://luxpremierllc.com';
const DESCRIPTION = 'Lux Premier is a New York-based LLC established in 2019, behind projects like Edit Time, Lirong Art, Buseroo, Shirtocracy, ChineseIsFun, and ShanghaiDictionary.';

export const metadata: Metadata = {
    metadataBase: new URL(SITE_URL),
    title: 'Lux Premier LLC',
    description: DESCRIPTION,
    alternates: { canonical: '/' },
    icons: {
        apple: '/apple-touch-icon.png',
        icon: [
            { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
            { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
        ],
    },
    manifest: '/site.webmanifest',
    other: {
        'msapplication-TileColor': '#2b5797',
    },
    openGraph: {
        type: 'website',
        url: SITE_URL,
        title: 'Lux Premier LLC',
        description: DESCRIPTION,
        images: [{ url: '/og-image.png', width: 1200, height: 630 }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Lux Premier LLC',
        description: DESCRIPTION,
        images: ['/og-image.png'],
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='en'>
            <head>
                <meta charSet='UTF-8' />
                <link rel='mask-icon' href='/safari-pinned-tab.svg' color='#5bbad5' />
                <meta name='theme-color' content='#ffffff' />
            </head>
            <body>
                <SiteHeader />
                <main style={{
                    position: 'relative',
                    padding: 0, margin: 0, width: '100%',
                    height: 'calc(100vh - 100px)',
                }}>
                    <div className='j_container j_max-w'>
                        {children}
                    </div>
                </main>
            </body>
        </html>
    );
}
