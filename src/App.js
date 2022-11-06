import React, { Fragment } from 'react';
import { SiRuby, SiReact, SiJavascript, SiAdobexd, SiAdobe, SiPostgresql, SiHtml5, SiCss3, SiVisualstudiocode, SiLinkedin, SiGithub, SiMedium, SiTwitter, SiInstagram, SiYoutube } from "react-icons/si"
import { DiGithubAlt } from 'react-icons/di'
import { HiDesktopComputer } from 'react-icons/hi';
import './App.css';
import { PROJECTS } from "./ProjectObjects.js"
// import ProjectsContainer from './Containers/ProjectsContainer';
import { Header } from './header/Header';
import { Hero } from './hero/Hero';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {

  const projects = PROJECTS;

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 1,
    speed: 500
  };

  return (
    <Fragment>
      <section className='hero-section' id='hero-section'>
        <Header />
        <Hero />
      </section>
      <section className="about-section" id="about-section">
        <div className="about-section-div-container">
          <div className="skills-div">
            <ul className="about-skills">
              <li><SiReact size="5.5vmin" /></li>
              <li><SiJavascript size="5.5vmin" /></li>
              <li><SiRuby size="5.5vmin" /></li>
              <li><SiAdobexd size="5.5vmin" /></li>
              <li><SiAdobe size="5.5vmin" /></li>
              <li><SiPostgresql size="5.5vmin" /></li>
              <li><SiHtml5 size="5.5vmin" /></li>
              <li><SiCss3 size="5.5vmin" /></li>
              <li><SiVisualstudiocode size="5.5vmin" /></li>
            </ul>
          </div>
        </div>
      </section>
      <section className="project-section" id="project-section">
        <div className="project-section-header">
          <h1>Projects</h1>
        </div>
        <Slider {...settings}>
          {projects.map((project) => (
            <div>
              {
                <div className='card'>
                  <div className='card-top'>
                    <img className='image' src={project.img} alt={project.title} />
                    <h1>{project.title}</h1>
                  </div>
                  <div className='card-bottom'>
                    {project.githubFront ? <p><a target="_blank" rel="noreferrer" href={project.demo}><SiYoutube style={{ textDecoration: "none", color: "white", padding: "2px" }} target="_blank" rel="noreferrer" className="project-links" size="2vmax" /></a>
                      <a className="project-links" target="_blank" rel="noreferrer" href={project.githubFront}><SiGithub style={{ textDecoration: "none", color: "white", padding: "2px" }} size="2vmax" /></a>
                      <a className="project-links" target="_blank" rel="noreferrer" href={project.githubBack}><DiGithubAlt style={{ textDecoration: "none", color: "white", padding: "2px" }} size="2vmax" /></a>
                      <a className="project-links" target="_blank" rel="noreferrer" href={project.website}><HiDesktopComputer style={{ textDecoration: "none", color: "white", padding: "2px" }} size="2vmax" /></a> </p>
                      : <p> <a className="project-links" target="_blank" rel="noreferrer" href={project.demo}><SiYoutube style={{ textDecoration: "none", color: "white", padding: "2px" }} size="2vmax" /></a>
                        <a className="project-links" target="_blank" rel="noreferrer" href={project.github}><SiGithub style={{ textDecoration: "none", color: "white", padding: "2px" }} size="2vmax" /></a> </p>}
                  </div>
                </div>
                //   <a style={{ textDecoration: "none", color: "white" }} target="_blank" rel="noreferrer" href={project.website}>
                //   <div>
                //     <img src={project.img} alt={project.title} />
                //     <div>
                //       <div >{project.title}</div>
                //       <p style={{ padding: "2%" }} >{project.description}</p>
                //     </div>
                //   </div>
                // </a>
              }

              {/* <div className="image-title">{project.title}</div>
              {project.githubFront ? <p><a target="_blank" rel="noreferrer" href={project.demo}><SiYoutube style={{ textDecoration: "none", color: "white", padding: "2px" }} target="_blank" rel="noreferrer" className="project-links" size="2vmax" /></a>
                <a className="project-links" target="_blank" rel="noreferrer" href={project.githubFront}><SiGithub style={{ textDecoration: "none", color: "white", padding: "2px" }} size="2vmax" /></a>
                <a className="project-links" target="_blank" rel="noreferrer" href={project.githubBack}><DiGithubAlt style={{ textDecoration: "none", color: "white", padding: "2px" }} size="2vmax" /></a>
                <a className="project-links" target="_blank" rel="noreferrer" href={project.website}><HiDesktopComputer style={{ textDecoration: "none", color: "white", padding: "2px" }} size="2vmax" /></a> </p>
                : <p> <a className="project-links" target="_blank" rel="noreferrer" href={project.demo}><SiYoutube style={{ textDecoration: "none", color: "white", padding: "2px" }} size="2vmax" /></a>
                  <a className="project-links" target="_blank" rel="noreferrer" href={project.github}><SiGithub style={{ textDecoration: "none", color: "white", padding: "2px" }} size="2vmax" /></a> </p>} */}
            </div>
          ))}
        </Slider>

        {/* <div className="main-project-container">
          <ProjectsContainer projects={projects} />
        </div> */}

      </section>
      <section className="contact-section" id="contact-section">
        <div className="contact-section-header">
          <h1>Contact</h1>
        </div>
        <div>
          <a className="hero-button" target="_blank" rel="noreferrer" href="mailto:r.tomas.gonzalez01@gmail.com">Email Me</a>
        </div>

        <div className="contact-links-div" >
          <ul className="contact-links">
            <li ><SiLinkedin style={{ cursor: "pointer" }} className="link-icon" onClick={(e) => { window.open('https://www.linkedin.com/in/rtomasgonzalez/') }} size="5.5vmin" /></li>
            <li ><SiGithub style={{ cursor: "pointer" }} className="link-icon" onClick={(e) => { window.open('https://github.com/R-Tomas-Gonzalez') }} size="5.5vmin" /></li>
            <li ><SiMedium style={{ cursor: "pointer" }} className="link-icon" onClick={(e) => { window.open('https://tomas-82726.medium.com/') }} size="5.5vmin" /></li>
            <li ><SiTwitter style={{ cursor: "pointer" }} className="link-icon" onClick={(e) => { window.open('https://twitter.com/rtgonzalezimg') }} size="5.5vmin" /></li>
            <li ><SiInstagram style={{ cursor: "pointer" }} className="link-icon" onClick={(e) => { window.open('https://www.instagram.com/r.tomasgonzalez/?hl=en') }} size="5.5vmin" /></li>
          </ul>
        </div>
      </section>
    </Fragment>
  );
}

export default App;
