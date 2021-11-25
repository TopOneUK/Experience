import React from "react";
// import Data from "../../data/Database";
// import Button from "../elements/Button";
// import ReactPlayer from "react-player";

// import myVideo from "../../video/test.mp4";

// import CarouselContainer from '../../components/CarouselCointainter';

import 'bootstrap/dist/css/bootstrap.min.css';

export default function About(props) {
  return (
    <section id="about" className={props.show ? "visible" : "hide"}>
      {/* <h2 className="section-title">Portfolio</h2> */}
      {/* <div className="container">
        {Data.services.map((item) => {
          return (
            <div key={item.id} className="item">
              <img className="icon" src={item.img} alt="img"></img>
              <h3>{item.title}</h3>
               <p>{item.text}</p> 
              <Button text="Learn more" />
            </div>
          );
        })}
      </div> */}
      {/* <CarouselContainer /> */}
    </section>
  );
}
