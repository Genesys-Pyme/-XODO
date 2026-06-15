function Footer() {
  return (
    <footer className="bg-white border-top">

      <div className="container py-5">

        <div className="row g-5">

          {/* MARCA */}
          <div className="col-lg-4 text-roboto">

            <h2 className="text-bebas mb-3">
              ÉXODO
            </h2>

            <p className="text-secondary mb-0">
              Equipos seleccionados y atención personalizada
              para ayudarte a encontrar tu proximo iPhone.
            </p>

          </div>

        {/* CONTACTO */}
          <div className="col-lg-4 text-roboto">

            <h5 className="fw-bold mb-3">
              Contacto
            </h5>

            <p className="mb-2 text-secondary">
              <i className="bi bi-envelope me-2"></i>
              ventas@exodo.ar
            </p>

            <p className="mb-2 text-secondary">
              <i className="bi bi-whatsapp me-2"></i>
              +54 9 260 4093585
            </p>

            <p className="mb-0 text-secondary">
              <i className="bi bi-geo-alt me-2"></i>
              San Rafael, Mendoza
            </p>

          </div>

          {/* NAVEGACIÓN */}
          <div className="col-lg-4 text-roboto">

            <h5 className="fw-bold mb-3">
              Navegación
            </h5>

            <ul className="list-unstyled">

              <li className="mb-2">
                <a
                  href="/"
                  className="text-decoration-none text-secondary"
                >
                  Inicio
                </a>
              </li>

              <li className="mb-2">
                <a
                  href="/nosotros"
                  className="text-decoration-none text-secondary"
                >
                  Nosotros
                </a>
              </li>

              <li className="mb-2">
                <a
                  href="/contacto"
                  className="text-decoration-none text-secondary"
                >
                  Contacto
                </a>
              </li>

            </ul>

          </div>

          

        </div>

      </div>

      {/* COPYRIGHT */}
      

        <div className="container py-3">

          <div className="d-flex justify-content-center">

            <small className="text-secondary text-roboto text-center">
              © Todos los derechos reservados.
            </small>

          </div>

        </div>


    </footer>
  );
}

export default Footer;