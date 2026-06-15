import { Navigate, Outlet } from "react-router";

function Protector({ usuarioAdmin }) {

    if (usuarioAdmin === null) {
        return (
            <div className="min-vh-100 d-flex justify-content-center align-items-center">
                <h3>Cargando...</h3>
            </div>
        );
    }

    if (!usuarioAdmin) {
        return <Navigate to="/login" />;
    }

    return <Outlet />;
}

export default Protector;