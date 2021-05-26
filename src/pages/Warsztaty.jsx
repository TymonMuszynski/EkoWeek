import react, { Component } from "react";
import "../styles/WarsztatyStyle.css";
import WarsztatyUp from "../assets/Warsztaty_up.svg";
import WarsztatyUpMobile from "../assets/Warsztaty_mobile_up.svg";
import WarsztatyDown from "../assets/Warsztaty_down.svg";
import logoWhite from "../assets/logo_medium_white.png";
import Elements from "../components/elements";

import photo_1 from "../assets/profilePictures/1.jpg";
import photo_2 from "../assets/profilePictures/2.jpg";
import photo_3 from "../assets/profilePictures/3.jpg";
import photo_4 from "../assets/profilePictures/4.jpg";
import photo_5 from "../assets/profilePictures/5.jpg";
// import photo_6 from "../assets/profilePictures/6.jpg";
import photo_7 from "../assets/profilePictures/7.jpg";
import photo_8 from "../assets/profilePictures/8.jpg";
import photo_9 from "../assets/profilePictures/9.jpg";
import photo_10 from "../assets/profilePictures/10.jpg";
// import photo_11 from "../assets/profilePictures/11.jpg";
// import photo_12 from "../assets/profilePictures/12.jpg";
// import photo_13 from "../assets/profilePictures/13.jpg";
// import photo_14 from "../assets/profilePictures/14.jpg";
// import photo_15 from "../assets/profilePictures/15.jpg";
import photo_16 from "../assets/profilePictures/16.jpg";
import photo_17 from "../assets/profilePictures/17.jpg";
import photo_18 from "../assets/profilePictures/18.jpg";
// import photo_19 from "../assets/profilePictures/19.jpg";
import photo_20 from "../assets/profilePictures/20.jpg";
import photo_21 from "../assets/profilePictures/21.jpg";
// import photo_22 from "../assets/profilePictures/22.jpg";
import photo_23 from "../assets/profilePictures/23.jpg";
import photo_24 from "../assets/profilePictures/24.jpg";
// import photo_25 from "../assets/profilePictures/25.jpg";
import photo_26 from "../assets/profilePictures/26.jpg";
import photo_27 from "../assets/profilePictures/27.jpg";
// import photo_28 from "../assets/profilePictures/28.jpg";
import photo_29 from "../assets/profilePictures/29.jpg";
// import photo_30 from "../assets/profilePictures/30.jpg";
import photo_31 from "../assets/profilePictures/31.jpg";
import logo_mini from "../assets/logo_mini.svg";

class Warsztaty extends Component {
  state = {
    width: window.innerWidth,
    videoState: "Warsztaty",
    elements: [
      {
        id: 1,
        photo: photo_4,
        kind: "Warsztaty",
        link: "https://www.youtube.com/watch?v=WS-Jwb4X4p4",
        nick: "Naturalna",
        color: "#FDAD19",
        name: "Wegańską Sałatka",
      },
      {
        id: 1,
        photo: photo_2,
        kind: "Warsztaty",
        link: "https://youtu.be/hg7J3Z8jQzo",
        nick: "Mleko&Mute",
        color: "#37CF4B",
        name: "wegańskie ciasteczka",
      },
      {
        id: 1,
        photo: photo_5,
        kind: "Warsztaty",
        link: "https://www.youtube.com/watch?v=4V1o5w1pNhQ&t=4s",
        nick: "Coś Słodkiego",
        color: "#08A0CE",
        name: "Ciasto Banoffee",
      },
      {
        id: 1,
        photo: photo_9,
        kind: "Warsztaty",
        link: "https://www.youtube.com/watch?v=ypY1OHm2jdA&t=2s",
        nick: "Blejzu Custom",
        color: "#19FDD5",
        name: "Custom Butów",
      },
      {
        id: 1,
        photo: photo_10,
        kind: "Wyklady",
        link: "https://www.youtube.com/watch?v=mO3BWH-7gWQ",
        nick: "Ubrania do Oddania",
        color: "#FD1919",
        name: "Ubrania do Oddania",
      },
      {
        id: 1,
        photo: photo_3,
        kind: "Wyklady",
        link: "https://www.youtube.com/watch?v=7R8jFs_5jZE",
        nick: "Filip Wąchała",
        color: "#2519FD",
        name: "boks a dieta wegańska",
      },
      {
        id: 1,
        photo: photo_8,
        kind: "Live",
        link: "https://fb.watch/4_Eod2kx7U/",
        nick: "Otwarte Klatki",
        color: "#CF19FD",
        name: "Przemysł Futrzarski",
      },
      {
        id: 1,
        photo: photo_21,
        kind: "Live",
        link: "https://fb.watch/4_ExJDzCRk/",
        nick: "TakeCup",
        color: "#FDBC6F",
        name: "TakeCup",
      },
      {
        id: 1,
        photo: photo_1,
        kind: "Live",
        link: "https://fb.watch/4_ELW2gd9V/",
        nick: "Katarzyna Rećko",
        color: "#6FB0FD",
        name: "Dietetyk o dietach",
      },
      {
        id: 1,
        photo: photo_7,
        kind: "Live",
        link: "https://fb.watch/4_ELW2gd9V/",
        nick: "Kuba Korczak",
        color: "#79FD6F",
        name: "Gotwanie zero waste",
      },
      {
        id: 1,
        photo: photo_23,
        kind: "Live",
        link: "https://www.youtube.com/watch?v=oz80kYk0Zp4",
        nick: "Dominika Lasota ",
        color: "#6FB0FD",
        name: "Walka o klimat",
      },
      {
        id: 1,
        photo: photo_20,
        kind: "Live",
        link: "https://www.youtube.com/watch?v=otPpLOxJnX4",
        nick: "Eko-Logicznie",
        color: "#19FDD5",
        name: "Eko-ściema",
      },
      {
        id: 1,
        photo: photo_26,
        kind: "Live",
        link: "https://www.youtube.com/watch?v=unya6wZb-Gg",
        nick: "Wastewater",
        color: "#79FD6F",
        name: "Podwodny świat",
      },
      {
        id: 1,
        photo: photo_31,
        kind: "Live",
        link: "https://www.youtube.com/watch?v=p6jV1Pcu5lw",
        nick: "WWF",
        color: "#FD1919",
        name: "Fundacja z Pandą",
      },
      {
        id: 1,
        photo: photo_29,
        kind: "Live",
        link: "https://www.youtube.com/watch?v=jVlUqqdMuWc",
        nick: "Who Will Save The Planet",
        color: "#FDBC6F",
        name: "Who Will Save The Planet",
      },
      {
        id: 1,
        photo: photo_24,
        kind: "Live",
        link: "https://www.youtube.com/watch?v=4QLZFkfDzpM",
        nick: "Krzysztofem Rzymanem",
        color: "#19FDD5",
        name: " kawiarnia less-waste",
      },
      {
        id: 1,
        photo: photo_17,
        kind: "Live",
        link: "https://www.youtube.com/watch?v=daM0JYstE4Y",
        nick: "Too Good To Go",
        color: "#79FD6F",
        name: "Too Good To Go",
      },
      {
        id: 1,
        photo: photo_27,
        kind: "Live",
        link: "https://fb.watch/5h1zulOABz/",
        nick: "Green peace",
        color: "#FD1919",
        name: "Green peace",
      },
      {
        id: 1,
        photo: logo_mini,
        kind: "Warsztaty",
        link: "https://www.youtube.com/watch?v=L2W6wsNFKNY",
        nick: "Eko Week",
        color: "#FD1919",
        name: "baby yodę na szydełku",
      },
      {
        id: 1,
        photo: photo_16,
        kind: "Warsztaty",
        link: "https://www.youtube.com/watch?v=9_qsz4BvxzQ",
        nick: "Kor Ag",
        color: "#FDBC6F",
        name: "upcycling mebli",
      },
      {
        id: 1,
        photo: logo_mini,
        kind: "Warsztaty",
        link: "https://www.youtube.com/watch?v=yvZZt9PsMAQ",
        nick: "Eko Week",
        color: "#19FDD5",
        name: "uszyj scrunchie",
      },
      {
        id: 1,
        photo: photo_18,
        kind: "Wyklady",
        link: "https://www.youtube.com/watch?v=MYTN2EgzDSI",
        nick: "Frenezja",
        color: "#79FD6F",
        name: "biżuteria z żywicy",
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
