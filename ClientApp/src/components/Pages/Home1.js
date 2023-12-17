import React from 'react'

import Coursebox from '../Courseslist/Coursebox'
import Hero from '../HomeComponents/Hero'
import "./HomeStyle1.css"
import MSection from '../HomeComponents/MSection'
import EFooter from '../HomeComponents/EFooter';
import MSectionHeading from '../HomeComponents/MSectionHeading'
import Services from '../HomeComponents/Services'
// import Reviews from '../Carousel/Reviews'
import GoogleS from '../Carousel/googleS'

// import { motion } from 'framer-motion'
const Home1 = () => {
  return (
    <div 
    
    initial={{width:0}}
    animate={{width:"100%"}}
    exit={{x: window.innerWidth, transition: {duration:0.3}}}
    
    >
    <Hero/>
<div className='Mainhome'>
    
   <h2> 8 Years Of Excellence, Thousands Of Happy Students!</h2>
    <p>We are one of the leading computer institutes in Chhattarpur New Delhi established in 2015 and approved by MSME</p>


</div>

<MSection/>
<MSectionHeading/>
<Coursebox/>
<Services/>

<GoogleS/>
<EFooter/>

</div>
  )
}

export default Home1