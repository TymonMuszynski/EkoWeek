import React from "react";
import { Link } from "react-scroll";
import "../styles/homeStyle.css";

import mainPhoto from "../assets/home_page.svg";
import mobilePhotoUp from "../assets/home_page_mobile_up.svg";
import home_page_contest from "../assets/home_page_contest.svg";
import mobilePhotoDown from "../assets/home_page_mobile_down.svg";
import logoMedium from "../assets/logo_medium.png";
import logoMediumWhite from "../assets/logo_medium_white.png";

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
  scrollWin = (x, y) => {
    window.scrollBy(x, y);
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
                Pragniesz dbać o środowisko, ale wydaje ci się to uciążliwe?
                Jeśli tak, to ten projekt stworzony jest idealnie dla ciebie.
                Dzięki akcji EkoWeek dowiesz się, jakie zmiany możesz wprowadzić
                nawet w codziennym życiu żeby świat stał się mniej
                zanieczyszczony!
              </span>
            </div>
            <div className="btn-conteiner">
              <div className="btn">
                <Link to="section1" spy={true} smooth={true}>
                  Dowiedz się więcej
                </Link>
              </div>
              <div className="btn-contact">Kontakt</div>
            </div>
          </div>
          <div id="section1" className="bigTextConteiner">
            <span className="bigTextMobile">
              Chwytliwy tekst tekst tekst tekst
            </span>
          </div>
          <div className="resonConteiner">
            <div className="verticalLine"></div>
            <div className="horizontalLine"></div>
            <div className="reson">
              <span className="smallTextMobile">
                Pragniesz dbać o środowisko, ale wydaje ci się to uciążliwe?
                Jeśli tak, to ten projekt stworzony jest idealnie dla ciebie.
              </span>
            </div>
            <div className="reson">
              <span className="smallTextMobile">
                Pragniesz dbać o środowisko, ale wydaje ci się to uciążliwe?
                Jeśli tak, to ten projekt stworzony jest idealnie dla ciebie.
              </span>
            </div>
            <div className="reson">
              <span className="smallTextMobile">
                Pragniesz dbać o środowisko, ale wydaje ci się to uciążliwe?
                Jeśli tak, to ten projekt stworzony jest idealnie dla ciebie.
              </span>
            </div>
            <div className="reson">
              <span className="smallTextMobile">
                Pragniesz dbać o środowisko, ale wydaje ci się to uciążliwe?
                Jeśli tak, to ten projekt stworzony jest idealnie dla ciebie.
              </span>
            </div>
          </div>
          <div id="section2" className="contestConeiner">
            <img
              src={home_page_contest}
              style={{ width: "100%" }}
              alt="25"
            ></img>
            <div className="secondMainText">
              <span className="bigTextMobile">
                Chwytliwy tekst tekst tekst tekst
              </span>
              <div style={{ width: "90%", paddingTop: "20px" }}>
                <span
                  className="smallTextMobile"
                  style={{ textAlign: "center" }}
                >
                  Pragniesz dbać o środowisko, ale wydaje ci się to uciążliwe?
                  Jeśli tak, to ten projekt stworzony jest idealnie dla ciebie.
                  Dzięki akcji EkoWeek dowiesz się, jakie zmiany możesz
                  wprowadzić nawet w codziennym życiu żeby świat stał się mniej
                  zanieczyszczony.
                </span>
              </div>
              <div
                className="btn-conteiner"
                style={{
                  justifyContent: "center",
                  width: "100%",
                }}
              >
                <div
                  className="btn"
                  style={{
                    width: "50%",
                  }}
                >
                  Dowiedz się więcej
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <>
          <div className="main">
            <img src={logoMedium} className="logoMedium" alt="0" />
            <img src={mainPhoto} className="mainPhoto" alt="3" />
            <div className="mainText">
              <span className="bigText">Chwytliwy tekst tekst tekst tekst</span>
              <div style={{ width: "35vw", paddingTop: "20px" }}>
                <span className="smallText">
                  Pragniesz dbać o środowisko, ale wydaje ci się to uciążliwe?
                  Jeśli tak, to ten projekt stworzony jest idealnie dla ciebie.
                  Dzięki akcji EkoWeek dowiesz się, jakie zmiany możesz
                  wprowadzić nawet w codziennym życiu żeby świat stał się mniej
                  zanieczyszczony.
                </span>
              </div>

              <div className="btn-conteiner">
                <div className="btn">
                  <Link to="section1" spy={true} smooth={true}>
                    Dowiedz się więcej
                  </Link>
                </div>

                <div className="btn-contact">Kontakt</div>
              </div>
            </div>
          </div>
          <div id="section1" className="bigTextConteiner">
            <span className="bigText">Chwytliwy tekst tekst tekst tekst </span>
          </div>
          <div className="resonConteiner">
            <div className="verticalLine"></div>
            <div className="horizontalLine"></div>
            <div className="reson">
              <span className="smallText">
                Pragniesz dbać o środowisko, ale wydaje ci się to uciążliwe?
                Jeśli tak, to ten projekt stworzony jest idealnie dla ciebie.
              </span>
            </div>
            <div className="reson">
              <span className="smallText">
                Pragniesz dbać o środowisko, ale wydaje ci się to uciążliwe?
                Jeśli tak, to ten projekt stworzony jest idealnie dla ciebie.
              </span>
            </div>
            <div className="reson">
              <span className="smallText">
                Pragniesz dbać o środowisko, ale wydaje ci się to uciążliwe?
                Jeśli tak, to ten projekt stworzony jest idealnie dla ciebie.
              </span>
            </div>
            <div className="reson">
              <span className="smallText">
                Pragniesz dbać o środowisko, ale wydaje ci się to uciążliwe?
                Jeśli tak, to ten projekt stworzony jest idealnie dla ciebie.
              </span>
            </div>
          </div>
          <div id="section2" className="contestConeiner">
            <img
              src={home_page_contest}
              style={{ width: "60%" }}
              alt="26"
            ></img>
            <div className="secondMainText">
              <span className="bigText">Konkurs</span>
              <div style={{ width: "35vw", paddingTop: "20px" }}>
                <span className="smallText" style={{ textAlign: "center" }}>
                  Pragniesz dbać o środowisko, ale wydaje ci się to uciążliwe?
                  Jeśli tak, to ten projekt stworzony jest idealnie dla ciebie.
                  Dzięki akcji EkoWeek dowiesz się, jakie zmiany możesz
                  wprowadzić nawet w codziennym życiu żeby świat stał się mniej
                  zanieczyszczony.
                </span>
              </div>
              <div
                className="btn-conteiner"
                style={{
                  justifyContent: "center",
                  width: "100%",
                }}
              >
                <div
                  className="btn"
                  style={{
                    width: "50%",
                  }}
                >
                  <Link to="section1" spy={true} smooth={true}>
                    Dowiedz się więcej
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </>
      );
    }
  }
}

export default home;
