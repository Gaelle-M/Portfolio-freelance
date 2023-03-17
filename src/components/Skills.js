import React from 'react';
import meter1 from "../assets/img/skill1.png";
import meter2 from "../assets/img/skill2.png";
import meter3 from "../assets/img/skill3.png";
import meter4 from "../assets/img/skill4.png";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Compétences</h2>
                        <h4>Des prestations adaptées à vos besoins</h4>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={meter1} alt="Illustration de site weben création" />
                                <h5>Intégration site vitrine / Refonte partielle ou complète</h5>
                            </div>

                            <div className="item">
                                <img src={meter2} alt="Illustration de création de boutique e-commerce" />
                                <h5>Création boutique e-commerce</h5>
                            </div>

                            <div className="item">
                                <img src={meter4} alt="Illustration de mise à jour d'un site web" />
                                <h5>Maintenance et mise à jour</h5>
                            </div>

                            <div className="item">
                                <img src={meter3} alt="Illustration de plusieurs formats d'écran" />
                                <h5>100% Responsive</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="style de l'arrière plan" />
    </section>
  )
}
