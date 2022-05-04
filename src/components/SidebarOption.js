import { Add } from "@material-ui/icons";
import React, { useContext, useState } from "react";
import { FilterContext } from "./filter.js";
import "./SidebarOption.css";




function SidebarOption({ src, title}) {
  const [filter, setFilter] = useContext(FilterContext);
  return (
      <div className="sidebarOption"
            onClick={() => setFilter(title)}>
              <h2>
                {src}
              </h2>
        <p className="sidebar_title">{title}</p>
      </div>
  );
}

export default SidebarOption;
