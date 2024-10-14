import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPowerbi,
  SiMicrosoftexcel,

} from "react-icons/si";

import {
  DiGit,
  DiScrum,
  DiJira,
} from "react-icons/di";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiScrum />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJira />
      </Col> 
      <Col xs={4} md={2} className="tech-icons">
        <SiPowerbi />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMicrosoftexcel />
      </Col>  

      {/* añadir Git, Power Bi, Metodologias Agiles (SCRUM, KANBAN), JIRA, EXCEL */}
    </Row>
  );
}

export default Toolstack;
