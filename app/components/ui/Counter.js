"use client"
import React from 'react'
import Button from './Button'
import { useState } from 'react'

const Counter = () => {
    const [counter, setCounter] = useState(1)

    const increase = () => {
        if(counter >= 10) return
        setCounter(counter + 1)
    }

    const decrease = () => {
        if(counter <= 1) return
        setCounter(counter - 1)
    }

    return (
        <div className='flex justify-center items-center gap-5'>
            <Button className='hover:bg-gray-700 hover:border-gray-900 hover:border-2' onClick={decrease}>-</Button>
            <p className='text-3xl px-3'>{counter}</p>
            <Button className='hover:bg-gray-700 hover:border-gray-900 hover:border-2' onClick={increase}>+</Button>
        </div>
    )
}

export default Counter