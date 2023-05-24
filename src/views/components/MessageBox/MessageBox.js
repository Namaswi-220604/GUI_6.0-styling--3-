import React from "react";
import "./MessageBox.css";

function MessageBox(props) {
  if (props.type === "box") {
    return (
      <>
        <div className="sub-section mt-1"></div>
      </>
    );
  }
  return (
    <>
      <div
        style={
          props.type === "msg" ? { color: "#be0c0c" } : { color: "#0CBE46" }
        }
        className="msg-btn mt-3 msg-title px-4"
      >
        {props.type === "msg" ? "Messages" : "Errors"}
      </div>
    </>
  );
}

export { MessageBox };
