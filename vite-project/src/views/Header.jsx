import { useState } from "react";
import { UseInView } from "../hooks/useInViews";
import './Css/Header.css';
import { FaLinkedin, FaGithub,FaFileDownload} from "react-icons/fa";
import { IoMail } from "react-icons/io5";

export function Header() {
  const [headerRef, isHeaderVisible] = UseInView();
  const [mostrarModal, setMostrarModal] = useState(false);
  const [copiado, setCopiado] = useState(false);


  const handleClickMail = (e) => {
    e.preventDefault();
    setMostrarModal(true);
  };

  const cerrarModal = () => setMostrarModal(false);

  const copiarEmail = async () => {
    try {
      await navigator.clipboard.writeText("javih.dev95@gmail.com");
      setCopiado(true);
      setTimeout(() => setCopiado(false), 2000);
    } catch (err) {
      console.error("Error al copiar:", err);
    }
  };

  return (
    <header ref={headerRef} id="Header" className={`header card slide-in ${isHeaderVisible ? "visible" : ""}`}>
      <div className="header-content">
        <h1 className="header-title">Javier Aguirre</h1>
        <h2 className="header-subtitle">Desarrollador Full Stack | Especializado en Backend Java</h2>
        <p className="header-description">
          Cuento con experiencia
          en el desarrollo de aplicaciones web, APIs REST y bases de datos relacionales.
           Actualmente continúo formándome y participando en proyectos que me 
         permiten aplicar buenas prácticas de desarrollo y ampliar mis conocimientos técnicos.
        </p>
        <div className="header-socials">
          <a href="https://www.linkedin.com/in/javier-aguirre95" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://github.com/Javih95" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="#" onClick={handleClickMail}>
            <IoMail />
          </a>
           <a   href="./JavierAguirreCV.pdf" download="JavierAguirreCV.pdf" target="_blank" rel="noopener noreferrer"  className="cv-download">
            <FaFileDownload className="cv-icon"/>
            <p className="textoDescargar">Descargar CV</p>
          </a>
        </div>
      </div>

      <div className="header-image">
        <img src="./Foto_perfil.jpeg" alt="Foto de Javih" />
      </div>

      {mostrarModal && (
        <div className="modal-overlay" onClick={cerrarModal}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <h2 className="modal-subtitle">Mi email es:</h2>
            <strong>javih.dev95@gmail.com</strong>
            <br /><br />
            <button className="modal-button" onClick={copiarEmail}>
              {copiado ? "¡Copiado!" : "Copiar email"}
            </button>
            <br /><br />
            <button className="modal-button-salir" onClick={cerrarModal}>Cerrar</button>
          </div>
        </div>
      )}
    </header>
  );
}


 