"use client"
import { useCartContext } from "../components/context/CartContext";
import "./Cart.css"
import Link from "next/link";

const Cart = () => {
    const { cart, setCart, precioTotal, vaciar } = useCartContext();

    const vaciarBtn = () => {
        vaciar();
    };

    const borrar = (productId) => {
        const nuevoCarrito = cart.filter((prod) => prod.slug !== productId);
        setCart(nuevoCarrito);
    };

    return (
        <div className="producto-detail-container rounded-2xl p-4 mt-9 gap-10 bg-slate-500">
            {cart.map((prod) => (
                <div
                    className="producto-container producto-container-cart items-center border-b-2 border-slate-600 mb-1"
                    key={prod.slug}
                >
                    <img
                        className="producto-imagen-cart"
                        src={prod.image}
                        alt={prod.title}
                    />
                    <h2>{prod.title}</h2>
                    <p>${prod.price * prod.quantity}</p>
                    <p>Cantidad: {prod.quantity}</p>
                    <button className="eliminar-btn" onClick={() => borrar(prod.slug)}>
                    <i className="bi bi-trash"></i>
                    </button>
                </div>
                
            ))}
            {cart.length > 0 ? (
                <>
                    <h2 className="precio-total text-center">Precio total: <strong> ${precioTotal()} </strong></h2>
                    <div className="container-btn-cart mt-5 justify-center">
                        <button className="vaciar-btn" onClick={vaciarBtn}>
                            Vaciar
                        </button>
                        <button className="comprar-btn">
                            <Link href="/checkout">Comprar</Link>
                        </button>
                    </div>
                </>
            ) : (
                <h2>No hay productos agregados.</h2>
            )}
        </div>
    );
};

export default Cart;