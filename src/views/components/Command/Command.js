import React from "react";
import { Button } from "react-bootstrap";
import "./Command.css";
function Command(props) {
  const sendData = (topic, message) => {
    if (props.client.connected === true) {
      props.client.subscribe(topic, function (err) {
        if (!err) {
          props.client.publish(topic, message, function () {
            console.log("Message pushed ", message);
          });
        }
      });
    }
  };
  return (
    <div
      className="white-text"
      style={{
        marginTop: "1rem",
        padding: "2rem 0rem 2rem 0rem",
        backgroundColor: "rgba(25,25,25,0.5)",
        boxShadow: "1px 2px 3px #22252B, inset 2px 2px 2px #35393F",
        textAlign: "center",
      }}
    >
      <h4 style={{ fontSize: "1.2em", marginBottom: "1em" }}>
        Command Station
      </h4>
      {[
        { topic: "precharge-on", message: "1", title: "Precharge ON" },
        { topic: "precharge-off", message: "1", title: "Precharge OFF" },
        { topic: "levitate", message: "1", title: "Levitate" },
        { topic: "pwm", message: "1", title: "PWM" },
        { topic: "brakes-actuate", message: "1", title: "Brakes actuate" },
        { topic: "brakes-retract", message: "1", title: "Brakes retract" },
      ].map((button) => {
        return (
          <div>
            <Button
              type="button"
              className="cmd-btn"
              onClick={() => {
                sendData(button.topic, button.message);
              }}
            >
              {button.title}
            </Button>
          </div>
        );
      })}
    </div>
  );
}

export { Command };
