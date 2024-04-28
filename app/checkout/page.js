"use client"
import { useCartContext } from "../components/context/CartContext";
import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase/config";
import Link from "next/link";
import "./checkout.css"
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAuthContext } from "../components/context/AuthContext";

const CheckOut = () => {
    const [pedidoId, setPedidoId] = useState("");
    const { cart, precioTotal, vaciar } = useCartContext();
    const { user } = useAuthContext();

    const comprar = async () => {
        if (!user.logged) {
            toast.error("Debes iniciar sesión para completar la compra");
            return;
        }
        const pedido = {
            cliente: {
                email: user.email,
                uid: user.uid,
            },
            productos: cart,
            total: precioTotal(),
        };

        const pedidosRef = collection(db, "orders");

        try {
            const docRef = await addDoc(pedidosRef, pedido);
            setPedidoId(docRef.id);
            vaciar();
            toast.success("¡Gracias por tu compra!");
        } catch (error) {
            console.error("Error al realizar la compra:", error);
            toast.error("Error al realizar la compra");
        }
    };

    if (pedidoId) {
        return (
            <div className="producto-detail-container">
                <h2 className="producto-detail-titulo">
                    Muchas gracias por tu compra!
                </h2>
                <div className="pedido-container">
                    <p className="pedido-texto">Tu numero de pedido es:</p>
                    <strong className="numero-pedido">{pedidoId}</strong>
                </div>
            </div>
        );
    }

    return (
        <div className="producto-detail-container">
            <h2 className="producto-detail-titulo">CheckOut</h2>

            <div className="resumen">
                {cart.map((prod) => (
                    <div className="producto-resumen" key={prod.slug}>
                        <h2>{prod.title}</h2>
                        <p>${prod.price * prod.quantity}</p>
                        <p>Cantidad: {prod.quantity}</p>
                    </div>
                ))}
                <Link href="/cart">
                    <button className="cambios-btn">Realizar cambios</button>
                </Link>
            </div>
            <div className=" flex justify-center mt-2">
            <button className="enviar" onClick={comprar}>
                Finalizar compra
            </button>
            </div>
        </div>
    );
};

export default CheckOut;