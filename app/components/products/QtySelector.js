"use client"
import { useState } from "react"
import Counter from "../ui/Counter"
import Button from "../ui/Button"

const QtySelector = ({item}) => {
    const [quantity, setQuantity] = useState(1)

    const handleAdd = () => {
        console.log({...item, quantity})
    }

    return (
        <div className="flex flex-col gap-5 mt-6">
            <Counter max={item.stock} counter={quantity} setCounter={setQuantity} />
            <Button className="w-full hover:bg-gray-700 hover:border-gray-900 hover:border-2" onClick={handleAdd}>Add to cart</Button>
        </div>
    )
}

export default QtySelector
