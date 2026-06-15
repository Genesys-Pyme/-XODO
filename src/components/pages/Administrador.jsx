import { Link } from "react-router";
import { useState } from "react";

function Administrador({ productos, borrarProducto, editarProducto }) {

  const [mostrarModal, setMostrarModal] = useState(false);
  const [productoSeleccionado, setProductoSeleccionado] = useState(null);
  const [indiceSeleccionado, setIndiceSeleccionado] = useState(null);

  const abrirModalEditar = (producto, indice) => {
    setProductoSeleccionado({ ...producto });
    setIndiceSeleccionado(indice);
    setMostrarModal(true);
  };

  const guardarCambios = () => {
    editarProducto(indiceSeleccionado, productoSeleccionado);
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
                Nuevo iPhone
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
                {productos.map((item, index) => (
                  <tr key={index}>
                    <td>{item.producto}</td>
                    <td>${item.precio}</td>

                    <td>
                      <img
                        src={item.imagen}
                        alt={item.producto}
                        className="img-fluid"
                        style={{ maxWidth: "100px" }}
                      />
                    </td>

                    <td>{item.bateria}</td>
                    <td>{item.color}</td>
                    <td>{item.descripcion}</td>

                    <td>
                      <button
                        className="btn btn-danger me-2"
                        onClick={() => borrarProducto(index)}
                      >
                        <i className="bi bi-trash-fill"></i>
                      </button>

                      <button
                        className="btn btn-warning"
                        onClick={() => abrirModalEditar(item, index)}
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

      {/* MODAL */}
      {mostrarModal && (
        <div
          className="modal fade show d-block"
          tabIndex="-1"
          style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
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

                <input
                  className="form-control mb-2"
                  value={productoSeleccionado?.producto || ""}
                  onChange={(e) =>
                    setProductoSeleccionado({
                      ...productoSeleccionado,
                      producto: e.target.value,
                    })
                  }
                />

                <input
                  className="form-control mb-2"
                  type="number"
                  value={productoSeleccionado?.precio || ""}
                  onChange={(e) =>
                    setProductoSeleccionado({
                      ...productoSeleccionado,
                      precio: e.target.value,
                    })
                  }
                />

                <input
                  className="form-control mb-2"
                  value={productoSeleccionado?.bateria || ""}
                  onChange={(e) =>
                    setProductoSeleccionado({
                      ...productoSeleccionado,
                      bateria: e.target.value,
                    })
                  }
                />

                <input
                  className="form-control mb-2"
                  value={productoSeleccionado?.color || ""}
                  onChange={(e) =>
                    setProductoSeleccionado({
                      ...productoSeleccionado,
                      color: e.target.value,
                    })
                  }
                />

                <textarea
                  className="form-control"
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
                  Guardar
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