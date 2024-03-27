import React from 'react'
import Image from 'next/image'

const Hero = () => {
    return (
            <Image
                className="w-full h-full border-b"
                src= "https://i.pinimg.com/736x/c3/b1/e0/c3b1e01894bdf1c136b4bb0a9d4a618d.jpg"
                alt= "logo"
                width = {1024}
                height = {100}
            />
    )
}

export default Hero