import "./Css/PerfilProfesional.css"
import { UseInView } from "../hooks/useInViews";
export function PerfilProfesional() {
  const [perfilProfesionalRef, isPerfilProfesionalVisible] = UseInView();
  return (
    <section ref={perfilProfesionalRef} className={`profile-card card slide-in-right ${isPerfilProfesionalVisible ? "visible" : ""}`}>
      <div className="contenido">
      <h2>Perfil Profesional</h2>
      <p>
      Actualmente finalizando mi formación en la Universidad Tecnológica Nacional (UTN) como Técnico universitario en Programación la cual me brinda una solida experiencia en el diseño y desarrollo de aplicaciones web, escritorio y de consola, APIs REST y Bases de datos. Trabajo tanto en el frontend — React, Next.js, JavaScript, TypeScript, Bootstrap, HTML & CSS — como en el backend — Node.js, Express js, C#,.NET,Java, C++ y Python —, utilizando bases de datos como SQLserver, MySQL, SQLite y MongoDB.
      </p>
      <p>
      Me motivan la resolución de problemas y el aprendizaje constante , intentando aplicar la tecnología para crear soluciones funcionales y con impacto. Busco colaborar en proyectos donde pueda aportar valor real, seguir creciendo y trabajar en equipo con compromiso y creatividad.
      </p>
      </div>
    </section>
  );
};