import { useState } from "react"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router"

function Login({setUsuarioAdmin}) {
    
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()
    // el form ejecuta handlesubmit para que no se recargue la pagina y para guardar los datos del form (password y email) ese objeto que crea handleSubmit
    //lo va a recibir el parametro de iniciarSesion que en este caso es (usuario) 
    // toda la vinculacion esta en <form onSubmit={handleSubmit(iniciarSesion)}>

    const navegacion = useNavigate()
    const [error, setError] = useState("")
    const iniciarSesion =(usuario)=>{
        if (usuario.email === import.meta.env.VITE_API_EMAIL && usuario.password === import.meta.env.VITE_API_PASSWORD){
            setUsuarioAdmin(true)
            navegacion("/administrador")
        } else{
            setError("Usuario/Contraseña incorrecto")
        }
    }

    
    return (
        <section className="min-vh-100 d-flex align-items-center bg-body-secondary pt-5">
            <div className="container">
                <div className="row align-items-center">
                    
                    <div className="col-12 col-md-6">
                            <form onSubmit={handleSubmit(iniciarSesion)} className="">
                                <div class="mb-3">
                                    <label for="exampleInputEmail1" class="form-label">Correo Electronico:</label>
                                    <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Juanperez@gmail.com" {...register("email",{
                                        required: "el mail es un dato obligatorio",
                                        pattern:{
                                            value:/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/,
                                            message: "el mail debe tener un formato valido. Por ejemplo: Juanperez@mail.com"
                                        }
                                    })}></input>
                                    <p className="text-danger">{errors.email?.message}</p>
                                </div>
                                <div class="mb-3">
                                    <label for="exampleInputPassword1" class="form-label">Contraseña:</label>
                                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="12345678" {...register("password",{
                                        required: "el password es un dato obligatorio",
                                        pattern:{
                                            value:/^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{8,16}$/,
                                            message: "La contraseña debe tener entre 8 y 16 caracteres, al menos un dígito, al menos una minúscula, al menos una mayúscula y al menos un caracter no alfanumérico. "
                                        }
                                    })}></input>
                                    <p className="text-danger">{errors.password?.message}</p>
                                </div>
                                <button type="submit" class="btn btn-dark">Enviar</button>
                                <p class="text-danger">{error}</p>
                            </form>
                    </div>

                    <div className="col-12 col-md-6">
                        <img src="/iphone.webp" className="img-fluid imagen" alt="iPhone" />
                    </div>
                    
                </div>
            </div>
        </section>
    )
}

export default Login