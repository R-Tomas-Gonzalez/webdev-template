import React from 'react';
import './social.scss';
import { RiLinkedinLine, RiGithubLine, RiMailLine, RiInstagramLine } from 'react-icons/ri';

export default function Social() {
    return (
        <div className='social__main'>
            <h2><a href='https://www.linkedin.com/in/rtomasgonzalez/' rel="noreferrer" target='_blank'><RiLinkedinLine /></a></h2>
            <h2><a href='https://github.com/R-Tomas-Gonzalez' rel="noreferrer" target='_blank'><RiGithubLine /></a></h2>
            <h2><a href='mailto:r.tomas.gonzalez01@gmail.com' rel="noreferrer" target='_blank'><RiMailLine /></a></h2>
            <h2><a href='https://www.instagram.com/r.tomasgonzalez/' rel="noreferrer" target='_blank'><RiInstagramLine /></a></h2>
        </div>
    )
}
