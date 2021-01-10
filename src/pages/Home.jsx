import React from "react";

import "../styles/homeStyle.css";

import mainPhoto from "../assets/home_page.svg";
import mobilePhotoUp from "../assets/home_page_mobile_up.svg";
import mobilePhotoDown from "../assets/home_page_mobile_down.svg";

import { FaInstagram } from "react-icons/fa";
import { AiFillFacebook, AiFillYoutube } from "react-icons/ai";

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
          <img src={mobilePhotoUp} className="mobilePhoto" alt="1" />
          <div className="mobileTextConteiner">
            <span className="bigTextMobile">Eko Week</span>
            <div className="smallTextMobileConteiner">
              <span className="smallTextMobile">
                Pragniesz dbać o środowisko, ale wydaje ci się to uciążliwe?
                Jeśli tak, to ten projekt stworzony jest idealnie dla ciebie.
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
          <img src={mobilePhotoDown} className="mobilePhotoDown" alt="2" />
        </div>
      );
    } else {
      return (
        <div className="main">
          <img src={mainPhoto} className="mainPhoto" alt="3" />
          <div className="mainText">
            <span className="bigText">Eko Week</span>
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
