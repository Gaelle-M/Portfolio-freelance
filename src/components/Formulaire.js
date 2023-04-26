import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Formulaire = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    const formMess = document.querySelector(".form-message");

    emailjs
      .sendForm(
        "service_q0e33g5",
        "template_5m5o8fe",
        form.current,
        process.env.REACT_APP_ID
      )
      .then(
        (result) => {
          // console.log(result.text);
          form.current.reset();
          formMess.innerHTML = "<p class='success'>Message envoyé !</p>";

          setTimeout(() => {
            formMess.innerHTML = "";
          }, 2500);
        },
        (error) => {
          //console.log(error.text);
          formMess.innerHTML =
            "<p class='error'>Une erreur s'est produite, veuillez réessayer</p>";

          setTimeout(() => {
            formMess.innerHTML = "";
          }, 4500);
        }
      );
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <img
                  src={contactImg}
                  alt="Contact Us"
                />
              )}
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            
          <div className="form-container">
            <h2>Me contacter</h2>
            <p className="para-contact">
              Si vous souhaitez demander un devis, veuillez me détailler un maximum votre projet.
            </p>
            <form ref={form} onSubmit={sendEmail}>
              
              {/* **nom** */}
              <input type="text" name="name" required autoComplete="off" placeholder="Votre nom*"/>
             
              {/* **prenom** */}
              <input type="text" name="firstname" required autoComplete="off" placeholder="Votre prénom*"/>
              
              {/* **mail** */}
              <input type="email" name="email" required autoComplete="off" placeholder="Adresse e-mail*"/>
              
              {/* **num** */}
              <input type="tel" name="num"  autoComplete="off" placeholder="Numéro de téléphone"/>
              
              {/* **message** */}
              <textarea name="message" required placeholder="Votre message*"/>

                <div className="container-button-contact">
              <input type="submit" value="Envoyer" required />
              </div>
            </form>
            <div className="form-message"></div>
           </div> 
          </Col>
        </Row>
      </Container>
    </section>
  );
};
