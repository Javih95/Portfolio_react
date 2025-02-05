import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

import "./Css/Contacto.css"

export const Contacto = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_p5wtvjb', 'template_sjchv85', form.current, {
        publicKey: 'w2N5IkWy2lpT_INmD',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  return (
    <section id="contact" className="contact card">
      <h2>Contacto</h2>
      <p>¿Quieres colaborar conmigo o tienes alguna consulta? ¡Escríbeme!</p>
      <form className="contact-form" ref={form} onSubmit={sendEmail}>
        <input type="text" name="user_name" placeholder="Tu Nombre" required />
        <input type="email" name="user_email" placeholder="Tu Email" required />
        <textarea name="message" placeholder="Tu Mensaje" rows="5" required></textarea>
        <button type="submit" value="Send">Enviar</button>
      </form>
      <div className="contact-links">
        <a
          href="https://www.linkedin.com/in/javier-aguirre95"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        <a href="https://github.com/Javih95" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        <a href="mailto:javih_aguirre@outlook.es" target="_blank" rel="noopener noreferrer">
          Email
        </a>
      </div>
    </section>
  );
};
