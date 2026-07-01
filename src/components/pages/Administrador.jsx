import { Link } from "react-router";
import { useState } from "react";

function Administrador({ productos, borrarProducto, editarProducto }) {

  const [mostrarModal, setMostrarModal] = useState(false);
  const [productoSeleccionado, setProductoSeleccionado] = useState(null);

  const abrirModalEditar = (producto) => {
    setProductoSeleccionado({ ...producto });
    setMostrarModal(true);
  };

  const guardarCambios = async () => {
    await editarProducto(productoSeleccionado);
    setMostrarModal(false);
  };

  return (
    <>
      <section className="min-vh-100 bg-body-secondary d-flex align-items-center pt-5">
        <div className="container py-4">

          <div className="d-flex justify-content-between align-items-center mb-3">
            <h4 className="mb-0">Panel Administrador</h4>

            <div>
              <Link
                className="btn btn-outline-dark mx-2"
                to="/administrador/crear"
              >
                Nuevo Producto
              </Link>
            </div>
          </div>

          <div className="table-responsive">
            <table className="table table-striped table-hover align-middle text-center">

              <thead className="table-dark">
                <tr>
                  <th>Producto</th>
                  <th>Precio</th>
                  <th>Imagen</th>
                  <th>Batería</th>
                  <th>Color</th>
                  <th>Descripción</th>
                  <th>Acciones</th>
                </tr>
              </thead>

              <tbody>
                {productos.map((item) => (
                  <tr key={item.id}>

                    <td>{item.producto}</td>

                    <td>
                      ${Number(item.precio).toLocaleString("es-AR")}
                    </td>

                    <td>
                      <img
                        src={item.imagen}
                        alt={item.producto}
                        className="img-fluid rounded"
                        style={{
                          maxWidth: "100px",
                          maxHeight: "100px",
                          objectFit: "cover"
                        }}
                      />
                    </td>

                    <td>{item.bateria}</td>
                    <td>{item.color}</td>
                    <td>{item.descripcion}</td>

                    <td>
                      <button
                        className="btn btn-danger me-2"
                        onClick={() => borrarProducto(item.id)}
                      >
                        <i className="bi bi-trash-fill"></i>
                      </button>

                      <button
                        className="btn btn-warning"
                        onClick={() => abrirModalEditar(item)}
                      >
                        <i className="bi bi-pencil-fill text-light"></i>
                      </button>
                    </td>

                  </tr>
                ))}
              </tbody>

            </table>
          </div>

        </div>
      </section>

      {/* MODAL EDITAR */}
      {mostrarModal && (
        <div
          className="modal fade show d-block"
          tabIndex="-1"
          style={{ backgroundColor: "rgba(0,0,0,.5)" }}
        >
          <div className="modal-dialog">
            <div className="modal-content">

              <div className="modal-header">
                <h5 className="modal-title">
                  Editar producto
                </h5>

                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setMostrarModal(false)}
                ></button>
              </div>

              <div className="modal-body">

                <label className="form-label">
                  Producto
                </label>

                <input
                  className="form-control mb-3"
                  value={productoSeleccionado?.producto || ""}
                  onChange={(e) =>
                    setProductoSeleccionado({
                      ...productoSeleccionado,
                      producto: e.target.value,
                    })
                  }
                />

                <label className="form-label">
                  Precio
                </label>

                <input
                  className="form-control mb-3"
                  type="number"
                  value={productoSeleccionado?.precio || ""}
                  onChange={(e) =>
                    setProductoSeleccionado({
                      ...productoSeleccionado,
                      precio: e.target.value,
                    })
                  }
                />

                <label className="form-label">
  Imagen
</label>

{productoSeleccionado?.imagen && (
  <img
    src={productoSeleccionado.imagen}
    alt="preview"
    className="img-fluid rounded mb-2"
    style={{ maxHeight: 120, objectFit: 'cover' }}
  />
)}

<input
  className="form-control mb-1"
  type="file"
  accept="image/*"
  onChange={(e) => {
    const file = e.target.files[0];
    if (!file) return;
    if (file.size > 3 * 1024 * 1024) { alert('Máximo 3MB'); return; }
    const reader = new FileReader();
    reader.onload = (ev) =>
      setProductoSeleccionado({
        ...productoSeleccionado,
        imagen: ev.target.result,
      });
    reader.readAsDataURL(file);
  }}
/>

<small className="text-muted mb-3 d-block">
  O pegá una URL directamente:
</small>

<input
  className="form-control mb-3"
  placeholder="https://..."
  value={productoSeleccionado?.imagen?.startsWith('data:') ? '' : productoSeleccionado?.imagen || ""}
  onChange={(e) =>
    setProductoSeleccionado({
      ...productoSeleccionado,
      imagen: e.target.value,
    })
  }
/>

                <label className="form-label">
                  Batería
                </label>

                <input
                  className="form-control mb-3"
                  value={productoSeleccionado?.bateria || ""}
                  onChange={(e) =>
                    setProductoSeleccionado({
                      ...productoSeleccionado,
                      bateria: e.target.value,
                    })
                  }
                />

                <label className="form-label">
                  Color
                </label>

                <input
                  className="form-control mb-3"
                  value={productoSeleccionado?.color || ""}
                  onChange={(e) =>
                    setProductoSeleccionado({
                      ...productoSeleccionado,
                      color: e.target.value,
                    })
                  }
                />

                <label className="form-label">
                  Descripción
                </label>

                <textarea
                  className="form-control"
                  rows="3"
                  value={productoSeleccionado?.descripcion || ""}
                  onChange={(e) =>
                    setProductoSeleccionado({
                      ...productoSeleccionado,
                      descripcion: e.target.value,
                    })
                  }
                />

              </div>

              <div className="modal-footer">

                <button
                  className="btn btn-secondary"
                  onClick={() => setMostrarModal(false)}
                >
                  Cancelar
                </button>

                <button
                  className="btn btn-success"
                  onClick={guardarCambios}
                >
                  Guardar cambios
                </button>

              </div>

            </div>
          </div>
        </div>
      )}

    </>
  );
}

export default Administrador;