import React from "react";
import "./Projects.css";
import Linha from "../Linha/index.jsx";


import Sudoku from "../../images/sudoku.png";
import Cronometro from "../../images/cronometro.png";
import FrontEndMentor from "../../images/frontend-mentor.png";
import Cracha from "../../images/cracha.png";
function CompProjects() {
  return (
    <div className="project_presentation">
      {/* Sudoku */}

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
        <img src={Sudoku} alt="Projeto Sudoku" />
      </div>
      <Linha/>
      {/* StopWatch */}
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
        <img src={Cronometro} alt="Cronometro" />
      </div>
      <Linha/>
      {/* NotFound */}

      <div className="project_presentation_card_description">
        <h4>Front End Mentor</h4>
        <p>
          SPAs finalized with the aim of learning the fundamentals of front-end
          development.
        </p>
        <p>Technologies used: HTML, CSS.</p>
        <div className="project_presentation_anchor">
          <a href="https://404-error-taupe.vercel.app/" target="blank">
            Go to Challengers
          </a>
        </div>
        <div className="project_presentation_card">
          <img src={FrontEndMentor} alt="404 Not Found" />
        </div>
        <Linha/>
        {/* NLW Heat*/}

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
        <div className="project_presentation_card">
          <img src={Cracha} alt="NLW Heat" />
        </div>
      </div>
    </div>
  );
}

export default CompProjects;
