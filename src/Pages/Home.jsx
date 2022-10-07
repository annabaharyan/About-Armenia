
import React from 'react';
import { useState,useEffect } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { getStateLang } from '../Fetches/LangSlice/langSlice';
import { filterMapLang, myMap } from '../Fetches/MyMap/mapSlice';
import { firstImg } from '../Fetches/MyMap/myMap';


const Home = () => {
   const currentLang=useSelector(getStateLang)
    const maps=useSelector(myMap)
    const[currentRegion,setCurrentRegion]=useState('')
    const [changeButton,setChangeButton]=useState(false)
    const dispatch=useDispatch()
 
      useEffect(()=>{
        dispatch(filterMapLang(currentLang)) 
        setCurrentRegion(currentLang==='en'?firstImg[1].name:firstImg[0].name)
      },[currentLang])
    function changeButtonStatus(){
      if(changeButton){

        setChangeButton(false)
      }else{
        setChangeButton(true)
      }
    }
 
    return (
 
       <div className='map container'>
         
          <label htmlFor='region'>{currentLang==='en'?'Choose the Region':'Ընտրել մարզը'}</label>

          <select name="region" id="region" onChange={e=>setCurrentRegion(e.target.value)}>
          
            {maps.filter(res=>res.lang===currentLang).map(region=>(
              <option key={region.id} value={`${region.name}`}>{region.name}</option>
            ))}
            </select>
            <h2>{currentRegion}</h2>
            {maps.filter(res=>res.name===currentRegion).map((region,index)=>(
              <div key={index} className='cols'>
               <img key={region.id} src={`${region.imgUrl}`} alt="qartez HH" className='qartez'/> 
               <div className='col2'> 
               <button className={`aboutBtn ${changeButton?'activeBtn':''}`}  key={+region.id*10} onClick={changeButtonStatus} >{currentLang==='en'?'About Region':'Մարզի մասին'}</button>
               <p key={+region.id*5} className={changeButton?'':'noactive'}>{region.desc}</p>
               </div>
              
              </div>
             

            ))}
                    
          </div>

    );
}

export default Home;
