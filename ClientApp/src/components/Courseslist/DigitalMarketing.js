
import React from 'react'
import './DigitalMarketing.css';
import digimarketingicon from './Icon/digital marketing icon.png'
import { motion } from 'framer-motion';
const DigitalMarketing = () => {
  return (
    <motion.div className='DigitalMarketing'
    initial={{width:0}}
    animate={{width:"100%"}}
    exit={{x: window.innerWidth, transition: {duration:0.3}}}
    >
      <div className='Dmain'>
      <div className="Scontact"><div className="stikybox"><h3>Digital Marketing</h3></div></div>
   <div className='dparentbox'>
   <div className="dbox"><img src={digimarketingicon} alt="" /></div>
   <div className="dbox"><h2> The Complete Digital Marketing Course - 12 Courses in 1</h2>
Master Digital Marketing Strategy, Social Media Marketing, SEO, YouTube, Email, Facebook Marketing, Analytics & More!</div>
   </div>

   </div>
    </motion.div>
  )
}

export default DigitalMarketing