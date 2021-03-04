import React, { useState } from "react";
import { RankListItem } from ".";
import "./Styles.css";

const RankList = (props) => {
  const [rankList, setRankList] = useState([
    "길드 1",
    "길드 2",
    "길드 3",
    "길드 4",
    "길드 5",
  ]);

  const renderLists = () => {
    const items = rankList;
    return items.map((item) => (
      <tr>
        <td>
          <RankListItem />
        </td>
      </tr>
    ));
  };

  return (
    <div className="rankList">
      <h3>길드 순위</h3>
      <table>
        <tbody>{renderLists()}</tbody>
      </table>
    </div>
  );
};

export default RankList;
