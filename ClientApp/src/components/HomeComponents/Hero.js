import React from 'react'
import "./Hero.css";
import hero from '../image/hero.png';

const Hero = () => {
  return (
    <>
    
    
    <nav>
        <div className='herosection'><img src={hero} alt=""/></div>
    </nav>
    </>
  );
}

export default Hero