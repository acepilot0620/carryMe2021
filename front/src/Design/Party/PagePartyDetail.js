import React, { useState } from "react";
import "./Styles.css";
import {Token01, ItemPartyUserDetail, LogChat} from '.';

const PagePartyDetail = (props) => {
  const [partyInfo, setPartyInfo] = useState({
    title: "",
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
    <div className="pagePartyDetail">
      <p style = {{marginLeft: "5%"}}>방 제목{partyInfo.title}</p>
      <div className = "detailOverall" style ={{marginLeft: "0%", marginRight: "0%", width: "95%"}}>
        <div className = "detailOverall">
          <Token01/>
          <Token01/>
        </div>
        <div className = "detailOverall">
          <Token01/>
          <Token01/>
        </div>
        <Token01/>
      </div>
      <hr className="lineDivide"></hr>
      <div style ={{marginLeft: "5%", marginRight: "5%", width: "90%", height: "240px"}}>
        <div style ={{width: "50%", float: "left"}}>
          <ItemPartyUserDetail></ItemPartyUserDetail>
          <ItemPartyUserDetail></ItemPartyUserDetail>
          <ItemPartyUserDetail></ItemPartyUserDetail>
        </div>
        <div style ={{width: "50%", float: "right", marginTop: "20px"}}>
          <ItemPartyUserDetail></ItemPartyUserDetail>
          <ItemPartyUserDetail></ItemPartyUserDetail>
        </div>
      </div>
      <LogChat></LogChat>
    </div>
  );
};

export default PagePartyDetail;
