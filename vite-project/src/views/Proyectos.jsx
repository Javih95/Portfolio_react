import './Css/Projectos.css';
import { UseInView } from "../hooks/useInViews";
export const Projectos = () => {
  const [proyectosRef, isProyectosVisible] = UseInView();
  const projects = [
    {
      id: 1,
      title: 'Control de Stock API',
      description:
        'API para gestionar inventarios, desarrollada con Node.js, Express y MySQL.',
      image: 'controlStock.png',
      demoLink: 'https://tuprojectdemo.com',
      repoLink: 'https://github.com/Javih95/api_controlStock_deploy',
    },
    {
      id: 2,
      title: 'Guardianes de la selva',
      description:
        'Videojuego 2D desarrollado en Phyton, usando la libreria Pygame.',
      image: './guardianesDeLaSelva.png',
      demoLink: 'https://youtu.be/AEzF_PqgqmM?si=LKtgndIOND08r3Y7',
      repoLink: 'https://github.com/Javih95/Aguirre-Javier-TPpygame-final/tree/0919bd1e0c1bb25f8abe7bd3c9e11e40543c1bed/tpPygame1/My_game',
    },
    {
      id: 4,
      title: 'Contador con displays',
      description:
        'Comenzamos con el armado de un contador de 0 a 99 utilizando dos displays de 7 segmentos y tres botones para controlar la cuenta. luego modificamos este modelo para que al accionar un switch mostrara numeros primos del 0 al 99. a este ultimo se le quito la funcion del contador con botones para aplicar la funcion de controlar un motor de cc en base a la temperatura ambiente que obtenemos de un sensor tmp36 (para accionar y apagar el motor) y un sensor de luz ambiental(que controla el sentido de giro mediante parametros determinados).',
      image: './arduinoProject.png',
      demoLink: '',
      repoLink: 'https://github.com/Javih95/AguirreJavierTParduino.git',
    },
    {
      id: 5,
      title: 'Proyecto recuperar Bot',
      description:
        'Proyecto para armar y programar un robot basado en arduino Uno, donde se busca recrear el instructivo de armado y programar desde cero la funcionalidad del mismo debido a que la plataforma donde fue comprado desaparecio en 2021',
      image: './botImagen.png',
      demoLink: '',
      repoLink: 'https://github.com/Javih95/ProyectoRobot.git',
    }
  ];

  return (
    <section  ref={proyectosRef} id="projects" className={`projects card slide-in-right ${isProyectosVisible ? "visible" : ""}`}>
      <h2>Proyectos</h2>
      <div className="projects-container">
        {projects.map(project => (
          <div className="project-card" key={project.id}>
            <img
              src={project.image}
              alt={project.title}
              className="project-image"
            />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-links">
              {project.demoLink && (
                <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                  Ver Demo
                </a>
              )}
              {project.repoLink && (
                <a href={project.repoLink} target="_blank" rel="noopener noreferrer">
                  Ver Código
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
