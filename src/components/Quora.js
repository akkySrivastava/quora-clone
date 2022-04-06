import React, { useState } from "react";
import Feed from "./Feed.js";
import QHeader from "./QHeader";
import "./Quora.css";
import Sidebar from "./Sidebar";
import Widget from "./Widget.js";

import { FilterContext } from "./filter.js"
function Quora() {


  const [filter, setFilter] = useState("all");

  return (
    <div className="quora">
      <FilterContext.Provider value ={[filter, setFilter]}>
        <QHeader />
        <div className="quora__content">
          <Sidebar />
          <Feed />
          <Widget />
        </div>
      </FilterContext.Provider>
    </div>
  );
}

export default Quora;

