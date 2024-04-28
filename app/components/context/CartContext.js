"use client"
import { createContext, useContext, useEffect, useState } from "react";
import { useAuthContext } from "./AuthContext";
import { db } from "@/app/firebase/config";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { toast } from "react-toastify";

const CartContext = createContext();
export const useCartContext = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
    const { user } = useAuthContext();
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const fetchUserCart = async () => {
            if (user.logged) {
                try {
                    const docRef = doc(db, "carts", user.uid);
                    const userCartDoc = await getDoc(docRef);
                    if (userCartDoc.exists()) {
                        setCart(userCartDoc.data().items);
                    } else {
                        console.error("No se encontró el carrito del usuario.");
                    }
                } catch (error) {
                    console.error("Error al obtener el carrito del usuario:", error);
                }
            }
        };

        fetchUserCart();
    }, [user.logged, user.uid]);

    const cartNumber = () => {
        if (!user.logged || !cart) {
            return 0;
        }
        return cart.reduce((acc, prod) => acc + prod.quantity, 0);
    };

    const precioTotal = () => {
        if (!user.logged || !cart) {
            return 0;
        }
        return cart.reduce((acc, prod) => acc + prod.price * prod.quantity, 0);
    };

    const agregar = async (item, quantity) => {
        if (!user.logged) {
            toast.error("Necesitas iniciar sesión para añadir productos al carrito");
            return;
        }

        const agregado = { ...item, quantity };
        const newCart = Array.isArray(cart) ? [...cart] : [];
        const productoRepetido = newCart.find((item) => item.slug == agregado.slug);

        if (productoRepetido) {
            productoRepetido.quantity += quantity;
        } else {
            newCart.push(agregado);
        }
        setCart(newCart);

        if (user.logged) {
            try {
                const docRef = doc(db, "carts", user.uid);
                await setDoc(docRef, { items: newCart });
            } catch (error) {
                console.error("Error al actualizar el carrito del usuario:", error);
            }
        }
    };

    const vaciar = async () => {
        try {
            if (user.logged) {
                const docRef = doc(db, "carts", user.uid);
                await setDoc(docRef, {});
            }
            setCart([]);
        } catch (error) {
            console.error("Error al vaciar el carrito del usuario:", error);
        }
    };

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

    return (
        <CartContext.Provider
            value={{ cart, setCart, agregar, cartNumber, precioTotal, vaciar }}
        >
            {children}
        </CartContext.Provider>
    );
};

