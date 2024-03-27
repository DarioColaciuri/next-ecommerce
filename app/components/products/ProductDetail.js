import { data } from "../../utils/products"
import Image from "next/image"
import QtySelector from "./QtySelector"


const ProductDetail = ({slug}) => {
    const item = data.find(p => p.slug === slug)

    return (
        <div className="max-w-4xl m-auto text-white">
            <section className="flex gap-6">
                <div className="relative basis-1/2">
                    <Image
                        alt={item.title}
                        src={`/${item.image}`}
                        width={860}
                        height={860}
                    />
                </div>
                <div className="basis-1/2">
                    <h2 className="text 2xl font-semibold border-b border-gray-200 pb-4 mb-4">{item.title}</h2>
                    <p className="text 4xl">$ {item.price}</p>
                    <QtySelector item={item} />
                </div>
            </section>
            <section className="mt-12">
                <h3 className="text-xl font-semibold border-b border-gray-200 pb-4 my-4">Details</h3>
                <p className="text-white pb-12">{item.description}</p>
            </section>
        </div>
    )
}

export default ProductDetail