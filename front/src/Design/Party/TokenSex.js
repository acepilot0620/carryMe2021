import React from "react";
import "./Styles.css";

const TokenSex = (props) => {
  return (
    <div className="token">
      <p className="tokenText">{props.sex}</p>
    </div>
  );
};

export default TokenSex;
