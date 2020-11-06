import React, {useState} from 'react';
import { Card, makeStyles } from '@material-ui/core';
import { SLIDE_INFO } from './constants';
import Arrow from "./Arrow.js";


export default function CarouselSlide(props) {

    const [index, setIndex] = useState(0);
    const content = SLIDE_INFO[index];
    const numSlides = SLIDE_INFO.length;

        const { backgroundColor, title } = content;

    const useStyles = makeStyles(() => ({
        
        card: {
            backgroundColor,
            borderRadius: 5,
            padding: '75px 50px',
            margin: '0px 25px',
            width: '500px',
            boxShadow: '20px 20px 20px black',
            display: 'flex',
            justifyContent: 'center',
        } 
    }));


    const onArrowClick = (direction) => {
        const increment = direction === 'left' ? -1 : 1;
        const newIndex = (index + increment + numSlides) % numSlides;
        setIndex(newIndex);
    };

    const classes = useStyles();

    return (
        <Card className={classes.card} content={content}>
            <Arrow className="left-slideshow-arrow" direction='left' clickFunction={() => onArrowClick('left')}/>
            <h1>Hello World</h1>
            <Arrow className="left-slideshow-arrow" direction='right' clickFunction={() => onArrowClick('right')}/>
        </Card>
    );
}