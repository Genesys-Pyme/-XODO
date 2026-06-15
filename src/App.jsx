import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css';

import Nav from './components/shared/Nav';
import Footer from './components/shared/Footer';
import Contacto from './components/pages/Contacto';
import Inicio from './components/pages/Inicio';
import Login from './components/pages/Login';
import Nosotros from './components/pages/Nosotros';
import Administrador from './components/pages/Administrador';
import Protector from './components/routes/Protector';
import FormularioAdmin from './components/pages/FormularioAdmin';

import { BrowserRouter, Route, Routes } from 'react-router';
import { useEffect, useState } from 'react';

import { db, auth } from './firebase/config';

import {
  collection,
  getDocs,
  deleteDoc,
  doc,
  updateDoc
} from 'firebase/firestore';

import {
  onAuthStateChanged
} from 'firebase/auth';

function App() {

  const [usuarioAdmin, setUsuarioAdmin] = useState(null);
  const [productos, setProductos] = useState([]);

  // AUTH FIREBASE
  useEffect(() => {

    const unsubscribe = onAuthStateChanged(
      auth,
      (user) => {
        setUsuarioAdmin(!!user);
      }
    );

    return () => unsubscribe();

  }, []);

  // PRODUCTOS
  const obtenerProductos = async () => {
  try {

    const querySnapshot = await getDocs(
      collection(db, "productos")
    );

    console.log("Cantidad documentos:", querySnapshot.size);

    const productosFirebase = [];

    querySnapshot.forEach((documento) => {

      console.log("Documento:", documento.id);
      console.log("Datos:", documento.data());

      productosFirebase.push({
        id: documento.id,
        ...documento.data(),
      });
    });

    console.log("Productos finales:", productosFirebase);

    setProductos(productosFirebase);

  } catch (error) {
    console.log(error);
  }
};

  useEffect(() => {
    obtenerProductos();
  }, []);

  const borrarProducto = async (id) => {

    try {

      await deleteDoc(
        doc(db, "productos", id)
      );

      obtenerProductos();

    } catch (error) {

      console.log(error);

    }
  };

  const editarProducto = async (productoEditado) => {

    try {

      const productoRef = doc(
        db,
        "productos",
        productoEditado.id
      );

      await updateDoc(productoRef, {
        producto: productoEditado.producto,
        precio: productoEditado.precio,
        imagen: productoEditado.imagen,
        bateria: productoEditado.bateria,
        color: productoEditado.color,
        descripcion: productoEditado.descripcion,
      });

      obtenerProductos();

    } catch (error) {

      console.log(error);

    }
  };

  return (
    <BrowserRouter>

      <Nav
        usuarioAdmin={usuarioAdmin}
        setUsuarioAdmin={setUsuarioAdmin}
      />

      <main>

        <Routes>

          <Route
            path="/"
            element={
              <Inicio productos={productos} />
            }
          />

          <Route
            path="/nosotros"
            element={<Nosotros />}
          />

          <Route
            path="/contacto"
            element={<Contacto />}
          />

          <Route
            path="/login"
            element={
              <Login
                setUsuarioAdmin={setUsuarioAdmin}
              />
            }
          />

          <Route
            path="/administrador"
            element={
              <Protector
                usuarioAdmin={usuarioAdmin}
              />
            }
          >

            <Route
              index
              element={
                <Administrador
                  productos={productos}
                  borrarProducto={borrarProducto}
                  editarProducto={editarProducto}
                />
              }
            />

            <Route
              path="crear"
              element={<FormularioAdmin />}
            />

          </Route>

        </Routes>

      </main>

      <Footer />

    </BrowserRouter>
  );
}

export default App;