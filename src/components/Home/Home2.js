import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar-sem-fundo.png";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              DEIXE-ME <span className="purple">APRESENTAR</span>
            </h1>
            <p className="home-about-body">
              Minha jornada no mundo da tecnologia começou como{" "}
              <i>
                <b className="purple">Cientista de Dados</b>
              </i>{" "}
              na{" "}
              <i>
                <b className="purple">Pulse</b>
              </i>
              , onde me dediquei à análise de dados para construir modelos
              preditivos. Meu tempo na Pulse também se expandiu para a{" "}
              <i>
                <b className="purple">Engenharia de Dados</b>
              </i>
              , utilizando ferramentas como{" "}
              <i>
                <b className="purple">DBT</b>
              </i>{" "}
              e{" "}
              <i>
                <b className="purple">Airflow</b>
              </i>{" "}
              para criação e orquestração de modelos de dados.
              <br />
              <br />
              Depois disso, fiz a transição para a{" "}
              <i>
                <b className="purple">
                  Secretaria de Educação do Estado do Piauí
                </b>
              </i>
              . Lá, fui fundamental no desenvolvimento de novas funcionalidades
              para o sistema acadêmico do estado, ganhando experiência prática
              com{" "}
              <i>
                <b className="purple">Node.js</b>
              </i>
              ,{" "}
              <i>
                <b className="purple">Express</b>
              </i>
              ,{" "}
              <i>
                <b className="purple">NestJS</b>
              </i>
              ,{" "}
              <i>
                <b className="purple">React</b>
              </i>{" "}
              e{" "}
              <i>
                <b className="purple">Angular</b>
              </i>
              .
              <br />
              <br />
              Atualmente, estou na{" "}
              <i>
                <b className="purple">Dynamos Tecnologia</b>
              </i>
              , onde estou dedicado à criação de novos softwares de gestão para
              a empresa, utilizando principalmente{" "}
              <i>
                <b className="purple">PHP</b>
              </i>
              .
              <br />
              <br />
              Paralelamente às minhas funções profissionais, também cultivei
              minha paixão por desenvolvimento criando diversos sites como{" "}
              <i>
                <b className="purple">freelancer</b>
              </i>
              .
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
