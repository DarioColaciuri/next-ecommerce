"use client"
import React from 'react'
import Button from './Button'
// import { useState } from 'react'

const Counter = ({quantity, setQuantity}) => {
    // const [quantity, setQuantity] = useState(1)

    const increase = () => {
        if(quantity >= 10) return
        setQuantity(quantity + 1)
    }

    const decrease = () => {
        if(quantity <= 1) return
        setQuantity(quantity - 1)
    }

    return (
        <div className='flex justify-center items-center gap-5'>
            <Button className='hover:bg-gray-700 hover:border-gray-900 hover:border-2' onClick={decrease}>-</Button>
            <p className='text-3xl px-3'>{quantity}</p>
            <Button className='hover:bg-gray-700 hover:border-gray-900 hover:border-2' onClick={increase}>+</Button>
        </div>
    )
}

export default Counter