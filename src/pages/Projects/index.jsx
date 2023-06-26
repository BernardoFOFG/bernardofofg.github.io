import React from "react";

import Linha from "../../components/Linha/index.jsx";
import CompProjects from "../../components/CompProjects/index.jsx";
import { motion } from "framer-motion";

import Sudoku from "../../images/sudoku.png";
import Cronometro from "../../images/cronometro.png";
import FrontEndMentor from "../../images/frontend-mentor.png";
import Cracha from "../../images/cracha.png";
import IAC from "../../images/IAC.png";
import Setup from "../../images/nlw-setup.jpg";
import Search from "../../images/buscador.png";

import "./Projects.css";
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
        <CompProjects
          title="Project Sudoku"
          description="This was the first project I developed entirely from scratch, and it
          had two purposes, the presentation at the college's DemoWeek, and the
          completion of a grade in the imperative programming chair."
          technologies="Technologies used: HTML, CSS, Javascript. Svelte."
          link="https://projeto-sudoku-ifpe.vercel.app/"
          linkTitle="Go to Sudoku"
          linkRepo="https://github.com/BernardoFOFG/Projeto-Sudoku-IFPE"
          linkTitleRepo="Go to Repository Sudoku"
          projectPhoto={Sudoku}
          projectDescription="Project Sudoku"
        />
        <CompProjects
          title="IFPE Access Control"
          description="Project created for the web development course."
          technologies="Technologies used: HTML, CSS, Javascript, Svelte, TailwindCSS, PHP,
        MySQL."
          linkTitle="#"
          linkRepo="https://github.com/suelensalvino/iac"
          linkTitleRepo="Go to Repository IAC"
          projectPhoto={IAC}
          projectDescription="Project Access Control"
        />
        <CompProjects
          title="NLW Setup"
          description="
          Project finalized during the event offered by rocketseat, this project helped me kick off 2023, and start the year immersed in programming."
          technologies="Technologies used: HTML5, CSS3, TailwindCSS, Javascript, Typescript, React.JS, Node.js, ReactNative, Expo, Fastify, Axios, Prisma, SQlite, Figma."
          link="#"
          linkTitle="#"
          linkRepo="https://github.com/BernardoFOFG/NLW-Setup"
          linkTitleRepo="Go to Repository NLW Setup"
          projectPhoto={Setup}
          projectDescription="NLW Setup"
        />
        <CompProjects
          title="User Search"
          description="Simple project where search Github users and your repositories."
          link="https://buscador-de-usuario.vercel.app/"
          linkTitle="Go to Search User"
          linkRepo="https://github.com/BernardoFOFG/Buscador-de-Usu-rio"
          linkTitleRepo="Go to Repository Search User"
          projectPhoto={Search}
          projectDescription="User Search"
        />
        <CompProjects
          title="Front End Mentor"
          description="SPAs finalized with the aim of learning the fundamentals of front-end
        development."
          technologies="Technologies used: HTML, CSS, JS, Regex."
          link="https://github.com/BernardoFOFG/Frontend-Mentor"
          linkTitle="Go to Challengers"
          linkRepo="https://github.com/BernardoFOFG/Frontend-Mentor/tree/main/InteractiveCardDetails"
          linkTitleRepo="Go to Recent Project"
          projectPhoto={FrontEndMentor}
          projectDescription="Challengers Frontend Mentor"
        />
        <CompProjects
          title="StopWatch"
          description="Simple project to train some javascript knowledge, and better
        understand how the setInterval, clearInterval functions worked."
          technologies="Technologies used: HTML, CSS, Javascript."
          link="https://cronometro-bernardofofg.vercel.app/"
          linkTitle="Go to StopWatch"
          linkRepo="https://github.com/BernardoFOFG/cronometro"
          linkTitleRepo="Go to Repository StopWatch"
          projectPhoto={Cronometro}
          projectDescription="Project Stopwatch"
        />
        <CompProjects
          title="NLW Heat"
          description="Event offered by rocketseat for programming students, and the
        purpose of this application was the API consumption to create an
        entire page filled with consumption."
          technologies="Technologies used: HTML, CSS, Javascript"
          link="https://bernardofofg.github.io/Crach-NLW/"
          linkTitle="Go to Crach"
          linkRepo="https://github.com/BernardoFOFG/Crach-NLW"
          linkTitleRepo="Go to Repository Crach"
          projectPhoto={Cracha}
          projectDescription="NLW Heat"
        />
      </motion.main>
    </>
  );
};

export default Projects;
