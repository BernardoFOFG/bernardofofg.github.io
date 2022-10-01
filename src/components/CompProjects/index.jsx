/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./Projects.css";
import Sudoku from "../../images/sudoku.png";
import Cronometro from "../../images/cronometro.png";
import NotFound from "../../images/404found.png";
import Cracha from "../../images/cracha.png";
function CompProjects() {
  return (
    <div className="project_presentation">
      <div className="project_presentation_card">
        <img src={Sudoku} alt="Projeto Sudoku" />
      </div>
      <div className="project_presentation_card_description">
        <h4>Project Sudoku</h4>
        <p>
          This was the first project I developed entirely from scratch, and it
          had two purposes, the presentation at the college's DemoWeek, and the
          completion of a grade in the imperative programming chair.
        </p>
        <p>Technologies used: HTML, CSS, Javascript. Svelte.</p>
        <div className="project_presentation_anchor">
          <a href="https://projeto-sudoku-ifpe.vercel.app/" target="blank">
            Go to Sudoku
          </a>
        </div>
      </div>
      <div className="project_presentation_card">
        <img src={Cronometro} alt="Cronometro" />
      </div>
      <div className="project_presentation_card_description">
        <h4>StopWatch</h4>
        <p>
          Simple project to train some javascript knowledge, and better
          understand how the setInterval, clearInterval functions worked.
        </p>
        <p>Technologies used: HTML, CSS, Javascript.</p>
        <div className="project_presentation_anchor">
          <a href="https://github.com/BernardoFOFG/cronometro" target="blank">
            Go to StopWatch
          </a>
        </div>
      </div>
      <div className="project_presentation_card">
        <img src={NotFound} alt="404 Not Found" />
      </div>
      <div className="project_presentation_card_description">
        <h4>404 Not Found</h4>
        <p>
          Simple error interface to complete the challenge proposed by
          devChallengers.
        </p>
        <p>Technologies used: HTML, CSS.</p>
        <div className="project_presentation_anchor">
          <a href="https://404-error-taupe.vercel.app/" target="blank">
            Go to 404 NotFound
          </a>
        </div>

        <div className="project_presentation_card">
          <img src={Cracha} alt="NLW Heat" />
        </div>
        <div className="project_presentation_card_description">
          <h4>NLW Heat</h4>
          <p>
            Event offered by rocketseat for programming students, and the
            purpose of this application was the API consumption to create an
            entire page filled with consumption.
          </p>
          <p>Technologies used: HTML, CSS, Javascript</p>
          <div className="project_presentation_anchor">
            <a href="https://github.com/BernardoFOFG/Crach-NLW" target="blank">
              Go to Crach
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CompProjects;
