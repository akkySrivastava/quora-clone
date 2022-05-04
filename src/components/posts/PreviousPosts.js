import React, { useState, useEffect } from "react";
import "./PreviousPosts.css"
import tagMap from "../../util/sidebar_map"
import db from "../../firebase";


function PreviousPosts({userEmail, tag}) {

    

    const [posts, setPosts] = useState([])
    useEffect(() => {
        db.collection("content")
          .orderBy("timestamp", "desc")
          .onSnapshot((snapshot) =>
            setPosts(
              snapshot.docs.map((doc) => ({
                data: doc.data()
              }))
            )
        ); 
      }, []);

    return (
        <>
        <h2>Past Progress:</h2>
        <div className="previous_posts">
            {posts.map(({data}) =>
                data.tag == tag && data.user.email == userEmail? 
                    <img src={data.image} /> : null
                
            )}
        </div>
        </>
    )

}

export default PreviousPosts;