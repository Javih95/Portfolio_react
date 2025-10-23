import './Css/Projectos.css';
import { UseInView } from "../hooks/useInViews";

export const Projectos = () => {
  const [proyectosRef, isProyectosVisible] = UseInView();

  const projects = [
      {
      id: 4,
      type: 'Desktop',
      title: 'Asistente de IA',
      description: 'Snake es una aplicación de escritorio en Python que funciona como asistente conversacional inteligente. Permite interactuar mediante texto y voz, gestionar múltiples chats, guardar historial de conversaciones y descargar respuestas. Está diseñada con una interfaz moderna en modo oscuro con detalles en violeta, inspirada en aplicaciones de mensajería.',
      image: './snake.png',
      demoLink: 'https://youtu.be/7EG01CCD1PA?si=rxHOds6Y9kCIFDiV',
      repoLink: 'https://github.com/Javih95/Mi_asistente_snake_Docu.git',
  },
    {
      id: 7,
      type: 'Desktop',
      title: 'Refrigestion',
      description: 'Aplicación de escritorio en .NET 8 (WinForms) y SQL Server para gestionar servicios de aire acondicionado.',
      image: './refrigestionImagen.png',
      demoLink: '',
      repoLink: 'https://github.com/Javih95/refrigestion.git',
    },
    {
      id: 1,
      type: 'Web',
      title: 'Gestión de Stock y Pedidos - Frontend',
      description: 'Aplicación web desarrollada con Next.js y TypeScript para gestionar productos, pedidos y clientes. Consume una API REST. Desplegada en Vercel.',
      image: 'controldestock.png',
      demoLink: "https://app-stock-frontend.vercel.app/dashboard",
      repoLink: 'https://github.com/Javih95/app-stock.git',
    },
    {
      id: 2,
      type: 'API',
      title: 'Control de Stock API',
      description: 'API REST creada con JavaScript, Node.js, Express.js  y Drizzle como ORM. Utiliza SQLite como base de datos, alojada en Turso. Desplegada en Vercel.',
      image: 'api.png',
      repoLink: 'https://github.com/Javih95/TP2-UTN-PIII-C331',
      demoLink: "https://api-control-stock-deploy.vercel.app/materiales",
    },
    {
      id: 3,
      type: 'Web',
      title: 'Ecomerce Frontend',
      description: 'Frontend para ecomerce, desarrollado con React. Consume una API REST. Incluye catálogo de productos, carrito de compras y gestión de usuarios.',
      image: './ecomerce.png',
      demoLink: '',
      repoLink: 'https://github.com/Javih95/eCommerce.git',
    },
    {
      id: 5,
      type: 'Juegos y Hobbys',
      title: 'Guardianes de la selva',
      description: 'Videojuego 2D desarrollado en Python usando Pygame.',
      image: './guardianesDeLaSelva.png',
      demoLink: 'https://youtu.be/AEzF_PqgqmM?si=LKtgndIOND08r3Y7',
      repoLink: 'https://github.com/Javih95/Aguirre-Javier-TPpygame-final/tree/0919bd1e0c1bb25f8abe7bd3c9e11e40543c1bed/tpPygame1/My_game',
    },
    {
      id: 6,
      type: 'Juegos y Hobbys',
      title: 'Proyecto recuperar Bot',
      description: 'Proyecto de robot con Arduino Uno. Se recrea el instructivo y programación desde cero.',
      image: './botImagen.png',
      demoLink: '',
      repoLink: 'https://github.com/Javih95/ProyectoRobot.git',
    },
    {
      id: 8,
      type: 'API',
      title: 'Api para confirmar asistencia a boda',
      description: 'API REST para gestionar confirmaciones de asistencia a boda, desarrollada con JavaScript, Node.js, Express.js y Google Sheets como base de datos. Incluye manejo de invitados y confirmaciones.',
      image: './apiBoda.png',
      repoLink: 'https://github.com/Javih95/apiBodas.git',
    },
    {
      id: 9,
      type: 'API',
      title: 'Api para ecomerce',
      description: 'API REST para ecomerce, desarrollada con JavaScript, Node.js, Express.js y Sequelize como ORM. Utiliza MySql como base de datos. Incluye manejo de productos, usuarios y pedidos.',
      image: './apiEcomerce.png',
      repoLink: 'https://github.com/Javih95/eCommerceBackend.git',
    },
    {
      id: 10,
      type: 'Web',
      title: 'Blog personal',
      description: 'Blog personal: frontend en React, backend con Express y MongoDB. Desplegado en Netlify y Render.',
      image: './blogImagen.png',
      demoLink: 'https://68ae05581bd0540008e521ab--storied-cendol-727841.netlify.app/',
      repoLink: 'https://github.com/Javih95/blog.git',
    },

  ];

  // Agrupar proyectos por tipo
  const projectTypes = [...new Set(projects.map(p => p.type))];

  return (
    <section ref={proyectosRef} id="projects" className={`projects card slide-in-right ${isProyectosVisible ? "visible" : ""}`}>
      <h2>Proyectos</h2>
      {projectTypes.map(type => (
        <div key={type}>
          <h3 className="project-type-title">{type}</h3>
          <div className="projects-container">
            {projects
              .filter(p => p.type === type)
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
        </div>
      ))}
    </section>
  );
}
