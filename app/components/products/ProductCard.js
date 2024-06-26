import Image from "next/image";
import Link from "next/link";

const ProductCard = ({item}) => {

    return (
        <article className="basis-72 bg-gray-800 shadow-lg rounded-2xl text-white min-h-[500px] justify-center content-center" >
            <Link href={`/products/detail/${item.slug}`}
            className="flex flex-col"
            > 
            <Image
                className="w-auto h-auto"
                priority={true}
                alt={item.title}
                src={item.image}
                width={288}
                height={288}
                style={{objectFit: "contain"}}
                />
            <div className="px-4 pt-3 border-t border-gray-200">
                <h4 className="text-sm my4">{item.title}</h4>
                <p className="text 2xl font-semibold mb-6">${item.price}</p>
            </div>
            </Link>
        </article>
    )
}

export default ProductCard