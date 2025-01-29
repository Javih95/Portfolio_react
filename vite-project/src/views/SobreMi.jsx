import './Css/SobreMi.css';
import {LineaDeTiempo} from"../componentes/LineaDeTiempo"
export const SobreMi= () => {
  return (
    <section id="about-me" className="about-me card">
      <h2>Sobre Mí</h2>
      <div className="about-me-content">
        <p>
          Soy desarrollador fullstack especializado en tecnologías como React, Node.js y .NET. 
          Me apasiona crear soluciones innovadoras y videojuegos que mezclen creatividad y funcionalidad. 
          Actualmente, estoy trabajando en proyectos que combinan desarrollo web y diseño de videojuegos.
        </p>
        <p>
          Disfruto aprender nuevas tecnologías y mejorar mis habilidades constantemente. 
          En mi tiempo libre, me gusta jugar videojuegos, explorar nuevas recetas en la cocina, 
          y trabajar en proyectos de robótica con Arduino.
        </p>
      </div>
      <LineaDeTiempo/>
    </section>
  );
};
