import React from "react";

import { AlignCenter } from "react-bootstrap-icons";
import "./Levitation.css";

function Levitation(props) {
  return (
    <div> 
      
      <div className="levitation-container"> {Levitation}
      <div className="column">
       <h3 className="heading">Vertical EMS</h3>
        <div className="box-shadow-big">
            <h3 className="sub-heading">Pod</h3>
        </div>
        <div className="box-shadow-small top-left">
            <h4 className="sub-heading">1</h4>
        </div>
        <div className="box-shadow-small top-right">
            <h4 className="sub-heading">2</h4>
        </div>
        <div className="box-shadow-small bottom-left">
            <h4 className="sub-heading">3</h4>
        </div>
        <div className="box-shadow-small bottom-right">
            <h4 className="sub-heading">4</h4>
        </div>
      </div>
      <div className="column">
        <h3 className="heading">Lateral EMS</h3>
      <div className="box-shadow">
            <h3 className="sub-heading">Pod</h3>
        </div>
      </div>
    </div>
    </div>
  );
}

export { Levitation };
