import React from "react";
import "./Projects.css";
import Linha from "../Linha/index.jsx";

function CompProjects(props) {
  return (
    <div className="project_presentation">
      <div className="project_presentation_card_description">
        <h4>{props.title}</h4>
        <p>{props.description}</p>
        <p>{props.technologies}</p>
        <div className="project_presentation_anchor">
          <a href={props?.link} target="_blank" rel="noreferrer">
            {props?.linkTitle}
          </a>
          <a href={props.linkRepo} target="_blank" rel="noreferrer">
            {props.linkTitleRepo}
          </a>
        </div>
      </div>
      <div className="project_presentation_card">
        <img src={props.projectPhoto} alt={props.projectDescription} />
      </div>
      <Linha />
    </div>
  );
}

export default CompProjects;
