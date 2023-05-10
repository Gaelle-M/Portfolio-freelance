import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.png";
import "animate.css";
import TrackVisibility from "react-on-screen";
import logo from "../assets/img/logo.png";

export const Banner = () => {
  return (
    
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={8} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
  
                <div className="text-part1">
                  <img className="logo-mobile" src={logo} alt="Logo" />
                  <h1>Améliorez votre visibilité en ligne dès aujourd'hui</h1> 
                  <h2 className="title2-banner">Offrez à votre entreprise un site web digne de son excellence !</h2>
                  <br />
                  <div className="text1">
                    <p>
                      J'estime que chaque entreprise mérite un site web
                      incroyable. Si vous cherchez à donner vie à vos idées et à
                      impressionner vos clients, vous êtes au bon endroit !{" "}
                      <br /> <br /> Que vous ayez besoin d'un site vitrine pour
                      votre entreprise, d'un site e-commerce pour vendre vos
                      produits en ligne ou de maintenance, je suis là pour vous
                      aider. Je suis déterminée à réussir et à offrir le
                      meilleur service possible. <br /> <br /> Mon objectif est
                      de transformer votre vision en réalité. Alors,
                      qu'attendez-vous pour faire équipe avec moi ?
                    </p>
                  </div>
                  <div className="text2">
                    <p>
                      J'estime que chaque entreprise mérite un site web
                      incroyable. Si vous cherchez à donner vie à vos idées et à
                      impressionner vos clients, vous êtes au bon endroit !
                      <details>
                        <summary>Lire la suite...</summary> <br />
                        Que vous ayez besoin d'un site vitrine pour votre
                        entreprise, d'un site e-commerce pour vendre vos
                        produits en ligne ou de maintenance, je suis là pour
                        vous aider. Je suis déterminée à réussir et à offrir le
                        meilleur service possible. <br /> <br /> Mon objectif
                        est de transformer votre vision en réalité. Alors,
                        qu'attendez-vous pour faire équipe avec moi ?
                      </details>
                    </p>
                  </div>
                  <a href="#connect"><button className="tagline">Contactez-moi</button></a>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={4} xl={5}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div>
                  <img className="header-img" src={headerImg} alt="Header Img" />
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
