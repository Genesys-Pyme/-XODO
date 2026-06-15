import { Link } from "react-router";

function FormularioAdmin({ agregarProducto }) {

    const crearProducto = (e) => {
        e.preventDefault();

        const archivo = e.target.imagen.files[0];

        const productoNuevo = {
            producto: e.target.producto.value,
            precio: e.target.precio.value,
            imagen: URL.createObjectURL(archivo),
            bateria: e.target.bateria.value,
            descripcion: e.target.descripcion.value,
            color: e.target.color.value,
        };

        agregarProducto(productoNuevo);

        e.target.reset();
    };

    return (
        <>
            <section className="min-vh-100 bg-body-secondary d-flex align-items-center pt-5">
                <div className="container py-5">
                    <form onSubmit={crearProducto}>

                        {/* Producto */}
                        <div className="mb-3">
                            <label className="form-label">Producto*</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Ej: iPhone 13 Pro"
                                name="producto"
                                required
                            />
                        </div>

                        {/* Precio */}
                        <div className="mb-3">
                            <label className="form-label">Precio*</label>
                            <input
                                type="number"
                                className="form-control"
                                placeholder="Ej: 500000"
                                name="precio"
                                required
                            />
                        </div>

                        {/* Imagen */}
                        <div className="mb-3">
                            <label className="form-label">Imagen*</label>
                            <input
                                type="file"
                                className="form-control"
                                name="imagen"
                                accept="image/*"
                                required
                            />
                        </div>

                        {/* Batería */}
                        <div className="mb-3">
                            <label className="form-label">Condición de batería*</label>
                            <textarea
                                className="form-control"
                                rows="2"
                                placeholder="Ej: 94%"
                                name="bateria"
                                required
                            ></textarea>
                        </div>

                        {/* Color */}
                        <div className="mb-3">
                            <label className="form-label">Color*</label>
                            <textarea
                                className="form-control"
                                rows="2"
                                placeholder="Ej: Silver"
                                name="color"
                                required
                            ></textarea>
                        </div>

                        {/* Descripción */}
                        <div className="mb-3">
                            <label className="form-label">Descripción breve*</label>
                            <textarea
                                className="form-control"
                                rows="2"
                                placeholder="Ej: Impecable estado."
                                name="descripcion"
                                required
                            ></textarea>
                        </div>

                        <button type="submit" className="btn btn-success">
                            Crear
                        </button>

                        <Link
                            className="btn btn-info text-white mx-2"
                            to="/administrador"
                        >
                            Ir a Administrador
                        </Link>

                    </form>
                </div>
            </section>
        </>
    );
}

export default FormularioAdmin;