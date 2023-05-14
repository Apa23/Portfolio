import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../styles/AboutMe.css";

export const AboutMeComponent = () => {
  return (
    <Container id="about-me" className="info-section">
      <Row>
        <Col className="about-me-info">
          <h2 className="section-title">About Me</h2>
          <h5>Web developer</h5>
          <h5>Estudiante de Ingeniería de sistemas e informática</h5>
          <br/>
          <p>
            Soy una persona capacitada para el trabajo en equipo y la resolución
            de problemas. Me apasiona el aprendizaje y estar en constante
            crecimieto. Soy autodidacta y trato de compartir mis conocimientos
            con los demás. Cuento con experiencia en desarrollo web con énfasis
            en front-end a través de Wordpress, HTML, CSS, JavaScript, React y
            el manejo de distintas librerías. Cuento con conocimientos en manejo
            de versiones a través de GIT, manejo de estructuras de datos,
            programación orientada a objetos en Java y Python.
          </p>
        </Col>
        <Col className="about-me-photo" xs={4}>
          <img id="my-photo" src="src\assets\my-photo.jpg" alt="My photo" />
        </Col>
      </Row>
    </Container>
  );
};
