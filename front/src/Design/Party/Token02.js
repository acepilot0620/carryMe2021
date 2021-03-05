import React, { useState } from "react";
import "./Styles.css";

const Token02 = (props) => {
  const [type, setType] = useState(props.type);

  return (
    <div className="token">
      <p className="tokenText">{type}</p>
      <img
        className="tokenArrow"
        src="/Image/filter_up.png"
        alt="token_arrow"
      ></img>
    </div>
  );
};

export default Token02;
