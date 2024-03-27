import "@/public/admin.css"
import "bootstrap-icons/font/bootstrap-icons.css";

export const metadata = {
    title: "Admin Page",
    description: "Admin Page"
}

export default function Admin() {
    return (
        <div classNameName="container flex flex-col items-center">
            <form className="container-general" id="formProduct">
    <div className="container-formularios">
        <div className="container-form">
            <h2 className="titulo-formularios">Agregar Producto:</h2>
            <div className="container-leftright">
                <div className="container-form-left">
                        <label for="title" className="form-label">Nombre del Producto</label>
                        <div className="input-group">
                            <div className="input-group-text"><i className="bi bi-box"></i></div>
                            <input className="form-control" type="text" name="title" id="title" placeholder="Inserte nombre del producto" required />
                        </div>
                        <label for="description" className="form-label">Descripción</label>
                        <div className="input-group">
                            <span className="input-group-text"><i className="bi bi-file-text"></i></span>
                            <input className="form-control" type="text" name="description" id="description" placeholder="Inserte descripción" required />
                        </div>
                        <label for="stock" className="form-label">Stock</label>
                        <div className="input-group">
                            <span className="input-group-text"><i className="bi bi-box"></i></span>
                            <input className="form-control" type="number" name="stock" id="stock" placeholder="Inserte stock" required />
                        </div>
                        <label for="thumbnail" className="form-label">Imagen (URL)</label>
                        <div className="input-group">
                            <span className="input-group-text"><i className="bi bi-image"></i></span>
                            <input className="form-control" type="text" name="thumbnail" id="thumbnail" placeholder="Inserte URL" />
                        </div>
                </div>
                <div className="container-form-right">
                        <label for="category" className="form-label">Categoría</label>
                        <div className="input-group">
                            <span className="input-group-text"><i className="bi bi-grid"></i></span>
                            <input className="form-control" type="text" name="category" id="category" placeholder="Inserte categoría" required />
                        </div>
                        <label for="price" className="form-label">Precio</label>
                        <div className="input-group">
                            <span className="input-group-text"><i className="bi bi-currency-dollar"></i></span>
                            <input className="form-control" type="number" name="price" id="price" placeholder="Inserte precio" required />
                        </div>
                        <label for="code" className="form-label">Código</label>
                        <div className="input-group">
                            <span className="input-group-text"><i className="bi bi-tag"></i></span>
                            <input className="form-control" type="text" name="code" id="code" placeholder="Inserte código numerico" required />
                        </div>
                </div>
            </div>
            <div className="container-registrar-btn">
                <button className="registrar-btn" type="submit" id="add-btn">Registrar </button>
            </div>
        </div>
        <div className="container-eliminar">
            <h2 className="titulo-formularios">Eliminar Producto:</h2>
            <label for="id-prod" className="form-label">ID del Producto</label>
            <div className="input-group">
                <span className="input-group-text"><i className="bi bi-trash"></i></span>
                <input className="form-control" type="text" name="id-prod" id="id-prod" placeholder="Inserte ID del producto" />
            </div>
            <div className="container-eliminar-btn">
                <button className="eliminar-formulario-btn" type="button" id="delete-btn">Eliminar</button>
            </div>
        </div>
    </div>
</form>
<div className="container-lista" id="list-products"></div>
        </div>


    )
}