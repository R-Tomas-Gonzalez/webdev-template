import React from 'react';

const Project = (props) => {
    console.log(props)
    const {img, title, description, githubBack, githubFront, demo, website} = props.project

    return ( 
        <div className="project-card">
            <div className="image-container">
                <img className="image" src={img} alt={title}/>
                <div className="image-overlay image-overlay-blur">
                    <div className="image-title">{title}</div>
                    <p className="image-description">{description}</p>
                </div>
            </div>
        </div>
     );
}
 
export default Project;