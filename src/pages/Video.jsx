import React from "react";
import "../styles/videoStyle.css";
import { useLocation } from "react-router-dom";
import WarsztatyUp from "../assets/Warsztaty_up.svg";

function Video(props) {
  let location = useLocation();
  console.log(location);
  let link = location.state.name.link;

  return (
    <div className="mainVideo">
      <img src={WarsztatyUp} className="PhotoUp" alt="18" />
      {/* <div className="videoConteiner"> */}
      <iframe
        src={link}
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowfullscreen
        title="video"
        className="videoConteiner"
      ></iframe>
      {/* </div> */}
    </div>
  );
}

export default Video;
