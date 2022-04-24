import { Add } from "@material-ui/icons";
import React, { useState } from "react";
import "../util/sidebar_map";
import "./SidebarOption.css";
import SidebarOption from "./SidebarOption";
import tagMap from "../util/sidebar_map";


function SidebarOptions() {


  const [input, setInput] = useState("all");

  const callback = (title) => {
    console.log(title);
    this.setInput(title);
  }


  return (
    <div className="sidebarOptions">
      {Object.keys(tagMap).map((key) => (
         <SidebarOption src={tagMap[key]} title={key} />
       ))}
    </div>

  )
  
}

export default SidebarOptions;
