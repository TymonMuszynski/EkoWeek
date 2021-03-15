import React from "react";
import { Link } from "react-scroll";
import "../styles/homeStyle.css";

import mainPhoto from "../assets/home_page.svg";
import mobilePhotoUp from "../assets/home_page_mobile_up.svg";
import home_page_contest from "../assets/home_page_contest.svg";
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
            <span className="bigTextMobile">Początek twojego eko myślenia</span>
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
              <Link to="section1" spy={true} smooth={true}>
                <div className="btn">Dowiedz się więcej</div>
              </Link>
            </div>
          </div>
          <div id="section1" className="bigTextConteiner">
            <span className="bigTextMobile">Cele naszego projektu</span>
          </div>
          <div className="resonConteiner">
            <div className="verticalLine"></div>
            <div className="horizontalLine"></div>
            <div className="reson">
              <span className="smallTextMobile">
                Zachęcanie Was do prowadzenia bardziej ekologicznego trybu
                życia.
              </span>
            </div>
            <div className="reson">
              <span className="smallTextMobile">
                Pomaganie osobom niedożywionym i zarazem zapobieganie
                marnotrawstwu jedzenia restauracyjnego.
              </span>
            </div>
            <div className="reson">
              <span className="smallTextMobile">
                Zapewnianie rozrywki wraz z przeplecioną przez nią wiedzą...
                nauka przez zabawę
              </span>
            </div>
            <div className="reson">
              <span className="smallTextMobile">
                Podkreślanie wagi współczesnych problemów środowiskowych.
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
              <span className="bigTextMobile">Konkurs</span>
              <div style={{ width: "90%", paddingTop: "20px" }}>
                <span
                  className="smallTextMobile"
                  style={{ textAlign: "center" }}
                >
                  Konkurs, który przygotowaliśmy jest szczególnie ważny,
                  ponieważ bezpośrednio angażuje Was, a to Wy stanowicie
                  najistotniejszą część naszego projektu. Im więcej osób weźmie
                  udział tym lepiej dla planety… Dlaczego zapytacie. Już
                  spieszymy z odpowiedzią:
                </span>
                <p></p>
                <span
                  className="smallTextMobile"
                  style={{ textAlign: "center" }}
                >
                  • Każdy z nas ma w domu „miliony” odpadów, a wiadomo, że im
                  więcej śmieci tym gorzej dla środowiska. Wobec tego, oprócz do
                  standardowego recyklingu, chcielibyśmy zachęcić Was do
                  tworzenia nowych rzeczy… wyprodukowanych właśnie z odpadów!
                  Zadaniem, z którym trzeba się zmierzyć to zbudowanie rzeźby,
                  jak już pewnie się domyślacie – ze śmieci.
                </span>
                <p></p>
                <span
                  className="smallTextMobile"
                  style={{ textAlign: "center" }}
                >
                  • Prosimy o nadesłanie zdjęć Waszych cudownych wytworów wraz z
                  imieniem i nazwiskiem oraz wraz ze zgodą na ich publikowanie
                  na naszej stronie oraz na fanpage’ach na adres e-mail:
                  ekoweek.kontakt@gmail.com do 21 marca 2021 roku, czyli do Dnia
                  Ziemi
                </span>
                <p></p>
                <span
                  className="smallTextMobile"
                  style={{ textAlign: "center" }}
                >
                  • Publikacja wyników na stronie i fanpage’ach przypada na
                  ostatni dzień eventu. • Dla zwycięzców przewidziane są nagrody
                  pieniężne.
                </span>
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
              <span className="bigText">Początek twojego eko myślenia</span>
              <div
                style={{
                  width: "100%",
                  paddingTop: "20px",
                  textAlign: "center",
                }}
              >
                <span className="smallText">
                  Pragniesz dbać o środowisko, ale wydaje ci się to uciążliwe?
                  Jeśli tak, to ten projekt stworzony jest idealnie dla ciebie.
                  Dzięki akcji EkoWeek dowiesz się, jakie zmiany możesz
                  wprowadzić nawet w codziennym życiu żeby świat stał się mniej
                  zanieczyszczony.
                </span>
              </div>

              <div className="btn-conteiner">
                <Link
                  className="btn-link"
                  to="section1"
                  spy={true}
                  smooth={true}
                >
                  <div className="btn">Dowiedz się więcej </div>
                </Link>
              </div>
            </div>
          </div>
          <div id="section1" className="bigTextConteiner">
            <span className="bigText">Cele naszego projektu</span>
          </div>
          <div className="resonConteiner">
            <div className="verticalLine"></div>
            <div className="horizontalLine"></div>
            <div className="reson">
              <span className="smallText">
                Zachęcanie Was do prowadzenia ekologicznego trybu życia.
              </span>
            </div>
            <div className="reson">
              <span className="smallText">
                Pomaganie osobom niedożywionym i zapobieganie marnotrawstwu
                jedzenia.
              </span>
            </div>
            <div className="reson">
              <span className="smallText">
                Zapewnianie rozrywki wraz z przeplecioną przez nią wiedzą...
                nauka przez zabawę
              </span>
            </div>
            <div className="reson">
              <span className="smallText">
                Podkreślanie wagi współczesnych problemów środowiskowych.
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
                  Konkurs, który przygotowaliśmy jest szczególnie ważny,
                  ponieważ bezpośrednio angażuje Was, a to Wy stanowicie
                  najistotniejszą część naszego projektu. Im więcej osób weźmie
                  udział tym lepiej dla planety… Dlaczego zapytacie. Już
                  spieszymy z odpowiedzią:
                </span>
                <p></p>
                <span className="smallText" style={{ textAlign: "center" }}>
                  • Każdy z nas ma w domu „miliony” odpadów, a wiadomo, że im
                  więcej śmieci tym gorzej dla środowiska. Wobec tego, oprócz do
                  standardowego recyklingu, chcielibyśmy zachęcić Was do
                  tworzenia nowych rzeczy… wyprodukowanych właśnie z odpadów!
                  Zadaniem, z którym trzeba się zmierzyć to zbudowanie rzeźby,
                  jak już pewnie się domyślacie – ze śmieci.
                </span>
                <p></p>
                <span className="smallText" style={{ textAlign: "center" }}>
                  • Prosimy o nadesłanie zdjęć Waszych cudownych wytworów wraz z
                  imieniem i nazwiskiem oraz wraz ze zgodą na ich publikowanie
                  na naszej stronie oraz na fanpage’ach na adres e-mail:
                  ekoweek.kontakt@gmail.com do 21 marca 2021 roku, czyli do Dnia
                  Ziemi
                </span>
                <p></p>
                <span className="smallText" style={{ textAlign: "center" }}>
                  • Publikacja wyników na stronie i fanpage’ach przypada na
                  ostatni dzień eventu.
                </span>
                <p></p>
                <span className="smallText" style={{ textAlign: "center" }}>
                  • Dla zwycięzców przewidziane są nagrody pieniężne.
                </span>
              </div>
            </div>
          </div>
        </>
      );
    }
  }
}

export default home;
