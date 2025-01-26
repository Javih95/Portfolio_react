import './Css/Footer.css';

export const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Javih - Todos los derechos reservados.</p>
      <p>
        Desarrollado con <span role="img" aria-label="heart">❤️</span> y React.
      </p>
    </footer>
  );
};

