import React from 'react';
import {SiYoutube, SiGithub} from 'react-icons/si';
import {DiGithubAlt} from 'react-icons/di'
import {HiDesktopComputer} from 'react-icons/hi';

const Project = (props) => {
    console.log(props.project)
    const {img, title, description, githubBack, githubFront, demo, website, github} = props.project

    return ( 
        <div className="project-card">
            {website ? <a style={{textDecoration: "none", color:"white"}} className="project-links" target="_blank" rel="noreferrer" href={website}>
            <div className="image-container">
                <img className="image" src={img} alt={title}/>
                <div className="image-overlay image-overlay-blur">
                    <div className="image-title">{title}</div>
                    <p style={{padding: "2%"}}className="image-description">{description}</p>
                </div>
            </div>
            </a> :
            <a style={{textDecoration: "none", color:"white"}} className="project-links" target="_blank" rel="noreferrer" href={demo}>
            <div className="image-container">
                <img className="image" src={img} alt={title}/>
                <div className="image-overlay image-overlay-blur">
                    <div className="image-title">{title}</div>
                    <p style={{padding: "2%"}}className="image-description">{description}</p>
                </div>
            </div>
            </a> 
            }
            
            <div className="image-title">{title}</div>
            {githubFront ? <p><a target="_blank" rel="noreferrer" href={demo}><SiYoutube style={{textDecoration: "none", color:"white", padding:"2px"}} target="_blank" rel="noreferrer" className="project-links" size="2vmax"/></a> 
            <a className="project-links" target="_blank" rel="noreferrer" href={githubFront}><SiGithub style={{textDecoration: "none", color:"white", padding:"2px"}} size="2vmax"/></a> 
            <a className="project-links" target="_blank" rel="noreferrer" href={githubBack}><DiGithubAlt style={{textDecoration: "none", color:"white", padding:"2px"}} size="2vmax"/></a> 
            <a className="project-links" target="_blank" rel="noreferrer" href={website}><HiDesktopComputer style={{textDecoration: "none", color:"white", padding:"2px"}} size="2vmax"/></a> </p> 
            : <p> <a  className="project-links" target="_blank" rel="noreferrer" href={demo}><SiYoutube style={{textDecoration: "none", color:"white", padding:"2px"}} size="2vmax"/></a> 
            <a className="project-links" target="_blank" rel="noreferrer" href={github}><SiGithub style={{textDecoration: "none", color:"white", padding:"2px"}} size="2vmax"/></a> </p> }
            
        </div>
     );
}
 
export default Project;