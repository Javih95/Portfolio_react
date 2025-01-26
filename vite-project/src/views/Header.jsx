import './Css/Header.css';
import{FaLinkedin} from "react-icons/fa";
import{FaWhatsapp} from "react-icons/fa";
import{IoMail} from "react-icons/io5";
export function Header () {
  return (
    <header className="header">
      <div className="header-card">
        <div className="header-content">
          <h1 className="header-title">Javier Aguirre</h1>
          <h2 className="header-subtitle">Desarrollador Fullstack</h2>
          <p className="header-description">
            Soy un desarrollador apasionado con experiencia en tecnologías como .NET, React, Node.js y Unity. 
            Me encanta resolver problemas y crear soluciones innovadoras.
          </p>
          <div className="header-socials">
            <a href="https://www.linkedin.com/in/javier-dev" target="_blank" rel="noopener noreferrer">
              <FaLinkedin/>
            </a>
            <a href="https://wa.me/yournumber" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp/>
            </a>
            <a href="mailto:javier@email.com" target="_blank" rel="noopener noreferrer">
              <IoMail/>
            </a>
          </div>
        </div>
        <div className="header-image">
          <img src="https://unavatar.io/Javih" alt="Javier Dev" />
        </div>
      </div>
    </header>
  );
};

