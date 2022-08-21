import React from 'react';
import {HeroAbout} from './hero-about/HeroAbout';
import HeroImage from './hero-image/HeroImage';
import './hero.scss';

export const Hero = () => {
    return (
        <div className='hero__content'>
           <HeroAbout />
           <HeroImage />
        </div>
    )
}

