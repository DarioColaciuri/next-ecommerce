import CategoriesMenu from "../../components/products/CategoriesMenu"
import ProductList from "../../components/products/ProductList"
import { Suspense } from "react"
import "../detail/loading.css"

export async function generateMetadata ({params, searchParams}, parent) {
    return {
        title: `Products - ${params.categories}`
    }
}

const Products = ({params}) => {
    const { categories } = params

    return (
        <main className="container m-auto mt-10">
            <div className="flex gap-10">
                <CategoriesMenu />
                <Suspense fallback={<div className="spinner"></div>}>
                <ProductList categories={categories}/>
                </Suspense>
            </div>
        </main>
    )
}

export default Products