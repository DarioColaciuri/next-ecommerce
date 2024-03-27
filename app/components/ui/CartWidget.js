"use client"
import Link from 'next/link'
import React from 'react'
import "bootstrap-icons/font/bootstrap-icons.css";



const CartWidget = () => {
    return (
        <div className='flex justify-center items-center gap-1'>
        <Link href="/cart"> 
        <i className="bi bi-cart text-2xl"></i>
        </Link>
            <span className='text-white' id='numerito'>0</span>
        </div>
    )
}

export default CartWidget