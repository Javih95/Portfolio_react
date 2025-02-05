import './LineaDeTiempo.css';

export const LineaDeTiempo = () => {
  const events = [
    { year: '2020', description: ' Desarrollo de videojuegos con Unity (2D y 3D)' },
    { year: '2021', description: 'Obtuve mi insignia como Programador JR Unity learn(C#)' },
    { year: '2022', description: 'Me especialicé en desarrollo de Arduino' },
    {year: '2023', description: 'Inicio la Tecnicatura en Programacion en la Universidad Tecnologica Nacional'}, 
    { year: '2023', description: 'Creé mi primer app de consola python' },
    { year: '2024', description: 'aprendi .NET con proyectos de winforms' },
    { year: '2024', description: 'profundice mis conocimientos en desarrollo web y bases de datos' },
    { year: '2025', description: 'aprendiendo React' },
  ];

  return (
    <section id="timeline" className="timeline">
      <h2>Mi Trayectoria</h2>
      <div className="timeline-container">
        {events.map((event, index) => (
          <div
            className={`timeline-event ${
              index % 2 === 0 ? 'above' : 'below'
            }`}
            key={index}
          >
            <div className="timeline-content">
              <h3>{event.year}</h3>
              <p>{event.description}</p>
            </div>
            <div className="timeline-circle"></div>
          </div>
        ))}
        <div className="timeline-line"></div>
      </div>
    </section>
  );
};


