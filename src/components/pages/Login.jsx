import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";

import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/config";

function Login({ setUsuarioAdmin }) {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const navegacion = useNavigate();

    const [error, setError] = useState("");

    const iniciarSesion = async (usuario) => {

        try {

            await signInWithEmailAndPassword(
                auth,
                usuario.email,
                usuario.password
            );

            setUsuarioAdmin(true);

            sessionStorage.setItem(
                "usuarioAdmin",
                "true"
            );

            navegacion("/administrador");

        } catch (error) {

            console.log(error);

            setError(
                "Usuario o contraseña incorrectos"
            );
        }
    };

    return (
        <section className="min-vh-100 d-flex align-items-center bg-body-secondary pt-5">

            <div className="container">

                <div className="row align-items-center">

                    <div className="col-12 col-md-6" data-aos="fade-up">

                        <form
                            onSubmit={handleSubmit(iniciarSesion)}
                        >

                            <div className="mb-3">

                                <label className="form-label">
                                    Correo electrónico
                                </label>

                                <input
                                    type="email"
                                    className="form-control"
                                    placeholder="admin@exodo.ar"
                                    {...register("email", {
                                        required:
                                            "El mail es obligatorio",
                                    })}
                                />

                                <p className="text-danger">
                                    {errors.email?.message}
                                </p>

                            </div>

                            <div className="mb-3">

                                <label className="form-label">
                                    Contraseña
                                </label>

                                <input
                                    type="password"
                                    className="form-control"
                                    placeholder="********"
                                    {...register("password", {
                                        required:
                                            "La contraseña es obligatoria",
                                    })}
                                />

                                <p className="text-danger">
                                    {errors.password?.message}
                                </p>

                            </div>

                            <button
                                type="submit"
                                className="btn btn-dark"
                            >
                                Iniciar sesión
                            </button>

                            <p className="text-danger mt-3">
                                {error}
                            </p>

                        </form>

                    </div>

                    <div className="col-12 col-md-6" data-aos="fade-up">
                        <div className="d-flex flex-column align-items-center">
                        <img
                            src="/iphone.webp"
                            className="img-fluid imagen"
                            alt="iPhone"
                        />

                        <a href="https://exodocell.netlify.app/"><button className="btn btn-dark">Abrir CRM</button></a>
                        </div>
                    </div>

                </div>

            </div>

        </section>
    );
}

export default Login;