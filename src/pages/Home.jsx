import React from "react";

import "../styles/homeStyle.css";

import mainPhoto from "../assets/home_page.svg";
import mobilePhotoUp from "../assets/home_page_mobile_up.svg";
import mobilePhotoDown from "../assets/home_page_mobile_down.svg";
import logoMedium from "../assets/logo_medium.png";
import logoMediumWhite from "../assets/logo_medium_white.png";

// import { FaInstagram } from "react-icons/fa";
// import { AiFillFacebook, AiFillYoutube } from "react-icons/ai";

class home extends React.Component {
  constructor() {
    super();
    this.state = {
      width: window.innerWidth,
    };
  }

  componentWillMount() {
    window.addEventListener("resize", this.handleWindowSizeChange);
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.handleWindowSizeChange);
  }

  handleWindowSizeChange = () => {
    this.setState({ width: window.innerWidth });
  };

  render() {
    const { width } = this.state;
    const isMobile = width <= 950;

    if (isMobile) {
      return (
        <div className="mainMobile">
          <img src={logoMediumWhite} className="logoMediumWhite" alt="0" />
          <img src={mobilePhotoUp} className="mobilePhoto" alt="1" />
          <div className="mobileTextConteiner">
            <span className="bigTextMobile">
              Chwytliwy tekst tekst tekst tekst
            </span>
            <div className="smallTextMobileConteiner">
              <span className="smallTextMobile">
                Dzięki akcji EkoWeek dowiesz się, jakie zmiany możesz wprowadzić
                nawet w codziennym życiu żeby świat stał się mniej
                zanieczyszczony!
              </span>
            </div>
            <div className="btn-conteiner">
              <div className="btn">Dowiedz się więcej</div>
              <div className="btn-contact">Kontakt</div>
            </div>
          </div>
          <div className="mobilePhotoDown">
            <img src={mobilePhotoDown} alt="2" />
          </div>
        </div>
      );
    } else {
      return (
        <div className="main">
          <img src={logoMedium} className="logoMedium" alt="0" />
          <img src={mainPhoto} className="mainPhoto" alt="3" />
          <div className="mainText">
            <span className="bigText">Chwytliwy tekst tekst tekst tekst </span>
            <div style={{ width: "35vw", paddingTop: "20px" }}>
              <span className="smallText">
                Pragniesz dbać o środowisko, ale wydaje ci się to uciążliwe?
                Jeśli tak, to ten projekt stworzony jest idealnie dla ciebie.
                Dzięki akcji EkoWeek dowiesz się, jakie zmiany możesz wprowadzić
                nawet w codziennym życiu żeby świat stał się mniej
                zanieczyszczony.
              </span>
            </div>
            <div className="btn-conteiner">
              <div className="btn">Dowiedz się więcej</div>
              <div className="btn-contact">Kontakt</div>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default home;
