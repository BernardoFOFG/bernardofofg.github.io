import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { AnimationRouters } from "./components/AnimationRouters.jsx";

import Header from "./components/Header";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n/index.js";

export default function App() {
  return (
    <Router >
      <I18nextProvider i18n={i18n}>
        <Header />
        <AnimationRouters />
      </I18nextProvider>
    </Router>
  );
}
