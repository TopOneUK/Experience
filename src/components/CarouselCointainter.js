import React from "react";
import { Carousel } from "react-bootstrap";

import CMS1 from "../img/V1-CMS.png";
import CMS2 from "../img/CMS2.jpg";
import CMS3 from "../img/CMS3.jpg";

const CarouselContainer = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img className="carouselPicture" src={CMS1} alt="First slide" />
        <Carousel.Caption>
          <h3 style={{ color: "white", fontWeight: "bolder" }}>
            Case Management System - Problem
          </h3>
          <p style={{ color: "white", fontWeight: "bolder" }}></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="carouselPicture" src={CMS2} alt="Second slide" />

        <Carousel.Caption>
          <h3 style={{ color: "white", fontWeight: "bold" }}>
            Case Management System - Solution
          </h3>
          <p style={{ color: "white" }}></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="carouselPicture" src={CMS3} alt="Second slide" />

        <Carousel.Caption>
          <h3
            style={{ color: "white", fontWeight: "bold", marginBottom: "10px" }}
          >
            Case Management System - No Manual Work
          </h3>
          <p style={{ color: "white" }}></p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};
export default CarouselContainer;
