import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import EducationCard from "./EducationCard";
import Particle from "../Particle";
import "../../style.css";
import "../../App.css";

function Education() {
  return (
    <Container fluid className="education-section" style={{ padding: "20px", marginTop: "20px" }} id="education">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Minha <strong className="purple">Formação</strong>
        </h1>
        <p style={{ color: "white" }}>
          Aqui estão alguns dos lugares onde obtive minha formação.
        </p>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {/* Card 1: Ensino Técnico */}
          <Col md={6} lg={4} className="education-card mb-4"> {/* md=6 para 2 por linha, lg=4 para 3 por linha em telas grandes. mb-4 adiciona margem inferior */}
            <EducationCard
              institution="Instituto Federal do Maranhão (IFMA)"
              level="Ensino Médio Técnico - Técnico em Informática"
              startDate="2019"
              endDate="2021"
            />
          </Col>

          {/* Card 2: Ensino Superior */}
          <Col md={6} lg={4} className="education-card mb-4"> {/* md=6 para 2 por linha, lg=4 para 3 por linha em telas grandes. mb-4 adiciona margem inferior */}
            <EducationCard
              institution="Universidade Federal do Maranhão (UFMA)"
              level="Bacharelado Interdisciplinar em Ciência e Tecnologia"
              startDate="2022"
              endDate="2026"
            />
          </Col>

          {/* Adicione mais cards aqui se tiver mais formações, seguindo o mesmo padrão de Col */}

        </Row>
      </Container>
    </Container>
  );
}

export default Education;