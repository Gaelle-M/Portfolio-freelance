import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import { Contact } from "./Contact";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Contact />
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a
                href="https://www.linkedin.com/in/gaelle-mazzali-53b003214/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={navIcon1} alt="Icone résaux social LinkedIn" />
              </a>

              <a
                href="https://www.instagram.com/gaelle.mzl.dev/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={navIcon3} alt="Icone réseaux instagram" />
              </a>

              <a
                href="https://www.facebook.com/gaelle.mzl.dev"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={navIcon2} alt="Icone résaux Facebook" />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
