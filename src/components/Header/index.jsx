/* eslint-disable react/jsx-no-undef */
import React, { useState } from "react";

import "./Header.css";

import imgLogo from "../../images/logo.png";
import { Link, NavLink } from "react-router-dom";

import navMobile from "./main.js";
import { useTranslation } from "react-i18next";

import Brazil from '../../images/brazil.png'
import USA from '../../images/usa.png'
import Spain from '../../images/spain.png'

const Header = () => {
  const [activeLink, setActiveLink] = useState("home");
  const { t, i18n } = useTranslation();

  const handleNavLinkClick = (link) => {
    setActiveLink(link);
  };

  const changeLanguageHandler = (lang) => {
    i18n.changeLanguage(lang)
  }

  return (
    <>
      <header>
        <nav>
          <Link to="/">
            <img src={imgLogo} alt="Imagem Logo" />
          </Link>

          <div>
            <button className="button-flag" onClick={() => changeLanguageHandler('pt')}><img src={Brazil} /></button>
            <button className="button-flag" onClick={() => changeLanguageHandler('en')}><img src={USA} /></button>
            <button className="button-flag" onClick={() => changeLanguageHandler('es')}><img src={Spain} /></button>
          </div>

          <ul className="menu-desktop">
            <NavLink
              className={`links ${activeLink === "home" ? "selectAtived" : ""}`}
              to="/"
              onClick={() => handleNavLinkClick("home")}
            >
              <li>{t('header.home')}</li>
            </NavLink>

            <NavLink
              className={`links ${activeLink === "about" ? "selectAtived" : ""
                }`}
              to="/about"
              onClick={() => handleNavLinkClick("about")}
            >
              <li>{t('header.about')}</li>
            </NavLink>

            <NavLink
              className={`links ${activeLink === "projects" ? "selectAtived" : ""
                }`}
              to="/projects"
              onClick={() => handleNavLinkClick("projects")}
            >
              <li>{t('header.projects')}</li>
            </NavLink>

            <NavLink
              className={`links ${activeLink === "tools" ? "selectAtived" : ""
                }`}
              to="/tools"
              onClick={() => handleNavLinkClick("tools")}
            >
              <li>{t('header.tools')}</li>
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
            <li id="home">{t('header.home')}</li>
          </Link>

          <Link className="links" to="/about">
            <li id="about">{t('header.about')}</li>
          </Link>

          <Link className="links" to="/projects">
            <li id="project">{t('header.projects')}</li>
          </Link>

          <Link className="links" to="/tools">
            <li id="tool">{t('header.tools')}</li>
          </Link>
        </ul>

        <div className="mobile-flag">
          <h4>Selecione seu idioma</h4>
          <div>
            <button className="button-flag" onClick={() => changeLanguageHandler('pt')}><img src={Brazil} /></button>
            <button className="button-flag" onClick={() => changeLanguageHandler('en')}><img src={USA} /></button>
            <button className="button-flag" onClick={() => changeLanguageHandler('es')}><img src={Spain} /></button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
