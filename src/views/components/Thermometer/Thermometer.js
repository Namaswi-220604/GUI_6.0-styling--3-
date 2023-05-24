import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Thermometer from "react-thermometer-component";
import "../commonStyles.css";
import "./Thermometer.css";

function ThermometerComp(props) {
  const tempSections = [
    { name: "EMS", temp: props.temp1 },
    { name: "LIM", temp: props.temp2 },
  ];
  return (
    <Container>
      <Container
        className="sub-section white-text"
        style={{ width: "100%", padding: "2rem" }}
      >
        <h4>Temperature</h4>
        <Row>
          {tempSections.map((section) => (
            <Col className="sub-sub-section">
              <h6>{section.name}</h6>
              <Row>
                <Col>
                  <Thermometer
                    theme="dark"
                    max={100}
                    height={150}
                    format="°C"
                    reverseGradient={true}
                    value={section.temp ? section.temp : 10}
                  />
                </Col>
              </Row>
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export { ThermometerComp };
