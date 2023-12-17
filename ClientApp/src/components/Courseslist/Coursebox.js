// import React, { useState } from 'react'
// import Demo from '../Pages/Demo';
// import Home1 from '../Pages/Home1';
import {CoursesData} from '../Courseslist/CoursesData';
import './Coursebox.css';




// import Basiccomputer from './Basiccomputer'
import { useNavigate } from 'react-router-dom';



const Coursebox = () => {
  // const[show, setShow]=useState(false)

  
const navigate = useNavigate();

  return (
 
    
    <>

    <nav>

      {CoursesData.map((item, index)=>{
return(


<div className='maindesign' key={index} >
          
            {/* <div id="sbox" onClick={()=> setShow(!show)}>
              {show && <Demo/>}
              basic computer
              {show === true ? <Home1/> : <Demo/>}
            </div> */}
            {/* <div id="sbox" className='firstsbox'></div> */}

  <div className={item.cName}   onClick={()=>{ navigate(item.pnavigate); }}> <div className={item.cicon}><img src={item.iconimg} alt="" /></div> <div className={item.ctitle}> <span><h4>{item.title}</h4> {item.cduration}</span></div><div className={item.carro}><i className={"fa-solid fa-chevron-right"}></i></div></div>
          
        </div>
        );
      })}
    </nav>
    </>
  );
}

export default Coursebox