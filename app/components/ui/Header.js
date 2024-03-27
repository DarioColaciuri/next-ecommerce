import React from 'react'
import Image from 'next/image'
import CartWidget from './CartWidget'
import Link from 'next/link'
import Navbar from './Navbar'
import "bootstrap-icons/font/bootstrap-icons.css";


const Header = () => {

    return (
        <header className='flex z-10 justify-around items-center p-3 border-b'>

            <Link href="/">
                <Image
                    src={"https://i.pinimg.com/originals/20/60/2d/20602d43cc993811e5a6bd1886af4f33.png"}
                    alt="logo"
                    width={100}
                    height={100}
                />
            </Link>

            <Navbar />
            
            <div className='flex justify-between items-center gap-5'>
                <CartWidget />
                <Link href="/user">
                <i className="bi bi-person-fill text-2xl"></i>
                </Link>

            </div>
        </header>
    )
}

export default Header