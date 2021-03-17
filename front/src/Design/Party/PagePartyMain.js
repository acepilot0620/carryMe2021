import React, { useState } from "react";
import "./Styles.css";
import { TokenTier, TokenAge, Token02, ItemParty } from ".";
import Slider from "@material-ui/core/Slider";

const PagePartyMain = (props) => {
  
  const [searchFilterModule, setSearchFilterModule] = useState({
    1: "현재 인원",
    2: "평균 티어",
    3: "최고 티어",
    4: "생성 시간",
  });

  const [parties, setParties] = useState([
    "하나",
    "둘",
    "셋",
    "넷",
    "다섯",
    "여섯",
    "일곱",
  ]);

  const [tierRange, setTierRange] = useState({
    max: 8,
    min: 0
  });
  const [selectedTierMin, setSelectedTierMin] = useState("아이언");
  const [selectedTierMax, setSelectedTierMax] = useState("챌린저");
  const [tierList] = useState({
    0: "아이언",
    1: "브론즈",
    2: "실버",
    3: "골드",
    4: "플레티넘",
    5: "다이아",
    6: "마스터",
    7: "그랜드마스터",
    8: "챌린저"
  });
  const selectTier = (min, max) => {
    setSelectedTierMin(tierList[min]);
    setSelectedTierMax(tierList[max]);
  };

  const [ageRange, setAgeRange] = useState({
    max: 12,
    min: 0
  });
  const [selectedAgeMin, setSelectedAgeMin] = useState("19세 이하");
  const [selectedAgeMax, setSelectedAgeMax] = useState("31세 이상");
  const [ageList, setAgeList] = useState({
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
    12: "31세 이상"
  });
  const selectAge = (min, max) => {
    setSelectedAgeMin(ageList[min]);
    setSelectedAgeMax(ageList[max]);
  };

  const [checkedPosition, setCheckedPosition] = useState({
    top: false,
    jgl: false,
    mid: false,
    adc: false,
    sup: false
  });
  const clickPosition = (position) => {
    let newCheckedPosition = checkedPosition;
    if (checkedPosition[position] === true) {
      document.getElementById("position_" + position).style.backgroundImage = `url(${process.env.PUBLIC_URL + '/Image/buttonPositionOff.png'})`;
      newCheckedPosition[position] = false;
    } else {
      document.getElementById("position_" + position).style.backgroundImage = `url(${process.env.PUBLIC_URL + '/Image/buttonPositionOn.png'})`;
      newCheckedPosition[position] = true;
    }
    setCheckedPosition(newCheckedPosition);
  };

  const [title, setTitle] = useState();

  let [checkedSex, setCheckedSex] = useState("any");

  const clickSearch = () => {
    console.log('title: ' + title);
    console.log('sex: ' + checkedSex);
    console.log('selectedTierMax: ' + selectedTierMax);
    console.log('selectedTierMin: ' + selectedTierMin);
    console.log('selectedAgeMax: ' + selectedAgeMax);
    console.log('selectedAgeMin: ' + selectedAgeMin);
    console.log('checkedPosition: ' + checkedPosition);
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
            <p>제목 필터</p>
            <input type="text" className="tokenLong" onChange = {(e) => {setTitle(e.target.value)}}></input>
          </div>
          <div className="filterTier">
            <p>티어 필터</p>
            <TokenTier tier = {selectedTierMin} />
            <Slider
              style={{
                position: "relative",
                float: "left",
                width: "30%",
                margin: "0 auto",
              }}
              onChange = {(e, newValue) => {selectTier(newValue[0], newValue[1])}}
              defaultValue = {[tierRange.min, tierRange.max]}
              max = {tierRange.max}
              min = {tierRange.min}
            />
            <TokenTier tier = {selectedTierMax} />
          </div>
          <div className="filterSex">
            <p>성별 필터</p>
            <input
              type="radio"
              name = "sex"
              value= "maleOnly"
              style={{
                display: "inline",
              }}
              onClick = {(e) => {setCheckedSex(e.target.value)}}
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
              name = "sex"
              value= "femaleOnly"
              style={{
                display: "inline",
              }}
              onClick = {(e) => {setCheckedSex(e.target.value)}}
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
              name = "sex"
              value= "any"
              style={{
                display: "inline",
              }}
              onClick = {(e) => {setCheckedSex(e.target.value)}}
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
            <p>나이 필터</p>
            <TokenAge age = {selectedAgeMin}/>
            <Slider
              style={{
                position: "relative",
                float: "left",
                width: "30%",
                margin: "0 auto",
              }}
              onChange = {(e, newValue) => {selectAge(newValue[0], newValue[1])}}
              defaultValue = {[ageRange.min, ageRange.max]}
              max = {ageRange.max}
              min = {ageRange.min}
            />
            <TokenAge age = {selectedAgeMax}/>
          </div>
          <div className="filterPosition">
            <p>포지션 필터</p>
            <div className="divPosition"
            id = "position_top"
            onClick = {() => clickPosition("top")}
            style = {{backgroundImage: `url(${process.env.PUBLIC_URL + '/Image/buttonPositionOff.png'})`}}>
              <p style ={{marginTop: "9px", marginBottom: "10px"}}>TOP</p>
            </div>
            <div className="divPosition"
            id = "position_jgl"
            onClick = {() => clickPosition("jgl")}
            style = {{backgroundImage: `url(${process.env.PUBLIC_URL + '/Image/buttonPositionOff.png'})`}}>
              <p style ={{marginTop: "9px", marginBottom: "10px"}}>JGL</p>
            </div>
            <div className="divPosition"
            id = "position_mid"
            onClick = {() => clickPosition("mid")}
            style = {{backgroundImage: `url(${process.env.PUBLIC_URL + '/Image/buttonPositionOff.png'})`}}>
              <p style ={{marginTop: "9px", marginBottom: "10px"}}>MID</p>
            </div>
            <div className="divPosition"
            id = "position_adc"
            onClick = {() => clickPosition("adc")}
            style = {{backgroundImage: `url(${process.env.PUBLIC_URL + '/Image/buttonPositionOff.png'})`}}>
              <p style ={{marginTop: "9px", marginBottom: "10px"}}>ADC</p>
            </div>
            <div className="divPosition"
            id = "position_sup"
            onClick = {() => clickPosition("sup")}
            style = {{backgroundImage: `url(${process.env.PUBLIC_URL + '/Image/buttonPositionOff.png'})`}}>
              <p style ={{marginTop: "9px", marginBottom: "10px"}}>SUP</p>
            </div>
          </div>
          <div className="filterSearch">
            <button
              className="token"
              style={{
                position: "relative",
                float: "right",
              }}
              onClick = {clickSearch}
            >
              검색
            </button>
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
