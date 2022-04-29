import React from "react";
import QandA from "./QandA";
import QHeader from "../QHeader";
import { useLocation } from "react-router-dom";

import "./Form.css";

function Form() {
    const location = useLocation();
  return (
    <div className="form-page">
        <QHeader />
            <div className="form">
                <div className="header">
                   <h1>{location.state.header}</h1>
                </div>
                {location.state.questions.map((question) => (
                    <QandA question={question} />
                ))}
                <button>Send</button>
        </div>
    </div> 
  );
}

export default Form;
