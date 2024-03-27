import { data } from "../../utils/products"
import ProductCard from "./ProductCard"

const ProductList = ({categories}) => {

    const items = categories === "all" ? data : data.filter(item => item.category === categories)

    return (
        <section className="container m-auto flex justify-center items-center gap-12 flex-wrap">
            {
                items.map(item => <ProductCard key={item.slug} item={item}/>)
            }
        </section>
    )
}

export default ProductList