import React from "react";
import { PartyListItem } from ".";
import "./Styles.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const PartyList = ({ parties }) => {
  const renderLists = () => {
    return (
      <tr>
        {parties.map((party) => (
          <td>
            <PartyListItem party={party} />
          </td>
        ))}
      </tr>
    );
  };

  return (
    <div className="partyList">
      <h3>실시간 파티</h3>
      <Link className="p" to="/party">
        더 보기
      </Link>
      <table>
        <tbody>{renderLists()}</tbody>
      </table>
    </div>
  );
};

export default PartyList;
