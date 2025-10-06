import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
          Me apasiona aprender cosas nuevas y mejorar tanto mis habilidades como los proyectos en los que trabajo, ya sea <span className="purple"> liderando un proyecto </span>o profundizando en los detalles, me concentro en crear soluciones que generen un impacto real.
          <br />
            <br />
            Actualmente estoy en un proyecto como <span className="purple"> Desarrollador Full Stack </span> con C#, ReactJs, SQL Server. 
            <br />
            Me encuentro cursando el <span className="purple">3er año de Ingenieria Informatica </span>en UNLaM, San Justo, Buenos Aires.
            <br />
            <br />
            
            Aparte de la informatica, mis hobbies son:
          </p>
          
          <ul>
            <li className="about-activity">
              <ImPointRight /> Natación y voley
            </li>
            <li className="about-activity">
              <ImPointRight /> VideoJuegos
            </li>
            <li className="about-activity">
              <ImPointRight /> Peliculas de marvel
            </li>
          </ul>
          {/* insert Frase */}
          {/* <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Soumyajit</footer> */}
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
