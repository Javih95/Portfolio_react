import './LineaDeTiempo.css';

export const LineaDeTiempo = () => {
  const events = [
    { year: '2018', description: 'Comencé a estudiar programación.' },
    { year: '2020', description: 'Mi primer proyecto freelance.' },
    { year: '2022', description: 'Me especialicé en desarrollo fullstack.' },
    { year: '2024', description: 'Creé mi primer videojuego en Unity.' },
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


