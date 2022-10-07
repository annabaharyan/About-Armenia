import React from 'react';
import { useSelector } from 'react-redux';
import { getStateAbout } from '../Fetches/AboutInfo/AboutSlice';
import { getStateLang } from '../Fetches/LangSlice/langSlice';

const About = () => {
    const currentLang=useSelector(getStateLang)
    const myInfo=useSelector(getStateAbout)
    
    return (
        <div>
           {myInfo.filter(info=>info.lang===currentLang).map(val=>(
            <div className='aboutDiv container'key={val.id}>
                <div className='headings'>
                <h1 >{val.title}</h1>
                <h2 >{val.desc.heading}{currentLang==='am'?'` ':': '}{val.desc.name}</h2>
                </div>
                <div className='ArmSymbols'>
                <img src={`${val.desc.symbols.flag}`} alt="flag" />
                <img src={`${val.desc.symbols.gerb}`} alt="gerb" />
                <p>{val.desc.symbols.anthem}</p>      
                </div>        
                <div>{val.desc.text}</div>           

            </div>
           ))
           
           
           }
            
        </div>
    );
}

export default About;

