import Page from '@/components/Page';
import Image from 'next/image';
import { Tooltip, Whisper } from 'rsuite';
import Link from 'next/link';
import Head from 'next/head';

export default function Home() {
    return <Page padding>
        <Head>
            <title>Lux Premier LLC</title>
        </Head>
        <h1 className='text-center mt-10'>Lux Premier LLC</h1>
        <p className='text-xl leading-relaxed mb-5'>Lux Premier is a company in New York State that started operations in 2019. Here are its various projects:</p>
        <section className='grid grid-cols-3 gap-3'>
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
                <Image src='/images/shirtocracy.png' alt='Shirtocracy logo' height={75} width={75} />
                <h2 className='text-2xl mt-3 relative'>Shirtocracy<Com /></h2>
            </Subsidiary>
        </section>
    </Page>;
}

export function Subsidiary({ description, href, color, children }: { description: string; href: string; color: string; children: any }) {
    return <Whisper followCursor speaker={<Tooltip>{description}</Tooltip>}>
        <Link href={href} target='_blank'>
            <div className='shadow-md rounded-lg p-4 flex flex-col items-center justify-center h-[150px] w-[180px]' style={{
                backgroundColor: color
            }}>
                {children}
            </div>
        </Link>
    </Whisper>;
}

function Com() {
    return <small style={{ fontSize: 10, position: 'absolute', bottom: -4, right: -22.5 }}>.com</small>
}
