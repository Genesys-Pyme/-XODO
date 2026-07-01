function Nosotros() {
  return (
    <>
      {/* HERO */}
      <section className="min-vh-100 bg-body-secondary d-flex align-items-center justify-content-center">
        <div className="container text-center" data-aos="fade-up">

          <h1 className="display-1 text-black mt-5 text-bebas" >
            Somos ÉXODO.
          </h1>

          <p className="fs-4 text-secondary text-roboto mt-4 col-lg-7 mx-auto">
            Ayudamos a nuestros clientes a renovar sus equipos de forma simple y transparente.
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

            <div className="col-lg-6" data-aos="fade-up">

              <h2 className="display-4 fw-bold text-black text-roboto mb-4">
                Más que una tienda.
              </h2>

              <p className="text-roboto text-secondary fs-5">
                <span className="text-black fw-bold">Desde San Rafael - Mendoza</span>, ofreciendo una experiencia diferente para quienes buscan tecnología
                premium.
              </p>

              <p className="text-roboto text-secondary fs-5">
                <span className="text-black fw-bold">Nos especializamos</span> exclusivamente en Apple porque creemos que
                marca la diferencia y resuelve cada necesidad de nuestros clientes.
              </p>

              <p className="text-roboto text-secondary fs-5">
                <span className="text-black fw-bold">Nuestro objetivo</span> no es simplemente vender un teléfono. Buscamos
                generar confianza, brindar asesoramiento honesto y acompañar a
                cada cliente antes, durante y después de su compra.
              </p>

            </div>

            <div className="col-lg-6" data-aos="fade-up">

              <div className="bg-body-tertiary rounded-4 p-5 shadow-sm">

                <h3 className="fw-bold text-roboto mb-4">
                  ¿Por qué elegirnos?
                </h3>

                <div className="mb-4 d-flex gap-1">
                  <i className="bi bi-check-circle-fill me-2 "></i>
                  <p className="text-roboto">Equipos seleccionados.</p>
                </div>

                <div className="mb-4 d-flex gap-1">
                  <i className="bi bi-check-circle-fill me-2"></i>
                  <p className="text-roboto">Atención personalizada.</p>
                </div>

                <div className="mb-4 d-flex gap-1">
                  <i className="bi bi-check-circle-fill me-2"></i>
                  <p className="text-roboto">Transparencia en cada operación.</p>
                </div>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* CTA FINAL */}
      <section className="min-vh-100 cotizacion-section d-flex align-items-center">
        <div className="container text-center" data-aos="fade-up">

          <h2 className="display-3 fw-bold text-white text-roboto">
            Tu próximo iPhone está
            <br />
            más cerca de lo que pensás.
          </h2>

          <p className="text-secondary text-roboto fs-5 mt-4 col-lg-6 mx-auto">
            Descubrí nuestro stock disponible y encontrá el equipo ideal para vos.
            
          </p>

          <a
            href="/#iPhones"
            className="btn btn-outline-light btn-lg px-5 mt-4 text-roboto"
          >
            Ver stock
          </a>

        </div>
      </section>
    </>
  );
}

export default Nosotros;