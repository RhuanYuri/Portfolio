import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import sevidanes from "../../Assets/Projects/sevidanes.png";
import iseduc from "../../Assets/Projects/iseduc.png";
import riso from "../../Assets/Projects/riso.png";

function Projects() {
  return (
    <Container fluid className="project-section" id="work">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Meus <strong className="purple">Trabalhos </strong>
        </h1>
        <p style={{ color: "white" }}>
          Aqui está alguns dos projetos desenvolvidos ao longo da minha jornada
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={iseduc}
              isBlog={false}
              title="Seduc"
              description="Auxiliei na criação de novas features para o sistema acadêmico do Estado do Piauí, além de fazer a menutenção do mesmo."
              demoLink="https://www.pi.gov.br/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={riso}
              isBlog={false}
              title="Dynamos Tecnologia"
              description="Trabalho no desenvolvimentos de dos mais diversos softwares para gestão de empresas."
              demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sevidanes}
              isBlog={false}
              title="Freelancer"
              description="Desenvolvimento de um dashboard de analise de dados para um cliente."
              demoLink="https://sevidanes-dashboard.vercel.app/"              
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
