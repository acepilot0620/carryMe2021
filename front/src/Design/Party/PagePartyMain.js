import React from "react";
import "./Styles.css";
import { SearchModule, SearchFilterModule, SearchResultModule } from ".";

const PagePartyMain = (props) => {
  return (
    <div className="pagePartyMain">
      <SearchModule />
      <hr className="lineDivide"></hr>
      <SearchFilterModule />
      <hr className="lineDivide"></hr>
      <SearchResultModule />
    </div>
  );
};

export default PagePartyMain;
