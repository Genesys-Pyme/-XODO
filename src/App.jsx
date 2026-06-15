import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css'
import Nav from './components/shared/Nav';
import Footer from './components/shared/Footer';
import Contacto from './components/pages/Contacto';
import Inicio from './components/pages/Inicio';
import Login from './components/pages/Login';
import Nosotros from './components/pages/Nosotros';
import { BrowserRouter, Route, Routes } from 'react-router';
import Administrador from './components/pages/Administrador';
import Protector from './components/routes/Protector';
import { useState } from 'react';
import FormularioAdmin from './components/pages/FormularioAdmin';



function App() {
  const [usuarioAdmin, setUsuarioAdmin] = useState(false)
  const [productos, setProductos] = useState ([])
  
  const agregarProducto = (productoNuevo) => {
    setProductos([...productos, productoNuevo]);
  }

const borrarProducto = (id) => {
  const productosFiltrados = productos.filter(
    (_, indice) => indice !== id
  );

  setProductos(productosFiltrados);
};

const editarProducto = (indice, productoEditado) => {
  const copiaProductos = [...productos];

  copiaProductos[indice] = productoEditado;

  setProductos(copiaProductos);
};

  return (
    <>
    <BrowserRouter>
      <Nav usuarioAdmin={usuarioAdmin} setUsuarioAdmin={setUsuarioAdmin}></Nav>
        <main> 
          <Routes>
            <Route path='/' element={<Inicio productos={productos}></Inicio>} ></Route>
            <Route path='/nosotros' element={<Nosotros></Nosotros>}></Route>
            <Route path='/contacto' element={<Contacto></Contacto>}></Route>
            <Route path='/login' element={<Login setUsuarioAdmin={setUsuarioAdmin}></Login>}> </Route>
            <Route path='/administrador' element={<Protector usuarioAdmin={usuarioAdmin}></Protector>}>
              <Route index element={<Administrador productos={productos} borrarProducto={borrarProducto} editarProducto={editarProducto}></Administrador>}/>
              <Route path="crear" element={<FormularioAdmin agregarProducto={agregarProducto} ></FormularioAdmin>}></Route>
              <Route path="editar" element={<FormularioAdmin></FormularioAdmin>}></Route>
            </Route>
          </Routes>
        </main>
      <Footer></Footer>
    </BrowserRouter>
    </>
  )
}

export default App
