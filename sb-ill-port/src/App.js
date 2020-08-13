import React from 'react';
import './App.css';
import {BrowserRouter, Link} from 'react-router-dom';

function App() {
  return (
      <BrowserRouter>
          <div className="home-page-design">
            <header className="header">
                <h1>SB Illustrates</h1>
                <div className="links">
                    <div className="header-link">
                        <Link to="#">About Me</Link>
                    </div>
                    <div className="vertical-divider"/>
                    <div className="header-link">
                        <Link to="#">My Work</Link>
                    </div>
                    <div className="vertical-divider"/>
                    <div className="header-link">
                        <Link to="#">Contact</Link>
                    </div>
                </div>
            </header>
          </div>
      </BrowserRouter>
  );
}

export default App;
