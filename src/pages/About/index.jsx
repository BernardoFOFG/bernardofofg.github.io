/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import "./About.css";

import Linha from "../../components/Linha/index.jsx";
import Profile from "../../images/Profile-Bernardo.jpg";
import { motion } from "framer-motion";
import Jobs from "../../components/About/Jobs";

const About = () => {
  return (
    <>
      <motion.div
        className="container_about"
        intial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div className="profile">
          <img src={Profile} alt="Profile Bernardo" />
        </div>
        <div className="profile_text">
          <p>
            Hello, I'm Bernardo, and I'm Brazilian, currently I'm a front-end
            developer, with specialization in the area of ​​user interface, web
            applications and the like, but in the future I intend to fit in the
            position of full-stack developer, because I want to become a
            professional able to work in any development sector, which is my
            passion.
          </p>
          <p>
            I started my professional life as an administrative assistant, but
            as soon as I entered development in 2019, I fell in love and fell
            head over heels
          </p>
          <p>
            I took my problems slowly in the studies of the pillars of web
            programming, which were: HTML5, CSS3, and JavaScript. Unfortunately
            in 2021 I had to leave the development area a little because of the
            financial condition, and I was stopped for almost eight months, but
            now and then training HTML and CSS.
          </p>
          <p>
            However, my focus with development really changed at the end of
            2021, when I really decided that I would respect my time and really
            study what I wanted to follow in my life and definitely fall back
            into the area of ​​development, I went back to studying Javascript,
            but this time with a correct study plan, and I gradually got to know
            the area, digital education institutions, online courses and the
            like, it was a huge boost, and at the beginning of 2022 I entered
            the Faculty of Internet System at the Federal Institute from
            Pernambuco, and it's been a very incredible experience to meet
            people from my area and others, exchange knowledge, solutions, the
            college has taught me a lot about the concept of networking, and
            makes me stick to my goals.
          </p>
        </div>
        <Linha />

        <div className="work">
          <div className="work_title">
            <h4>Work</h4>
          </div>
          <div className="work_descriptions">
            <Jobs
              title="MSport"
              cargo="Administrative Assistant"
              periodo="2021 - 2022"
            />
            <Jobs title="EMPREL" cargo="Development Intern" periodo="2023" />
          </div>
        </div>
        <Linha />
        <div className="extras">
          <h4>About this site</h4>
          <p>This site was developed with expertise in: </p>
          <ul>
            <li>
              Intense{" "}
              <a href="https://www.dribbble.com" target="_blank">
                dribble
              </a>{" "}
              searching for inspiration
            </li>
            <li>
              Research for understanding{" "}
              <a href="https://reactrouter.com/en/main" target="_blank">
                React Routers
              </a>
            </li>
            <li>
              Using webpack
              <a href="https://babeljs.io/" target="_blank">
                (babel)
              </a>{" "}
              for the first time
            </li>
            <li>Knowledge of how the web works;</li>
            <li>HTML, CSS, Animation CSS</li>
            <li>Javascript, React.js</li>
          </ul>
        </div>
      </motion.div>
    </>
  );
};

export default About;
