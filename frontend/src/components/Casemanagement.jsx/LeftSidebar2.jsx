import React from "react";
import {
  LeftSidebarData_Children,
  LeftSidebarData_Brands,
  LeftSidebarData_Orphanages,
  LeftSidebarData_Workers,
} from "./LeftSidebarData2";
import { Searchbar2 } from "./Searchbar2";
const LeftSidebar = () => {
  return (
    <div className="Leftsidebar2">
      <div className="childrens2">
        <Searchbar2
          placeholder="Enter a Children Name..."
          data={LeftSidebarData_Children}
        />
        <ul className="LeftsidebarList2">
          {LeftSidebarData_Children.map((val, key) => {
            return (
              <li key={key} className="row2">
                <div id="icon2">{val.icon}</div>
                <div id="title2">{val.title}</div>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="workers2">
        <Searchbar2
          placeholder="Enter a Worker Name..."
          data={LeftSidebarData_Workers}
        />
        <ul className="LeftsidebarList2">
          {LeftSidebarData_Workers.map((val, key) => {
            return (
              <li key={key} className="row2">
                <div id="icon2">{val.icon}</div>
                <div id="title2">{val.title}</div>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="orphanages2">
        <Searchbar2
          placeholder="Enter an Orphanage Name..."
          data={LeftSidebarData_Orphanages}
        />
        <ul className="LeftsidebarList2">
          {LeftSidebarData_Orphanages.map((val, key) => {
            return (
              <li key={key} className="row2">
                <div id="icon2">{val.icon}</div>
                <div id="title2">{val.title}</div>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="brands2">
        <Searchbar2
          placeholder="Enter a Brand Name..."
          data={LeftSidebarData_Brands}
        />
        <ul className="LeftsidebarList2">
          {LeftSidebarData_Brands.map((val, key) => {
            return (
              <li key={key} className="row2">
                <div id="icon2">{val.icon}</div>
                <div id="title2">{val.title}</div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default LeftSidebar;
