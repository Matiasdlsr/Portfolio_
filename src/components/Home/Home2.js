import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

// import pdf from "../../Assets/../Assets/delSeñorMatias_Cv.pdf";
import pdf from "../../Assets/Projects/delSeñorMatias_Cv.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              <span className="purple"> Objetivo Laboral</span> 
            </h1>
            <p className="home-about-body">
            Desarrollador de software en búsqueda de un puesto en donde pueda desarrollar mis habilidadestécnicas,  
              <i>
                <b className="purple">Aportar valor y crecer profesionalmente en una gran empresa </b>
              </i>
              <br />
              <br />
              Poseo +6 meses colaborando activamente en todo el ciclo de creación de software; analisis, diseño, desarrollo y producción.
              
              <br />
              <br />
              Capaz de trabajar en entornos agiles con facilidad de adaptación, siempre en continuo aprendizaje.
              Mis campos de interes son &nbsp;
              <i>
                <b className="purple">desarrollo de software y gestión de proyectos
                </b>
                </i>
              {/* Whenever possible, I also apply my passion for developing products
              with <b className="purple">Node.js</b> and
              <i>
                <b className="purple">
                  {" "}
                  Modern Javascript Library and Frameworks
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="purple"> React.js and Next.js</b>
              </i> */}
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        
        <Row>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
