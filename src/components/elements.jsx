import React, { Component } from "react";
import Element from "./element";
import "../styles/elementStyle.css";

class Elements extends Component {
  render() {
    const { elements, videoState } = this.props.state;

    return (
      <React.Fragment>
        <div className="elements">
          {elements.map((element) =>
            videoState === element.kind ? <Element element={element} /> : null
          )}
        </div>
      </React.Fragment>
    );
  }
}

export default Elements;
