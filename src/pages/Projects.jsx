import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/Projects/ProjectCard";
import Particle from "../components/Particle";
import saucyCulinary from "../assets/projects/saucy.jpg";
import carPalace from "../assets/projects/car-palace.jpg";
import mexicanChef from "../assets/projects/mexican-chef.jpg";

const Projects = () => {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Recent Top <strong className="yellow">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {/* Project 1: Saucy Culinary School */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={saucyCulinary}
              isBlog={false}
              title="Saucy Culinary School"
              description="Features: This is a Single Page Application (SPA) built with MERN stack technology. This website has a unique dashboard for admin, instructor and students and has a user management system. It also have payment system. Anyone can make payment with their Card. Students can enroll to a class online. REST API and so on."
              ghLink="https://github.com/belaeat/saucy-culinary-school-client"
              demoLink="https://saucy-culinary-school.netlify.app/"
            />
          </Col>

          {/* Project 2: Car Palace */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={carPalace}
              isBlog={false}
              title="Car Palace"
              description="Features: An e-commerce website where sellers can add their products and consumers can buy from here. Sellers can manage their products on a private route. Designed and implemented a responsive website with RESTful API integration, utilizing ReactJS for the front-end and MERN stack for backend development and so on."
              ghLink="https://github.com/belaeat/car-palace-client"
              demoLink="https://car-palace-bbb36.web.app/"
            />
          </Col>

          {/* Project 3: Mexican Chef */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mexicanChef}
              isBlog={false}
              title="Mexican Chef"
              description="Features: This website is also built on MERN stack technology. This is community to find the country's best chefs. Users can see the recipes and mark them as their favorites. Built a feature-rich website incorporating RESTful API, utilizing ReactJS for frontend interactivity."
              ghLink="https://github.com/belaeat/mexican-chef-client"
              demoLink="https://eclectic-fudge-38f412.netlify.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Projects;
