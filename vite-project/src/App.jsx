import './App.css'
import { useEffect } from "react";
import {Navbar} from './views/NavBar';
import { Header } from './views/Header';
import { PerfilProfesional } from './views/PerfilProfesional';
import { Skills } from './views/Skills';
import { Projectos } from './views/Proyectos';
import { SobreMi } from './views/SobreMi';
import { Contacto } from './views/Contacto';
import { Footer } from './views/Footer';
import { Formacion } from './views/Formacion';

function App() {
   useEffect(() => {
    const pingBackend = () => {
      fetch("https://blog-backend-yvk6.onrender.com/posts")
        .then((res) => {
          if (!res.ok) throw new Error("Error al hacer ping al servidor");
          console.log("✅ Servidor activo:", new Date().toLocaleTimeString());
        })
        .catch((err) => console.error("⚠️ Error de conexión:", err));
    };

    // Hacer el primer ping al montar el componente
    pingBackend();

    // Repetir cada 30 segundos
    const interval = setInterval(pingBackend, 30000);

    // Limpiar el intervalo al desmontar
    return () => clearInterval(interval);
  }, []);

  return (
    <>
    <Navbar/>
    <Header/>
    <PerfilProfesional/>
    <Skills/>
    <Projectos/>
    <Formacion/>
    <SobreMi/>
    <Contacto/>
    <Footer/>
    </>
  );
}

export default App;
