import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiGit,
  DiHtml5,
  DiBootstrap,
  DiCss3,

} from "react-icons/di";
import { SiExpress, SiSqlite } from "react-icons/si";
import { AiOutlineConsoleSql } from "react-icons/ai";


function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <CgCPlusPlus />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <h5>EXPRESS JS</h5> <SiExpress/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        < AiOutlineConsoleSql/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
      
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <h5>REACT</h5> <DiReact />
      </Col>
      
      <Col xs={4} md={2} className="tech-icons">
      <h5>MONGODB</h5>  <DiMongodb />
      </Col>
     
      <Col xs={4} md={2} className="tech-icons">
      <h5>GIT</h5> <DiGit />
      </Col>
      
    
      <Col xs={4} md={2} className="tech-icons">
      <h5>BOOTSTRAP</h5>  <DiBootstrap />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <h5>HTML</h5> <DiHtml5 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
       <h5>CSS</h5><DiCss3 />
      </Col>
    </Row>
  );
}

export default Techstack;
