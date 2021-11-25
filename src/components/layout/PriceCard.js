import React, { useState } from "react";
import PayPal from "../elements/PayPalB";
import {
  Card,
  Content,
  Icon,
  PlanTitle,
  PlanCost,
  FeatureListItem,
  BackgroundSquare,
} from "../layout/PriceCardCSS";
import "../../assets/css/icofont.min.css";

function PriceCard() {
  const [features] = useState([
    `Case Management`,
  ]);
  return (
    <ul>
     
        <Card
          style={{
            marginRight: "40px",
            marginTop: "90px",
          }}
        >
          <BackgroundSquare />
          <Content>
            <Icon className="icofont-paper-plane" />
            <PlanTitle>Personal</PlanTitle>
            <PlanCost>£59</PlanCost>
            <PlanTitle>per user/month</PlanTitle>
            {features.map((item) => (
              <FeatureListItem>
                <i className="icofont-check" />
                <span>{item}</span>
              </FeatureListItem>
            ))}  
            <PayPal/>
          </Content>
        </Card>
    
    </ul>
  );
}

export default PriceCard;
