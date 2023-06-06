import React from "react";
import DashboardHeader from "./DashboardHeader1";
import LeftSidebar from "./LeftSidebar1";
import Main from "./Main1";
import "../../styles/Dashboardgrassroot.scss";
import RightSidebar from "./RightSidebar1";
import { useState, createContext } from "react";

export const AppContext = createContext();
const Dashboard_grassroot = () => {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => {
    setSidebar(!sidebar);
  };

  return (
    <div className="dashboard1">
      <div className="container1">
        <div className="left1">
          <LeftSidebar />
        </div>
        <div className="right1">
          <AppContext.Provider value={{ sidebar, showSidebar }}>
            <DashboardHeader />
            <Main />
          </AppContext.Provider>
        </div>
      </div>
    </div>
  );
};

export default Dashboard_grassroot;
