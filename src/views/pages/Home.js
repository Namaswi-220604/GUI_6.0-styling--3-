import React from "react";
import { BMS } from "../components/BMS/BMS";
import { Speed } from "../components/Speed/Speed";
import { Levitation } from "../components/Levitation/Levitation";
import { Position } from "../components/Position/Position";
import { ThermometerComp } from "../components/Thermometer/Thermometer";
import { TabulatedData } from "../components/TabulatedData/TabulatedData";
import { Row, Col, Container } from "react-bootstrap";
import "./styles.css";

function Home(props) {
  const tempTestData = [
    [
      { temp: 20, voltage: 10 },
      { temp: 40, voltage: 9 },
      { temp: 70, voltage: 12 },
    ],
    [
      { temp: 30, voltage: 13 },
      { temp: 80, voltage: 19 },
      { temp: 10, voltage: 1 },
    ],
    [
      { temp: 20, voltage: 20 },
      { temp: 40, voltage: 11 },
      { temp: 70, voltage: 22 },
    ],
  ];
  return (
    <Container className="mx-0 px-0">
      <Row style={{ marginTop: "1rem" }} className="mx-0 px-0">
        <Col lg={5} className="col">
          <Position position={props.position} />
        </Col>
        <Col lg={3} className="col">
          <Speed speed={props.speed} />
        </Col>
        <Col lg={4} className="col">
          <Levitation height={props.height} />
        </Col>
      </Row>
      <Row style={{ marginTop: "0.5rem" }} className="mx-0 px-0">
        <Col lg={4} className="col">
          <ThermometerComp temp1={props.emsTemp} temp2={props.limTemp} />
        </Col>
        <Col lg={4} className="col">
          <TabulatedData title="Reed Sensors" data={[20, 30, 10, 10]} />
        </Col>
        <Col lg={4} className="col">
          <TabulatedData title="Pressure Sensors" data={[20, 30, 10, 10]} />
        </Col>
      </Row>
    </Container>
  );
}

export { Home };
