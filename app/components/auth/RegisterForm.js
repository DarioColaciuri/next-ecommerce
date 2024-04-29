"use client"
import { useState } from "react"
import Button from "../ui/Button"
import { useAuthContext } from "../context/AuthContext"
import Link from "next/link"

const RegisterForm = () => {
    const { registerUser, googleLogin } = useAuthContext()
    const [values, setValues] = useState({
        email: '',
        password: ''
    })
    const [error, setError] = useState(null);

    const handleChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (values.password.length < 6) {
            setError("La contraseña debe tener al menos 6 caracteres");
            return;
        }
        
        try {
            await registerUser(values);
        } catch (error) {
            setError(error.message);
        }
    }

    const handleGoogleLogin = async () => {
        try {
            await googleLogin();
        } catch (error) {
            setError(error.message);
        }
    }

    return (
        <div className="fixed w-screen h-screen inset-0 z-10 flex justify-center items-center bg-blue-400 bg-opacity-25">
            <form onSubmit={handleSubmit} className="bg-white py-4 px-6 rounded-xl max-w-md w-full">
                <h2>Register</h2>
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
                {error && <div className="text-red-500">{error}</div>}
                <div className="flex flex-col justify-center items-center gap-5">
                    <Button type="submit">Registrarme</Button>
                    <Button onClick={handleGoogleLogin} className="mt-2 block"><i class="bi bi-google"></i></Button>
                    <div className="flex justify-center items-center gap-5">
                        <h3>¿Ya tienes cuenta?</h3>
                        <Button><Link href="/user/login">Iniciar Sesion</Link></Button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default RegisterForm