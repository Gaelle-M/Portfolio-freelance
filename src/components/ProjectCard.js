import React from 'react';
import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, link}) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt="decoration"/>
        <div className="proj-txtx">
          <h5>{title}</h5>
          <span>{description}</span> <br />
          <a className="link-project" href={link} target="_blank" rel="noopener noreferrer">Voir le projet</a>
        </div>
      </div>
    </Col>
  )
}
