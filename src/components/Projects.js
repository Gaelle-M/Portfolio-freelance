import React from "react";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/mockup-nina-nails.png";
import projImg2 from "../assets/img/mockup-safe-pets.png";
import projImg3 from "../assets/img/mockup-tech-and-co.png";
import projImg4 from "../assets/img/mockup-dyna.png";
import projImg5 from "../assets/img/mockup-anna.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      title: "Projet site vitrine prothésiste ongulaire (REACT)",
      description: "Février 2022",
      imgUrl: projImg1,
      link: "https://nina-nails-project.netlify.app/",
    },
    {
      title: "Projet site vitrine associatif refuge animalier (REACT)",
      description: "Septembre 2022",
      imgUrl: projImg2,
      link: "https://safe-pets.netlify.app/",
    },
    {
      title: "Projet e-commerce vente de matériel informatique (Odoo)",
      description: "Décembre 2022",
      imgUrl: projImg3,
      link: "https://techco.odoo.com/",
    },
    {
      title: "Projet site vitrine de produits de beauté (REACT)",
      description: "Février 2023",
      imgUrl: projImg4,
      link: "https://dy-na.netlify.app/",
    },
    {
      title: "Projet site vitrine salon de coiffure (Odoo)",
      description: "Mars 2023",
      imgUrl: projImg5,
      link: "https://anna10.odoo.com/",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Mes projets</h2>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    ></Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
