/* eslint-disable react/jsx-no-undef */
import React from "react";

import "./Header.css";

import imgLogo from "../../images/logo.png";
import { Link } from "react-router-dom";

import navMobile from "./main.js";

const Header = () => {
  return (
    <>
      <header>
        <nav>
          <Link to="/">
            <img src={imgLogo} alt="Imagem Logo" />
          </Link>
          <ul className="menu-desktop">
            <Link className="links" to="/">
              <li>Home</li>
            </Link>

            <Link className="links" to="/about">
              <li>About</li>
            </Link>

            <Link className="links" to="/projects">
              <li>Projects</li>
            </Link>

            <Link className="links" to="/tools">
              <li>Tools</li>
            </Link>
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
        <div>
          {" "}
          <img
            src="https://icongr.am/material/close.svg?size=32&color=ffffff"
            alt=""
            id="close-mobile"
          />
        </div>
        <ul>
          <Link className="links" to="/">
            <li>Home</li>
          </Link>

          <Link className="links" to="/about">
            <li>About</li>
          </Link>

          <Link className="links" to="/projects">
            <li>Projects</li>
          </Link>

          <Link className="links" to="/tools">
            <li>Tools</li>
          </Link>
        </ul>
      </div>
    </>
  );
};

export default Header;
