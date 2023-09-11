/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import "./Tools.css";
import Linha from "../../components/Linha/index.jsx";
import Card from "../../components/Card/index";
import { motion } from "framer-motion";
import { Back, Code, Extras, Front } from "../../constraints";
import { useTranslation } from "react-i18next";

const Tools = () => {
  const { t } = useTranslation();
  return (
    <>
      <motion.main className="container_tools">
        <div className="tools">
          <div className="tools_title">
            <h1>{t('tools.title')}</h1>
            <div className="tools_subtitle">
              <p>
                {t('tools.subTitle')}
              </p>
            </div>
          </div>
          <Linha />
          <div className="tools_languages">
            <div className="tools_languages_title">
              <h2>Front-end</h2>
              <p>
                {t("tools.frontEnd.subTitle")}
              </p>
            </div>
            <div className="tools_cardGroup">
              {Front.map((value) => (
                <Card
                  img={value.img}
                  alt={value.alt}
                  nome={value.nome}
                  key={value.id}
                />
              ))}
            </div>
          </div>
          <div className="tools_languages">
            <h2>Back-end</h2>
            <p>
              {t("tools.backEnd.subTitle")}
            </p>

            <div className="tools_cardGroup">
              {Back.map((value) => (
                <Card
                  img={value.img}
                  alt={value.alt}
                  nome={value.nome}
                  key={value.id}
                />
              ))}
            </div>
          </div>
          <div className="tools_editor">
            <div className="tools_editor_title">
              <h2>Code Editors</h2>
              <p>
                {t("tools.codeEditor.subTitle")}
              </p>
            </div>
            <div className="tools_cardGroup">
              {Code.map((value) => (
                <Card
                  img={value.img}
                  alt={value.alt}
                  nome={value.nome}
                  key={value.id}
                />
              ))}
            </div>
          </div>

          <div className="tools_extras">
            <div className="tools_extras_title">
              <h2>Extras</h2>
              <p>
                {t("tools.extras.subTitle")}
              </p>
            </div>
            <div className="tools_cardGroup">
              {Extras.map((value) => (
                <Card
                  img={value.img}
                  alt={value.alt}
                  nome={value.nome}
                  key={value.id}
                />
              ))}
            </div>
          </div>
        </div>
      </motion.main>
    </>
  );
};

export default Tools;
