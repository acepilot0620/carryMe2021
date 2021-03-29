import React, { useState } from "react";
import "./Styles.css";

const Token02 = (props) => {
  const [arrowDirection, setArrowDirection] = useState("/Image/filter_up.png");

  const clickFilter = () => {
    props.onClick(props.type);
    arrowDirection === "/Image/filter_up.png"
      ? setArrowDirection("/Image/filter_down.png")
      : setArrowDirection("/Image/filter_up.png")
  }

  return (
    <div className="token" onClick={() => clickFilter()}>
      <p className="tokenText">{props.type}</p>
      <img
        className="tokenArrow"
        src={arrowDirection}
        alt="token_arrow"
      ></img>
    </div>
  );
};

export default Token02;
