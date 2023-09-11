import React from "react";
import Linha from "../../components/Linha/index.jsx";
import CompProjects from "../../components/CompProjects/index.jsx";
import { motion } from "framer-motion";
import "./Projects.css";
import { useTranslation } from "react-i18next";
import { ESProject } from "../../constraints/translates/es.js";
import { PTProject } from "../../constraints/translates/pt.js";
import { ENProject } from "../../constraints/translates/en.js";

const Projects = () => {
  const { t } = useTranslation();

  const currentLanguage = t('projects.translation')

  let currentTranslations;
  switch (currentLanguage) {
    case "es":
      currentTranslations = ESProject;
      break;
    case "pt":
      currentTranslations = PTProject;
      break;
    case "en":
      currentTranslations = ENProject;
      break;
    default:
      currentTranslations = PTProject; // Idioma padrão
  }

  return (
    <>
      <motion.main
        className="container_projects"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div className="project_title">
          <h1>{t('projects.title')}</h1>
          <div className="project_subtitle">
            <p>{t('projects.subTitle')}</p>
          </div>
        </div>
        <Linha />

        {currentTranslations.map((value) => (
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
