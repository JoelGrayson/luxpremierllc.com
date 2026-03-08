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
    openGraph: {
        type: 'website',
        url: SITE_URL,
        title: 'Lux Premier LLC',
        description: DESCRIPTION        
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Lux Premier LLC',
        description: DESCRIPTION
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
                <script async src="https://plausible.io/js/pa-XuW0ShEfDdae4QV8Kmnkj.js" />
                <script
                    dangerouslySetInnerHTML={{ __html: `window.plausible=window.plausible||function(){(plausible.q=plausible.q||[]).push(arguments)},plausible.init=plausible.init||function(i){plausible.o=i||{}};plausible.init()` }}
                />
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
