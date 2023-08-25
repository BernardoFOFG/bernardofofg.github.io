import React from "react";

import Linha from "../../components/Linha/index.jsx";
import CompProjects from "../../components/CompProjects/index.jsx";
import { motion } from "framer-motion";
import "./Projects.css";
import { Project } from "../../constraints/index.js";
const Projects = () => {
  return (
    <>
      <motion.main
        className="container_projects"
        intial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
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

        {Project.map((value) => (
          <CompProjects
            title={value.title}
            description={value.description}
            technologies={value.technologies}
            link={value.link}
            linkTitle={value.linkTitle}
            linkRepo={value.linkRepo}
            linkTitleRepo={value.linkTitleRepo}
            projectPhoto={value.projectPhoto}
            projectDescription={value.projectDescription}
            key={value.id}
          />
        ))}
      </motion.main>
    </>
  );
};

export default Projects;
