import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Banner = () => {
  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className="text-part1">
                  <span className="tagline">Bienvenue sur mon portfolio</span>
                  <h1>
                    {`Bonjour! Je suis Gaëlle`}
                    {""}
                  </h1>{" "}
                  <h2>Développeuse web</h2>
                  <br />
                  <div className="text1">
                    <p>
                      J'estime que chaque
                      entreprise mérite un site web incroyable. Si vous cherchez
                      à donner vie à vos idées et à impressionner vos clients,
                      vous êtes au bon endroit ! <br /> <br /> Que vous ayez
                      besoin d'un site vitrine pour votre entreprise, d'un site
                      e-commerce pour vendre vos produits en ligne ou de
                      maintenance, je suis là pour vous aider. Je suis
                      déterminée à réussir et à offrir le meilleur service
                      possible. <br /> <br /> Mon objectif est de transformer
                      votre vision en réalité. Alors, qu'attendez-vous pour
                      faire équipe avec moi ?
                    </p>
                  </div>
                  <div className="text2">
                    <p>
                      Développeuse web passionnée, j'estime que chaque
                      entreprise mérite un site web incroyable. Si vous cherchez
                      à donner vie à vos idées et à impressionner vos clients,
                      vous êtes au bon endroit !
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
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div>
                  <img src={headerImg} alt="Header Img" />
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
