import React, { useState } from "react";
import { LeagueListItem } from ".";
import "./Styles.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const LeagueList = ({ leagues }) => {
  const renderLists = () => {
    return (
      <tr>
        {leagues.map((league) => (
          <td>
            <LeagueListItem league={league} />
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
        <tbody>{renderLists()}</tbody>
      </table>
    </div>
  );
};

export default LeagueList;
