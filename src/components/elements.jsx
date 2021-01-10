import React, { Component } from "react";
import Element from "./element";
import "../styles/elementStyle.css";

class Elements extends Component {
  render() {
    const { elements } = this.props;
    return (
      <React.Fragment>
        <div className="elements">
          {elements.map((element) => (
            <Element element={element} />
          ))}
        </div>
      </React.Fragment>
    );
  }
}

export default Elements;
