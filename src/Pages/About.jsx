import React from 'react';
import { useSelector } from 'react-redux';

const About = () => {
    const currentLang=useSelector(state=>{return state.currentLang})
    return (
        <div>
            About
            
        </div>
    );
}

export default About;

