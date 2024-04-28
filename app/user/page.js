"use client"
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation"
import { useAuthContext } from "../components/context/AuthContext"; 
import { getDoc, doc } from "firebase/firestore";
import { db } from "../firebase/config";

export default function User() {
    const { user } = useAuthContext();
    const router = useRouter();
    const [userRole, setUserRole] = useState(null);

    useEffect(() => {
        const fetchUserRole = async () => {
            if (user.logged) {
                try {
                    const docRef = doc(db, "roles", user.uid);
                    const userDoc = await getDoc(docRef);
                    if (userDoc.exists()) {
                        setUserRole(userDoc.data().role);
                    } else {
                        console.error("No se encontró el documento para el usuario.");
                    }
                } catch (error) {
                    console.error("Error al obtener el rol del usuario:", error);
                }
            }
        };

        fetchUserRole();
    }, [user.logged, user.uid]);

    useEffect(() => {
        if (!user.logged) {
            router.push('/user/login');
        }
    }, [user.logged, router]);

    return (
        <div className="flex justify-center items-center h-screen">
            {user.logged && (
                <div className="bg-gray-800 text-white p-8 rounded-xl">
                    <p>Email: {user.email}</p>
                    <p>UID: {user.uid}</p>
                    <p>Role: {userRole}</p>
                </div>
            )}
        </div>
    );
}