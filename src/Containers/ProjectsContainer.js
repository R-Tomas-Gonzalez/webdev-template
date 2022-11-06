import React, { Component } from 'react';
import Project from '../Components/Project';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

class ProjectsContainer extends Component {

    render() {

        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };


        return (
            <Slider {...settings}>
                {this.props.projects.map((project, index) => <Project key={index} project={project} />)}
            </Slider>
        );
    }
}

export default ProjectsContainer;