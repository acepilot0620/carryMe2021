import React, { useState } from "react";
import { PartyListItem } from ".";
import "./Styles.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const PartyList = (props) => {
  const [parties, setParties] = useState([
    "파티 1",
    "파티 2",
    "파티 3",
    "파티 4",
  ]);

  const renderLists = () => {
    const items = parties;
    return (
      <tr>
        {items.map((item) => (
          <td>
            <PartyListItem />
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
        <tbody>
          {renderLists()}
          {renderLists()}
        </tbody>
      </table>
    </div>
  );
};

export default PartyList;
