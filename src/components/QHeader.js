import React, { useState, useCallback } from "react";
import HomeIcon from "@material-ui/icons/Home";
import FeaturedPlayListOutlinedIcon from "@material-ui/icons/FeaturedPlayListOutlined";
import AssignmentTurnedInOutlinedIcon from "@material-ui/icons/AssignmentTurnedInOutlined";
import PeopleAltOutlinedIcon from "@material-ui/icons/PeopleAltOutlined";
import NotificationsOutlinedIcon from "@material-ui/icons/NotificationsOutlined";
import SearchIcon from "@material-ui/icons/Search";
import LanguageIcon from "@material-ui/icons/Language";
import Modal from "react-modal";
import tagMap from "../util/sidebar_map";
import {useHistory} from 'react-router-dom';

import "./QHeader.css";
import { Avatar, Button, Input } from "@material-ui/core";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import db, { auth } from "../firebase";
import { storage } from "../firebase";
import { ExpandMore, Link } from "@material-ui/icons";
import firebase from "firebase";

Modal.setAppElement("#root");

function QHeader() {
  const user = useSelector(selectUser);

  const [IsmodalOpen, setIsModalOpen] = useState(false);
  const [input, setInput] = useState("");
  const [inputUrl, setInputUrl] = useState("");
  const [inputTag, setInputTag] = useState("");
  const [inputContent, setInputContent] = useState("");
  const [image , setImage] = useState(null);
  const [progress, setProgress] = useState(50); 
  const uploadedImage = React.useRef(null);

  const questionName = input;

  const history = useHistory();
  const onHomeClick = useCallback(() => history.push('/'));

  const handleSlider = e => {
    console.log('setting level', e.target.value)
    setProgress(e.target.value);
  };

  const handleQuestion = async (e) => {

    e.preventDefault();
    setIsModalOpen(false);


    if(image != null) {
  
        const storageRef = storage.ref();
        const imageRef = storageRef.child(image.name);
        await imageRef.put(image);

      
        db.collection("content").add({
          user: user,
          question: input,
          tag: inputTag,
          content: inputContent,
          progress: progress,
          image: await imageRef.getDownloadURL(),
          timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        });
            

    } else {
      if (questionName) {
        db.collection("content").add({
          user: user,
          question: input,
          tag: inputTag,
          content: inputContent,
          progress: progress,
          image: null,
          timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        });
      }
  
    }


    setInput("");
    setInputUrl("");
    setInputTag("");
    setInputContent("");
    setProgress(50);
    setImage(null);
  };

  return (
    <div className="qHeader">
      <div className="qHeader__logo">
        <img
          src="http://localhost:3000/sorin_logo.png"
          alt="LogoNotFound"
          onClick={onHomeClick}
        />
      </div>
      <div className="qHeader__icons">
        <div className="active qHeader__icon">
          <HomeIcon onClick={onHomeClick}/>
        </div>
        <div className="qHeader__logout">
          {/* <PeopleAltOutlinedIcon />  */}
          <img
            onClick={() => auth.signOut()}
            src="https://iconarchive.com/download/i91934/icons8/windows-8/User-Interface-Logout.ico"
            alt="LogoNotFound"
          />
        </div>
      </div>
      <div className="qHeader__input">
        <SearchIcon />
        <input type="text" placeholder="Search" />
      </div>
      <div className="qHeader__Rem">
        <div className="qHeader__avatar">
          <Avatar
            className="Avatar"
            src={
              user.photo
                ? user.photo
                : "https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2.0,f_auto,g_center,h_250,q_auto:good,w_250/v1/gcs/platform-data-twilio/contentbuilder/Avatar.png"
            }
          />
        </div>
        <LanguageIcon />
        <Button className="post_button" onClick={() => setIsModalOpen(true)}>Post Content</Button>
        <Modal
          isOpen={IsmodalOpen}
          onRequestClose={() => setIsModalOpen(false)}
          shouldCloseOnOverlayClick={false}
          style={{
            overlay: {
              width: 700,
              height: 600,
              backgroundColor: "rgba(0,0,0,0.8)",
              zIndex: "1000",
              top: "50%",
              left: "50%",
              marginTop: "-300px",
              marginLeft: "-350px",
            },
          }}
        >
          <div className="modal__info">
            <Avatar
              className="avatar"
              src={
                user.photo
                  ? user.photo
                  : "https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2.0,f_auto,g_center,h_250,q_auto:good,w_250/v1/gcs/platform-data-twilio/contentbuilder/Avatar.png"
              }
            />

            <p>{user.disPlayName ? user.disPlayName : user.email}</p>
            <div className="modal__scope">
            <input
              type="range"
              id={"slider"}
              min={0}
              max={100}
              step={1}
              // value={state} // don't set value from state
              defaultValue={progress} // but instead pass state value as default value
              onInput={handleSlider} // only set state when handle is released
            />
            <h5>{progress + "%"}</h5>
            </div>

          </div>
          
          <div className="modal__Field">
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              type="text"
              placeholder="Title your progress"
            />
            <div className="modal__fieldLink">
              <textarea id="progress" rows="15" onChange={(e) => setInputContent(e.target.value)}></textarea>
            </div>
          </div>
          <div className="modal__buttons">
            <select name="Categories" id="selectList" onChange={(e) => setInputTag(e.target.value)}>
            {Object.keys(tagMap).map((key) => (
                <option value={key}> {key} </option>
              ))}
            </select>
            <div class="slidecontainer">
        
            </div>
            <input type="file" accept="image/*" multiple = {false} onChange={(e) => setImage(e.target.files[0])} />
            
            <button className="cancle" onClick={() => setIsModalOpen(false)}>
              Cancel
            </button>
            <button type="sumbit" onClick={handleQuestion} className="add">
              Post
            </button>
          </div>
        </Modal>
      </div>
    </div>
  );
}

export default QHeader;
