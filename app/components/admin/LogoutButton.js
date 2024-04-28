"use client"
import { useAuthContext } from "../context/AuthContext"
import Button from "../ui/Button" 

const LogoutButton = () => {
    const { logout } = useAuthContext()

    return <Button onClick={logout} className="bg-red-500">Cerrar sesión</Button>
}

export default LogoutButton