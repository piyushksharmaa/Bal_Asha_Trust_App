import React from "react";
import { LeftSidebarData1 } from "./LeftSidebarData1";
import { Searchbar1 } from "./Searchbar1";
const LeftSidebar = () => {
  return (
    <div className="Leftsidebar1">
      <Searchbar1
        placeholder="Enter a Children Name..."
        data={LeftSidebarData1}
      />
      <ul className="LeftsidebarList1">
        {LeftSidebarData1.map((val, key) => {
          return (
            <li key={key} className="row1">
              <div id="icon1">{val.icon}</div>
              <div id="title1">{val.title}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default LeftSidebar;
