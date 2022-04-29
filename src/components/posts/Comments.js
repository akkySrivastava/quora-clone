import React, { useState, useEffect, useCallback } from "react";
import "./Comments.css"
import { useDispatch, useSelector } from "react-redux";
import db from "../../firebase"
import firebase from "firebase"
import { selectQuestionId, setQuestionInfo } from "../../features/questionSlice";
import { Link, useHistory } from "react-router-dom";

function Comments({userEmail, id}) {

    const [getAnswers, setGetAnswers] = useState([]);
    const [answer, setAnswer] = useState('');
    
    const history = useHistory();
    const onCollaborateClick = useCallback(() => history.push('/collaborate', { header: "Request to Collaborate" ,
                                                                                questions: ["Why would you like to join this project?",
                                                                                            "What skills can you contribute to this project?",
                                                                                            "What experience do you have?"]}));

    const dispatch = useDispatch();

    const getName = (email) => { return email.substring(0, email.indexOf('@')) }
    dispatch(
        setQuestionInfo({
            questionId: id,
            questionName: id,
        })
    )
    const questionId = useSelector(selectQuestionId);
    
    const handleAnswer = (e) => {
        e.preventDefault();
    
        if (id) {
          db.collection("content").doc(id).collection("answer").add({
            user: userEmail,
            answer: answer,
            questionId: id,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
          });
        }
        console.log(questionId);
        setAnswer("");
      };

    useEffect(() => {
          db.collection("content")
            .doc(id)
            .collection("answer")
            .orderBy("timestamp", "desc")
            .onSnapshot((snapshot) =>
              setGetAnswers(
                snapshot.docs.map((doc) => ({ id: doc.id, answers: doc.data() }))
              )
            );
        
      })

    return (
        <div className="comments">
            <h1>Comments</h1>

            <div className="user_answer">
                <textarea cols={10} placeholder="Share your thoughts" onChange={(e) => setAnswer(e.target.value)}>
                </textarea>
                <button onClick={handleAnswer}>submit</button>
            </div>

            <div className="answers">
                {getAnswers.map(({ id, answers }) => (
                    <Answer author={getName(answers.user)} timestamp={answers.timestamp} answer={answers.answer}/>
                ))}
            </div>

            <button className="collaborate" onClick={onCollaborateClick}>Collaborate</button>
           

        </div>
        
    )
}

function Answer({author, timestamp, answer}) {
    return (
    <div className="answer">
        <p><span className="answer_body">{answer}</span> {" - " + author}</p>
    </div>
        )
}

export default Comments;