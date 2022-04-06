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
      <SidebarOption src="https://pyxis.nymag.com/v1/imgs/160/7b8/be9b71674a92129013428120b1a0c699b7-howtogetintodrawing.rsquare.w700.jpg" title='Drawing' />
      <SidebarOption src="https://cdn.shopify.com/s/files/1/2398/2457/t/19/assets/pf-9170c22c--DSC06111.jpg?v=1615866938" title='Painting' />
      <SidebarOption src="https://qphs.fs.quoracdn.net/main-thumb-t-801-100-Sf8h894FXbQZQit0TeqDrrqS6xw6dwCQ.jpeg" title="Music" />
      <SidebarOption src="https://marcolearning.com/wp-content/uploads/2022/02/different-kinds-of-writing-styles.jpg" title='Writing' />
    </div>
  );
}

export default SidebarOptions;
