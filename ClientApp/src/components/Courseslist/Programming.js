import React from 'react'
import './Programming.css';
import { motion } from 'framer-motion';
const Programming = () => {
  return (
    <motion.div className='Programming'
    initial={{width:0}}
    animate={{width:"100%"}}
    exit={{x: window.innerWidth, transition: {duration:0.3}}}
    >
      <div className='Pmain'>
      <div className="Scontact"><div className="stikybox"><h3>Programming</h3></div></div>
   </div>
    </motion.div>
  )
}

export default Programming