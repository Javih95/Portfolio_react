import './LineaDeTiempo.css';

export const LineaDeTiempo = () => {
  const events = [
    {
      year: '2025',
      title: 'Desarrollo de mi portfolio web',
      description: 'Creación de un portfolio profesional utilizando React y CSS puro.',
    },
    {
      year: '2024',
      title: 'Trabajo práctico Node.js',
      description: 'Desarrollé una API REST con Node.js, Express y MySQL.',
    },
    {
      year: '2023',
      title: 'Proyecto de videojuego 2D',
      description: 'Desarrollé un videojuego en Unity con un enfoque en narrativa creativa.',
    },
    {
      year: '2022',
      title: 'Inicio de Tecnicatura en Programación',
      description: 'Comencé mi formación como programador en la Universidad Tecnológica Nacional.',
    },
  ];

  return (
    <section id="timeline" className="timeline">
      <h2>Mi Trayectoria</h2>
      <div className="timeline-container">
        {events.map((event, index) => (
          <div
            className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
            key={index}
          >
            <div className="timeline-content">
              <span className="timeline-year">{event.year}</span>
              <h3>{event.title}</h3>
              <p>{event.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

