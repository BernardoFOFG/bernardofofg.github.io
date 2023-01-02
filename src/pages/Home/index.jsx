import React from "react";
import "./Home.css";

import SocialMedia from "../../components/Home/Social.jsx";
import NewProjects from "../../components/Home/NewProjects.jsx";
import IacLogo from '../../images/Logo_IAC.svg'

const Home = () => {
  return (
    <>
      <main className="container_home">
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
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M649.97 0L550.03 0 599.91 54.12 649.97 0z"
              class="shape-fill"
            ></path>
          </svg>
        </div>

        <section className="second_floor">
          <h2>Future Projects</h2>
          <p>
            Upcoming projects that will probably be inserted here as soon as
            they are finished!
          </p>

          <NewProjects
            link="https://github.com/suelensalvino/IAC"
            img={<img src={IacLogo} alt="noLogo" />}
            titleinfo="IFPE Acess Control(IAC)"
            subtitleinfo="Project that will be developed during the second period in the course of Project and Development I."
          />
        </section>
      </main>
    </>
  );
};

export default Home;
