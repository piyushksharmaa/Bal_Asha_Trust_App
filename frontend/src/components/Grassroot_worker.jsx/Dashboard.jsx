import React from "react";
import DashboardHeader from "./DashboardHeader";
import LeftSidebar from "./LeftSidebar";
import Main from "./Main";
import "../../styles/Dashboard.scss";
import RightSidebar from "./RightSidebar";
import { useState, createContext } from "react";

export const AppContext = createContext();
const Dashboard = () => {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => {
    setSidebar(!sidebar);
  };

  return (
    <div className="dashboard">
      <div className="container">
        <div className="left">
          <LeftSidebar />
        </div>
        <div className="right">
          <AppContext.Provider value={{ sidebar, showSidebar }}>
            <DashboardHeader />
            <Main />
          </AppContext.Provider>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
