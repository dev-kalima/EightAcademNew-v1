import React from 'react'
import './InteriorDesigning.css';
import { motion } from 'framer-motion';
const InteriorDesigning = () => {
  return (
    <motion.div className='InteriorDesigning'
    initial={{width:0}}
    animate={{width:"100%"}}
    exit={{x: window.innerWidth, transition: {duration:0.3}}}
    >
      <div className='Imain'>
      <div className="Scontact"><div className="stikybox"><h3>Interior Designing</h3></div></div>
   
   </div>
    </motion.div>
  )
}

export default InteriorDesigning