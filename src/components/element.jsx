import React, { Component } from "react";
import "../styles/elementStyle.css";

class Element extends Component {
  render() {
    const { color, name, nick, photo, link } = this.props.element;

    const colorCss = { backgroundColor: color };

    return (
      <a className="linkToFilm" href={link}>
        <div className="element" style={colorCss}>
          <div className="BigTextElement">
            <span>{name}</span>
          </div>
          <div className="conteiner">
            <img src={photo} className="photo" alt="16" />
            <span className="name">{nick}</span>
          </div>
        </div>
      </a>
    );
  }
}

export default Element;
