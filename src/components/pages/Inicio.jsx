function Inicio() {
    return (
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
                                <a href="#" className="btn btn-dark me-2">
                                    Ver modelos
                                </a>
                                <a href="#" className="btn btn-outline-dark">
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
    )
}

export default Inicio