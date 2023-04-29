import React from 'react'
import { Logo } from "@/components/svg/logo";
import Link from 'next/link';
import { useRouter } from 'next/router';

export const Header: React.FC<{}> = () => {

    const { pathname } = useRouter()

    return (
        <div className='flex items-center justify-between h-16 px-4'>
            <Link href='/'>
                <Logo width={40} height={40} />
            </Link>
            <div className='flex items-center'>
                <Link className={`mx-2 hover:text-red-400 ${pathname === '/favorites' ? 'text-red-400' : ''}`} href='/favorites'>Favorites</Link>
                <Link className={`mx-2 hover:text-red-400 ${pathname === '/character/all' ? 'text-red-400' : ''}`} href='/character/all'>All characters</Link>
                <Link className={`mx-2 hover:text-red-400 ${pathname === '/' ? 'text-red-400' : ''}`} href='/'>Home</Link>
            </div>
        </div>
    )
}