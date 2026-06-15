function Nosotros() {
  return (
    <>
      {/* HERO */}
      <section className="min-vh-100 bg-body-secondary d-flex align-items-center justify-content-center">
        <div className="container text-center">

          <h1 className="display-1 text-black mt-5 text-bebas">
            Somos ÉXODO.
          </h1>

          <p className="fs-4 text-secondary mt-4 col-lg-7 mx-auto">
            Ayudamos a nuestros clientes a renovar sus iPhones de forma simple, segura y transparente.
          </p>

          <div className="d-flex justify-content-center gap-3 mt-5 flex-wrap">

            <div className="bg-white rounded-pill px-4 py-2 shadow-sm">
              <i className="bi bi-shield-check me-2"></i>
              Equipos verificados
            </div>

            <div className="bg-white rounded-pill px-4 py-2 shadow-sm">
              <i className="bi bi-arrow-repeat me-2"></i>
              Plan Canje
            </div>

            <div className="bg-white rounded-pill px-4 py-2 shadow-sm">
              <i className="bi bi-star me-2"></i>
              Atención personalizada
            </div>

          </div>

        </div>
      </section>

      {/* HISTORIA */}
      <section className="min-vh-100 bg-white d-flex align-items-center">
        <div className="container py-5">

          <div className="row align-items-center g-5">

            <div className="col-lg-6">

              <h2 className="display-4 fw-bold text-roboto mb-4">
                Más que una tienda de celulares.
              </h2>

              <p className="text-secondary fs-5">
                ÉXODO nació en San Rafael, Mendoza, con una misión clara:
                ofrecer una experiencia diferente para quienes buscan tecnología
                premium.
              </p>

              <p className="text-secondary fs-5">
                Nos especializamos exclusivamente en iPhone porque creemos que
                la especialización marca la diferencia. Conocemos cada modelo,
                cada detalle y cada necesidad de nuestros clientes.
              </p>

              <p className="text-secondary fs-5">
                Nuestro objetivo no es simplemente vender un teléfono. Buscamos
                generar confianza, brindar asesoramiento honesto y acompañar a
                cada cliente antes, durante y después de su compra.
              </p>

            </div>

            <div className="col-lg-6">

              <div className="bg-body-tertiary rounded-4 p-5 shadow-sm">

                <h3 className="fw-bold mb-4">
                  ¿Por qué elegirnos?
                </h3>

                <div className="mb-4">
                  <i className="bi bi-check-circle-fill me-2"></i>
                  Equipos seleccionados y revisados cuidadosamente.
                </div>

                <div className="mb-4">
                  <i className="bi bi-check-circle-fill me-2"></i>
                  Atención personalizada y asesoramiento real.
                </div>

                <div className="mb-4">
                  <i className="bi bi-check-circle-fill me-2"></i>
                  Plan canje para facilitar tu próxima actualización.
                </div>

                <div className="mb-4">
                  <i className="bi bi-check-circle-fill me-2"></i>
                  Transparencia y confianza en cada operación.
                </div>

                <div>
                  <i className="bi bi-check-circle-fill me-2"></i>
                  Negocio local con atención cercana y humana.
                </div>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* CTA FINAL */}
      <section className="min-vh-100 bg-body-secondary d-flex align-items-center">
        <div className="container text-center">

          <h2 className="display-3 fw-bold text-roboto">
            Tu próximo iPhone está
            <br />
            más cerca de lo que pensás.
          </h2>

          <p className="text-secondary fs-5 mt-4 col-lg-6 mx-auto">
            Descubrí nuestro stock disponible y encontrá el equipo ideal para vos.
            Equipos seleccionados, atención personalizada y la tranquilidad de
            comprar con especialistas.
          </p>

          <a
            href="/#iPhones"
            className="btn btn-dark btn-lg px-5 mt-4"
          >
            Ver stock actual
          </a>

        </div>
      </section>
    </>
  );
}

export default Nosotros;