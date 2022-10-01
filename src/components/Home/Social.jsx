/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./Social.css";
import Curriculo from "../../files/Bernardo_Filipe_Curriculo.pdf";

// eslint-disable-next-line import/no-anonymous-default-export
const Social = () => {
  return (
    <div className="social">
      <ul>
        <li>
          <a href="https://www.instagram.com/bernardofofg/" target="_blank">
            <img
              src="https://icongr.am/entypo/instagram.svg?size=24&color=ffffff"
              alt="Instagram"
            />
          </a>
        </li>
        <li>
          <a href="https://github.com/bernardofofg" target="_blank">
            <img
              src="https://icongr.am/material/github.svg?size=24&color=ffffff"
              alt="Github"
            />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/bernardofofg/" target="_blank">
            <img
              src="https://icongr.am/material/linkedin.svg?size=24&color=ffffff"
              alt="LinkedIn"
            />
          </a>
        </li>
        <li>
          <a href={Curriculo} download>
            <img
              src="https://icongr.am/material/file-download.svg?size=24&color=ffffff"
              alt="Curriculo"
            />
          </a>
        </li>
      </ul>

      <div className="toEmail">
        <a href="mailto:bernardofofg@gmail.com">Email me</a>
      </div>
    </div>
  );
};
export default Social;
