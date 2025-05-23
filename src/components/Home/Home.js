import { Container, Row, Col, Button } from "react-bootstrap";
import homeLogo from "../../Assets/avatar-mesa-sem-fundo.png";
import Particle from "../Particle";
import Home2 from "./Home2";
import Projects from "../Projects/Projects";
import pdf from "../../Assets/Curriculo.pdf";
import About from "../About/About";
import Education from "../ProjectCard/Education";

import { FaLinkedinIn } from "react-icons/fa";
import { AiFillGithub, AiOutlineDownload } from "react-icons/ai";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />

        <Container className="home-content">
          <Row>
            {/* Texto e Botões */}
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Olá!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                Eu sou <strong className="main-name">RHUÃ YURI</strong>
              </h1>

              {/* Botão de Download */}
              <div style={{ paddingLeft: 50, paddingTop: 50, textAlign: "left" }}>
                <Button
                  variant="primary"
                  href={pdf}
                  target="_blank"
                  style={{ maxWidth: "250px", position: "relative", zIndex: 1 }}
                >
                  <AiOutlineDownload />
                  &nbsp;Download CV
                </Button>
              </div>

              {/* Redes Sociais */}
              <div style={{ paddingLeft: 50, paddingTop: 10, textAlign: "left" }}>
                <ul className="home-about-social-links">
                  <li className="social-icons">
                    <a
                      href="https://github.com/RhuanYuri"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour home-social-icons"
                    >
                      <AiFillGithub />
                    </a>
                  </li>
                  <li className="social-icons">
                    <a
                      href="https://www.linkedin.com/in/rhua-yuri-nascimento-sardinha/"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour home-social-icons"
                    >
                      <FaLinkedinIn />
                    </a>
                  </li>
                </ul>
              </div>
            </Col>

            {/* Imagem */}
            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>

      {/* Outras seções da Home */}
      <Home2 />
      <Projects />
      <Education />
      <About />
    </section>
  );
}

export default Home;
