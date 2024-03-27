import React from 'react'
import Button from '@/app/components/ui/Button'

const Register = () => {
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="container">
                <form className="flex flex-col items-center">
                    <label className="mb-2 text-white">Name</label>
                    <input type="text" className="mb-4 px-2 py-1 border rounded" />
                    <label className="mb-2 text-white">Email</label>
                    <input type="email" className="mb-4 px-2 py-1 border rounded" />
                    <label className="mb-2 text-white">Password</label>
                    <input type="password" className="mb-4 px-2 py-1 border rounded" />
                    <Button className="mb-5">Register</Button>
                </form>
            </div>
        </div>
    )
}

export default Register