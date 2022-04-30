import React, { useEffect, useState, useContext } from "react";
import QuorBox from "./QuorBox";
import "./Feed.css";
import Post from "./Post";
import db from "../firebase";
import { FilterContext } from "./filter.js";


function Feed() {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useContext(FilterContext);


  useEffect(() => {
    db.collection("content")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setPosts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            questions: doc.data(),
          }))
        )
    ); 
  }, []);

  return (
    <div className="feed">
      {posts.map(({ id, questions }) => (
            filter.toLowerCase() == "all" || questions.tag == filter ? <Post
              key={id}
              Id={id}
              tag={questions.tag}
              question={questions.question}
              content={questions.content}
              imageUrl={questions.image}
              timestamp={questions.timestamp}
              progress={questions.progress}
              users={questions.user} 
          /> : null
      ))}
      
    </div>
  );
}

export default Feed;
