import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import funeraria from "../../Assets/Projects/funeraria.png";
import editor from "../../Assets/Projects/codeEditor.png";
import miGuardia from "../../Assets/Projects/mi_Guardia.png";
import ruleta from "../../Assets/Projects/ruleta.png";



function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          <strong className="purple">Proyectos </strong>recientes
        </h1>
        {/* <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p> */}
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Resumy"
              description="Challenge tecnico para extraer y resumir contenido de portales de noticias, realizado con Python, Flask, Scrapy, Redis"
              ghLink="https://github.com/Matiasdlsr/Challenge-sirius"
              // demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={funeraria}
              isBlog={false}
              title="Funeraria GR"
              description="Software (En proceso actualmente) para gestión de funerarias, realizado con C#, SQLServer y ReactJs."
              // ghLink="https://github.com/soumyajit4419/Editor.io"
              // demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={miGuardia}
              isBlog={false}
              title="miGuardia"
              description="Brinda información en tiempo real sobre el estado de las guardias médicas más cercanas y gestión de la misma, realizado con NodeJs, MongoDB y ReactJs."
              ghLink="https://github.com/Matiasdlsr/FundacionPescar-miGuardia"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ruleta}
              isBlog={false}
              title="JP Morgan - Mentoring"
              description="Actividad lúdica para conocer a los mentores de JP Morgan, realizado con HTML, CSS Y JavaScript."
              ghLink="https://github.com/Matiasdlsr/JPMorgan-Mentores"
              demoLink="https://matiasdlsr.github.io/JPMorgan-Mentores/"
            />              
          </Col>

          {/*
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Plant AI"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col> */}

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col> */}

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
