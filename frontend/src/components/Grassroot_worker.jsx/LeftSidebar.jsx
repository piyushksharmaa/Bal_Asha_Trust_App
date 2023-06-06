import React from "react";
import { LeftSidebarData } from "./LeftSidebarData";
import { Searchbar } from "./Searchbar";
const LeftSidebar = () => {
  return (
    <div className="Leftsidebar">
      <Searchbar
        placeholder="Enter a Children Name..."
        data={LeftSidebarData}
      />
      <ul className="LeftsidebarList">
        {LeftSidebarData.map((val, key) => {
          return (
            <li key={key} className="row">
              <div id="icon">{val.icon}</div>
              <div id="title">{val.title}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default LeftSidebar;
