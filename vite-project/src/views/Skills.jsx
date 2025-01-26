import './Css/Skills.css';
import { FaReact, FaNodeJs, FaDatabase } from 'react-icons/fa';
import { SiDotnet, SiMysql } from 'react-icons/si';

export const Skills = () => {
    const skills = [
        { id: 1, name: 'React', icon: <FaReact /> },
        { id: 2, name: 'Node.js', icon: <FaNodeJs /> },
        { id: 3, name: '.NET', icon: <SiDotnet /> },
        { id: 4, name: 'MySQL', icon: <SiMysql /> },
        { id: 5, name: 'Bases de Datos', icon: <FaDatabase /> },
      ];
    
      return (
        <section id="skills" className="skills">
          <h2>Habilidades</h2>
          <div className="skills-container">
            {skills.map(skill => (
              <div className="skill-card" key={skill.id}>
                <div className="skill-icon">{skill.icon}</div>
                <h3>{skill.name}</h3>
              </div>
            ))}
          </div>
        </section>
      );
    };

