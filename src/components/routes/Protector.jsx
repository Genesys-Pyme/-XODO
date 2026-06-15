import { Navigate, Outlet } from "react-router";

function Protector({usuarioAdmin}) {
    //si no soy administrador

    if(!usuarioAdmin){
        return <Navigate to="/"></Navigate>
    }

    //si soy administrador

    return <Outlet></Outlet>
    
}

export default Protector