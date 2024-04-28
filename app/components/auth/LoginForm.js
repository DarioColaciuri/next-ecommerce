"use client"
import { useState } from "react"
import Button from "../ui/Button"
import { useAuthContext } from "../context/AuthContext"
import Link from "next/link"

const LoginForm = () => {
    const { loginUser, googleLogin } = useAuthContext()
    const [values, setValues] = useState({
        email: '',
        password: ''
    })

    const handleChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
    }

    return (
        <div className="w-screen h-screen inset-0 z-10 flex justify-center items-center bg-blue-400 bg-opacity-25">
            <form onSubmit={handleSubmit} className="bg-white py-4 px-6 rounded-xl max-w-md w-full">
                <h2>Login</h2>
                <input
                    type="email"
                    value={values.email}
                    required
                    placeholder="Tu email"
                    className="p-2 rounded w-full border border-blue-100 block my-4"
                    name="email"
                    onChange={handleChange}
                />
                <input
                    type="password"
                    value={values.password}
                    required
                    placeholder="Tu password"
                    className="p-2 rounded w-full border border-blue-100 block my-4"
                    name="password"
                    onChange={handleChange}
                />
                <div className="flex flex-col justify-center items-center gap-5">
                    <div className="flex justify-center items-center gap-5">
                        <Button onClick={() => loginUser(values)} >Ingresar</Button>
                        <Button onClick={googleLogin} ><i className="bi bi-google"></i></Button>
                    </div>
                    <div className="flex justify-center items-center gap-5">
                        <h3>¿No tienes cuenta?</h3>
                        <Button><Link href="/user/register">Registrarme</Link></Button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default LoginForm