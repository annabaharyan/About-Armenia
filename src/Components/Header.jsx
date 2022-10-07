import React,{useEffect,useState}from 'react';
import {Link} from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux/es/exports';
import { menu } from '../Languages/langs'
import { lang } from '../Fetches/LangSlice/initialLang';
import { getLang, getStateLang } from '../Fetches/LangSlice/langSlice';
const Header = () => {
   
const langs=useSelector(getStateLang)
const dispatch=useDispatch()

    return (

      
        <header>
        
            <nav className='nav'>
            <ul >
          {menu.filter(item=>item.lang===langs).map((res)=>(
            <li key={res.id}><Link to={`${res.url}`}>{res.title}</Link></li>
          ))}
        </ul>
        <ul className='languages'>
          {lang.map((res)=>(
          
            <li key={res.id} onClick={()=>dispatch(getLang(res.code))} >
              {res.name}
            <img src={`${res.flag}`} className='langImg'/>
            </li>
          ))}
        </ul>
            </nav>
            
       
       
        </header>
    );
}

export default Header;
