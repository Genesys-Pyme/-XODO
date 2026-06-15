import { Link } from "react-router";
import { db } from "../../firebase/config";
import { collection, addDoc } from "firebase/firestore";

function FormularioAdmin() {

    const crearProducto = async (e) => {
        e.preventDefault();

        const productoNuevo = {
            producto: e.target.producto.value,
            precio: e.target.precio.value,
            imagen: e.target.imagen.value,
            bateria: e.target.bateria.value,
            descripcion: e.target.descripcion.value,
            color: e.target.color.value,
        };

        try {

            await addDoc(
                collection(db, "productos"),
                productoNuevo
            );

            alert("Producto creado correctamente");

            e.target.reset();

        } catch (error) {

            console.log(error);

            alert("Ocurrió un error al crear el producto");
        }
    };

    return (
        <section className="min-vh-100 bg-body-secondary d-flex align-items-center pt-5">
            <div className="container py-5">

                <form onSubmit={crearProducto}>

                    {/* Producto */}
                    <div className="mb-3">
                        <label className="form-label">
                            Producto*
                        </label>

                        <input
                            type="text"
                            className="form-control"
                            placeholder="Ej: iPhone 15 Pro"
                            name="producto"
                            required
                        />
                    </div>

                    {/* Precio */}
                    <div className="mb-3">
                        <label className="form-label">
                            Precio*
                        </label>

                        <input
                            type="number"
                            className="form-control"
                            placeholder="Ej: 1200000"
                            name="precio"
                            required
                        />
                    </div>

                    {/* Imagen URL */}
                    <div className="mb-3">
                        <label className="form-label">
                            URL de la imagen*
                        </label>

                        <input
                            type="text"
                            className="form-control"
                            placeholder="https://..."
                            name="imagen"
                            required
                        />
                    </div>

                    {/* Batería */}
                    <div className="mb-3">
                        <label className="form-label">
                            Condición de batería*
                        </label>

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
                        <label className="form-label">
                            Color*
                        </label>

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
                        <label className="form-label">
                            Descripción breve*
                        </label>

                        <textarea
                            className="form-control"
                            rows="2"
                            placeholder="Ej: Impecable estado."
                            name="descripcion"
                            required
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        className="btn btn-success"
                    >
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
    );
}

export default FormularioAdmin;