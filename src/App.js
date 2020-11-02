import React, {Fragment} from 'react';
import {HashRouter} from 'react-router-dom';
import {HashLink} from 'react-router-hash-link';
import { BsArrowRight } from "react-icons/bs";
import {SiRuby, SiReact, SiJavascript, SiRails, SiAdobexd, SiAdobe, SiPostgresql, SiHtml5, SiCss3, SiVisualstudiocode} from "react-icons/si"
import './App.css';

function App() {

  return (
    <Fragment>
    <section className="header">
      <div className="black-overlay">
        <div className="headline">
          <h1 className="headline-words">HELLO, MY NAME IS <span className="headline-name">TOMAS</span>
          <br/>
          I'M A FULL STACK WEB DEVELOPER</h1>
          <HashRouter>
            <HashLink className="route-button" smooth to="#about-section">
            <button className="hero-button">
              Read More <BsArrowRight className="hero-button-arrow"/>
            </button>
            </HashLink>
          </HashRouter>
        </div>
      </div>
    </section>
    <section className="about-section" id="about-section">
        <div className="skills-div">
          <ul className="about-skills">
            <li><SiReact size="3vmax"/></li>
            <li><SiJavascript size="3vmax"/></li>
            <li><SiRuby size="3vmax"/></li>
            <li><SiRails size="3vmax"/></li>
            <li><SiAdobexd size="3vmax"/></li>
            <li><SiAdobe size="3vmax"/></li>
            <li><SiPostgresql size="3vmax"/></li>
            <li><SiHtml5 size="3vmax"/></li>
            <li><SiCss3 size="3vmax"/></li>
            <li><SiVisualstudiocode size="3vmax"/></li>
          </ul>
        </div>
      <div className="section-header">
        <h1>ABOUT</h1>
        <div className="break"></div>
      </div>
      <div className="about-boxes">
        <div className="box-item1"></div>
        <div className="box-item2"></div>
      </div>
    </section>
    </Fragment>
  );
}

export default App;
