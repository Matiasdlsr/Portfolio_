import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
} from "react-icons/di";
import {
  SiCsharp,
  SiCss3,
  SiHtml5,
  SiMicrosoftsqlserver,
  SiJavascript,
  SiC,
  SiExpress,
} from "react-icons/si";
import { TbBrandGolang } from "react-icons/tb";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiCss3 />
      </Col> 
      <Col xs={4} md={2} className="tech-icons">
        <SiHtml5 />
      </Col> 
      <Col xs={4} md={2} className="tech-icons">
        <SiJavascript />
      </Col> 
      
      <Col xs={4} md={2} className="tech-icons">
        <SiExpress />
      </Col> 
      <Col xs={4} md={2} className="tech-icons">
        <SiCsharp />
      </Col> 
      
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMicrosoftsqlserver />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
      </Col>
      {/* <Col xs={4} md={2} className="tech-icons">
        <DiJava />
      </Col> */}
    </Row>
  );
}

export default Techstack;
