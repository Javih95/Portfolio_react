import { UseInView } from "../hooks/useInViews";
import './Css/Header.css';
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { IoMail } from "react-icons/io5";

export function Header() {
  const [headerRef, isHeaderVisible] = UseInView();
  return (
    <header ref={headerRef} className={`header card fade-in ${isHeaderVisible ? "visible" : ""}`}>
      <div className="header-content">
        <h1 className="header-title">Javier Aguirre</h1>
        <h2 className="header-subtitle">Desarrollador Fullstack</h2>
        <p className="header-description">
        Transformo desafíos en soluciones efectivas. Si buscas un desarrollador comprometido para tu equipo o proyecto, escríbeme y trabajemos juntos.
        </p>
        <div className="header-socials">
          <a href="https://www.linkedin.com/in/javier-aguirre95" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://github.com/Javih95" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="mailto:javih_aguirre@outlook.es" target="_blank" rel="noopener noreferrer">
            <IoMail />
          </a>
        </div>
      </div>
      <div className="header-image">
        <img src="/Foto_perfil.jpeg" alt="Foto de Javih" />
      </div>
    </header>
  );
}