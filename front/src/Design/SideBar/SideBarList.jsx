import React, { useState } from "react";
import "./Style.css";

const SideBarList = (props) => {
  const [sideBarList, setSideBarList] = useState(["파티 검색", "친구", "길드"]);

  return (
    <div>
      {sideBarList.map((item) => (
        <div className="sideBarList">{item}</div>
      ))}
    </div>
  );
};

export default SideBarList;
