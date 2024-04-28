"use client"
import "bootstrap-icons/font/bootstrap-icons.css";
import React from 'react';
import { useAuthContext } from "../context/AuthContext";
import Button from "./Button";
import { useRouter } from "next/navigation"
import Link from "next/link";

const UserWidget = () => {
    const { user, logout } = useAuthContext()
    const router = useRouter();

    const handleLogout = () => {
        logout();
        router.push('/products/all');
    };

    if (user.logged) {
        return <div className="flex items-center gap-2">
                    {user.email === 'admin@admin.com' && (
                    <Button onClick={() => router.push('/admin')}>Admin Panel</Button>
                    )}
                    <Link href="/user/historial"><Button>Historial</Button></Link>
                    <Link href="/user">
                    <i className="bi bi-person-fill text-2xl"></i>
                    <span className="text-white p-3">{user.email}</span>
                    </Link>
                    <Button onClick={handleLogout}>Logout</Button>
                </div>
    }  
    else {
        return <div><Link href="/user/login"><i className="bi bi-person-fill text-2xl"></i></Link></div>
    }
};

export default UserWidget;