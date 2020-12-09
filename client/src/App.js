import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


import Header from "./Components/Header/header";
import Portfolio from "./Components/Portfolio/portfolio";
import About from "./Components/About/about";
import Contact from "./Components/Contact/contact";
import PortfolioScreen from "./Screen/portfolioScreen/portfolioScreen";
import Landing from "./Screen/landing";
import FooterBar from "./Components/footer/footer";

function App() {
  return (
      <BrowserRouter>
          <div className="grid-layout">

              <Header className="header" id="header"/>

              <Switch>
                  <main>
                      <div>
                        <Route path="/" exact={ true } component={Landing} />
                      </div>
                      <div>
                        <Route path="/portfolio" component={PortfolioScreen} />
                      </div>
                      <div>
                          <Route path="/footer" component={FooterBar}/>
                      </div>
                  </main>
              </Switch>


          </div>

      </BrowserRouter>
  );
}

function showTitle() {
    document.getElementById("uni-title").style.display = "flex";
}

export default App;
