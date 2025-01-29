import './Css/Navbar.css';

export function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="/" className="navbar-logo">
          Javih
        </a>
        <ul className="navbar-menu">
          <li className="navbar-item">
            <a href="#about-me" className="navbar-link">
              Sobre mí
            </a>
          </li>
          <li className="navbar-item">
            <a href="#projects" className="navbar-link">
              Proyectos
            </a>
          </li>
          <li className="navbar-item">
            <a href="#skills" className="navbar-link">
              Habilidades
            </a>
          </li>
          <li className="navbar-item">
            <a href="#contact" className="navbar-link">
              Contacto
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
