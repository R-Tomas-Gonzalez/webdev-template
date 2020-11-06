import React, { Component } from 'react';
import Project from '../Components/Project';

class ProjectsContainer extends Component {
    state = {  }
    render() { 
        
        return ( 
            <div className="project-row">
                {this.props.projects.map((project, index) => <Project key={index} project={project}/>)}
            </div>
         );
    }
}
 
export default ProjectsContainer;