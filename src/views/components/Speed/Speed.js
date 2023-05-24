import React from "react";
import "./Speed.css";
import "../commonStyles.css";
import speedometer from "../../../assets/speedometer.svg";
import needle from "../../../assets/pointer.svg";
import { Container, Row, Col } from "react-bootstrap";

function Speed(props) {
  return (
    <Container className="m-0">
      <Container className="sub-section white-text">
        <h4 style={{ textAlign: "center" }}>Velocity</h4>
        <Row>
          <Col className="parent" style={{ textAlign: "center" }}>
            <img height="100%" className="image1" src={speedometer} />
            <img
              className="image2"
              height="100%"
              style={{ transform: `rotate(${(props.speed * 4) / 3}deg)` }}
              src={needle}
            />
            <div className="overlay">
              {!props.speed ? 0 : props.speed}
              <span style={{ fontSize: "0.7rem", color: "white" }}> km/h</span>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export { Speed };
