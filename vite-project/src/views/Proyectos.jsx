import './Css/Projectos.css';
import { UseInView } from "../hooks/useInViews";
import { createPortal } from "react-dom";
import { useState } from 'react';
export const Projectos = () => {
  const [proyectosRef, isProyectosVisible] = UseInView();
  const [selectedVideo, setSelectedVideo] = useState(null);
  const projects = [
    {
      id: 4,
      featured: true,
      type: 'Desktop',
      title: 'Blog Manager',
      description: 'Aplicación de escritorio desarrollada en Java para administrar contenido de mi blog. Consume una API REST desplegada en Render y utiliza Supabase para almacenar imágenes.',
      image: './BM.png',
      videoId: 'GxNiOmiryMg',
      repoLink: 'https://github.com/Javih95/BlogManagerApp.git',
    },
    {
      id: 7,
      featured: true,
      type: 'Desktop',
      title: 'Asistente de IA',
      description: 'Aplicación de escritorio desarrollada en Python que integra la API de Gemini. Permite interacción mediante texto y voz, gestión de múltiples conversaciones e historial persistente.',
      image: './snake.png',
      videoId: '7EG01CCD1PA?si=rxHOds6Y9kCIFDiV',
      repoLink: 'https://github.com/Javih95/Mi_asistente_snake_Docu.git',
    },
    {
      id: 11,
      type: 'Desktop',
      title: 'Refrigestion',
      description: 'Aplicación de escritorio desarrollada con .NET 8 (WinForms) y SQL Server para la gestión de servicios técnicos de aire acondicionado.',
      image: './refrigestionImagen.png',
      demoLink: '',
      repoLink: 'https://github.com/Javih95/refrigestion.git',
    },
    {
      id: 1,
      featured: true,
      type: 'Web',
      title: 'Gestión de Stock y Pedidos',
      description: 'Aplicación web desarrollada con Next.js y TypeScript para gestionar productos, pedidos y clientes. Consume una API REST y está desplegada en Vercel.',
      image: 'Stocklogo.webp',
      demoLink: 'https://app-stock-frontend.vercel.app/dashboard',
      repoLink: 'https://github.com/Javih95/app-stock.git',
    },
    {
      id: 2,
      type: 'API',
      title: 'Control de Stock API',
      description: 'API REST desarrollada con Node.js, Express y Drizzle ORM. Utiliza SQLite alojado en Turso y se encuentra desplegada en Vercel.',
      image: 'api.png',
      demoLink: 'https://api-control-stock-deploy.vercel.app/materiales',
      repoLink: 'https://github.com/Javih95/TP2-UTN-PIII-C331',
    },
    {
      id: 3,
      type: 'Web',
      title: 'Ecommerce',
      description: 'Frontend de ecommerce desarrollado con React. Incluye catálogo de productos, carrito de compras y gestión de usuarios mediante consumo de API REST.',
      image: './ecomerce.png',
      demoLink: '',
      repoLink: 'https://github.com/Javih95/eCommerce.git',
    },
    {
      id: 10,
      type: 'Web',
      title: 'Blog Personal',
      description: 'Blog personal desarrollado con React, Express y MongoDB. Desplegado en Netlify y Render.',
      image: './blogImagen.png',
      demoLink: 'https://68ae05581bd0540008e521ab--storied-cendol-727841.netlify.app/',
      repoLink: 'https://github.com/Javih95/blog.git',
    },
    {
      id: 8,
      type: 'API',
      title: 'API de Gestión de Eventos',
      description: 'API REST desarrollada con Node.js, Express y Google Sheets como base de datos. Permite gestionar invitados y confirmaciones de asistencia.',
      image: './apiBoda.png',
      repoLink: 'https://github.com/Javih95/apiBodas.git',
    },
    {
      id: 9,
      type: 'API',
      title: 'Ecommerce API',
      description: 'API REST desarrollada con Node.js, Express, Sequelize y MySQL para la gestión de productos, usuarios y pedidos.',
      image: './apiEcomerce.png',
      repoLink: 'https://github.com/Javih95/eCommerceBackend.git',
    },
    {
      id: 5,
      type: 'Juegos y Hobbys',
      title: 'Guardianes de la Selva',
      description: 'Videojuego 2D desarrollado en Python utilizando Pygame.',
      image: './guardianesDeLaSelva.png',
      videoId:'AEzF_PqgqmM?si=LKtgndIOND08r3Y7',
      repoLink: 'https://github.com/Javih95/Aguirre-Javier-TPpygame-final/tree/0919bd1e0c1bb25f8abe7bd3c9e11e40543c1bed/tpPygame1/My_game',
    },
    {
      id: 6,
      type: 'Juegos y Hobbys',
      title: 'Robot Educativo con Arduino',
      description: 'Proyecto basado en Arduino Uno que recrea desde cero el armado, programación y documentación de un robot educativo.',
      image: './botImagen.png',
      demoLink: '',
      repoLink: 'https://github.com/Javih95/ProyectoRobot.git',
    },
  ];

  const featuredProjects = projects.filter(project => project.featured);

  const projectTypes = [
    'Web',
    'API',
    'Desktop',
    'Juegos y Hobbys'
  ];

  return (
    <section
      ref={proyectosRef}
      id="projects"
      className={`projects card slide-in-right ${isProyectosVisible ? "visible" : ""}`}
    > <h2>Proyectos</h2>
      <div>
        <h3 className="project-type-title">⭐ Proyectos Destacados</h3>

        <div className="projects-container">
          {featuredProjects.map(project => (
            <div className="project-card featured" key={project.id}>

              <div className="project-image-conteiner">
                <div className="project-image-conteiner">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="project-image"
                  />

                  {project.videoId && (
                    <button
                      className="play-button"
                      onClick={() => setSelectedVideo(project.videoId)}
                    >
                      ▶
                    </button>
                  )}
                </div>
              </div>

              <h3>{project.title}</h3>
              <p>{project.description}</p>

              <div className="project-links">
                {project.demoLink && (
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Ver Demo
                  </a>
                )}

                {project.repoLink && (
                  <a
                    href={project.repoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Ver Código
                  </a>
                )}
              </div>

            </div>
          ))}
        </div>
      </div>

      {projectTypes.map(type => (
        <div key={type}>
          <h3 className="project-type-title">{type}</h3>

          <div className="projects-container">
            {projects
              .filter(project => project.type === type)
              .map(project => (
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
                      <a
                        href={project.demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Ver Demo
                      </a>
                    )}

                    {project.repoLink && (
                      <a
                        href={project.repoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Ver Código
                      </a>
                    )}
                  </div>

                </div>
              ))}
          </div>
        </div>
      ))}
      {selectedVideo &&
  createPortal(
    <div
      className="video-modal-overlay"
      onClick={() => setSelectedVideo(null)}
    >
      <div
        className="video-modal"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="close-modal"
          onClick={() => setSelectedVideo(null)}
        >
          ✕
        </button>

        <iframe
          width="100%"
          height="500"
          src={`https://www.youtube.com/embed/${selectedVideo}`}
          title="Video Demo"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>,
    document.body
  )
}
    </section>
  );
}
