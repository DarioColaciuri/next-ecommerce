"use client"
import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext()
export const useCartContext = () => useContext(CartContext)

const cartLS = JSON.parse(localStorage.getItem("cart")) || [];

export const CartProvider = ({ children }) => {

    const [cart, setCart] = useState(cartLS);

    const agregar = (item, quantity) => {
        const agregado = { ...item, quantity};
        const newCart = [...cart];
        const productoRepetido = newCart.find(
            (item) => item.slug == agregado.slug
        );

        if (productoRepetido) {
            productoRepetido.quantity += quantity;
        } else {
            newCart.push(agregado);
        }
        setCart(newCart);
    };

    const cartNumber = () => {
        return cart.reduce((acc, prod) => acc + prod.quantity, 0);
    };

    const precioTotal = () => {
        return cart.reduce((acc, prod) => acc + prod.price * prod.quantity, 0);
    };

    const vaciar = () => {
        setCart([]);
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

