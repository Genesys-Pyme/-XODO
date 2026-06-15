import { NavLink, useNavigate } from "react-router";
import { useEffect, useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase/config";

function Nav({ usuarioAdmin, setUsuarioAdmin }) {

    const navegacion = useNavigate();
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const logout = async () => {
        try {

            await signOut(auth);

            setUsuarioAdmin(false);

            navegacion("/");

        } catch (error) {
            console.log(error);
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
                className="navbar navbar-expand-lg fixed-top px-3 d-lg-none"
                style={
                    scrolled
                        ? glassStyle
                        : {
                            background: "#fff",
                            transition: "all .35s ease",
                        }
                }
            >
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
                            <NavLink to="/" className="nav-link">
                                Inicio
                            </NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink to="/nosotros" className="nav-link">
                                Nosotros
                            </NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink to="/contacto" className="nav-link">
                                Contacto
                            </NavLink>
                        </li>

                        <li className="nav-item">
                            {usuarioAdmin ? (
                                <>
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
                                        Logout
                                    </button>
                                </>
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

            <header
                className="w-50 rounded-pill mx-auto fixed-top mt-3 d-none d-lg-block"
                style={
                    scrolled
                        ? glassStyle
                        : {
                            background: "#fff",
                            transition: "all .35s ease",
                        }
                }
            >
                <nav className="navbar">
                    <div className="container">

                        <ul className="navbar-nav d-flex mx-auto align-items-center flex-row gap-3">

                            <li className="nav-item">
                                <NavLink to="/" className="nav-link">
                                    Inicio
                                </NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink to="/nosotros" className="nav-link">
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
                                <NavLink to="/contacto" className="nav-link">
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