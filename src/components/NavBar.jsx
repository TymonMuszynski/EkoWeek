import React, { useState } from "react";
import "../styles/navbarStyle.css";
import { NavLink } from "react-router-dom";
// import { FaInstagram } from "react-icons/fa";
// import { AiFillFacebook, AiFillYoutube } from "react-icons/ai";
import { GiHamburgerMenu, GiCancel } from "react-icons/gi";
import logoMini from "../assets/logo_medium.png";
function NavBar(props) {
  const [Clicked, setClicked] = useState(false);
  return (
    <nav className="NavBar">
      <ul className={Clicked ? "list active" : "list"}>
        {Clicked ? <img src={logoMini} className="logoMini" alt="22" /> : null}
        <li>
          <NavLink className="tag" to="/" onClick={() => setClicked(!Clicked)}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            className="tag"
            to="Warsztaty"
            onClick={() => setClicked(!Clicked)}
          >
            Warsztaty
          </NavLink>
        </li>
        <li>
          <NavLink
            className="tag"
            to="Konkurs"
            onClick={() => setClicked(!Clicked)}
          >
            Konkurs
          </NavLink>
        </li>
        <li>
          <NavLink
            className="tag"
            to="Pytania"
            onClick={() => setClicked(!Clicked)}
          >
            Pytania
          </NavLink>
        </li>
      </ul>
      <div className="menuIcon" onClick={() => setClicked(!Clicked)}>
        {Clicked ? (
          <GiCancel style={{ color: "#4ABD6C" }}></GiCancel>
        ) : (
          <GiHamburgerMenu></GiHamburgerMenu>
        )}
      </div>
      {/* <div className="mediaConteiner">
        <div>
          <FaInstagram className="icon" />
        </div>
        <div>
          <AiFillFacebook className="icon" />
        </div>
        <div>
          <AiFillYoutube className="icon" />
        </div>
      </div> */}
    </nav>
  );
}

export default NavBar;
