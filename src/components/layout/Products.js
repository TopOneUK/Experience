import React from "react";
import Data from "../../data/Database";
import { Card } from "react-bootstrap";

import "./../../css/card-style.css";

export default function Products(props) {
  return (
    <section id="products" className={props.show ? "visible" : "hide"}>
      <h2 className="section-title">TopOne Products</h2>
      <div className="container">
        {Data.products.map((item) => {
          return (
            <div key={item.id} className="item">
              <a
                style={{
                  color: "black",
                  textDecoration: "none",
                  fontWeight: "bolder",
                }}
                href={"https://topone.uk/" + item.title.replace(/\s+/g, "")}
              >
                <div className="card text-center">
                  <div className="overflow">
                    <Card className="cardStyle">
                      <Card.Img variant="top" src={item.img} />
                      <Card.Body>
                        <Card.Title>
                          <h4
                            style={{
                              color: "black",
                              textDecoration: "none",
                              fontWeight: "bolder",
                            }}
                          >
                            {item.title}
                          </h4>
                        </Card.Title>
                        <Card.Text
                          style={{
                            color: "black",
                            textDecoration: "none",
                          }}
                        >
                          {item.text}
                        </Card.Text>
                        <a
                          style={{
                            color: "black",
                            textDecoration: "none",
                          }}
                          href={
                            "https://topone.uk/" +
                            item.title.replace(/\s+/g, "")
                          }
                        >
                          <button
                            style={{
                              justifyContent: "center",
                              fontSize: "20px",
                            }}
                            className="button-container"
                            onClick={() => this.getModal(item.id)}
                          >
                            {item.title}
                          </button>
                        </a>
                      </Card.Body>
                    </Card>
                  </div>
                </div>
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
}
