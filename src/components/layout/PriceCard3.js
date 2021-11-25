import React, { useState } from "react";
import PayPal from "../elements/PayPalG";
import {
  Card,
  Content,
  Icon,
  PlanTitle,
  PlanCost,
  FeatureListItem,
  BackgroundSquare,
} from "./PriceCardCSS3";
import "../../assets/css/icofont.min.css";

function PriceCard3() {
  const [features] = useState([
    `Case Management`,
    `Dashboards`,
    `Workflows`,
    `Chatbot`,
  ]);
  return (
    <div>
   
        <Card
          style={{
            marginRight: "40px",
          }}
        >
          <BackgroundSquare />
          <Content>
            <Icon className="icofont-paper-plane" />
            <PlanTitle>Enterprise</PlanTitle>
            <PlanCost>£199</PlanCost>
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
    </div>
  );
}

export default PriceCard3;
