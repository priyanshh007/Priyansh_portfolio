import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Priyansh Sharma </span>
            from <span className="purple"> Bhopal, India.</span>
            <br />
            I am currently pursuing  B-Tech in Information Technology from LNCT,BHOPAL .
            Till Now i am maintaining CGPA of <span className="purple">8.16 </span>
            <br />
            I have completed Class 10th & 12th from PNP Memorial School (C.B.S.E) , Shridham. 
            With <span className="purple">90%</span>  & <span className="purple"> 93.2% </span>
            respectively.
          
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Singing
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing guitar
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Debuuging for hours is the only task I love to do."{" "}
          </p>
          <footer className="blockquote-footer">Priyansh</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
