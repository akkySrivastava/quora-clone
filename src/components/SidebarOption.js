import { Add } from "@material-ui/icons";
import React, { useContext, useState } from "react";
import { FilterContext } from "./filter.js";
import "./SidebarOption.css";




function SidebarOption({ src, title}) {
  const [filter, setFilter] = useContext(FilterContext);
  return (
      <div className="sidebarOption"
            onClick={() => setFilter(title)}>
        <img
          src={src}
          alt=""
        />
        <p>{title}</p>
      </div>
  );
}

export default SidebarOption;
