import React from "react";
import '../../pages/Tools/Tools.css'
const index = (props) => {
  return (
    // eslint-disable-next-line jsx-a11y/anchor-is-valid
    <a href="#" className="tools_card">
      <div className="tools_card_img">
        <img
          src={props.img}
          alt={props.alt}
        />
      </div>
      <div className="tools_card_text">{props.nome}</div>
    </a>
  );
};

export default index;