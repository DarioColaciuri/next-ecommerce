"use client"
import Image from "next/image"
import QtySelector from "./QtySelector"
import { doc, getDoc } from "firebase/firestore"
import { db } from "@/app/firebase/config"
import { useEffect, useState } from "react"

// const ProductDetail = async ({slug}) => {
//     const item = await fetch(`http://${process.env.VERCEL_URL}/api/product/${slug}`, {
//         cache: "no-store",
//     }).then(r => r.json())

const ProductDetail = ({ slug }) => {
    const [item, setItem] = useState(null);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const docRef = doc(db, "products", slug);
                const docSnapshot = await getDoc(docRef);
                if (docSnapshot.exists()) {
                    const productData = docSnapshot.data();
                    setItem(productData);
                } else {
                    console.error("No se encontró el producto con el slug proporcionado.");
                }
            } catch (error) {
                console.error("Error al obtener el producto:", error);
            }
        };

        fetchProduct();
    }, [slug]);

    if (!item) {
        return <div>Cargando...</div>;
    }

    return (
        <div className="max-w-4xl mt-2 m-auto text-white w-full h-full bg-gray-600 p-9 rounded-2xl">
            <section className="flex gap-6">
                <div className="relative basis-1/2">
                    <Image 
                        className="w-auto h-auto"
                        priority={true}
                        alt={item.title}
                        src={`${item.image}`}
                        width={860}
                        height={860}
                    />
                </div>
                <div className="basis-1/2 bg-slate-700 p-3 rounded-2xl text-center content-center">
                    <h2 className="text-1xl font-semibold border-b border-gray-200 pb-4 mb-4">{item.title}</h2>
                    <p className="text-4xl text-center"><strong>$ {item.price}</strong></p>
                    <QtySelector item={item} />
                </div>
            </section>
            <section className="mt-12">
                <h3 className="text-xl font-semibold border-b border-gray-200 pb-4 my-4">Details</h3>
                <p className="text-white pb-12">{item.description}</p>
            </section>
        </div>
    );
};

export default ProductDetail;