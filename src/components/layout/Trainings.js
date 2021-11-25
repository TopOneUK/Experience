import React from "react";
import Data from "../../data/Database";
import Training from "../elements/Training";

export default function Trainings(props) {
  return (
    <section id="trainings" className={props.show ? "visible" : "hide"}>
      <h2 className="section-title">Product Pricing</h2>
      <ul className="inner">
      {/* <h1 style={{ color: "red" }}>Hello world</h1>
      <p>{serviceList}</p> */}
        {Data.trainings.map((training) => {
          return <Training key={training.title} training={training} />;
        })}
      </ul>
    </section>
  );
}
