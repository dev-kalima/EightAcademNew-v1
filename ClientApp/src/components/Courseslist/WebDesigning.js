import React from 'react'
import './WebDesigning.css';
import { motion } from 'framer-motion';
const WebDesigning = () => {
  return (
    <motion.div className='WebDesigning'
    initial={{width:0}}
    animate={{width:"100%"}}
    exit={{x: window.innerWidth, transition: {duration:0.3}}}
    >
      <div className='Wmain'>
      <div className="Scontact"><div className="stikybox"><h3>Web Designing</h3></div></div>
   </div>
    </motion.div>
  )
}

export default WebDesigning