import react, { Component } from "react";
import "../styles/WarsztatyStyle.css";
import WarsztatyUp from "../assets/Warsztaty_up.svg";
import WarsztatyUpMobile from "../assets/Warsztaty_mobile_up.svg";
import WarsztatyDown from "../assets/Warsztaty_down.svg";
import logoWhite from "../assets/logo_medium_white.png";
import Elements from "../components/elements";
import profile from "../assets/logo_mini.svg";

class Warsztaty extends Component {
  state = {
    width: window.innerWidth,
    videoState: "Warsztaty",
    elements: [
      {
        id: 1,
        photo: profile,
        kind: "Live",
        link: "",
        nick: "EkoWeek",
        color: "#37CF4B",
        name: "Live wkrótce dostępne",
      },
      {
        id: 1,
        photo: profile,
        kind: "Wyklady",
        link: "",
        nick: "EkoWeek",
        color: "#37CF4B",
        name: "Wykłady wkrótce dostępne",
      },
      {
        id: 1,
        photo: profile,
        kind: "Warsztaty",
        link: "",
        nick: "EkoWeek",
        color: "#37CF4B",
        name: "Warsztaty wkrótce dostępne",
      },
    ],
  };
  componentWillMount() {
    window.addEventListener("resize", this.handleWindowSizeChange);
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.handleWindowSizeChange);
  }

  handleWindowSizeChange = () => {
    this.setState({ width: window.innerWidth });
  };

  changeVideoState = (name) => {
    let videoState = name;
    this.setState({ videoState });
    console.log(this.state);
  };
  render() {
    const { width } = this.state;
    const isMobile = width <= 950;

    return (
      <react.Fragment>
        <div className="main">
          <img src={logoWhite} className="logoWhite" alt="21" />
          <img
            src={isMobile ? WarsztatyUpMobile : WarsztatyUp}
            className="PhotoUp"
            alt="14"
          />
          <div className="cn">
            <div className="BigText">
              <span>
                Warsztaty, Live, Wykłady… czyli łatwodostępna pigułka z wiedzą!
              </span>
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

              <div className="smallTextWarsztaty">
                {/* <span>
                  W związku z naszym projektem, chcemy aby informacje były
                  przekazywane w jak najbardziej przystępny sposób oraz żeby
                  tematyka trafiała w Wasze potrzeby i zainteresowania. W ciągu
                  całego tygodnia odbędzie się ich multum, żeby faktycznie można
                  byłoby cały tydzień podsumować jako pigułka z wiedzą…
                </span> */}
                {this.state.videoState === "Wyklady" ? (
                  <span>
                    W związku z naszym projektem, chcemy aby informacje były
                    przekazywane w jak najbardziej przystępny sposób oraz żeby
                    tematyka trafiała w Wasze potrzeby i zainteresowania. W
                    ciągu całego tygodnia odbędzie się ich multum, żeby
                    faktycznie można byłoby cały tydzień podsumować jako pigułka
                    z wiedzą…
                  </span>
                ) : this.state.videoState === "Warsztaty" ? (
                  <span>
                    Warsztaty mamy zamiar przeprowadzić w sposób bardzo podobny
                    do wykładów, aczkolwiek w tym przypadku będziemy zachęcać do
                    wykonywania! Polegać będą one głównie na pokazywaniu jak na
                    przykład stare ubrania przerobić na nowe, wyglądające jak
                    prosto ze sklepu… Również będzie możliwość obejrzenia ich na
                    Youtubie po jakimś czasie.
                  </span>
                ) : (
                  <span>
                    Live’y będą odbywać się na naszym profilu na Facebooku,
                    gdzie każdy będzie mógł bezpośrednio uczestniczyć w
                    dyskusji. Wykładowcy prowadzący live w krótszym spotkaniu
                    niż wykład poruszą tematy skupiając się bardziej na
                    szczegółach poszczególnych kwestii. Aby wiadomości ze
                    spotkań na żywo docierały do każdego chętnego zostaną za
                    każdym razem wstawione na Youtube.
                  </span>
                )}
              </div>
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
