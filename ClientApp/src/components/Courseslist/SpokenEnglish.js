import React from 'react'
import './SpokenEnglish.css';
import { motion } from 'framer-motion';
const SpokenEnglish = () => {
  return (
    <motion.div className='SpokenEnglish'
    initial={{width:0}}
    animate={{width:"100%"}}
    exit={{x: window.innerWidth, transition: {duration:0.3}}}
    >
      <div className='Smain'>
      <div className="Scontact"><div className="stikybox"><h3>Spoken English</h3></div></div>
   </div>
    </motion.div>
  )
}

export default SpokenEnglish