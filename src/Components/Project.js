import React from 'react';

const Project = (props) => {
    console.log(props)
    const {img, title, description, githubBack, githubFront, demo, website} = props.project
    // const title = props.project.title
    return ( 
        <div className="image-container">
            <img className="image" src={img} alt={title}/>
        </div>
     );
}
 
export default Project;