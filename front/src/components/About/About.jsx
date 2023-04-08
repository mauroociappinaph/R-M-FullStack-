import React from "react";

class About extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <div className="about-me">
        <div></div>
        <h1>About Me</h1>
        <p>¡Hola! Soy un programador fullstack y fotógrafo apasionado por la tecnología y la creatividad. Me encanta construir soluciones tecnológicas que puedan mejorar la vida de las personas y capturar momentos únicos a través de mi cámara.</p>
        <p>Como programador, tengo experiencia en el desarrollo de aplicaciones web y móviles utilizando tecnologías como React, Angular, Node.js y MongoDB. También tengo habilidades en diseño UI/UX y en la creación de contenido multimedia para redes sociales y sitios web. En mi tiempo libre, me gusta explorar nuevos lugares y capturar paisajes y retratos con mi cámara.</p>
        
        <h2>Experiencia Laboral</h2>
        <p>Trabajé durante dos años en una empresa de desarrollo de software, donde fui parte de un equipo encargado de construir una aplicación móvil para el control de inventarios en tiempo real. Durante mi tiempo allí, aprendí a trabajar en equipo, a solucionar problemas complejos y a desarrollar soluciones escalables.</p>
        
        <h2>Habilidades Técnicas</h2>
        <ul>
          <li>React</li>
          <li>Angular</li>
          <li>Node.js</li>
          <li>MongoDB</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>Javascript</li>
          <li>UI/UX Design</li>
        </ul>
        
        <h2>Mis Hobbies</h2>
        <ul>
          <li>Fotografía</li>
          <li>Senderismo</li>
          <li>Cocina</li>
        </ul>
      </div>
    );
  }

}
export default About;
