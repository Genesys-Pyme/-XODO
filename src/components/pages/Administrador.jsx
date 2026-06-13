import { Link } from "react-router"

function Administrador() {
    return (
        <section className="min-vh-100 bg-body-secondary d-flex align-items-center pt-5">
            <div className="container py-4">

      <div className="d-flex justify-content-between align-items-center mb-3">
        <h4 className="mb-0">Panel Administrador</h4>

        <div>
          <Link className="btn btn-info text-white mx-2" to="/administrador/crear">
          Crear Productos
          </Link>
        </div>
        
      </div>

      <div className="table-responsive">
        <table className="table table-striped table-hover align-middle text-center">

          <thead className="table-dark">
            <tr>
              <th>Codigo</th>
              <th>Producto</th>
              <th>Precio</th>
              <th>Imagen</th>
              <th>Categoria</th>
              <th>Opciones</th>
            </tr>
          </thead>

          <tbody>
            
          </tbody>

        </table>
      </div>

    </div>
        </section>
    
  )
}

export default Administrador