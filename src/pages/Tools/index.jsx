/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import "./Tools.css";
import Linha from "../../components/Linha/index.jsx";

const Tools = () => {
  return (
    <>
      <main className="container_tools">
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
              <a href="#" className="tools_card">
                <div className="tools_card_img">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
                    alt="HTML Logo"
                  />
                </div>
                <div className="tools_card_text">HTML5</div>
              </a>
              <a href="#" className="tools_card">
                <div className="tools_card_img">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
                    alt="CSS Logo"
                  />
                </div>
                <div className="tools_card_text">CSS3</div>
              </a>
              <a href="#" className="tools_card">
                <div className="tools_card_img">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                    alt="Javascript Logo"
                  />
                </div>
                <div className="tools_card_text">JavaScript</div>
              </a>
              <a href="#" className="tools_card">
                <div className="tools_card_img">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                    alt="React Logo"
                  />
                </div>
                <div className="tools_card_text">React.js</div>
              </a>
              <a href="" className="tools_card">
                <div className="tools_card_img">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/svelte/svelte-original.svg"
                    alt="Svelte Logo"
                  />
                </div>
                <div className="tools_card_text">Svelte</div>
              </a>
              <a href="#" className="tools_card">
                <div className="tools_card_img">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
                    alt="TypeScript Logo"
                  />
                </div>
                <div className="tools_card_text">TypeScript</div>
              </a>
            </div>
          </div>
          <div className="tools_languages">
            <h2>Back-end</h2>
            <p>
              Here are my back-end knowledge, which are few, but it's always
              good to highlight them.
            </p>
            <div className="tools_cardGroup">
              <a href="#" className="tools_card">
                <div className="tools_card_img">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-plain.svg"
                    alt="PHP Logo"
                  />
                </div>
                <div className="tools_card_text">PHP</div>
              </a>
              <a href="#" className="tools_card">
                <div className="tools_card_img">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
                    alt="NodeJs Logo"
                  />
                </div>
                <div className="tools_card_text">Node.js</div>
              </a>
              <a href="#" className="tools_card">
                <div className="tools_card_img">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
                    alt="MYSQL Logo"
                  />
                </div>
                <div className="tools_card_text">MySQL</div>
              </a>
            </div>
          </div>
          <div className="tools_editor">
            <div className="tools_editor_title">
              <h2>Code Editors</h2>
              <p>Code editors I have knowledge of.</p>
            </div>
            <div className="tools_cardGroup">
              <a href="#" className="tools_card">
                <div className="tools_card_img">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg"
                    alt="VsCode Logo"
                  />
                </div>
                <div className="tools_card_text">Visual Studio Code</div>
              </a>
              <a href="#" className="tools_card">
                <div className="tools_card_img">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/intellij/intellij-original.svg"
                    alt="Intellij Logo"
                  />
                </div>
                <div className="tools_card_text">Intellij</div>
              </a>
              <a href="#" className="tools_card">
                <div className="tools_card_img">
                  <img
                    src="https://cdn.worldvectorlogo.com/logos/sublime-text.svg"
                    alt="Sublime Logo"
                  />
                </div>
                <div className="tools_card_text">Sublime Text</div>
              </a>
              
            </div>
          </div>

          <div className="tools_extras">
            <div className="tools_extras_title">
              <h2>Extras</h2>
              <p>Some extra knowledge tools.</p>
            </div>
            <div className="tools_cardGroup">
              <a href="#" className="tools_card">
                <div className="tools_card_img">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg"
                    alt="TailwindCSS Logo"
                  />
                </div>
                <div className="tools_card_text">TailwindCSS</div>
              </a>
              <a href="#" className="tools_card">
                <div className="tools_card_img">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg"
                    alt="Boostrap Logo"
                  />
                </div>
                <div className="tools_card_text">Bootstrap</div>
              </a>
              <a href="#" className="tools_card">
                <div className="tools_card_img">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
                    alt="Git Logo"
                  />
                </div>
                <div className="tools_card_text">Git</div>
              </a>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Tools;
