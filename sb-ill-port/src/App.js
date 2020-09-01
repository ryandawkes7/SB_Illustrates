import React from 'react';
import './App.css';
import {BrowserRouter, Link} from 'react-router-dom';

import Header from "./Components/Header/header";
import Portfolio from "./Components/Portfolio/portfolio";
import About from "./Components/About/about";
import Contact from "./Components/Contact/contact";

function App() {
  return (
      <BrowserRouter>
          <Header />
          <Portfolio />
          <div className="page-divider" />
          <About />
          <div className="page-divider" />
          <Contact />

      </BrowserRouter>
  );
}

function showTitle() {
    document.getElementById("uni-title").style.display = "flex";
}

export default App;
