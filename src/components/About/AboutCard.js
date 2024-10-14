import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            <span className="purple">Desarrollador de software </span> altamente capacitado para trabajar de manera colaborativa, me adapto facilmente a los entornos cambiantes
            soy de <span className="purple"> Buenos Aires, Argentina.</span>
            <br />
            Actualmente estoy en un proyecto como Desarrollador <span className="purple"> Full Stack </span> con C#, ReactJs, SQL Server. 
            <br />
            Me encuentro cursando el 3er año de Ingenieria Informatica en UNLaM
            <br />
            
            Aparte de la informatica, mis hobbies son:
          </p>
          
          <ul>
            <li className="about-activity">
              <ImPointRight /> Natación
            </li>
            <li className="about-activity">
              <ImPointRight /> Voley
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Soumyajit</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
