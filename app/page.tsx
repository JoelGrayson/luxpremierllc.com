import Image from 'next/image';
import { Subsidiary } from './components/Subsidiary';

const SITE_URL = 'https://luxpremierllc.com';
const DESCRIPTION = 'Lux Premier is a New York-based LLC established in 2019, behind projects like Edit Time, Lirong Art, Buseroo, Shirtocracy, ChineseIsFun, and ShanghaiDictionary.';

export default function Home() {
    return <>
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

        <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'Lux Premier LLC',
            url: SITE_URL,
            foundingDate: '2019',
            description: DESCRIPTION,
        }) }} />
    </>;
}

function Com() {
    return <small className='text-xs'>.com</small>
}
