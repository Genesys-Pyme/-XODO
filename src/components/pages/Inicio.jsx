function Inicio({productos}) {

    

    return (
        <>
        
        <section className="min-vh-100 bg-body-secondary d-flex align-items-center text-center text-lg-start pt-5">
            
                <div className="container">

                    <div className="row align-items-center">

                        {/* TEXTO */}
                        <div className="col-12 col-lg-6">
                            <h1 className=" text-roboto fw-bold">
                                El iPhone que querés.
                                <br />
                                Más cerca de lo que pensás.
                            </h1>

                            <p className="text-roboto mt-3">
                                Equipos verificados, garantía real y opciones de pago accesibles.
                            </p>

                            <div className="mt-4">
                                <a href="#iPhones" className="btn btn-dark me-2">
                                    Ver modelos
                                </a>
                                <a href="#cotizacion" className="btn btn-outline-dark">
                                    Cotizar mi iPhone
                                </a>
                            </div>
                        </div>

                        {/* IMAGEN */}
                        <div className="col-lg-6 text-center mt-4 mt-lg-0">
                            <img 
                                src="/iphone.webp" 
                                alt="iPhone"
                                className="img-fluid imagen"
                                
                            />
                        </div>

                    </div>

                </div>
        </section>

        <section id="iPhones" className="min-vh-100 bg-body-tertiary d-flex align-items-center py-5">
            <div className="container">
                <div className="text-center">
                    <h2 className="fw-bold text-roboto fs-1">Stock Actual</h2>
                    <p className="text-roboto">¡Si lo ves, lo tenemos!</p>

                  {productos.map((item, id) =>(
                    <div className="row">
                      <div key={id} className="col-12 col-md-6 col-lg-4">
                        <div className="card h-100">
                          <img src={item.imagen} alt="imagen del producto" className="w-100 imagenIphone" />
                          <h3 className="text-roboto">{item.producto}</h3>
                          <h3 className="text-bebas">${item.precio}</h3>
                          <p className="text-roboto">Condicion de bateria: {item.bateria} </p>
                          <p className="text-roboto">Color: {item.color} </p>
                          <p className="text-roboto"> {item.descripcion} </p>
                        </div>
                      </div>
                    </div>
                  ))}

                </div>
            </div>
        </section>

        <section id="cotizacion" className="cotizacion-section">
  <div className="container">
    <div className="row align-items-center g-5">

      {/* TEXTO */}
      <div className="col-12 col-lg-5">
        <h2 className="text-roboto fw-bold fs-1">
          Cotiza tu iPhone<br />
          
        </h2>
        <p className="text-roboto text-secondary">
          Entregá tu equipo actual y recibí tu próximo iPhone.
        </p>

        <div className="d-flex flex-column gap-3">
          {[
            { n: "01", title: "Completá el formulario", desc: "Modelo, estado y batería de tu equipo." },
            { n: "02", title: "Recibís tu cotización", desc: "Te respondemos en menos de 24 hs." },
            { n: "03", title: "Cerramos el canje", desc: "Llevás tu nuevo equipo el mismo día." },
          ].map(({ n, title, desc }) => (
            <div key={n} className="cotizacion-step">
              <span className="cotizacion-step-num text-light">{n}</span>
              <div>
                <p className="cotizacion-step-title">{title}</p>
                <p className="cotizacion-step-desc">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* FORM */}
      <div className="col-12 col-lg-6 col-xl-5 offset-xl-1">
        <form
          action="https://formsubmit.co/cotizaciones@exodo.ar"
          method="POST"
          className="cotizacion-form"
        >
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_template" value="table" />
          <input type="hidden" name="_next" value="https://TU-DOMINIO.com/#cotizacion" />

          <p className="text-roboto">Tu equipo</p>   
 
          <input
            type="text"
            name="Modelo"
            className="cotizacion-input"
            placeholder="Modelo  —  Ejemplo: iPhone 13 Pro"
            required
          />

          <div className="row g-2">
            <div className="col-6">
              <select name="Capacidad" className="cotizacion-input">
                <option value="">Capacidad</option>
                <option>128 GB</option>
                <option>256 GB</option>
                <option>512 GB</option>
                <option>1 TB</option>
              </select>
            </div>
            <div className="col-6">
              <select name="Estado" className="cotizacion-input">
                <option value="">Estado</option>
                <option>Excelente</option>
                <option>Muy bueno</option>
                <option>Bueno</option>
                <option>Con detalles</option>
              </select>
            </div>
          </div>

          <input
            type="number"
            name="Bateria"
            className="cotizacion-input "
            placeholder="Salud de batería  —  Ejemplo: 87%"
            min="0"
            max="100"
          />

          <textarea
            name="Detalles"
            rows="2"
            className="cotizacion-input"
            placeholder="Detalles adicionales  —  golpes, pantalla, etc."
          />

          <hr className="cotizacion-divider" />

          <p className="text-roboto">Tus datos</p>

          <div className="row g-2 text-roboto">
            <div className="col-6">
              <input
                type="text"
                name="Nombre"
                className="cotizacion-input"
                placeholder="Nombre"
                required
              />
            </div>
            <div className="col-6">
              <input
                type="email"
                name="Email"
                className="cotizacion-input"
                placeholder="Email"
                required
              />
            </div>
          </div>

          <input
            type="text"
            name="WhatsApp"
            className="cotizacion-input"
            placeholder="WhatsApp  —  opcional"
          />

          <button type="submit" className="cotizacion-btn-submit">
            Enviar cotización
          </button>
        </form>
      </div>

    </div>
  </div>
</section>

        </>
    )
}

export default Inicio