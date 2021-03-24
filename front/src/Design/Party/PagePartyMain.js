import React, { useState } from "react";
import "./Styles.css";
import { TokenTier, TokenAge, Token02, ItemParty } from ".";
import Slider from "@material-ui/core/Slider";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const PagePartyMain = (props) => {
  const searchFilterModule = {
    1: "현재 인원",
    2: "평균 티어",
    3: "최고 티어",
    4: "생성 시간",
  };

  const [parties, setParties] = useState([
    "하나",
    "둘",
    "셋",
    "넷",
    "다섯",
    "여섯",
    "일곱",
  ]);

  const tierRange = {
    max: 8,
    min: 0,
  };

  const tierList = {
    0: "아이언",
    1: "브론즈",
    2: "실버",
    3: "골드",
    4: "플레티넘",
    5: "다이아",
    6: "마스터",
    7: "그랜드마스터",
    8: "챌린저",
  };

  const ageRange = {
    max: 12,
    min: 0,
  };

  const ageList = {
    0: "19세 이하",
    1: "20세",
    2: "21세",
    3: "22세",
    4: "23세",
    5: "24세",
    6: "25세",
    7: "26세",
    8: "27세",
    9: "28세",
    10: "29세",
    11: "30세",
    12: "31세 이상",
  };

  const [checkedPosition, setCheckedPosition] = useState({
    top: false,
    jgl: false,
    mid: false,
    adc: false,
    sup: false,
  });

  const clickPosition = (position) => {
    let newCheckedPosition = checkedPosition;
    if (checkedPosition[position] === true) {
      document.getElementById(
        "position_" + position
      ).style.backgroundImage = `url(${
        process.env.PUBLIC_URL + "/Image/buttonPositionOff.png"
      })`;
      newCheckedPosition[position] = false;
      partyInfo[position] = 0;
    } else {
      document.getElementById(
        "position_" + position
      ).style.backgroundImage = `url(${
        process.env.PUBLIC_URL + "/Image/buttonPositionOn.png"
      })`;
      newCheckedPosition[position] = true;
      partyInfo[position] = { tier: "", nick: "" };
    }
    setCheckedPosition(newCheckedPosition);
  };

  const [partyInfo, setPartyInfo] = useState({
    title: "새로운 파티",
    time: 0,
    user: {
      top: {
        tier: "다이아",
        nick: "본인",
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
        tier: "",
        nick: "",
      },
      sup: {
        tier: "",
        nick: "",
      },
    },
    sex: "상관없음",
    ageMax: "31세 이상",
    ageMin: "19세 이하",
    tierMax: "챌린저",
    tierMin: "아이언",
  });

  const clickSearch = () => {
    console.log("파티 검색 인자: -------------");
    console.log("title: " + partyInfo.title);
    console.log("sex: " + partyInfo.sex);
    console.log("selectedTierMax: " + partyInfo.tierMax);
    console.log("selectedTierMin: " + partyInfo.tierMin);
    console.log("selectedAgeMax: " + partyInfo.ageMax);
    console.log("selectedAgeMin: " + partyInfo.ageMin);
    console.log("checkedPosition: " + checkedPosition);
  };

  const spawnParties = () => {
    return parties.map((value, index) => <ItemParty title={value} />);
  };

  return (
    <div className="pagePartyMain">
      <div className="divTop30">
        <h3 className="hSection">파티 메인 페이지</h3>
        <div className="searchModule">
          <div className="filterName">
            <h4>제목</h4>
            <input
              type="text"
              className="tokenLong"
              onChange={(e) => {
                setPartyInfo({ ...partyInfo, title: e.target.value });
              }}
            ></input>
          </div>
          <div className="filterTier">
            <h4>티어</h4>
            <TokenTier tier={partyInfo.tierMin} />
            <Slider
              style={{
                position: "relative",
                float: "left",
                width: "30%",
                margin: "0 auto",
              }}
              onChange={(e, newValue) => {
                setPartyInfo({
                  ...partyInfo,
                  tierMin: tierList[newValue[0]],
                  tierMax: tierList[newValue[1]],
                });
              }}
              defaultValue={[tierRange.min, tierRange.max]}
              max={tierRange.max}
              min={tierRange.min}
            />
            <TokenTier tier={partyInfo.tierMax} />
          </div>
          <div className="filterSex">
            <h4>성별</h4>
            <input
              type="radio"
              name="sex"
              value="남자만"
              style={{
                display: "inline",
              }}
              onClick={(e) => {
                setPartyInfo({ ...partyInfo, sex: e.target.value });
              }}
            ></input>
            <p
              style={{
                display: "inline",
              }}
            >
              남자만
            </p>
            <input
              type="radio"
              name="sex"
              value="여자만"
              style={{
                display: "inline",
              }}
              onClick={(e) => {
                setPartyInfo({ ...partyInfo, sex: e.target.value });
              }}
            ></input>
            <p
              style={{
                display: "inline",
              }}
            >
              여자만
            </p>
            <input
              type="radio"
              name="sex"
              value="상관없음"
              style={{
                display: "inline",
              }}
              onClick={(e) => {
                setPartyInfo({ ...partyInfo, sex: e.target.value });
              }}
            ></input>
            <p
              style={{
                display: "inline",
              }}
            >
              상관 없음
            </p>
          </div>
          <div className="filterAge">
            <h4>나이</h4>
            <TokenAge age={partyInfo.ageMin} />
            <Slider
              style={{
                position: "relative",
                float: "left",
                width: "30%",
                margin: "0 auto",
              }}
              onChange={(e, newValue) => {
                setPartyInfo({
                  ...partyInfo,
                  ageMin: ageList[newValue[0]],
                  ageMax: ageList[newValue[1]],
                });
              }}
              defaultValue={[ageRange.min, ageRange.max]}
              max={ageRange.max}
              min={ageRange.min}
            />
            <TokenAge age={partyInfo.ageMax} />
          </div>
          <div className="filterPosition">
            <h4>포지션</h4>
            <div
              className="divPosition"
              id="position_top"
              onClick={() => clickPosition("top")}
              style={{
                backgroundImage: `url(${
                  process.env.PUBLIC_URL + "/Image/buttonPositionOff.png"
                })`,
              }}
            >
              <p style={{ marginTop: "9px", marginBottom: "10px" }}>TOP</p>
            </div>
            <div
              className="divPosition"
              id="position_jgl"
              onClick={() => clickPosition("jgl")}
              style={{
                backgroundImage: `url(${
                  process.env.PUBLIC_URL + "/Image/buttonPositionOff.png"
                })`,
              }}
            >
              <p style={{ marginTop: "9px", marginBottom: "10px" }}>JGL</p>
            </div>
            <div
              className="divPosition"
              id="position_mid"
              onClick={() => clickPosition("mid")}
              style={{
                backgroundImage: `url(${
                  process.env.PUBLIC_URL + "/Image/buttonPositionOff.png"
                })`,
              }}
            >
              <p style={{ marginTop: "9px", marginBottom: "10px" }}>MID</p>
            </div>
            <div
              className="divPosition"
              id="position_adc"
              onClick={() => clickPosition("adc")}
              style={{
                backgroundImage: `url(${
                  process.env.PUBLIC_URL + "/Image/buttonPositionOff.png"
                })`,
              }}
            >
              <p style={{ marginTop: "9px", marginBottom: "10px" }}>ADC</p>
            </div>
            <div
              className="divPosition"
              id="position_sup"
              onClick={() => clickPosition("sup")}
              style={{
                backgroundImage: `url(${
                  process.env.PUBLIC_URL + "/Image/buttonPositionOff.png"
                })`,
              }}
            >
              <p style={{ marginTop: "9px", marginBottom: "10px" }}>SUP</p>
            </div>
          </div>
          <div className="filterSearch">
            <button
              className="token"
              style={{
                position: "relative",
                float: "right",
              }}
              onClick={clickSearch}
            >
              검색
            </button>
            <Link
              to={{
                pathname: "/party/" + partyInfo.title,
                state: {
                  partyInfo: partyInfo,
                },
              }}
            >
              파티 생성
            </Link>
          </div>
        </div>
      </div>
      <hr className="lineDivide"></hr>
      <div className="searchFilterModule">
        <Token02 type={searchFilterModule[1]} />
        <Token02 type={searchFilterModule[2]} />
        <Token02 type={searchFilterModule[3]} />
        <Token02 type={searchFilterModule[4]} />
      </div>
      <hr className="lineDivide"></hr>
      <div className="searchResultModule">{spawnParties()}</div>
    </div>
  );
};

export default PagePartyMain;
