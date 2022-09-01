import React, { useState, useEffect } from "react";
import solLogo from "../assets/img/sol_logo.svg";
import DownArrow from "./DownArrow";

export default function Navbar() {
  // STATES
  const [toggleMenu, setToggleMenu] = useState(false);
  const [show, setShow] = useState(true);
  const [width, setWidth] = useState(window.innerWidth);

  // FUNCTIONS

  const toggleNav = () => {
    setToggleMenu(!toggleMenu);
  };

  const changeWidth = () => {
    setWidth(window.innerWidth);
  };

  const controlNavBar = () => {
    if (window.scrollY > 60) {
      setShow(false);
    } else {
      setShow(true);
    }
  };

  // USE EFFECT

  useEffect(() => {
    window.addEventListener("resize", changeWidth);
    // cleanup function
    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", controlNavBar);
    return () => {
      window.removeEventListener("scroll", controlNavBar)
    }
  }, []);

  return (
    <header className={show ? "" : "headerFade"}>
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
          <ul>
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
