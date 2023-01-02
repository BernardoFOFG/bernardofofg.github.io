import React from "react";

import Linha from "../../components/Linha/index.jsx";
import CompProjects from "../../components/CompProjects/index.jsx";

import "./Projects.css";
const Projects = () => {
  return (
    <>
      <main className="container_projects">
        <div className="project_title">
          <h1>Projects</h1>
          <div className="project_subtitle">
            <p>
              Here are some of the sites developed for individual knowledge,
              unfortunately some have a very introductory technology, but little
              by little I will insert my evolution with new technologies and
              using more resources.
            </p>
          </div>
        </div>
        <Linha />
          <CompProjects />
      </main>
    </>
  );
};

export default Projects;
