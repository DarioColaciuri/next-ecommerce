"use client"
import Link from 'next/link'
import React from 'react'
import "bootstrap-icons/font/bootstrap-icons.css";
import { useCartContext } from '../context/CartContext';

const CartWidget = () => {
    const { cartNumber } = useCartContext()
    return (
        <div className='flex justify-center items-center gap-1'>
            <Link href="/cart">
                <i className="bi bi-cart text-2xl"></i>
            </Link>
            <span className='text-white' id='numerito'>{cartNumber()}</span>
        </div>
    )
}

export default CartWidget