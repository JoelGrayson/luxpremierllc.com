'use client';

import { Tooltip, Whisper } from 'rsuite';
import Link from 'next/link';
import type { ReactNode } from 'react';

export function Subsidiary({ description, href, color, children }: { description: string; href: string; color: string; children: ReactNode }) {
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
