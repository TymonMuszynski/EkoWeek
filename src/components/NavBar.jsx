import React from "react";
import "../styles/navbarStyle.css";
import { NavLink } from "react-router-dom";
// import { Link } from "react-scroll";
import { HashLink as Link } from "react-router-hash-link";
import disableScroll from "disable-scroll";
// import { FaInstagram } from "react-icons/fa";
// import { AiFillFacebook, AiFillYoutube } from "react-icons/ai";
import { GiHamburgerMenu, GiCancel } from "react-icons/gi";
import logoMini from "../assets/logo_medium.png";

class NavBar extends React.Component {
  constructor() {
    super();
    this.state = {
      width: window.innerWidth,
      Clicked: false,
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

  setClicked = (x) => {
    this.setState({ Clicked: x });
  };
  render() {
    const { width } = this.state;
    const isMobile = width <= 950;

    if (this.state.Clicked === true && isMobile === true) {
      disableScroll.on();
    }
    if (this.state.Clicked === false && isMobile === true) {
      disableScroll.off();
    }

    return (
      <nav className="NavBar">
        <ul className={this.state.Clicked ? "list active" : "list"}>
          {this.state.Clicked ? (
            <img src={logoMini} className="logoMini" alt="22" />
          ) : null}
          <li>
            <NavLink
              className="tag"
              to="/"
              onClick={() => this.setClicked(!this.state.Clicked)}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className="tag"
              to="Warsztaty"
              onClick={() => this.setClicked(!this.state.Clicked)}
            >
              Warsztaty
            </NavLink>
          </li>
          <li>
            <Link
              className="tag"
              smooth
              to="home#section2"
              onClick={() => this.setClicked(!this.state.Clicked)}
            >
              Konkurs
            </Link>
          </li>
        </ul>
        <div
          className="menuIcon"
          onClick={() => this.setClicked(!this.state.Clicked)}
        >
          {this.state.Clicked ? (
            <GiCancel style={{ color: "#4ABD6C" }}></GiCancel>
          ) : (
            <GiHamburgerMenu></GiHamburgerMenu>
          )}
        </div>
      </nav>
    );
  }
}

export default NavBar;
