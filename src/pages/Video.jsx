import React from "react";
import "../styles/homeStyle.css";
import { useLocation } from "react-router-dom";

function Video(props) {
  let location = useLocation();
  console.log(location);

  return (
    <div className="mainConteiner">
      <sapn>{location.state.name.link}</sapn>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/tgbNymZ7vqY"
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowfullscreen
        title="video"
      ></iframe>
    </div>
  );
}

export default Video;
