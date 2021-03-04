import React from "react";
import { BannerSwiper, PartyList, LeagueList } from ".";

const PageMain = () => {
  return (
    <div className="pageMain">
      <BannerSwiper />
      <PartyList />
      <LeagueList />
    </div>
  );
};

export default PageMain;
