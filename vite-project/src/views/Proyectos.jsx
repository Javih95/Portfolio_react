import './Css/Projectos.css';
import { UseInView } from "../hooks/useInViews";
export const Projectos = () => {
  const [proyectosRef, isProyectosVisible] = UseInView();
  const projects = [
    {
      id: 1,
      title: 'Gestión de Stock y Pedidos - Frontend',
      description:
        'Aplicación web desarrollada con Next.js y TypeScript para gestionar productos, pedidos y clientes. Consume una API REST.Está desplegada en Vercel.',
      image: 'controldestock.png',
      demoLink: "https://app-stock-frontend.vercel.app/dashboard",
      repoLink: 'https://github.com/Javih95/app-stock.git',
    },
    {
      id: 2,
      title: 'Control de Stock API',
      
      description:
        'API REST creada con JavaScript, Node.js, Express.js  y Drizzle como ORM. Utiliza SQLite como base de datos, alojada en Turso.Está desplegada en Vercel.',
      image: 'api.png',
      repoLink: 'https://github.com/Javih95/TP2-UTN-PIII-C331',
      demoLink: "https://api-control-stock-deploy.vercel.app/materiales",
    },
    {
      id: 3,
      title: 'Blog personal',
      description:
        'Blog personal desarrollado: frontend en React , JavaScript y desplegado en netlify y backend con Express , Node.js y MongoDB desplegado en render',
      image: './blogImagen.png',
      demoLink: 'https://68acf89fe89b8f70a2a3cfde--storied-cendol-727841.netlify.app/',
      repoLink: 'https://github.com/Javih95/blog.git',
    },
        {
      id: 4,
      title: 'Refrigestion',
      description:
      'Aplicación pensada para optimizar la gestión de servicios de un instalador de aires acondicionados.Funcionalidades principales: Registro de clientes y equipos de aire acondicionado.Carga y seguimiento de los servicios realizados.Generación de reportes detallados en PDF, a modo de certificado de servicio para el cliente.Aplicación de escritorio desarrollada con .NET 8 (WinForms) y SQL Server',
      image: './refrigestionImagen.png',
      demoLink: '',
      repoLink: 'https://github.com/Javih95/refrigestion.git',
    },
    {
      id: 5,
      title: 'Guardianes de la selva',
      description:
        'Videojuego 2D desarrollado en Phyton, usando la libreria Pygame.',
      image: './guardianesDeLaSelva.png',
      demoLink: 'https://youtu.be/AEzF_PqgqmM?si=LKtgndIOND08r3Y7',
      repoLink: 'https://github.com/Javih95/Aguirre-Javier-TPpygame-final/tree/0919bd1e0c1bb25f8abe7bd3c9e11e40543c1bed/tpPygame1/My_game',
    },
    {
      id:6,
      title: 'Proyecto recuperar Bot',
      description:
        'Proyecto para armar y programar un robot basado en arduino Uno, donde se busca recrear el instructivo de armado y programar desde cero la funcionalidad del mismo debido a que la plataforma donde fue comprado desaparecio en 2021',
      image: './botImagen.png',
      demoLink: '',
      repoLink: 'https://github.com/Javih95/ProyectoRobot.git',
    }
  ];

  return (
    <section ref={proyectosRef} id="projects" className={`projects card slide-in-right ${isProyectosVisible ? "visible" : ""}`}>
      <h2>Proyectos</h2>
      <div className="projects-container">
        {projects.map(project => (
          <div className="project-card" key={project.id}>
            <div className="project-image-conteiner">
                <img
                src={project.image}
                alt={project.title}
                className="project-image"
              />

            </div>

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
