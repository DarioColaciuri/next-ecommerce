"use client"
import { useState } from "react"
import { doc, setDoc, deleteDoc } from "firebase/firestore"
import { getDownloadURL, ref, uploadBytes } from "firebase/storage"
import { db, storage } from "@/app/firebase/config"
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const createProduct = async (values, file) => {
    const storageRef = ref(storage, values.slug)
    const fileSnapShot = await uploadBytes(storageRef, file)
    const fileURL = await getDownloadURL(fileSnapShot.ref)
    const docRef = doc(db, "products", values.slug)
    return setDoc(docRef, { ...values, image: fileURL })
        .then(() => {
            console.log("Product added")
        })
}

const CreateForm = () => {
    const [values, setValues] = useState({
        title: "",
        description: "",
        price: "",
        category: "",
        stock: "",
        code: "",
        slug: ""
    })

    const [file, setFile] = useState(null)

    const handleChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const deleteProduct = async (slug) => {
        const docRef = doc(db, "products", slug);
        await deleteDoc(docRef);
    }

    const handleDelete = async () => {
        const slug = document.getElementById("id-prod").value;
        await deleteProduct(slug);
        toast.success(`Producto eliminado de la base de datos`);
        document.getElementById("id-prod").value = "";
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        await createProduct(values, file)
        toast.success(`Producto agregado a la base de datos`);
        setValues({
            title: "",
            description: "",
            price: "",
            category: "",
            stock: "",
            code: "",
            slug: ""
        });
    }

    return (
        <div className="container flex flex-col items-center">
            <form className="container-general" onSubmit={handleSubmit}>
                <div className="container-formularios">
                    <div className="container-form">
                        <h2 className="titulo-formularios">Agregar Producto:</h2>
                        <div className="container-leftright">
                            <div className="container-form-left">
                                <label className="form-label">Nombre del Producto</label>
                                <div className="input-group">
                                    <div className="input-group-text"><i className="bi bi-box"></i></div>
                                    <input className="form-control" type="text" name="title" id="title" value={values.title} onChange={handleChange} placeholder="Inserte nombre del producto" required />
                                </div>
                                <label className="form-label">Descripción</label>
                                <div className="input-group">
                                    <span className="input-group-text"><i className="bi bi-file-text"></i></span>
                                    <input className="form-control" type="text" name="description" id="description" placeholder="Inserte descripción" value={values.description} onChange={handleChange} required />
                                </div>
                                <label className="form-label">Stock</label>
                                <div className="input-group">
                                    <span className="input-group-text"><i className="bi bi-box"></i></span>
                                    <input className="form-control" type="number" name="stock" id="stock" placeholder="Inserte stock" value={values.stock} onChange={handleChange} required />
                                </div>
                                <label className="form-label">Imagen</label>
                                <div className="input-group">
                                    <span className="input-group-text"><i className="bi bi-image"></i></span>
                                    <input
                                        type="file"
                                        onChange={(e) => setFile(e.target.files[0])}
                                        className="p-2 rounded w-full border border-blue-100 block my-4"
                                    />
                                </div>
                            </div>
                            <div className="container-form-right">
                                <label className="form-label">Categoría</label>
                                <div className="input-group">
                                    <span className="input-group-text"><i className="bi bi-grid"></i></span>
                                    <input className="form-control" type="text" name="category" id="category" placeholder="Inserte categoría" value={values.category} onChange={handleChange} required />
                                </div>
                                <label className="form-label">Precio</label>
                                <div className="input-group">
                                    <span className="input-group-text"><i className="bi bi-currency-dollar"></i></span>
                                    <input className="form-control" type="number" name="price" id="price" placeholder="Inserte precio" value={values.price} onChange={handleChange} required />
                                </div>
                                <label className="form-label">Código</label>
                                <div className="input-group">
                                    <span className="input-group-text"><i className="bi bi-tag"></i></span>
                                    <input className="form-control" type="text" name="code" id="code" placeholder="Inserte código numerico" value={values.code} onChange={handleChange} required />
                                </div>
                                <label className="form-label">Slug</label>
                                <div className="input-group">
                                    <span className="input-group-text"><i className="bi bi-tag"></i></span>
                                    <input className="form-control" type="text" name="slug" id="slug" placeholder="Inserte Slug" value={values.slug} onChange={handleChange} required />
                                </div>
                            </div>
                        </div>
                        <div className="container-registrar-btn">
                            <button className="registrar-btn" type="submit" id="add-btn">Registrar </button>
                        </div>
                    </div>
                    <div className="container-eliminar">
                        <h2 className="titulo-formularios">Eliminar Producto:</h2>
                        <label className="form-label"></label>
                        <div className="input-group">
                            <span className="input-group-text"><i className="bi bi-trash"></i></span>
                            <input className="form-control" type="text" name="id-prod" id="id-prod" placeholder="Inserte SLUG del producto" />
                        </div>
                        <div className="container-eliminar-btn">
                            <button className="eliminar-formulario-btn" type="button" id="delete-btn" onClick={handleDelete}>Eliminar</button>
                        </div>
                    </div>
                </div>
            </form>
            <div className="container-lista" id="list-products"></div>
        </div>
    )
}

export default CreateForm