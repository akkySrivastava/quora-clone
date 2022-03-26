import { Add } from "@material-ui/icons";
import React from "react";
import "./SidebarOption.css";

function SidebarOptions() {
  return (
    <div className="sidebarOptions">
      <div className="sidebarOption">
        <img
          src="https://pyxis.nymag.com/v1/imgs/160/7b8/be9b71674a92129013428120b1a0c699b7-howtogetintodrawing.rsquare.w700.jpg"
          alt=""
        />
        <p>Drawing</p>
      </div>

      <div className="sidebarOption">
        <img
          src="https://cdn.shopify.com/s/files/1/2398/2457/t/19/assets/pf-9170c22c--DSC06111.jpg?v=1615866938"
          alt=""
        />
        <p>Painting</p>
      </div>

      <div className="sidebarOption">
        <img
          src="https://qphs.fs.quoracdn.net/main-thumb-t-801-100-Sf8h894FXbQZQit0TeqDrrqS6xw6dwCQ.jpeg"
          alt=""
        />
        <p>Music</p>
      </div>

      <div className="sidebarOption">
        <img
          src="http://www.inquiriesjournal.com/imgs/1200x1200/crop/article-images/uid-170-1059163527-2886/92192b.jpg"
          alt=""
        />
        <p>Filmmaking</p>
      </div>

      <div className="sidebarOption">
        <img
          src="https://marcolearning.com/wp-content/uploads/2022/02/different-kinds-of-writing-styles.jpg"
          alt=""
        />
        <p>Writing</p>
      </div>

      <div className="sidebarOption">
        <img
          src="https://www.thesprucecrafts.com/thmb/eZc0kzin-wIqynkBVzsXs0qZXsY=/3064x3064/smart/filters:no_upscale()/close-up-of-man-photographing-through-dslr-736206565-59a8bd2b054ad90010f15275.jpg"
          alt=""
        />
        <p>Photography</p>
      </div>

      <div className="sidebarOption">
        <img
          src="https://ae01.alicdn.com/kf/Hf6c82e56a241413d855d8d59053e78e5e/Pottery-Tools-Cutting-Knife-Sculpture-Carving-Craft-Supplies-Clay-Cutters-Ceramic-DIY-Design-Sculpting-Trimming-Modelling.jpg_Q90.jpg_.webp"
          alt=""
        />
        <p>Sculpting</p>
      </div>

    </div>
  );
}

export default SidebarOptions;
