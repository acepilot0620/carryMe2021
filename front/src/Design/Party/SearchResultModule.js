import React, { useState } from "react";
import "./Styles.css";
import { ItemParty } from ".";

const SearchResultModule = (props) => {
  const [parties, setParties] = useState([
    "하나",
    "둘",
    "셋",
    "넷",
    "다섯",
    "여섯",
    "일곱",
  ]);

  const spawnParties = () => {
    return parties.map((value, index) => <ItemParty title={value} />);
  };
  return <div className="searchResultModule">{spawnParties()}</div>;
};

export default SearchResultModule;
