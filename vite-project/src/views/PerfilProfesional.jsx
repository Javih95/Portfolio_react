import "./Css/PerfilProfesional.css"
import { UseInView } from "../hooks/useInViews";
export function PerfilProfesional() {
  const [perfilProfesionalRef, isPerfilProfesionalVisible] = UseInView();
  return (
    <section ref={perfilProfesionalRef} className={`profile-card card fade-in ${isPerfilProfesionalVisible ? "visible" : ""}`}>
      <div className="contenido">
      <h2>Perfil Profesional</h2>
      <p>
      Desarrollador Full Stack con formación en la Universidad Tecnológica Nacional (UTN) y experiencia en diversas tecnologías. Mi enfoque abarca desde el frontend, con React, JavaScript y Bootstrap, hasta el backend, con Node.js, .NET y Python, complementado con sólidos conocimientos en bases de datos SQL.
      </p>
      <p>
      Comprometido con la resolución de problemas y el aprendizaje continuo, busco participar en proyectos desafiantes donde pueda aplicar mis habilidades y contribuir al éxito del equipo.
      </p>
      </div>
    </section>
  );
};