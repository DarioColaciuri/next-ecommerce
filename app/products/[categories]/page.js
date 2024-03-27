import CategoriesMenu from "../../components/products/CategoriesMenu"
import ProductList from "../../components/products/ProductList"

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
                <ProductList categories={categories}/>
            </div>
        </main>
    )
}

export default Products