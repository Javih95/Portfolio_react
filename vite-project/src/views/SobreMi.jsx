import './Css/SobreMi.css';
import { LineaDeTiempo } from "../componentes/LineaDeTiempo"
import { UseInView } from "../hooks/useInViews";
export const SobreMi = () => {
  const [sobreMiRef, sobreMiVisible] = UseInView();
  return (
    <section id="about-me" ref={sobreMiRef} className={`about-me card slide-in ${sobreMiVisible ? "visible" : ""}`}>
      <h2>Sobre Mí</h2>
      <div className="about-me-content">
        <ul>
          <li>Curioso y autodidacta, disfruto explorando áreas creativas como videojuegos y robótica.</li>
          <li>Me interesa la inteligencia artificial y el desarrollo multiplataforma.</li>
          <li>Siempre buscando aprender y aplicar nuevos conocimientos.</li>
        </ul>
        <p>Busco crecer profesionalmente, compartir lo que aprendo y ser parte de proyectos que generen un impacto positivo.</p>
      </div>
    </section>
  );
};
