"use client"
import ProductCard from "./ProductCard"
import { collection, query, where, getDocs } from "firebase/firestore"
import { db } from "@/app/firebase/config"
import { useEffect, useState } from "react"

// const ProductList = async ({ categories }) => {
//     const items = await fetch(`http://${process.env.VERCEL_URL}/api/products/${categories}`,
//         {
//             cache: "no-store",
//         }
//     ).then(r => r.json())

const ProductList = ({ categories }) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const productsRef = collection(db, "products");
            const q = categories === "all" ? productsRef : query(productsRef, where("category", "==", categories));
            const querySnapshot = await getDocs(q);
            const productsData = querySnapshot.docs.map(doc => doc.data());
            setProducts(productsData);
        };

        fetchProducts();
    }, [categories]);

    return (
        <section className="container m-auto flex justify-center items-center gap-12 flex-wrap">
            {products.map(product => (
                <ProductCard key={product.slug} item={product} />
            ))}
        </section>
    );
};

export default ProductList;

