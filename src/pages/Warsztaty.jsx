import react, { Component } from "react";
import "../styles/WarsztatyStyle.css";
import WarsztatyUp from "../assets/Warsztaty_up.svg";
import WarsztatyDown from "../assets/Warsztaty_down.svg";
import Elements from "../components/elements";
import profile from "../assets/dupa.png";

class Warsztaty extends Component {
  state = {
    videoState: "Warsztaty",
    elements: [
      {
        id: 1,
        photo: profile,
        kind: "Live",
        link: "https://www.youtube.com/embed/po5STMUQO-c",
        nick: "Kaczor Donald",
        color: "#F3E636",
        name: "Drzewa są fajne",
      },
      {
        id: 2,
        photo: profile,
        kind: "Warsztaty",
        link: "https://www.youtube.com/embed/po5STMUQO-c",
        nick: "Kaczor Donald",
        color: "#1EC51F",
        name: "Krzaki są fajne",
      },
      {
        id: 3,
        photo: profile,
        kind: "Warsztaty",
        link: "https://www.youtube.com/embed/po5STMUQO-c",
        nick: "Kaczor Donald",
        color: "#36B0D8",
        name: "Kwiaty i krzaki są fajne",
      },
      {
        id: 4,
        photo: profile,
        kind: "Wyklady",
        link: "https://www.youtube.com/embed/po5STMUQO-c",
        nick: "Kaczor Donald",
        color: "#F1544E",
        name: "EKO EKO EKO EKO EKO",
      },
      {
        id: 5,
        photo: profile,
        kind: "Wyklady",
        link: "https://www.youtube.com/embed/po5STMUQO-c",
        nick: "Kaczor Donald",
        color: "#F1F0F2",
        name: "EKO EKO EKO EKO EKO",
      },
      {
        id: 6,
        photo: profile,
        kind: "Live",
        link: "https://www.youtube.com/embed/po5STMUQO-c",
        nick: "Kaczor Donald",
        color: "#201c22",
        name: "EKO EKO EKO EKO EKO",
      },
      {
        id: 7,
        photo: profile,
        kind: "Live",
        link: "https://www.youtube.com/embed/po5STMUQO-c",
        nick: "Kaczor Donald",
        color: "#6B7B83",
        name: "EKO EKO EKO EKO EKO",
      },
      {
        id: 8,
        photo: profile,
        kind: "Live",
        link: "https://www.youtube.com/embed/po5STMUQO-c",
        nick: "Kaczor Donald",
        color: "#6C8D8D",
        name: "EKO EKO EKO EKO EKO",
      },
    ],
  };

  changeVideoState = (name) => {
    let videoState = name;
    this.setState({ videoState });
    console.log(this.state);
  };
  render() {
    return (
      <react.Fragment>
        <div className="main">
          <img src={WarsztatyUp} className="PhotoUp" alt="14" />
          <div className="BigText">
            <span>Zobacz jak mozesz poprawić środowisko</span>
          </div>
          <div className="Conteiner">
            <div className="buttonConteiner">
              <button
                className="button1"
                onClick={() => this.changeVideoState("Warsztaty")}
              >
                Warsztaty
              </button>
              <button
                className="button1"
                onClick={() => this.changeVideoState("Live")}
              >
                Live
              </button>
              <button
                className="button1"
                onClick={() => this.changeVideoState("Wyklady")}
              >
                Wykłady
              </button>
            </div>
            <div className="smallText">
              <span>
                tekst tekst tekst tekst tekst tekst tekst tekst tekst teksttekst
                tekst tekst tekst teksttekst tekst tekst tekst teksttekst tekst
              </span>
            </div>
          </div>
          <Elements state={this.state} />
          <img src={WarsztatyDown} className="PhotoDown" alt="15" />
        </div>
      </react.Fragment>
    );
  }
}

export default Warsztaty;
