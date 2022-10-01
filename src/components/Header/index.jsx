/* eslint-disable react/jsx-no-undef */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

import "./Header.css";

import imgLogo from "../../images/logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav>
        <Link to="/">
          <img src={imgLogo} alt="Imagem Logo" />
        </Link>
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
      </nav>
    </header>
  );
};

export default Header;
