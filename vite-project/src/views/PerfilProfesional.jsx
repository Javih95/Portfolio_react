import "./Css/PerfilProfesional.css"
import { UseInView } from "../hooks/useInViews";
export function PerfilProfesional() {
  const [perfilProfesionalRef, isPerfilProfesionalVisible] = UseInView();
  return (
    <section ref={perfilProfesionalRef} className={`profile-card card slide-in-right ${isPerfilProfesionalVisible ? "visible" : ""}`}>
      <div className="contenido">
        <h2>Perfil Profesional</h2>
        <p>
          Finalizando la Tecnicatura Universitaria en Programación en la Universidad Tecnológica Nacional (UTN). Experiencia práctica en:
        </p>
        <ul>
          <li>Frontend: React, Next.js, JavaScript, TypeScript, HTML, CSS, Bootstrap.</li>
          <li>Backend: Node.js, Express.js, C#, .NET, Java, C++, Python.</li>
          <li>Bases de datos: SQL Server, MySQL, SQLite, MongoDB.</li>
        </ul>
        <p>
          He trabajado en proyectos personales y académicos que incluyen APIs REST, aplicaciones web y de escritorio, así como sistemas de gestión de datos. Me motiva resolver problemas, aprender nuevas tecnologías y colaborar en equipo.
        </p>
      </div>
    </section>
  );
};