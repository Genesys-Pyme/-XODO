import { NavLink, useNavigate } from "react-router"

function Nav({usuarioAdmin, setUsuarioAdmin}) {

    const navegacion = useNavigate()
    const logout = ()=>{
        setUsuarioAdmin(false)
        navegacion("/login")
    }

    return (
        <>
            {/* 🔹 MOBILE (navbar clásica) */}
            <nav className="navbar navbar-expand-lg bg-white fixed-top px-3 d-lg-none">
                
                <NavLink to="/" className="navbar-brand text-bebas fs-3">
                    ÉXODO
                </NavLink>

                <button 
                    className="navbar-toggler" 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#navbarMobile"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarMobile">
                    <ul className="navbar-nav mt-2">
                        <li className="nav-item">
                            <NavLink to="/" className="nav-link">Inicio</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/nosotros" className="nav-link">Nosotros</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/contacto" className="nav-link">Contacto</NavLink>
                        </li>

                        <li className="nav-item">
                            {usuarioAdmin ? <>
                                <NavLink to="/administrador" className="nav-link">Administrador</NavLink>
                                <button className="nav-link" onClick={logout}>Logout</button>

                            </> : <NavLink to="/login" className="nav-link">Login</NavLink>
                                   
                            }
                            
                        </li>

                        
                    </ul>
                </div>
            </nav>

            {/* 🔹 DESKTOP (tu diseño original intacto) */}
            <header className="w-50 rounded-pill mx-auto fixed-top bg-white mt-3 d-none d-lg-block">
                <nav className="navbar">
                    <div className="container">
                        <ul className="navbar-nav d-flex mx-auto align-items-center flex-row gap-3">

                            <li className="nav-item">
                                <NavLink to="/" className="nav-link">Inicio</NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink to="/nosotros" className="nav-link">Nosotros</NavLink>
                            </li>

                            <NavLink to="/" className="navbar-brand text-bebas px-3 mx-3 fs-1">
                                ÉXODO
                            </NavLink>

                            <li className="nav-item">
                                <NavLink to="/contacto" className="nav-link">Contacto</NavLink>
                            </li>

                             <li className="nav-item">
                            {usuarioAdmin ? <div className="d-flex gap-3">

                            
                                <NavLink to="/administrador" className="nav-link">Administrador</NavLink>
                                <button className="nav-link" onClick={logout}>Logout</button>

                            </div> : <NavLink to="/login" className="nav-link">Login</NavLink>
                                   
                            }
                            
                            </li>

                            

                        </ul>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Nav