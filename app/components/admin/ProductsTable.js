import Link from "next/link"
import Image from "next/image"


const ProductsTable = async () => {
    const items = await fetch(`http://${process.env.VERCEL_URL}:3000/api/products/all`, {
        cache: 'no-store'
    }).then(r => r.json())
    return (
        <div className="overflow-x-auto">
            <table className="w-full text-xs text-left text-gray-600">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                    <tr>
                        <th scope="col" className="px-3 py-2">
                            Nombre
                        </th>
                        <th scope="col" className="px-3 py-2">
                            Categoría
                        </th>
                        <th scope="col" className="px-3 py-2">
                            Precio
                        </th>
                        <th scope="col" className="px-3 py-2">
                            Código
                        </th>
                        <th scope="col" className="px-3 py-2">
                            Stock
                        </th>
                        <th scope="col" className="px-3 py-2">
                            Image
                        </th>
                        <th scope="col" className="px-3 py-2">
                            Description
                        </th>
                        <th scope="col" className="px-3 py-2">
                            Slug
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {items.map((product) => (
                        <tr key={product.slug} className="bg-white border-b">
                            <td className="p-2">{product.title}</td>
                            <td className="p-2">{product.category}</td>
                            <td className="p-2">{product.price}</td>
                            <td className="p-2">{product.code}</td>
                            <td className="p-2">{product.stock}</td>
                            <td className="p-2">
                                <Image
                                    src={product.image}
                                    alt={product.title}
                                    width={50}
                                    height={50}
                                    />
                            </td>
                            <td className="p-2 truncate max-w-prose">{product.description}</td>
                            <td className="p-2">
                            <p>{product.slug}</p>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default ProductsTable