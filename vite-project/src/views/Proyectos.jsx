import './Css/Projectos.css';

export const Projectos = () => {
  const projects = [
    {
      id: 1,
      title: 'Control de Stock API',
      description:
        'API para gestionar inventarios, desarrollada con Node.js, Express y MySQL.',
      image: 'project1.png', // Imagen de ejemplo
      demoLink: 'https://tuprojectdemo.com',
      repoLink: 'https://github.com/usuario/control-stock-api',
    },
    {
      id: 2,
      title: 'Juego 2D',
      description:
        'Videojuego 2D en Unity, donde un zombie busca recuperar su humanidad.',
      image: 'project2.png',
      demoLink: '',
      repoLink: 'https://github.com/usuario/juego-2d',
    },
    {
      id: 3,
      title: 'Portfolio Web',
      description:
        'Portfolio personal desarrollado con React y estilizado con CSS puro.',
      image: 'project3.png',
      demoLink: '',
      repoLink: 'https://github.com/usuario/portfolio',
    },
  ];

  return (
    <section id="projects" className="projects card">
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
};
