import React from "react";
import DateRangeIcon from "@mui/icons-material/DateRange";
import RightSidebar from "./RightSidebar";
const DashboardHeader = () => {
  const current = new Date();
  const date = `${current.getDate()}/${
    current.getMonth() + 1
  }/${current.getFullYear()}`;
  return (
    <div className="header">
      <div className="name">
        <h1>Hello, Piyush</h1>
      </div>
      <div className="rightbar">
        <div className="notification">
          <RightSidebar />
        </div>
        <div className="date">
          <DateRangeIcon></DateRangeIcon>
          <h3>{date}</h3>
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;
