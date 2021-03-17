import React, { useState } from "react";
import { BannerSwiper, PartyList, LeagueList } from ".";

const PageMain = () => {
  // 파티: 파티 이름, 현재 포지션 정보(공석인지만 체크)
  /**
    {
      title: "제목", 
      user: {
        top: {
          tier: "골드",
        },
        mid: {
          tier: "",
        },
        jgl: {
          tier: "",
        },
        adc: {
          tier: "플레티넘",
        },
        sup: {
          tier: "다이아",
        }
      }
    }
  */
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
