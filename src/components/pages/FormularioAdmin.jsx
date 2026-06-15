import { Link } from "react-router";
import { db, storage } from "../../firebase/config";

import { collection, addDoc } from "firebase/firestore";

import {
    ref,
    uploadBytes,
    getDownloadURL,
} from "firebase/storage";

function FormularioAdmin() {

    const crearProducto = async (e) => {

        e.preventDefault();

        try {

            const archivo = e.target.imagen.files[0];

            const nombreArchivo =
                Date.now() + "-" + archivo.name;

            const referenciaImagen = ref(
                storage,
                `productos/${nombreArchivo}`
            );

            await uploadBytes(
                referenciaImagen,
                archivo
            );

            const urlImagen =
                await getDownloadURL(
                    referenciaImagen
                );

            const productoNuevo = {
                producto: e.target.producto.value,
                precio: e.target.precio.value,
                imagen: urlImagen,
                bateria: e.target.bateria.value,
                descripcion: e.target.descripcion.value,
                color: e.target.color.value,
            };

            await addDoc(
                collection(db, "productos"),
                productoNuevo
            );

            alert("Producto creado correctamente");

            e.target.reset();

        } catch (error) {

            console.log(error);

            alert(
                "Ocurrió un error al crear el producto"
            );
        }
    };

    return (
        <section className="min-vh-100 bg-body-secondary d-flex align-items-center pt-5">
            <div className="container py-5">

                <form onSubmit={crearProducto}>

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

                    <div className="mb-3">
                        <label className="form-label">
                            Imagen*
                        </label>

                        <input
                            type="file"
                            className="form-control"
                            name="imagen"
                            accept="image/*"
                            required
                        />
                    </div>

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