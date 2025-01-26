import "./Css/Contacto.css"

export const Contacto = () => {
  return (
    <section id="contact" className="contact">
      <h2>Contacto</h2>
      <p>¿Quieres colaborar conmigo o tienes alguna consulta? ¡Escríbeme!</p>
      <form className="contact-form">
        <input type="text" placeholder="Tu Nombre" required />
        <input type="email" placeholder="Tu Email" required />
        <textarea placeholder="Tu Mensaje" rows="5" required></textarea>
        <button type="submit">Enviar</button>
      </form>
      <div className="contact-links">
        <a
          href="https://linkedin.com/in/tu-perfil"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        <a href="https://wa.me/tu-numero" target="_blank" rel="noopener noreferrer">
          WhatsApp
        </a>
        <a href="mailto:tu-email@gmail.com" target="_blank" rel="noopener noreferrer">
          Email
        </a>
      </div>
    </section>
  );
};
