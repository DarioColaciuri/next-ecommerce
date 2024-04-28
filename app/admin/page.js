import "./admin.css"
import "bootstrap-icons/font/bootstrap-icons.css";
import CreateForm from "../components/admin/CreateForm";
import ProductsTable from "../components/admin/ProductsTable";


export const metadata = {
    title: "Admin Page",
    description: "Admin Page"
}

export default function Admin() {

    return (
        <div className="container m-auto mt-6">
            <CreateForm />
            <h2 className="text-2xl my-10 border-b pb-4">Admin panel</h2>
            <ProductsTable />
        </div>
    )
}