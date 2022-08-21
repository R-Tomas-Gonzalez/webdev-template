import React from 'react';
import './heroimage.scss';
import  Social  from '../social-contact/Social';

export default function HeroImage() {
    return (
        <div className='image-container'>
            <img className="hero-image" src='./hero_with_bg.png' />
            <Social />
        </div>
    )
}
