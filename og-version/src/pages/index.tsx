import Page from '@/components/Page';
import Image from 'next/image';
import { Tooltip, Whisper } from 'rsuite';
import Link from 'next/link';
import Head from 'next/head';

const SITE_URL = 'https://luxpremierllc.com';
const DESCRIPTION = 'Lux Premier is a New York-based LLC established in 2019, behind projects like Edit Time, Lirong Art, Buseroo, Shirtocracy, ChineseIsFun, and ShanghaiDictionary.';

export default function Home() {
    return <Page padding>
        <Head>
            <title>Lux Premier LLC</title>
            <meta name='description' content={DESCRIPTION} />
            <link rel='canonical' href={SITE_URL} />

            {/* Open Graph */}
            <meta property='og:type' content='website' />
            <meta property='og:url' content={SITE_URL} />
            <meta property='og:title' content='Lux Premier LLC' />
            <meta property='og:description' content={DESCRIPTION} />
            <meta property='og:image' content={`${SITE_URL}/og-image.png`} />

            {/* Twitter Card */}
            <meta name='twitter:card' content='summary_large_image' />
            <meta name='twitter:title' content='Lux Premier LLC' />
            <meta name='twitter:description' content={DESCRIPTION} />
            <meta name='twitter:image' content={`${SITE_URL}/og-image.png`} />

            {/* Structured Data */}
            <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify({
                '@context': 'https://schema.org',
                '@type': 'Organization',
                name: 'Lux Premier LLC',
                url: SITE_URL,
                foundingDate: '2019',
                description: DESCRIPTION,
            }) }} />
        </Head>
        <h1 className='text-center mt-10'>Lux Premier LLC</h1>
        <p className='text-xl leading-relaxed mb-5'>Lux Premier is a limited liability company in New York State established in 2019. Here are its various projects:</p>
        <section className='grid grid-cols-1 sm:grid-cols-3 gap-3 place-items-center'>
            <Subsidiary color={'#ebedf0'} description={'App for changing file date metadata'} href='https://joelgrayson.com/software/edit-time'>
                <Image src='/images/edit-time.png' alt='Edit Time logo' height={60} width={60} />
                <h2 className='text-2xl text-black mt-3 relative'>Edit Time</h2>
            </Subsidiary>
            <Subsidiary color={'#d8ac7e'} description={'Vending machine that sold snacks in school hallway'} href='https://www.youtube.com/watch?v=bHHk2FL5Ujs'>
                <Image src='/images/venderoo.png' alt='Venderoo photo' height={60} width={60} />
                <h2 className='text-2xl text-black mt-3 relative'>Venderoo</h2>
            </Subsidiary>
            <Subsidiary color={'#b32636'} description={'Online painting gallery selling canvas prints for home decor'} href='https://lirongart.com'>
                <Image src='/images/lirong-art.gif' alt='Lirong Art Logo' height={35} width={28} />
                <h2 className='text-2xl text-white mt-3 relative'>Lirong Art<Com /></h2>
            </Subsidiary>
            <Subsidiary color={'#afd0f1'} description={'Find which bus to take'} href='https://buseroo.com'>
                <Image src='/images/buseroo.png' alt='Buseroo logo' height={60} width={60} />
                <h2 className='text-2xl text-black mt-3 relative'>Buseroo<Com /></h2>
            </Subsidiary>
            <Subsidiary color={'#eee'} description={'Online t-shirt shop'} href='https://shirtocracy.com'>
                <Image src='/images/shirtocracy.png' alt='Shirtocracy logo' height={70} width={70} />
                <h2 className='text-2xl mt-2 relative'>Shirtocracy<Com /></h2>
            </Subsidiary>
            <Subsidiary color={'#e8393e'} description={'App and site for learning Chinese'} href='https://chineseisfun.com'>
                <Image src='/images/chineseisfun.png' alt='Chinese is Fun logo' height={60} width={60} />
                <h2 className='text-xl text-white mt-4 relative text-center'>ChineseIsFun<Com /></h2>
            </Subsidiary>
            <Subsidiary color={'#f5efe6'} description={'The world\'s best Shanghainese dictionary, with English and Mandarin translations'} href='https://shanghaidictionary.com'>
                <Image src='/images/shanghaidictionary.com.png' alt='Shanghai Dictionary logo' height={60} width={60} />
                <h2 className='text-base text-black mt-3 relative text-center'>ShanghaiDictionary<Com /></h2>
            </Subsidiary>
        </section>
    </Page>;
}

export function Subsidiary({ description, href, color, children }: { description: string; href: string; color: string; children: any }) {
    return <Whisper followCursor speaker={<Tooltip>{description}</Tooltip>}>
        <Link href={href} target='_blank' aria-label={description}>
            <div className='shadow-md rounded-lg py-4 px-2 flex flex-col items-center justify-center h-[150px] w-[180px]' style={{
                backgroundColor: color
            }}>
                {children}
                <span className='sr-only'>{description}</span>
            </div>
        </Link>
    </Whisper>;
}

function Com() {
    return <small className='text-xs'>.com</small>
    // return <small style={{ fontSize: 10, position: 'absolute', bottom: -4, right: -22.5 }}>.com</small>
}
