import React from "react";
import { useState, useEffect } from "react";
let { Send } = require("../views/pages/Send.js");
let mqtt = require("mqtt");
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
// let client = mqtt.connect('mqtt://127.0.0.1', options);

function ServerSend() {
  const [currentSocket, setCurrentSocket] = useState(null);
  useEffect(() => {
    let client = mqtt.connect(url, options);
    setCurrentSocket(client);
    client.on("connect", function () {
      console.log("Connected");
    });
    return () => {
      client.disconnect();
    };
  }, []);

  const [topic, setTopic] = useState("");
  const [message, setMessage] = useState("");
  const [height, setHeight] = useState(0);
  const [position, setPosition] = useState(0);
  const [speed, setSpeed] = useState(0);
  const handleTopic = (event) => setTopic(event.target.value);
  const handleMessage = (event) => setMessage(event.target.value);
  const handleChange = (e) => {
    setHeight(e.target.value);
    sendOne("height", height);
  };
  const handleChange2 = (e) => {
    setSpeed(e.target.value);
    sendOne("speed", speed);
  };
  const handleChange3 = (e) => {
    setPosition(e.target.value);
    sendOne("position", position);
  };
  const sendOne = (topic, message) => {
    if (currentSocket.connected === true) {
      currentSocket.subscribe(topic, function (err) {
        if (!err) {
          currentSocket.publish(topic, message, function () {
            console.log("Message pushed ", message);
          });
        }
      });
    }
  };
  const sendMessage = (event) => {
    event.preventDefault();
    console.log("connecting");
    // let client = mqtt.connect('wss://test.mosquitto.org:8081/mqtt');
    // let client = mqtt.connect(url, options);

    //publish a message to a topic
    // client.on("connect", function () {
    //   console.log("Connected");
    if (currentSocket.connected === true) {
      currentSocket.subscribe(topic, function (err) {
        if (!err) {
          currentSocket.publish(topic, message, function () {
            console.log("Message pushed");
          });
          currentSocket.publish("height", height, function () {
            console.log("Height changed");
          });
        }
      });
    }
  };
  return (
    <Send
      topic={topic}
      message={message}
      height={height}
      handleSubmit={sendMessage}
      onChangeTopic={handleTopic}
      onChangeMessage={handleMessage}
      onChangeSlider={handleChange}
      onChangeSlider2={handleChange2}
      onChangeSlider3={handleChange3}
    />
  );
}

export { ServerSend };
