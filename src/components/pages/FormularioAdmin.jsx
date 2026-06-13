function FormularioAdmin (){

    return(

        <>
        <section className="min-vh-100 bg-body-secondary d-flex align-items-center pt-5">
            <div className="container py-5">
            <form>

                {/* Producto */}
                <div className="mb-3">
                <label className="form-label">Producto*</label>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Ej: Cafe"
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
                    placeholder="Ej: 50"
                    name="precio"
                    required
                />
                </div>

                {/* Imagen URL */}
                <div className="mb-3">
                <label className="form-label">Imagen URL*</label>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Ej: https://..."
                    name="imagen"
                    required
                />
                </div>

                {/* Categoría */}
                <div className="mb-3">
                <label className="form-label">Categoría*</label>
                <select className="form-select" name="categoria" required>
                    <option value="">Seleccione una opción</option>
                    <option value="Dulce">Dulce</option>
                    <option value="Salado">Salado</option>
                    <option value="Infusion">Infusion</option>
                    <option value="Batidos">Batidos</option>
                </select>
                </div>

                {/* Descripción breve */}
                <div className="mb-3">
                <label className="form-label">Descripción breve*</label>
                <textarea
                    className="form-control"
                    rows="2"
                    placeholder="Ej: Una taza de café suave y aromático."
                    name="descripcionBreve"
                    required
                ></textarea>
                </div>

                {/* Descripción amplia */}
                <div className="mb-3">
                <label className="form-label">Descripción amplia*</label>
                <textarea
                    className="form-control"
                    rows="4"
                    placeholder="Ej: El café americano es..."
                    name="descripcionAmplia"
                    required
                ></textarea>
                </div>

                {/* Botón */}
                <button type="submit" className="btn btn-success">
                Guardar
                </button>

            </form>
        </div>
        </section>
        
        </>
    )
}
export default FormularioAdmin