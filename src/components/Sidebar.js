import React from "react";
import SidebarOptions from "./SidebarOptions";
import "./Sidebar.css";

function Sidebar({ updateFilter }) {
  return (
    <div className="sidebar">
      <SidebarOptions />
    </div>
  );
}

export default Sidebar;
