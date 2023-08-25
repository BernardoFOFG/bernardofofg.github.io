/* eslint-disable react/jsx-no-undef */
import React, { useState } from "react";

import "./Header.css";

import imgLogo from "../../images/logo.png";
import { Link, NavLink } from "react-router-dom";

import navMobile from "./main.js";

const Header = () => {
  const [activeLink, setActiveLink] = useState("home");
  const handleNavLinkClick = (link) => {
    setActiveLink(link);
  };
  return (
    <>
      <header>
        <nav>
          <Link to="/">
            <img src={imgLogo} alt="Imagem Logo" />
          </Link>
          <ul className="menu-desktop">
            <NavLink
              className={`links ${activeLink === "home" ? "selectAtived" : ""}`}
              to="/"
              onClick={() => handleNavLinkClick("home")}
            >
              <li>Home</li>
            </NavLink>

            <NavLink
              className={`links ${
                activeLink === "about" ? "selectAtived" : ""
              }`}
              to="/about"
              onClick={() => handleNavLinkClick("about")}
            >
              <li>About</li>
            </NavLink>

            <NavLink
              className={`links ${
                activeLink === "projects" ? "selectAtived" : ""
              }`}
              to="/projects"
              onClick={() => handleNavLinkClick("projects")}
            >
              <li>Projects</li>
            </NavLink>

            <NavLink
              className={`links ${
                activeLink === "tools" ? "selectAtived" : ""
              }`}
              to="/tools"
              onClick={() => handleNavLinkClick("tools")}
            >
              <li>Tools</li>
            </NavLink>
          </ul>
          <div className="img-toggle" onClick={navMobile}>
            <img
              src="https://icongr.am/material/menu.svg?size=32&color=ffffff"
              alt="Toggle Menu"
            />
          </div>
        </nav>
      </header>

      <div className="menu-mobile">
        <div className="menu-mobile-img">
          <img
            src="https://icongr.am/material/close.svg?size=32&color=ffffff"
            alt=""
            id="close-mobile"
          />
        </div>
        <ul>
          <Link className="links" to="/">
            <li id="home">Home</li>
          </Link>

          <Link className="links" to="/about">
            <li id="about">About</li>
          </Link>

          <Link className="links" to="/projects">
            <li id="project">Projects</li>
          </Link>

          <Link className="links" to="/tools">
            <li id="tool">Tools</li>
          </Link>
        </ul>
      </div>
    </>
  );
};

export default Header;
