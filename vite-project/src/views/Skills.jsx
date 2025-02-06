import './Css/Skills.css';
import { UseInView } from "../hooks/useInViews";
import { FaReact, FaNodeJs, FaDatabase, FaJs, FaHtml5, FaBootstrap, FaCogs, FaPython, FaGitAlt, FaGamepad, FaMicrochip, FaAndroid, FaCode, FaCheckSquare, FaPlug, FaPuzzlePiece, FaBook } from 'react-icons/fa';

export const Skills = () => {
  const skills = [
    { id: 1, name: 'React', icon: <FaReact />, category: 'frontend' },
    { id: 2, name: 'JavaScript', icon: <FaJs />, category: 'frontend' },
    { id: 3, name: 'HTML & CSS', icon: <FaHtml5 />, category: 'frontend' },
    { id: 4, name: 'Bootstrap', icon: <FaBootstrap />, category: 'frontend' },
    { id: 5, name: 'Node.js', icon: <FaNodeJs />, category: 'backend' },
    { id: 6, name: 'Express.js', icon: <FaNodeJs />, category: 'backend' },
    { id: 7, name: '.NET (C#)', icon: <FaCogs />, category: 'backend' },
    { id: 8, name: 'Python', icon: <FaPython />, category: 'backend' },
    { id: 9, name: 'C++', icon: <FaCogs />, category: 'backend' },
    { id: 10, name: 'SQL', icon: <FaDatabase />, category: 'other' },
    { id: 11, name: 'Git & GitHub', icon: <FaGitAlt />, category: 'other' },
    { id: 12, name: 'Unity (C#)', icon: <FaGamepad />, category: 'other' },
    { id: 13, name: 'Godot (GDScript)', icon: <FaGamepad />, category: 'other' },
    { id: 14, name: 'Arduino (C++)', icon: <FaMicrochip />, category: 'other' },
    { id: 17, name: 'Unit Testing', icon: <FaCheckSquare />, category: 'other' }
  ];

  const [skillsRef, skillsVisible] = UseInView();
  return (
    <section
      id="skills"
      ref={skillsRef}
      className={`skills card slide-in ${skillsVisible ? "visible" : ""}`}
    >
      <h2>Habilidades</h2>
      <div className="skills-wrapper">
        <div className="skills-category">
          <h3>Frontend</h3>
          <div className="skills-container">
            {skills
              .filter(skill => skill.category === "frontend")
              .map(skill => (
                <div className="skill-card" key={skill.id}>
                  <div className="skill-icon">{skill.icon}</div>
                  <h4>{skill.name}</h4>
                </div>
              ))}
          </div>
        </div>
        <div className="skills-category">
          <h3>Backend</h3>
          <div className="skills-container">
            {skills
              .filter(skill => skill.category === "backend")
              .map(skill => (
                <div className="skill-card" key={skill.id}>
                  <div className="skill-icon">{skill.icon}</div>
                  <h4>{skill.name}</h4>
                </div>
              ))}
          </div>
        </div>
        <div className="skills-category">
          <h3>Otras</h3>
          <div className="skills-container">
            {skills
              .filter(skill => skill.category === "other")
              .map(skill => (
                <div className="skill-card" key={skill.id}>
                  <div className="skill-icon">{skill.icon}</div>
                  <h4>{skill.name}</h4>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

