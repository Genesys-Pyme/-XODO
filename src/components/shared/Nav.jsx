import { NavLink, useNavigate, useLocation } from "react-router";
import { useEffect, useRef, useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase/config";

function Nav({ usuarioAdmin, setUsuarioAdmin }) {

    const navegacion = useNavigate();
    const location = useLocation();
    const [scrolled, setScrolled] = useState(false);
    const [onDark, setOnDark] = useState(false);

    const navRef = useRef(null);
    const headerRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    // Detecta si hay una sección con fondo negro pasando por la altura EXACTA del nav
    useEffect(() => {
        let observer;
        let frameId;

        const crearObserver = () => {
            const secciones = document.querySelectorAll(".cotizacion-section");

            if (secciones.length === 0) {
                setOnDark(false);
                return;
            }

            const seccionesActivas = new Set();

            const elementoActivo =
                window.innerWidth >= 992 ? headerRef.current : navRef.current;

            const navHeight = elementoActivo
                ? elementoActivo.getBoundingClientRect().bottom
                : 80;

            if (observer) observer.disconnect();

            observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            seccionesActivas.add(entry.target);
                        } else {
                            seccionesActivas.delete(entry.target);
                        }
                    });

                    setOnDark(seccionesActivas.size > 0);
                },
                {
                    rootMargin: `-${navHeight}px 0px -${window.innerHeight - navHeight - 1}px 0px`,
                    threshold: 0,
                }
            );

            secciones.forEach((sec) => observer.observe(sec));
        };

        // Espera un frame para asegurarse de que la nueva página ya esté renderizada
        setOnDark(false);
        frameId = requestAnimationFrame(crearObserver);

        window.addEventListener("resize", crearObserver);

        return () => {
            if (observer) observer.disconnect();
            if (frameId) cancelAnimationFrame(frameId);
            window.removeEventListener("resize", crearObserver);
        };
    }, [location.pathname]);

    const logout = async () => {
        try {

            await signOut(auth);

            setUsuarioAdmin(false);

            navegacion("/");

        } catch (error) {
            console.log(error);
        }
    };

    const cerrarMenuMobile = () => {
    const menu = document.getElementById("navbarMobile");

    if (menu) {
        menu.classList.remove("show");
    }
};

    const glassStyle = {
        background: "rgba(255,255,255,0.10)",
        backdropFilter: "blur(24px) saturate(180%)",
        WebkitBackdropFilter: "blur(24px) saturate(180%)",
        transition: "all .35s ease",
    };

    return (
        <>
            <nav
                ref={navRef}
                className={`navbar navbar-expand-lg fixed-top px-3 d-lg-none ${onDark ? "navbar-dark" : "navbar-light"}`}
                style={
                    scrolled
                        ? glassStyle
                        : {
                            background: onDark ? "transparent" : "#fff",
                            transition: "all .35s ease",
                        }
                }
            >
                <NavLink to="/" className="navbar-brand text-bebas fs-3" onClick={cerrarMenuMobile}>
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
                            <NavLink to="/" className="nav-link" onClick={cerrarMenuMobile}>
                                Inicio
                            </NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink to="/nosotros" className="nav-link" onClick={cerrarMenuMobile}>
                                Nosotros
                            </NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink to="/contacto" className="nav-link" onClick={cerrarMenuMobile}>
                                Contacto
                            </NavLink>
                        </li>

                        <li className="nav-item">
                            {usuarioAdmin ? (
                                <>
                                    <NavLink
                                        to="/administrador"
                                        className="nav-link"
                                        onClick={cerrarMenuMobile}
                                    >
                                        Administrador
                                    </NavLink>

                                    <button
                                        className="nav-link border-0 bg-transparent"
                                        onClick={logout}
                                        
                                    >
                                        Logout
                                    </button>
                                </>
                            ) : (
                                <NavLink
                                    to="/login"
                                    className="nav-link"
                                    onClick={cerrarMenuMobile}
                                >
                                    Login
                                </NavLink>
                            )}
                        </li>

                    </ul>
                </div>
            </nav>

            <header
                ref={headerRef}
                className="w-50 rounded-pill mx-auto fixed-top mt-3 d-none d-lg-block"
                style={
                    scrolled
                        ? glassStyle
                        : {
                            background: onDark ? "transparent" : "#fff",
                            transition: "all .35s ease",
                        }
                }
            >
                <nav className={`navbar ${onDark ? "navbar-dark" : "navbar-light"}`}>
                    <div className="container">

                        <ul className="navbar-nav d-flex mx-auto align-items-center flex-row gap-3">

                            <li className="nav-item">
                                <NavLink to="/" className="nav-link" >
                                    Inicio
                                </NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink to="/nosotros" className="nav-link" >
                                    Nosotros
                                </NavLink>
                            </li>

                            <NavLink
                                to="/"
                                className="navbar-brand text-bebas px-3 mx-3 fs-1"
                                
                            >
                                ÉXODO
                            </NavLink>

                            <li className="nav-item">
                                <NavLink to="/contacto" className="nav-link" >
                                
                                    Contacto
                                </NavLink>
                            </li>

                            <li className="nav-item">
                                {usuarioAdmin ? (
                                    <div className="d-flex gap-3 align-items-center">

                                        <NavLink
                                            to="/administrador"
                                            className="nav-link"
                                            
                                        >
                                            Administrador
                                        </NavLink>

                                        <button
                                            className="nav-link border-0 bg-transparent"
                                            onClick={logout}
                                        >
                                            <i className="bi bi-box-arrow-right"></i>
                                        </button>

                                    </div>
                                ) : (
                                    <NavLink
                                        to="/login"
                                        className="nav-link"
                                        
                                    >
                                        Login
                                    </NavLink>
                                )}
                            </li>

                        </ul>

                    </div>
                </nav>
            </header>
        </>
    );
}

export default Nav;