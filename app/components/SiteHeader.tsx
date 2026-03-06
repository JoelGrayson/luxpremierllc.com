'use client';

import Link from 'next/link';
import Header from '@jcomponents/header';
import Nav from '@jcomponents/nav';

export default function SiteHeader() {
    return (
        <Header color={{ from: '#3BBBEB', to: '#456EE1' }}>
            <div>
                <Link href='/'>
                    <div className='text-white text-2xl font-[AvenirMedium] grid place-items-center' style={{
                        height: 65,
                        width: 65,
                        borderRadius: '50%',
                        border: '1px solid white',
                    }}>
                        Lux
                    </div>
                </Link>
            </div>
            <div>
                <Nav>
                    <Nav.Item href='https://joelgrayson.com/contact?referrer=luxpremierllc.com'>Contact</Nav.Item>
                </Nav>
            </div>
        </Header>
    );
}
