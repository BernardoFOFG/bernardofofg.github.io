import React from "react";
import "./Home.css";

import SocialMedia from "../../components/Home/Social.jsx";
import NewProjects from "../../components/Home/NewProjects.jsx";
import noLogo from "../../images/no-logo.png";
import { motion } from "framer-motion";
import Seta from "../../components/Home/Seta";

const Home = () => {
  return (
    <>
      <motion.main
        className="container_home"
        intial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <section className="first_floor">
          <h1>Front-end developer in constant evolution and learning!</h1>
          <div className="first_floor_infos">
            <p>
              Hello, my name is Bernardo Filipe, and I'm a front-end developer
              in learning, and I've been studying to become a developer since
              2020... the first two years were just individual studies, and in
              the last year (2022) I entered college and I'm boosting my
              studies.
            </p>
            <p>
              Currently I'm focusing my studies on the Javascript language, and
              its frameworks, but with an emphasis on React.js, but I also have
              knowledge with Svelte.
            </p>
          </div>
          <SocialMedia />
        </section>

        <div class="custom-shape-divider-top-1664262103">
          <Seta />
        </div>

        <section className="second_floor">
          <h2>Future Projects</h2>
          <p>
            Upcoming projects that will probably be inserted here as soon as
            they are finished!
          </p>

          <NewProjects
            // Se não houver projetos ativos
            link="https://github.com/BernardoFOFG/WebUdemy"
            img={noLogo}
            alt="noLogo"
            titleinfo="Acquiring knowledge..."
            subtitleinfo="
            At the moment I'm focusing on finishing my course on udemy, as college is close to returning, and it will be a difficult period."
          />
        </section>
      </motion.main>
    </>
  );
};

export default Home;
