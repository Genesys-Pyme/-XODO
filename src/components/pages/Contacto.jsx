function Contacto() {
  return (
    <section className="min-vh-100 bg-body-secondary  d-flex align-items-center">
      <div className="container py-5">

        <div className="row align-items-center mt-5 g-5">

          {/* INFORMACIÓN */}
          <div className="col-lg-6 mt-5">

            <h1 className="display-3 fw-bold text-black text-roboto">
              Estamos para ayudarte.
            </h1>

            <p className="lead text-secondary text-roboto mt-4">
              Ya sea para comprar, vender o renovar tu iPhone,
              nuestro equipo está listo para asesorarte.
            </p>

           

            

          </div>

          {/* REDES */}
          <div className="col-lg-6 mt-5">

            <div className="bg-white rounded-4 shadow-sm p-5">

              <h3 className="fw-bold text-center mb-2">
                Elegí cómo contactarnos
              </h3>

              <p className="text-secondary text-center mb-5">
                Estamos disponibles en nuestras redes para ayudarte.
              </p>

              {/* WHATSAPP */}
              <a
                href="https://wa.me/5492604093585"
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-none"
              >
                <div className="d-flex align-items-center justify-content-between border rounded-4 p-4 mb-3 bg-white">

                  <div className="d-flex align-items-center">

                    <i className="bi bi-whatsapp fs-1 me-4 text-success"></i>

                    <div>
                      <h5 className="mb-1 text-dark fw-bold">
                        WhatsApp
                      </h5>

                      <p className="mb-0 text-secondary">
                        Respuesta inmediata
                      </p>
                    </div>

                  </div>

                  <i className="bi bi-arrow-right fs-4 text-dark"></i>

                </div>
              </a>

              {/* INSTAGRAM */}
              <a
                href="https://www.instagram.com/exodo.cell/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-none"
              >
                <div className="d-flex align-items-center justify-content-between border rounded-4 p-4 mb-3">

                  <div className="d-flex align-items-center">

                    <i className="bi bi-instagram fs-1 me-4"></i>

                    <div>
                      <h5 className="mb-1 text-dark fw-bold">
                        Instagram
                      </h5>

                      <p className="mb-0 text-secondary">
                        Stock, novedades y promociones
                      </p>
                    </div>

                  </div>

                  <i className="bi bi-arrow-right fs-4 text-dark"></i>

                </div>
              </a>

              {/* FACEBOOK */}
              <a
                href="https://facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-none"
              >
                <div className="d-flex align-items-center justify-content-between border rounded-4 p-4">

                  <div className="d-flex align-items-center">

                    <i className="bi bi-facebook fs-1 me-4 text-primary"></i>

                    <div>
                      <h5 className="mb-1 text-dark fw-bold">
                        Facebook
                      </h5>

                      <p className="mb-0 text-secondary">
                        Seguinos para conocer nuestras novedades
                      </p>
                    </div>

                  </div>

                  <i className="bi bi-arrow-right fs-4 text-dark"></i>

                </div>
              </a>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Contacto;