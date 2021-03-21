import React, { useState } from "react";
import "./Styles.css";
import {TokenTier, TokenAge, TokenSex, ItemPartyUserDetail, LogChat} from '.';

const PagePartyDetail = (props) => {

  const [partyInfo, setPartyInfo] = useState(
    props.partyInfo
  );

  return (
    <div className="pagePartyDetail">
      <p style = {{marginLeft: "5%"}}>{partyInfo.title}</p>
      <div className = "detailOverall" style ={{marginLeft: "0%", marginRight: "0%", width: "95%"}}>
        <div className = "detailOverall">
          <TokenTier tier = {partyInfo.tierMin}/>
          <TokenTier tier = {partyInfo.tierMax}/>
        </div>
        <div className = "detailOverall">
          <TokenAge age = {partyInfo.ageMin}/>
          <TokenAge age = {partyInfo.ageMax}/>
        </div>
        <TokenSex sex = {partyInfo.sex}/>
      </div>
      <hr className="lineDivide"></hr>
      <div style ={{marginLeft: "5%", marginRight: "5%", width: "90%", height: "240px"}}>
        <div style ={{width: "50%", float: "left"}}>
          <ItemPartyUserDetail position="TOP" user={partyInfo.user.top} ></ItemPartyUserDetail>
          <ItemPartyUserDetail position="MID" user={partyInfo.user.mid} ></ItemPartyUserDetail>
          <ItemPartyUserDetail position="JGL" user={partyInfo.user.jgl} ></ItemPartyUserDetail>
        </div>
        <div style ={{width: "50%", float: "right", marginTop: "20px"}}>
          <ItemPartyUserDetail position="ADC" user={partyInfo.user.adc} ></ItemPartyUserDetail>
          <ItemPartyUserDetail position="SUP" user={partyInfo.user.sup} ></ItemPartyUserDetail>
        </div>
      </div>
      <LogChat></LogChat>
    </div>
  );
};

export default PagePartyDetail;
