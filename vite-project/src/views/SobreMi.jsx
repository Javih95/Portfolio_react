import './Css/SobreMi.css';
import {LineaDeTiempo} from"../componentes/LineaDeTiempo"
import { UseInView } from "../hooks/useInViews";
export const SobreMi= () => {
  const [sobreMiRef, sobreMiVisible] = UseInView();
  return (
    <section id="about-me"  ref={sobreMiRef} className={`about-me card slide-in ${sobreMiVisible ? "visible" : ""}`}>
      <h2>Sobre Mí</h2>
      <div className="about-me-content">
        <p>
        "Soy desarrollador full stack dedicado a crear soluciones innovadoras y videojuegos que fusionan creatividad y funcionalidad. 
        Mi especialización en tecnologías como React, Node.js y .NET me permite desarrollar aplicaciones web robustas y escalables,
         mientras que mi interés en el diseño de videojuegos me impulsa a explorar nuevas formas de interacción y entretenimiento. 
         Actualmente, trabajo en proyectos que combinan ambos mundos, buscando crear experiencias únicas para los usuarios."
        </p>
        <p>
        Disfruto del aprendizaje continuo y la exploración de nuevas tecnologías.
        En mi tiempo libre, me sumerjo en el mundo del desarrollo de videojuegos,me informo y experimento con avances tecnologicos y doy vida a proyectos de robótica con Arduino.
        </p>
      </div>
      <LineaDeTiempo/>
    </section>
  );
};
