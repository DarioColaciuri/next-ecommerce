"use client"
import React from 'react'
import Link from 'next/link'
import links from '@/app/utils/links'
import { usePathname } from 'next/navigation'

const Navbar = () => {

    const pathname = usePathname()

    return (
        <nav className='flex justify-between items-center'>
            <ul className='flex gap-5 text-white'>
                {
                    links.map(link => {
                        return <Link
                            key={link.label}
                            href={link.href}
                            className={`${pathname === link.href ? 'bg-slate-800 rounded-2xl border-gray-900 border-2' : ''} text-base text-slate-100 p-3`}
                        >
                            {link.label}
                        </Link>
                    })
                }
            </ul>
        </nav>
    )
}

export default Navbar