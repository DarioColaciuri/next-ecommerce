import ProductDetail from "../../../components/products/ProductDetail"

export async function generateMetadata ({params, searchParams}, parent) {
    return {
        title: `Products - ${params.categories}`
    }
}

const Products = ({params}) => {
    const { slug } = params

    return (
        <main className="container m-auto mt-10">
            <div className="flex gap-10">
                <ProductDetail slug={slug}/>
            </div>
        </main>
    )
}

export default Products