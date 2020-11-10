import React, { Fragment } from 'react';
import { HashRouter } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { BsArrowRight, BsChevronDoubleDown } from "react-icons/bs";
import { SiRuby, SiReact, SiJavascript, SiRails, SiAdobexd, SiAdobe, SiPostgresql, SiHtml5, SiCss3, SiVisualstudiocode, SiLinkedin, SiGithub, SiMedium, SiTwitter, SiInstagram } from "react-icons/si"
import './App.css';
import pic from "./images/download.jpeg";
import {PROJECTS} from "./ProjectObjects.js"
import ProjectsContainer from './Containers/ProjectsContainer';

function App() {

  const projects = PROJECTS;

  return (
    <Fragment>
      <section className="header">
        <div className="black-overlay">
          <div className="headline">
            <h1 className="headline-words">HELLO, MY NAME IS <span className="headline-name">TOMAS</span>
              <br />
          I'M A FULL STACK WEB DEVELOPER</h1>
            <HashRouter>
              <HashLink className="route-button" smooth to="#about-section">
                <button className="hero-button">
                  Read More <BsArrowRight className="hero-button-arrow" />
                </button>
              </HashLink>
            </HashRouter>
          </div>
        </div>
      </section>
      <section className="about-section" id="about-section">
        <div className="about-section-div-container">
          <div className="skills-div">
            <ul className="about-skills">
              <li><SiReact size="2.5em" /></li>
              <li><SiJavascript size="2.5em" /></li>
              <li><SiRuby size="2.5em" /></li>
              <li><SiRails size="2.5em" /></li>
              <li><SiAdobexd size="2.5em" /></li>
              <li><SiAdobe size="2.5em" /></li>
              <li><SiPostgresql size="2.5em" /></li>
              <li><SiHtml5 size="2.5em" /></li>
              <li><SiCss3 size="2.5em" /></li>
              <li><SiVisualstudiocode size="2.5em" /></li>
            </ul>
          </div>
          <div className="about-center-div">
            <div className="section-header">
              <h1>ABOUT</h1>
            </div>
            <div className="about-boxes">
              <div className="box-item1">
                  Officia amet in amet tempor duis quis do adipisicing. Incididunt velit eiusmod do officia quis ullamco esse. Fugiat pariatur tempor non occaecat ipsum ut sint labore pariatur aliquip proident sint quis pariatur. Ullamco id esse ullamco eu laborum officia magna. Esse enim et voluptate veniam velit ad adipisicing cillum est Lorem minim cupidatat exercitation exercitation.
                <br></br>
                  <br></br>
                Cillum consequat sit eu dolor nisi aliquip quis ea tempor esse non anim sit. Id tempor voluptate nisi incididunt dolor proident consequat pariatur sint mollit. Veniam est nisi quis id ipsum esse id cillum non aliquip nulla ut. Incididunt veniam deserunt laboris consequat minim veniam. Laborum aute eiusmod officia aliqua ex adipisicing nostrud non anim officia amet velit. Non eiusmod labore commodo anim irure nostrud minim ea ea sit cupidatat laboris fugiat. Amet laboris adipisicing sint anim magna ullamco anim mollit culpa officia non eu.
              </div>
                <div className="box-item2">
                  <img src={pic}></img>
              </div>
            </div>
          </div>
          <HashRouter>
            <HashLink className="section-route-button" smooth to="#project-section">
              <div className="down-arrow">
                <BsChevronDoubleDown className="section-button-arrow" />
              </div>
            </HashLink>
          </HashRouter>
        </div>
        
      </section>
      <section className="project-section" id="project-section">
        <div className="project-section-header">
          <h1>Projects</h1>
        </div>
        <div className="main-project-container">
          <ProjectsContainer projects={projects}/>
        </div>
        <HashRouter>
            <HashLink className="section-route-button" smooth to="#contact-section">
              <div className="down-arrow">
                <BsChevronDoubleDown className="section-button-arrow" />
              </div>
            </HashLink>
        </HashRouter>

      </section>
      <section className="contact-section" id="contact-section">
        <div className="contact-section-header">
          <h1>Contact</h1>
        </div>
        <div>
          <a className="hero-button" target="_blank" href="mailto:christorres09@gmail.com">Email Me</a>
        </div>
        <div className="contact-links-div" >
          <ul className="contact-links">
            <li><SiLinkedin size="3vmax"/></li>
            <li><SiGithub size="3vmax"/></li>
            <li><SiMedium size="3vmax"/></li>
            <li><SiTwitter size="3vmax"/></li>
            <li><SiInstagram size="3vmax"/></li>
          </ul>
        </div>

      </section>
    </Fragment>
  );
}

export default App;
