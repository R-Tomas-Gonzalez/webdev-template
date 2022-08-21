import React from 'react';
import './heroabout.scss';
import { HashLink } from 'react-router-hash-link';
import { HashRouter } from 'react-router-dom';
import { BsArrowRight } from 'react-icons/bs';

export const HeroAbout = () => {
  return (
    <div className="hero__about">
      <div className='intro'>
        <h1>Hi, my name is Tomas.</h1>
      </div>
      <p>
        💻 - I'm currently employed by IPRO Tech. I also devote my time to open source as a frontend developer and on the merge team at Hack for LA.
      </p>
      <p>
        🪴 - Fun fact: I love coffee, spending time with my fiance, playing soccer and any other sports!
      </p>
      <HashRouter>
        <HashLink className="route-button" smooth to="#about-section">
          <button className="hero-button">
            Read More <BsArrowRight className="hero-button-arrow" />
          </button>
        </HashLink>
      </HashRouter>
    </div>
  )
}
