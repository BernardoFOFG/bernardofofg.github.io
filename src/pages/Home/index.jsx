import React from "react";
import "./Home.css";

import SocialMedia from "../../components/Home/Social.jsx";
import NewProjects from "../../components/Home/NewProjects.jsx";
import noLogo from "../../images/no-logo.png";
import { motion } from "framer-motion";
import Seta from "../../components/Home/Seta";
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation()
  return (
    <>
      <motion.main
        className="container_home"
        intial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <section className="first_floor">
          <h1>{t('home.title')}</h1>
          <div className="first_floor_infos">
            <p>
              {t('home.info')}
            </p>
            <p>
              {t('home.study')}
            </p>
          </div>
          <SocialMedia />
        </section>

        <div class="custom-shape-divider-top-1664262103">
          <Seta />
        </div>

        <section className="second_floor">
          <h2>{t("home.secondFloor.title")}</h2>
          <p>
          {t("home.secondFloor.subTitle")}
          </p>

          <NewProjects
            // Se não houver projetos ativos
            link="https://github.com/BernardoFOFG/WebUdemy"
            img={noLogo}
            alt="noLogo"
            titleinfo={t('home.nextProjects.title')}
            subtitleinfo={t('home.nextProjects.subTitle')}
          />
        </section>
      </motion.main>
    </>
  );
};

export default Home;
