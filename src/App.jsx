import React, { useEffect } from "react";

import "./App.scss";

import AnimatedRoutes from "./Components/AnimatedRoutes";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App = () => {
  return (
    <div className="app">
      <ScrollToTop />
      <AnimatedRoutes />
    </div>
  );
};

export default App;
