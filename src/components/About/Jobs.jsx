import React from "react";

function Jobs(props) {
  return (
    <>
      <div className="work_descriptions_place">
        <ul>
          <li>{props.title}</li>
        </ul>
      </div>
      <div className="work_descriptions_job">
        <ul>
          <li>{props.cargo}</li>
        </ul>
        <div>
          <ul>
            <li>{props.periodo}</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Jobs;
