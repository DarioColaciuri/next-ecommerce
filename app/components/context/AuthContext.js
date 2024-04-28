"use client"
import { auth, provider, db } from "@/app/firebase/config"
import { signInWithPopup, signOut, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth"
import { doc, setDoc } from "firebase/firestore"
import { useRouter } from "next/navigation"
import { createContext, useContext, useEffect, useState } from "react"

const AuthContext = createContext()

export const useAuthContext = () => useContext(AuthContext)

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState({
        logged: false,
        email: null,
        uid: null
    })

    const router = useRouter()

    const registerUser = async (values) => {
        const { email, password } = values;
        await createUserWithEmailAndPassword(auth, email, password)
        const role = (email === "admin@admin.com" && password === "admin123") ? "admin" : "user";
        await setDoc(doc(db, "roles", auth.currentUser.uid), { role });
        await setDoc(doc(db, "carts", auth.currentUser.uid), { });
    }

    const loginUser = async (values) => {
        await signInWithEmailAndPassword(auth, values.email, values.password)
    }

    const logout = async () => {
        await signOut(auth)
        router.push('/products/all');
    }

    const googleLogin = async () => {
        await signInWithPopup(auth, provider)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (user) => {
            if (user) {
                setUser({
                    logged: true,
                    email: user.email,
                    uid: user.uid
                })
            } else {
                setUser({
                    logged: false,
                    email: null,
                    uid: null
                })
            }
        })

        return unsubscribe;
    }, [])

    useEffect(() => {
        if (user.logged) {
            if (user.email === 'admin@admin.com') {
                router.push('/admin');
            } else {
                router.push('/products/all');
            }
        }
    }, [user.logged, user.email, router]);

    return (
        <AuthContext.Provider value={{
            user,
            registerUser,
            loginUser,
            logout,
            googleLogin
        }}>
            {children}
        </AuthContext.Provider>
    )
}
