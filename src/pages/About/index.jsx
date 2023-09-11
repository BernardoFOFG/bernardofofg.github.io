/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import "./About.css";

import Linha from "../../components/Linha/index.jsx";
import Profile from "../../images/Profile-Bernardo.jpg";
import { motion } from "framer-motion";
import Jobs from "../../components/About/Jobs";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();
  return (
    <>
      <motion.div
        className="container_about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div className="profile">
          <img src={Profile} alt="Profile Bernardo" />
        </div>
        <div className="profile_text">
          <p>{t('about.introduction')}</p>
          <p>
            {t('about.start')}
          </p>
          <p>
            {t('about.focus')}
          </p>
          <p>
            {t('about.trajectory')}
          </p>
        </div>
        <Linha />

        <div className="work">
          <div className="work_title">
            <h4>{t('about.work.title')}</h4>
          </div>
          <div className="work_descriptions">
            <Jobs
              title="MSport"
              cargo={t('about.work.firstJob')}
              periodo="2021 - 2022"
            />
            <Jobs title="EMPREL" cargo={t('about.work.secondJob')} periodo="2023 - 2023" />
            <Jobs title="NETec Intermediações" cargo={t('about.work.thirdJob')} periodo="2023~ " />
          </div>
        </div>
        <Linha />
        <div className="extras">
          <h4>{t('about.extras.thisSite')}</h4>
          <p>{t('about.extras.siteDescription')}</p>
          <ul>
            <li>
              {t('about.extras.intenseSearching')}{" "}
              <a href="https://www.dribbble.com" target="_blank">
                dribbble
              </a>{" "}
              {t('about.extras.searchingForInspiration')}
            </li>
            <li>
              {t('about.extras.researchForUnderstanding')}{" "}
              <a href="https://reactrouter.com/en/main" target="_blank">
                React Routers
              </a>
            </li>
            <li>
              {t('about.extras.usingWebpack')}{" "}
              <a href="https://babeljs.io/" target="_blank">
                (babel)
              </a>{" "}
              {t('about.extras.forTheFirstTime')}
            </li>
            <li>{t('about.extras.knowledgeOfHowTheWebWorks')}</li>
            <li>{t('about.extras.skills')}</li>
            <li>{t('about.extras.javascriptReact')}</li>
          </ul>
        </div>
      </motion.div>
    </>
  );
};

export default About;
