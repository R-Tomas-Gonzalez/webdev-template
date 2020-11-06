import {BsArrowLeft, BsArrowRight } from "react-icons/bs";


export default function Arrow(props) {
    const { direction, clickFunction } = props;
    
    const icon = direction === 'left' ? <BsArrowLeft /> : <BsArrowRight />;

    return <div onClick={clickFunction}>{icon}</div>;
}

