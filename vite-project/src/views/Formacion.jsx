import "./Css/Formacion.css"
import { UseInView } from "../hooks/useInViews";
export function Formacion() {
    const [formacionRef, isFormacionVisible] = UseInView();
    return (
        <section ref={formacionRef} className={`profile-card card slide-in-right ${isFormacionVisible ? "visible" : ""}`}>
            <div className="contenido">
                <h2>Formacion</h2>
                <ul>
                    <li>
                        <h3>Tecnicatura universitaria en Programación - Universidad Tecnológica Nacional

                        </h3>
                        <p>Actualmente cursando el ultimo cuatrimestre de la carrera, con finalización en diciembre de 2025</p>
                    </li>

                    <li>
                        <h3>Curso de Java para Principiantes - TodoCode</h3>
                        <p>2025 - Aprendí la sintaxis, estructuras y conceptos básicos de uno de los lenguajes de programación más reconocidos y utilizados
                        </p>
                    </li>
                    <li>
                        <h3>Curso de Git y GitHub desde cero - TodoCode</h3>
                        <p>2024 - Aprendí los conceptos necesarios para poder manejar repositorios remotos mediante el manejador de versiones Git</p>
                    </li>
                    <li>
                        <h3>Curso de Introducción a las Bases de Datos - TodoCode</h3>
                        <p>2024 - Aprendí los conceptos necesarios para poder crear, modelar y realizar consultas y subconsultas SQL sobre bases de datos relacionales
                        </p>
                    </li>
                    <li>
                        <h3>Trayecto Programador JR - Unity learn
                        </h3>
                        <p>2021 - Conociendo c# y como profundizar en los pilares de la programación orientada a objetos y su aplicación
                        </p>
                    </li>
                    <li>
                        <h3>Capacitación Diseñador web experto - Universidad Tecnológica Nacional
                        </h3>
                        <p>Capacitación de 80hs donde aprendí las bases de HTML,CSS Y JavaScript
                        </p>
                    </li>
                </ul>

            </div>
        </section>
    );
};