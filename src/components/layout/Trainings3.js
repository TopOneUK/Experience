import React from "react";
import PriceCard from "./PriceCard";
import PriceCard2 from "./PriceCard2";
import PriceCard3 from "./PriceCard3";

export default function Trainings3(props) {
  return (
    <section id="trainings" className={props.show ? "visible" : "hide"}>
      <h2 className="section-title">Product Pricing</h2>
      <ul className="inner">
        {/* <h1 style={{ color: "red" }}>Hello world</h1>
      <p>{serviceList}</p> */}
        {/* {Data.trainings3.map((training) => {
          return <Training key={training.title} training={training} />;
        })} */}
        <ul className="inner">
          <PriceCard />
          <PriceCard2 />
          <PriceCard3 />
        </ul>
      </ul>
      <p style={{textAlign: "center", fontWeight: "bold", marginTop: "5px" }}>*VAT not included</p>
    </section>
  );
}