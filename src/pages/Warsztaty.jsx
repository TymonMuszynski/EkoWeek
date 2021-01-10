import react, { Component } from "react";
import "../styles/WarsztatyStyle.css";
import WarsztatyUp from "../assets/Warsztaty_up.svg";
import WarsztatyDown from "../assets/Warsztaty_down.svg";
import Elements from "../components/elements";
import profile from "../assets/dupa.png";

class Warsztaty extends Component {
  state = {
    elements: [
      {
        id: 1,
        photo: profile,
        link: "https://www.youtube.com/watch?v=AVS2YMSAC70",
        nick: "Kaczor Donald",
        color: "#F3E636",
        name: "Drzewa są fajne",
      },
      {
        id: 2,
        photo: profile,
        link: "https://www.youtube.com/watch?v=Lt4Z5oOAeEY",
        nick: "Kaczor Donald",
        color: "#1EC51F",
        name: "Krzaki są fajne",
      },
      {
        id: 3,
        photo: profile,
        link: "https://www.youtube.com/watch?v=Lt4Z5oOAeEY",
        nick: "Kaczor Donald",
        color: "#36B0D8",
        name: "Kwiaty i krzaki są fajne",
      },
      {
        id: 4,
        photo: profile,
        link: "https://www.youtube.com/watch?v=Lt4Z5oOAeEY",
        nick: "Kaczor Donald",
        color: "#F1544E",
        name: "EKO EKO EKO EKO EKO",
      },
      {
        id: 5,
        photo: profile,
        link: "https://www.youtube.com/watch?v=Lt4Z5oOAeEY",
        nick: "Kaczor Donald",
        color: "#F1F0F2",
        name: "EKO EKO EKO EKO EKO",
      },
      {
        id: 6,
        photo: profile,
        link: "https://www.youtube.com/watch?v=Lt4Z5oOAeEY",
        nick: "Kaczor Donald",
        color: "#201c22",
        name: "EKO EKO EKO EKO EKO",
      },
      {
        id: 7,
        photo: profile,
        link: "https://www.youtube.com/watch?v=Lt4Z5oOAeEY",
        nick: "Kaczor Donald",
        color: "#6B7B83",
        name: "EKO EKO EKO EKO EKO",
      },
      {
        id: 8,
        photo: profile,
        link: "https://www.youtube.com/watch?v=Lt4Z5oOAeEY",
        nick: "Kaczor Donald",
        color: "#6C8D8D",
        name: "EKO EKO EKO EKO EKO",
      },
    ],
  };
  render() {
    return (
      <react.Fragment>
        <div className="main">
          <img src={WarsztatyUp} className="PhotoUp" />
          <div className="BigText">
            <span>Zobacz jak mozesz poprawić środowisko</span>
          </div>
          <div className="Conteiner">
            <div>
              <span>coś</span>
            </div>
          </div>
          <Elements elements={this.state.elements} />
          <img src={WarsztatyDown} className="PhotoDown" />
        </div>
      </react.Fragment>
    );
  }
}

export default Warsztaty;
