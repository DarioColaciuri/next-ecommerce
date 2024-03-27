"use client"
import { usePathname } from 'next/navigation'
import Link from 'next/link'

const links = [ 
    {label: "All", href: "/products/all"},
    {label: "Shoes", href: "/products/shoes"},
    {label: "Tshirts", href: "/products/tshirts"},
    {label: "Hats", href: "/products/hats"},
]

const CategoriesMenu = () => {
    const pathname = usePathname()

    return (
        <aside className='flex flex-col gap-3 text-center'>
            {links.map(link => (
                <Link
                key={link.label}
                href={link.href}
                className={`${pathname === link.href ? 'bg-slate-800 rounded-2xl border-2 border-gray-900' : ''} text-base text-slate-100 p-3`}
                >
                    {link.label}
                </Link>
            ))}
        </aside>
    )
}

export default CategoriesMenu