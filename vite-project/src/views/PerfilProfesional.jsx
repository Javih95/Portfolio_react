import "./Css/PerfilProfesional.css"
import { UseInView } from "../hooks/useInViews";
export function PerfilProfesional() {
  const [perfilProfesionalRef, isPerfilProfesionalVisible] = UseInView();
  return (
    <section ref={perfilProfesionalRef} className={`profile-card card slide-in-right ${isPerfilProfesionalVisible ? "visible" : ""}`}>
      <div className="contenido">
        <h2>Perfil Profesional</h2>

        <p>
          Soy estudiante avanzado de la Tecnicatura Universitaria en Programación de la UTN y desarrollador Full Stack con especialización en Backend Java. Me enfoco en el diseño y desarrollo de APIs REST, lógica de negocio y gestión de bases de datos, aplicando buenas prácticas de desarrollo y arquitectura de software.
        </p>

        <p>
          Tengo experiencia desarrollando aplicaciones web y de escritorio utilizando tecnologías como Java, Spring Boot, React, Node.js, TypeScript y SQL. A través de proyectos personales y académicos he participado en la construcción de sistemas de gestión, aplicaciones CRUD y soluciones orientadas a la automatización de procesos.
        </p>

        <p>
          Disfruto resolver problemas, aprender nuevas tecnologías y trabajar en equipo para crear aplicaciones mantenibles, escalables y centradas en las necesidades de los usuarios.
        </p>
      </div>
    </section>
  );
};