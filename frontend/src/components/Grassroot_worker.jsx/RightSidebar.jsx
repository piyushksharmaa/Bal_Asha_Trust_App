import React, { useContext, useState } from "react";
import NotificationsIcon from "@mui/icons-material/Notifications";
import CancelIcon from "@mui/icons-material/Cancel";
import { RightSidebarData } from "./RightSidebarData";
import { AppContext } from "./Dashboard";
const RightSidebar = () => {
  const { sidebar, showSidebar } = useContext(AppContext);
  return (
    <div className="rightsidebar">
      <button className="notificationbutton" onClick={showSidebar}>
        <NotificationsIcon />
      </button>
      <div className={sidebar ? "rightsidebaractive" : "rightsidebarnot"}>
        <button className="cancelbutton" onClick={showSidebar}>
          <CancelIcon />
        </button>
        <h2>Notifications</h2>
        <ul className="rightsidebarList">
          {RightSidebarData.map((val, key) => {
            return (
              <li key={key} className="row">
                <div id="title">{val.title}</div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default RightSidebar;
