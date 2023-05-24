import React from "react";
import { useState } from "react";
import { OverlayTrigger } from "react-bootstrap";
import Tooltip from "react-bootstrap/Tooltip";
import "./BMS.css";
import "../commonStyles.css";

function Cell(props) {
  const [tooltip, setTooltip] = useState({ temp: 0, volt: 0 });
  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Temperature: {tooltip.temp}C
    </Tooltip>
  );
  const tempColor =
    props.temp > 20 ? (props.temp > 50 ? "bg-red" : "bg-orange") : "bg-green";
  return (
    <OverlayTrigger
      placement="right"
      delay={{ show: 250, hide: 400 }}
      overlay={renderTooltip}
    >
      <div
        onMouseEnter={() => {
          setTooltip({ temp: props.temp, volt: props.voltage });
        }}
        className={`bms-cell ${tempColor}`}
      >
        {props.voltage}V
      </div>
    </OverlayTrigger>
  );
}
function BMS(props) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div className="white-text sub-section container-grid">
        {props.array[0].map((cell) => {
          return <Cell temp={cell.temp} voltage={cell.voltage} />;
        })}
        {props.array[1].map((cell) => {
          return <Cell temp={cell.temp} voltage={cell.voltage} />;
        })}
        {props.array[2].map((cell) => {
          return <Cell temp={cell.temp} voltage={cell.voltage} />;
        })}
      </div>
    </div>
  );
}

export { BMS };
