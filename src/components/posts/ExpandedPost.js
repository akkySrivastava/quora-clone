import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "./ExpandedPost.css";
import QHeader from "../QHeader";
import LargePost from "./LargePost.js"
import Comments from "./Comments.js"

function ExpandedPost() {

  const location = useLocation();

  return (
    <div className="expanded_post">
        <QHeader />
        <div className="post_content">
            <LargePost 
              imageUrl={location.state.imageUrl}
              tag={location.state.tag}
              question={location.state.question}
              content={location.state.content}
              progress={location.state.progress}
              userEmail={location.state.userEmail}/>
            <Comments
              userEmail={location.state.userEmail}
              id={location.state.id} />
        </div>
        

    </div>
  );
}

export default ExpandedPost;

