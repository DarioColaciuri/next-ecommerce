"use client"
import { useState } from "react"
import Counter from "../ui/Counter"
import Button from "../ui/Button"
import { useCartContext } from "../context/CartContext"
import { useAuthContext } from "../context/AuthContext"
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const QtySelector = ({ item }) => {
    const { agregar } = useCartContext()
    const { user } = useAuthContext()
    const [quantity, setQuantity] = useState(1)

    const handleAdd = () => {
        if (!user.logged) {
            toast.error("Necesitas iniciar sesión para añadir productos al carrito");
            return;
        }

        setQuantity(quantity);
        agregar(item, quantity)
        toast.success(`${quantity} ${item.title} agregado al carrito`);
    }

    return (
        <div className="flex flex-col gap-5 mt-6">
                    <Counter quantity={quantity} setQuantity={setQuantity} />
                    <Button className="w-full hover:bg-blue-600" onClick={handleAdd}>Agregar al carrito</Button>
        </div>
    )
}

export default QtySelector
