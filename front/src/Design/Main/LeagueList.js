import React, { useState } from "react";
import { LeagueListItem } from ".";
import "./Styles.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const LeagueList = () => {
  const [contests, setContests] = useState([
    "대회 1",
    "대회 2",
    "대회 3",
    "대회 4",
  ]);
  const renderLists = () => {
    const items = contests;
    return (
      <tr>
        {items.map((item) => (
          <td>
            <LeagueListItem />
          </td>
        ))}
      </tr>
    );
  };
  return (
    <div className="leagueList">
      <h3>진행중인 대회</h3>
      <Link className="p" to="/league">
        더 보기
      </Link>
      <table>
        <tbody>
          {renderLists()}
          {renderLists()}
        </tbody>
      </table>
    </div>
  );
};

export default LeagueList;
