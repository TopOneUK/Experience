import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";

import cmss from "../../img/TopOne-SignUp.PNG"
// import excel from "../../img/excel.png";
// import outlook from "../../img/outlook.png";
// import onenote from "../../img/onennote.jpg";
// import publisher from "../../img/publisher.png"



export default function CaseChecker(props) {

  const [employees, setEmployees] = useState(20);
  const [dailyRate, setDailyRate] = useState(60);
  const [workDays, setWorkDays] = useState(261);
  const [cases, setCases] = useState(5);

  const result = (employees * dailyRate) * workDays * cases;
  const finalResult = Number(result).toLocaleString('en');
  
 
  
  return (
    <section id="casechecker" className={props.show ? "visible" : "hide"}>

      <Container>
        <h2 className="section-title">Benefits Checker</h2>
        <Row>
          <Col style={{ marginBottom: "40px" }}>
            <div className="form-container">
              <form className="register-form">
                {/* Uncomment the next line to show the success message */}
                {/* <div class="success-message">Success!</div> */}
                <label>
                  Employees
                  <input
                    style={{ marginLeft: "18px" }}
                    id="employees"
                    className="form-field"
                    type="numbers"
                    required
                    placeholder="Employees"
                    name="employees"
                    value={employees}
                    onChange={(e) => setEmployees(e.target.value)}
                  />
                </label>
                <label>
                  Daily Rate £
                  <input
                    style={{ marginLeft: "15px" }}
                    id="daily-rate"
                    className="form-field"
                    type="decimals"
                    required
                    placeholder="Daily-Rate"
                    name="daily-rate"
                    value={dailyRate}
                    onChange={(e) => setDailyRate(e.target.value)}
                  />
                </label>
                <label>
                  Work Days
                  <input
                    style={{ marginLeft: "22px" }}
                    id="work-days"
                    className="form-field"
                    type="numbers"
                    onChange={(e) => setWorkDays(e.target.value)}
                    placeholder="Work-days"
                    name="work days"
                    value={workDays}
                  />
                </label>
                <label>
                  Cases 
                  <input
                    style={{ marginLeft: "55px" }}
                    id="cases/day"
                    className="form-field"
                    type="numbers"
                    onChange={(e) => setCases(e.target.value)}
                    placeholder="Cases/day"
                    name="cases"
                    value={cases}
                  />
                </label>
                {/* Uncomment the next line to show the error message */}
                {/* <span id="email-error">Please enter an email address</span> */}

                <p
                  style={{
                    marginTop: "10px",
                    fontWeight: "bold",
                    color: "	#1e90ff",
                    fontSize: "30px",
                  }}
                >
                  Annual Savings: £{finalResult}{" "}
                </p>
              </form>
            </div>
          </Col>
          <Col>
            <img
              className="CheckerImage"
              src={cmss}
              alt="Word"
            />
            {/* <img
              src={powerpoint}
              alt="powerpoint"
              style={{ width: "90px", height: "90px" }}
            /> */}
            {/* <img
              src={excel}
              alt="Excel"
              style={{ width: "90px", height: "90px" }}
            />
            <img
              src={outlook}
              alt="Outlook"
              style={{ width: "80px", height: "80px" }}
            />
            <img
              src={onenote}
              alt="Onenote"
              style={{ width: "80px", height: "80px", marginLeft: "10px" }}
            />
            <img
              src={publisher}
              alt="Publisher"
              style={{ width: "90px", height: "90px" }}
            /> */}
            <p style={{ lineHeight: "1.8", marginTop: "20px" }}>
              TopOne CMS system will help you to manage all cases by one well organised system where everything is in one place. 
              For example for the business with 20 employees OneCMS can save £1,500,000 annually only on case management. 
            </p>

            <p style={{ lineHeight: "1.8", marginTop: "20px" }}>  
              TopOne CMS will save time and money and boosting productivity for your employees.
            </p>

          </Col>
        </Row>
      </Container>
    </section>
  );
}