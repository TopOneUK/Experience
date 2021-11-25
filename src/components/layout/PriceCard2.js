import React, {useState} from 'react'
import PayPal from "../elements/PayPalS";
import { Card, Content, Icon, PlanTitle, PlanCost, FeatureListItem, BackgroundSquare } from '../layout/PriceCardCSS2'
import '../../assets/css/icofont.min.css';

function PriceCard2() {
    const [features] = useState([`Case Management`, `Dashboards`]);
    return (
      <ul>
        
          <Card
            style={{
              marginRight: "40px",
              marginTop: "60px",
              marginBottom: "60px",
            }}
          >
            <BackgroundSquare />
            <Content>
              <Icon className="icofont-paper-plane" />
              <PlanTitle>Business</PlanTitle>
              <PlanCost>£99</PlanCost>
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

export default PriceCard2;
