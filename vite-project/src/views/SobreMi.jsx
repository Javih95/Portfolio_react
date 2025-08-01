import './Css/SobreMi.css';
import { LineaDeTiempo } from "../componentes/LineaDeTiempo"
import { UseInView } from "../hooks/useInViews";
export const SobreMi = () => {
  const [sobreMiRef, sobreMiVisible] = UseInView();
  return (
    <section id="about-me" ref={sobreMiRef} className={`about-me card slide-in ${sobreMiVisible ? "visible" : ""}`}>
      <h2>Sobre Mí</h2>
      <div className="about-me-content">
        <p>
          Soy curioso, autodidacta y apasionado por la tecnología. Disfruto tanto de construir soluciones prácticas como de explorar áreas creativas como el diseño de videojuegos y la robótica.
          Cuando no estoy trabajando, me gusta:
          Diseñar juegos interactivos que mezclen narrativa y mecánicas simples.
          Aprender sobre inteligencia artificial, desarrollo multiplataforma y nuevas tendencias del sector.
          Crear prototipos con Arduino que enseñen programación y electrónica de forma lúdica.
        </p>
        <p>Siempre busco crecer profesionalmente, compartir lo que aprendo y ser parte de proyectos que generen un impacto positivo.</p>
      </div>
      <LineaDeTiempo />
    </section>
  );
};
