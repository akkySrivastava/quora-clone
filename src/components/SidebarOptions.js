import { Add } from "@material-ui/icons";
import React, { useState } from "react";
import "./SidebarOption.css";
import SidebarOption from "./SidebarOption";


function SidebarOptions() {


  const [input, setInput] = useState("all");

  const callback = (title) => {
    console.log(title);
    this.setInput(title);
  }


  return (
    <div className="sidebarOptions">
      <SidebarOption src="https://cdn.shopify.com/s/files/1/2398/2457/t/19/assets/pf-9170c22c--DSC06111.jpg?v=1615866938" title='Visual Arts' />
      <SidebarOption src="https://marcolearning.com/wp-content/uploads/2022/02/different-kinds-of-writing-styles.jpg" title='Writing' />
      <SidebarOption src="http://www.inquiriesjournal.com/imgs/1200x1200/crop/article-images/uid-170-1059163527-2886/92192b.jpg" title='Film' />
      <SidebarOption src="https://qphs.fs.quoracdn.net/main-thumb-t-801-100-Sf8h894FXbQZQit0TeqDrrqS6xw6dwCQ.jpeg" title="Music" />
    </div>
  );
}

export default SidebarOptions;
