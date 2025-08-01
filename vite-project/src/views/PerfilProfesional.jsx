import "./Css/PerfilProfesional.css"
import { UseInView } from "../hooks/useInViews";
export function PerfilProfesional() {
  const [perfilProfesionalRef, isPerfilProfesionalVisible] = UseInView();
  return (
    <section ref={perfilProfesionalRef} className={`profile-card card slide-in-right ${isPerfilProfesionalVisible ? "visible" : ""}`}>
      <div className="contenido">
      <h2>Perfil Profesional</h2>
      <p>
      Soy Desarrollador Full Stack con formación en la Universidad Tecnológica Nacional (UTN) y experiencia en el diseño y desarrollo de aplicaciones web, APIs REST y videojuegos. Trabajo tanto en el frontend —React, Next.js, JavaScript, TypeScript, Bootstrap,HTML & CSS— como en el backend —Node.js, Express, C#,.NET,Java, C++ y Python—, utilizando bases de datos como SQLserver, MySQL, SQLite y MongoDB.
      </p>
      <p>
      Comprometido con la resolución de problemas y el aprendizaje constante , intentando aplicar la tecnología para crear soluciones funcionales y con impacto. Busco colaborar en proyectos donde pueda aportar valor real, seguir creciendo y trabajar en equipo con compromiso y creatividad.
      </p>
      </div>
    </section>
  );
};