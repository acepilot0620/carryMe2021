import React from "react";
import "./Styles.css";

const TokenAge = (props) => {
  return (
    <div className="token">
      <p className="tokenText">{props.age}</p>
    </div>
  );
};

export default TokenAge;
