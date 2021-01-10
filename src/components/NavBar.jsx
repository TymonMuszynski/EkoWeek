import React, { useState } from "react";
import "../styles/navbarStyle.css";
import { NavLink } from "react-router-dom";
// import { FaInstagram } from "react-icons/fa";
// import { AiFillFacebook, AiFillYoutube } from "react-icons/ai";
import { GiHamburgerMenu, GiCancel } from "react-icons/gi";

function NavBar(props) {
  const [Clicked, setClicked] = useState(false);
  return (
    <nav className="NavBar">
      <ul className={Clicked ? "list active" : "list"}>
        <li>
          <NavLink className="tag" to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className="tag" to="Warsztaty">
            Warsztaty
          </NavLink>
        </li>
        <li>
          <NavLink className="tag" to="Wyklady">
            Wykłady
          </NavLink>
        </li>
        <li>
          <NavLink className="tag" to="Konkurs">
            Konkurs
          </NavLink>
        </li>
        <li>
          <NavLink className="tag" to="Pytania">
            Pytania
          </NavLink>
        </li>
      </ul>
      <div className="menuIcon" onClick={() => setClicked(!Clicked)}>
        {Clicked ? <GiCancel></GiCancel> : <GiHamburgerMenu></GiHamburgerMenu>}
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
