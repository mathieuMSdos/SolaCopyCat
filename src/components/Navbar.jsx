import React, { useState, useEffect } from "react";
import solLogo from "../assets/img/sol_logo.svg";
import DownArrow from "./DownArrow";

export default function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);

  const toggleNav = () => {
    setToggleMenu(!toggleMenu);
  };

  const changeWidth = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", changeWidth);
    // cleanup function
    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []);

  return (
    <header>
      <nav>
        <a href="">
          <img className="logo" src={solLogo} alt="" />
        </a>
        <div
          className={toggleMenu ? "menuBtn open" : "menuBtn"}
          onClick={toggleNav}
        >
          <div className="menuBtnBurger"></div>
        </div>

        {(toggleMenu || width > 800) && (
          <ul className={toggleMenu ? " animAppear" : ""}>
            <li>
              Developers
              <DownArrow />
            </li>
            <li>
              Network <DownArrow />
            </li>
            <li>Validators</li>
            <li>
              Community <DownArrow />{" "}
            </li>
            <li>Ecosystem</li>
          </ul>
        )}
      </nav>
    </header>
  );
}
