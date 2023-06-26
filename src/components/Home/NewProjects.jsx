/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import "./NewProjects.css";

export default (props) => (
  <div className="second_floor_card">
    <a href={props.link} target="_blank" rel="noreferrer">
      <div className="second_floor_card_logo">
        <img src={props.img} alt={props.alt} />
      </div>
      <div className="second_floor_card_infos">
        <h3>{props.titleinfo}</h3>
        <p>{props.subtitleinfo}</p>
      </div>
    </a>
  </div>
);
