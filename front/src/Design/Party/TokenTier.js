import React from "react";
import "./Styles.css";

const TokenTier = (props) => {
  return (
    <div className="token">
      <img className="tokenImg" src="/Image/tier_ex.png" alt="tier_img"></img>
      <p className="tokenText">{props.tier}</p>
    </div>
  );
};

export default TokenTier;
