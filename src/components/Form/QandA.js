import React from "react";
import "./Form.css";

function QandA({ question }) {
  return (
    <div className="qanda">
      <h4>{question}</h4>
      <textarea rows={6} placeholder="Share your thoughts..."></textarea>
    </div>
  );
}

export default QandA;
