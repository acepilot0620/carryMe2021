import React, { useState } from "react";
import "./Styles.css";

const ItemPartyUserDetail = (props) => {
  const [position, setPosition] = useState(props.position);
  const [tier, setTier] = useState(props.user.tier);
  const [nickname, setNickname] = useState(props.user.nick);

  return (
    <div className="itemPartyUserDetail">
      <p
        className="itemPartyPosition"
        style={{
          color: "inherit",
        }}
      >
        {position}
      </p>
      {tier === "" ? (
        <img
          className="tokenImg"
          src="/Image/tier_blank.png"
          alt="tier_image"
        ></img>
      ) : (
        <img
          className="tokenImg"
          src="/Image/tier_ex.png"
          alt="tier_image"
        ></img>
      )}
      <p className="itemPartyAdd">친구 추가</p>
      <p className="itemPartyNick">{nickname}</p>
    </div>
  );
};

export default ItemPartyUserDetail;
