import React from "react";
import { useState } from "react";
import { Command } from "../views/components/Command/Command.js";
import { LeftNav } from "../views/components/Command/LeftNav.js";
import { Row, Col, Container } from "react-bootstrap";
import { BrowserRouter, Route } from "react-router-dom";
import "./styles.css";
import { MessageBox } from "../views/components/MessageBox/MessageBox.js";
let mqtt = require("mqtt");
let { Home } = require("../views/pages/Home.js");
let { Levitation } = require("../views/pages/Levitation.js");
let { Braking } = require("../views/pages/Braking.js");
let { Battery } = require("../views/pages/Battery.js");
let host = "localhost";
let port = 1884;
const url = `ws://${host}:${port}/mqtt`;
const options = {
  keepalive: 30,
  protocolId: "MQTT",
  protocolVersion: 4,
  clean: true,
  reconnectPeriod: 1000,
  connectTimeout: 30 * 1000,
  will: {
    topic: "WillMsg",
    payload: "Connection Closed abnormally..!",
    qos: 0,
    retain: false,
  },
  rejectUnauthorized: false,
};

// let client = mqtt.connect("wss://test.mosquitto.org:8081/mqtt");
let client = mqtt.connect(url, options);

function ServerReceive() {
  const [message1, setMessage1] = useState("");
  const [message2, setMessage2] = useState("");
  const [message3, setMessage3] = useState(12);
  const [message4, setMessage4] = useState("");
  const [message5, setMessage5] = useState("");
  const [message6, setMessage6] = useState("");
  const [message7, setMessage7] = useState("");
  client.on("connect", function () {
    console.log("Connected");
    client.subscribe("topic1", function () {
      client.on("message", function (topic, message, packet) {
        if (topic === "topic1") {
          setMessage1(message.toString());
          console.log('Received "' + message + '" on "' + topic + '"');
        }
      });
    });
    client.subscribe("topic2", function () {
      client.on("message", function (topic, message, packet) {
        if (topic === "topic2") {
          setMessage2(message.toString());
          console.log('Received "' + message + '" on "' + topic + '"');
        }
      });
    });
    client.subscribe("height", function () {
      client.on("message", function (topic, message, packet) {
        if (topic === "height") {
          setMessage3(message.toString());
          console.log('Received "' + message + '" on "' + topic + '"');
        }
      });
    });
    client.subscribe("speed", function () {
      client.on("message", function (topic, message, packet) {
        if (topic === "speed") {
          setMessage4(message.toString());
          console.log('Received "' + message + '" on "' + topic + '"');
        }
      });
    });
    client.subscribe("position", function () {
      client.on("message", function (topic, message, packet) {
        if (topic === "position") {
          setMessage5(message.toString());
          console.log('Received "' + message + '" on "' + topic + '"');
        }
      });
    });
    client.subscribe("emsTemp", function () {
      client.on("message", function (topic, message, packet) {
        if (topic === "emsTemp") {
          setMessage6(message.toString());
          console.log('Received "' + message + '" on "' + topic + '"');
        }
      });
    });
    client.subscribe("limTemp", function () {
      client.on("message", function (topic, message, packet) {
        if (topic === "limTemp") {
          setMessage7(message.toString());
          console.log('Received "' + message + '" on "' + topic + '"');
        }
      });
    });
  });

  return (
    <BrowserRouter>
      <Container className="fullscreen">
        <Row className="mx-0 px-0">
          <Col lg={2} className="mx-0 px-0">
            <Row>
              <LeftNav />
            </Row>
            <Row style={{ margin: "auto" }}>
              <Col>
                <MessageBox type="msg" />
              </Col>
              <Col>
                <MessageBox type="error" />
              </Col>
            </Row>
            <Row>
              <MessageBox type="box" />
            </Row>
          </Col>
          <Col lg={8}>
            <Route exact path="/">
              <Home
                message1={message1}
                message2={message2}
                height={message3}
                speed={message4}
                position={message5}
                emsTemp={message6}
                limTemp={message7}
                client={client}
              />
            </Route>
            <Route exact path="/levitation">
              <Levitation />
            </Route>
            <Route exact path="/battery">
              <Battery />
            </Route>
            <Route exact path="/braking">
              <Braking />
            </Route>
          </Col>
          <Col lg={2} className="mx-0 px-0">
            <Command client={client} />
          </Col>
        </Row>
      </Container>
    </BrowserRouter>
  );
}

export { ServerReceive };
