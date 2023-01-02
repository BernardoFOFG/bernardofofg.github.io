import React from "react";
import { BrowserRouter as Router} from "react-router-dom";
import { AnimationRouters } from "./components/AnimationRouters.jsx";

import "./App.css";
import Header from "./components/Header";

export default function App() {
  return (
    <Router >
      <Header />
      <AnimationRouters />
    </Router>
  );
}
