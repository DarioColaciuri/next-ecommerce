import React from 'react'

const Button = ({ children, className = '', ...args }) => {
    return (
        <button className={`rounded-xl py-1 px-3 bg-gray-800 text-center text-white ${className}`} {...args}>
            {children}
        </button>
    )
}

export default Button