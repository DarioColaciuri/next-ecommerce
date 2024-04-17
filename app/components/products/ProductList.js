import ProductCard from "./ProductCard"

const ProductList = async ({categories}) => {
    const items = await fetch(`http://localhost:3000/api/products/${categories}`, 
    // {
    //     cache: "force-cache",
    //     next: {
    //         tags: ["products"]
    //     }
    // }
    {
        cache: "no-store",
    }
).then(r => r.json())

    return (
        <section className="container m-auto flex justify-center items-center gap-12 flex-wrap">
            {
                items.map(item => <ProductCard key={item.slug} item={item}/>)
            }
        </section>
    )
}

export default ProductList

