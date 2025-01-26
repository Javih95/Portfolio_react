import './App.css'
import {Navbar} from './views/NavBar';
import { Header } from './views/Header';
import { PerfilProfesional } from './views/PerfilProfesional';
import { Skills } from './views/Skills';
import { Projectos } from './views/Proyectos';
import { SobreMi } from './views/SobreMi';
import { Contacto } from './views/Contacto';
import { Footer } from './views/Footer';
function App() {
  return (
    <>
    <Navbar/>
    <Header/>
    <PerfilProfesional/>
    <Skills/>
    <Projectos/>
    <SobreMi/>
    <Contacto/>
    <Footer/>
    </>
  );
}

export default App;
