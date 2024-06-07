import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import homeLogo from "../../Assets/home-main.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";

import { SiCodeforces,SiLeetcode,
    SiGeeksforgeeks,
    SiCodechef, } from "react-icons/si";


import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I fell in love with programming and I have at least learnt
              something, I think… 🤷‍♂️
              <br />
              <br />I am fluent in classics like
              <i>
                <b className="purple"> C++, Javascript and React.Js... </b>
              </i>
              <br />
              <br />
              My field of Interest's are building new  &nbsp;
              <i>
                <b className="purple">Projects using skills like HTML, JS and React.Js</b> and
                also in areas related to{" "}
                <b className="purple">
                  SQL , AI , CLOUD & NETWOKING 
                </b>
              </i>
              <br />
              <br />
              Currently, I am also open for <b className="purple"> Freelance and Internships</b> and
              <i>
                <b className="purple">
                  {" "}
                  Building projects using 
                </b>
              </i>
              &nbsp; skills like
              <i>
                <b className="purple"> React.js and Node.js.</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={homeLogo} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/priyanshh007"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://x.com/Priyans49694446"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/priyansh-sharma-984425248/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.geeksforgeeks.org/user/priyansh_code24/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <SiGeeksforgeeks />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://leetcode.com/u/priyansh__9/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <SiLeetcode />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://codeforces.com/profile/priyanshh_"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <SiCodeforces/>
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.codechef.com/users/priyansh007"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <SiCodechef />
                </a>
              </li>
             
            </ul>
            <br></br>
            <br></br>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
