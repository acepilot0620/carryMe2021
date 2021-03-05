import React, { useState } from "react";
import "./Styles.css";
import { ItemPartyUser } from ".";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const ItemParty = (props) => {
  const [partyInfo, setPartyInfo] = useState({
    title: props.title,
    time: 0,
    user: {
      top: {
        tier: "골드",
        nick: "갱안오면 던짐",
      },
      mid: {
        tier: "",
        nick: "",
      },
      jgl: {
        tier: "",
        nick: "",
      },
      adc: {
        tier: "플레티넘",
        nick: "도구는 도구다",
      },
      sup: {
        tier: "다이아",
        nick: "도구의 삶이란",
      },
    },
  });
  return (
    <div className="itemParty">
      <div
        style={{
          width: "50%",
          height: "100%",
          float: "left",
        }}
      >
        <p className="itemPartyTitle">{partyInfo.title}</p>
        <ItemPartyUser position="TOP" user={partyInfo.user.top} />
        <ItemPartyUser position="MID" user={partyInfo.user.mid} />
        <ItemPartyUser position="JGL" user={partyInfo.user.jgl} />
      </div>
      <div
        style={{
          width: "50%",
          height: "100%",
          float: "right",
        }}
      >
        <p className="itemPartyTime">{partyInfo.time}분 전</p>
        <ItemPartyUser position="ADC" user={partyInfo.user.adc} />
        <ItemPartyUser position="SUP" user={partyInfo.user.sup} />
        <Link
          to={{
            pathname: "/party/" + partyInfo.title,
            state: {
              partyInfo: partyInfo,
            },
          }}
        >
          입장
        </Link>
      </div>
    </div>
  );
};

export default ItemParty;
