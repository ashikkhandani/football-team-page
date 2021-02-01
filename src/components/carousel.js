import React, { Component } from "react";
import { Carousel } from "react-bootstrap";
import C1 from "../images2/c4.jpg";
import C2 from "../images2/c3.jpg";
import C3 from "../images2/c6.jpg";
import C4 from "../images2/c7.jpg";
import C5 from "../images2/c8.jpg";
import C6 from "../images2/c2.jpg";

export default class carousel extends Component {
  render() {
    return (
      <div>
        <Carousel>
          <Carousel.Item interval={3000}>
            <img className="img d-block w-100" src={C1} alt="First slide" />
          </Carousel.Item>
          <Carousel.Item interval={1000}>
            <img className="img d-block w-100" src={C2} alt="Third slide" />
          </Carousel.Item>
          <Carousel.Item interval={1000}>
            <img className="img d-block w-100" src={C3} alt="Third slide" />
          </Carousel.Item>
          <Carousel.Item interval={1000}>
            <img className="img d-block w-100" src={C4} alt="Third slide" />
          </Carousel.Item>
          <Carousel.Item interval={1000}>
            <img className="img d-block w-100" src={C5} alt="Third slide" />
          </Carousel.Item>
          <Carousel.Item interval={1000}>
            <img className="img d-block w-100" src={C6} alt="Third slide" />
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }
}
