import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";




import Wanderlust from "../../Assets/Projects/wanderlust.png";
import tnews from "../../Assets/Projects/Technewswebsite.png";
import foodw from "../../Assets/Projects/foodwebsite.png";
import samwaad from "../../Assets/Projects/samwaad.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Wanderlust}
              isBlog={false}
              title="Wanderlust"
              description="Explore Wanderlust, a hotel booking website, connecting travelers with unique accommodations and hosts seamlessly. With a meticulously crafted interface powered by the robust MERN stack, it offers a perfect blend of comfort, style, and convenience for both travelers and hosts. Discover your next adventure or share your space effortlessly with Wanderlust."
              // description="Many folks face issues while forming their resume. So to ease this task for everyone, I made a resume-generator using HTML, CSS, JS and bootstrap. This will generate your resume as you fill the cv-form."
              ghLink="https://github.com/priyanshh007/WANDERLUST"
              demoLink="https://wanderlust-jcro.onrender.com/listings"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={samwaad}
              isBlog={false}
              title="Samwaad"
              description="Introducing Samwaad, a dynamic app built with React and Firebase, designed to connect and empower the farming community. Engage with fellow farmers, share insights, and access vital resources seamlessly through our intuitive platform. Samwaad fosters collaboration, knowledge exchange, and a stronger agricultural network for a thriving community."
               ghLink="https://github.com/priyanshh007/Samwaad"
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Note}
              isBlog={false}
              title="NotePadia"
              description="Made this cute note storing app using React-Js which allows individuals to create, edit, and manage notes, making it convenient to store thoughts, ideas, lists, or any information for future reference."
              ghLink="https://github.com/NityaArya30/Sticky-Notes"
              demoLink="https://nityaaarya30.github.io/stickyy-notes/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ToDoList}
              isBlog={false}
              title="To-Do-List"
              description="A unique project that is a To-do list made using ReactJs which is a productivity tool that helps individuals organize tasks and manage their time. It typically consists of a list of tasks or activities that need to be completed."
              ghLink="https://github.com/NityaArya30/TO-DO-LIST"
              demoLink="https://nityaaarya30.github.io/to-do-list/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={WorldClock}
              isBlog={false}
              title="World Clock"
              description="A world clock is a timekeeping tool that displays the current time for various locations around the world. It allows users to quickly check the time in different time zones, making it useful for coordinating activities or keeping track of global events."
              ghLink="https://github.com/NityaArya30/worldClock"
              demoLink="https://nityaaarya30.github.io/World-Clock/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Calculator}
              isBlog={false}
              title="Calculator"
              description="Made a digital calculator using JavaScript which performs functions like addition,subtraction etc. and the calculated results can be cleared with the help of AC button."
              ghLink="https://github.com/NityaArya30/Calculator-using-JS"
              demoLink="https://nityaaarya30.github.io/MathMate/" 
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Scorekeeper}
              isBlog={false}
              title="Score-Keeper"
              description="Made a ping pong Scorekeeper in which the scores of two players are displayed and at the end of the total score, results are displayed. One can reset the score and start a new game"
              ghLink="https://github.com/NityaArya30/ScoreKeeper"
              demoLink="https://nityaaarya30.github.io/ScoreKeeper/"      
            />
          </Col> */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tnews}
              isBlog={false}
              title="Tech-News Website"
              description="Experience the future of news consumption with our React-based news website, offering a modern and intuitive interface for staying updated on global events. Seamlessly navigate through breaking news, personalized recommendations, and engaging multimedia content, all powered by the flexibility and efficiency of React technology. Stay informed, connected, and inspired with our innovative news platform."
             // description=" a ping pong Scorekeeper in which the scores of two players are displayed and at the end of the total score, results are displayed. One can reset the score and start a new game"
              ghLink="https://github.com/priyanshh007/Understanding_pagenation"
              demoLink="https://techieegeeknews.netlify.app/"      
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={foodw}
              isBlog={false}
              title="Zaayka"
              description="Zaayka is a modern food delivery website built with React, designed to offer a seamless and user-friendly experience for ordering delicious meals from local restaurants. Utilizing a live API, Zaayka provides real-time updates on restaurant menus, availability, and order status, ensuring customers receive the freshest and most accurate information."
              //escription=" a ping pong Scorekeeper in which the scores of two players are displayed and at the end of the total score, results are displayed. One can reset the score and start a new game"
              ghLink="https://github.com/priyanshh007/Food-delivery-website"
                  
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
