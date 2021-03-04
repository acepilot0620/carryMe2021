import React, { useState } from "react";
import "./Styles.css";
import { Token02 } from ".";

const SearchFilterModule = (props) => {
  const [searchFilterModule, setSearchFilterModule] = useState({
    1: "현재 인원",
    2: "평균 티어",
    3: "최고 티어",
    4: "생성 시간",
  });

  return (
    <div className="searchFilterModule">
      <Token02 type={searchFilterModule[1]} />
      <Token02 type={searchFilterModule[2]} />
      <Token02 type={searchFilterModule[3]} />
      <Token02 type={searchFilterModule[4]} />
    </div>
  );
};

export default SearchFilterModule;
