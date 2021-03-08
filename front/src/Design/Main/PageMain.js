import React, { useState } from "react";
import { BannerSwiper, PartyList, LeagueList } from ".";

const PageMain = () => {
  const [parties, setParties] = useState([
    "파티 1",
    "파티 2",
    "파티 3",
    "파티 4",
  ]);

  const [leagues, setLeagues] = useState([
    "대회 1",
    "대회 2",
    "대회 3",
    "대회 4",
  ]);

  return (
    <div className="pageMain">
      <BannerSwiper />
      <PartyList parties={parties} />
      <LeagueList leagues={leagues} />
    </div>
  );
};

export default PageMain;
