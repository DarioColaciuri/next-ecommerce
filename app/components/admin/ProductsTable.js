"use client"
import { collection, getDocs } from "firebase/firestore"
import { db } from "@/app/firebase/config"
import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"

    // const items = await fetch(`http://${process.env.VERCEL_URL}:3000/api/products/all`, {
    //     cache: 'no-store'
    // }).then(r => r.json())
    
    const ProductsTable = () => {
        const [products, setProducts] = useState([]);
    
        useEffect(() => {
            const fetchProducts = async () => {
                try {
                    const productsRef = collection(db, "products");
                    const querySnapshot = await getDocs(productsRef);
                    const productsData = querySnapshot.docs.map(doc => doc.data());
                    setProducts(productsData);
                } catch (error) {
                    console.error("Error al obtener los productos:", error);
                }
            };
    
            fetchProducts();
        }, []);
    
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
                                Imagen
                            </th>
                            <th scope="col" className="px-3 py-2">
                                Descripción
                            </th>
                            <th scope="col" className="px-3 py-2">
                                Slug
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map(product => (
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
        );
    };
    
    export default ProductsTable;