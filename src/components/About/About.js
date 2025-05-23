import React from "react";
import { Container } from "react-bootstrap";
import Particle from "../Particle";
import Techstack from "./Techstack";
import Toolstack from "./Toolstack";

function About() {
  return (
    <Container id="tech" fluid className="about-section">
      <Particle />
      <Container>
  
        <h1 className="project-heading">
          <strong className="purple">Tecnologias </strong>
        </h1>

        <Techstack />

        <h1 className="project-heading">
          <strong className="purple">Ferramentas</strong> que eu uso
        </h1>
        <Toolstack />
      </Container>
    </Container>
  );
}

export default About;
