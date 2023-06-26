/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import "./Tools.css";
import Linha from "../../components/Linha/index.jsx";
import Card from "../../components/Card/index";
import { motion } from "framer-motion";

const Tools = () => {
  return (
    <>
      <motion.main className="container_tools">
        <div className="tools">
          <div className="tools_title">
            <h1>Tools</h1>
            <div className="tools_subtitle">
              <p>
                The main programming languages ​​and tools I use on a daily
                basis.
              </p>
            </div>
          </div>
          <Linha />
          <div className="tools_languages">
            <div className="tools_languages_title">
              <h2>Front-end</h2>
              <p>My main stack, and where my main knowledge is.</p>
            </div>
            <div className="tools_cardGroup">
              <Card
                img="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
                alt="HTML Logo"
                nome="HTML"
              />
              <Card
                img="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
                alt="CSS Logo"
                nome="CSS3"
              />
              <Card
                img="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                alt="Javascript Logo"
                nome="Javascript"
              />
              <Card
                img="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                alt="React.JS Logo"
                nome="React.JS"
              />
              <Card
                img="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/svelte/svelte-original.svg"
                alt="Svelte Logo"
                nome="Svelte"
              />
              <Card
                img="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
                alt="Typescript Logo"
                nome="Typescript"
              />
              <Card
                img="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg"
                alt="TailwindCSS Logo"
                nome="TailwindCSS"
              />
              <Card
                img="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg"
                alt="Bootstrap Original Logo"
                nome="Bootstrap"
              />
              <Card
                img="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original.svg"
                alt="jQuery Logo"
                nome="jQuery"
              />
            </div>
          </div>
          <div className="tools_languages">
            <h2>Back-end</h2>
            <p>
              Here are my back-end knowledge, which are few, but it's always
              good to highlight them.
            </p>

            <div className="tools_cardGroup">
              <Card
                img="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-plain.svg"
                alt="PHP Logo"
                nome="PHP"
              />
              <Card
                img="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
                alt="NodeJS Logo"
                nome="Node.JS"
              />
              <Card
                img="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
                alt="MYSQL Logo"
                nome="MySQL"
              />
              <Card
                img="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-plain.svg"
                alt="Laravel Logo"
                nome="Laravel"
              />
              <Card
                img="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/symfony/symfony-original.svg"
                alt="Symfony Logo"
                nome="Symfony"
              />
            </div>
          </div>
          <div className="tools_editor">
            <div className="tools_editor_title">
              <h2>Code Editors</h2>
              <p>Code editors I have knowledge of.</p>
            </div>
            <div className="tools_cardGroup">
              <Card
                img="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg"
                alt="VsCode Logo"
                nome="Visual Studio Code"
              />

              <Card
                img="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/intellij/intellij-original.svg"
                alt="Intellij Logo"
                nome="Intellij"
              />

              <Card
                img="https://cdn.worldvectorlogo.com/logos/sublime-text.svg"
                alt="Sublime Logo"
                nome="Sulbime Text"
              />
            </div>
          </div>

          <div className="tools_extras">
            <div className="tools_extras_title">
              <h2>Extras</h2>
              <p>Some extra knowledge tools.</p>
            </div>
            <div className="tools_cardGroup">
              <Card
                img="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
                alt="Git Logo"
                nome="Git"
              />
              <Card
                img="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg"
                alt="Material UI Logo"
                nome="Material UI"
              />
            </div>
          </div>
        </div>
      </motion.main>
    </>
  );
};

export default Tools;
