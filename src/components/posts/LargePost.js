import React, { useState } from "react";
import "./LargePost.css"
import tagMap from "../../util/sidebar_map"
import PreviousPosts from "./PreviousPosts"


function LargePost({imageUrl, question, content, tag, progress, userEmail}) {

    const getName = (email) => { return email.substring(0, email.indexOf('@')) }

    return (
        <div className="large_post">
            <h1 className="lp_title"><b>{question}</b>{" by " + getName(userEmail)}</h1>
            <div className="lp_info">
                <h3 className="lp_tag">Tags:<span className="tag">{tagMap[tag]}</span></h3>
                <h3 className="lp_tag">Progress:<span className="tag">{progress}</span></h3>
            </div>
            <img className="lp_img" src={imageUrl} />
            <p className="lp_content">{content}</p>
            <div className="past_progress">
                <PreviousPosts userEmail={userEmail} tag={tag}/>
            </div>
        </div>
    )

}

export default LargePost;