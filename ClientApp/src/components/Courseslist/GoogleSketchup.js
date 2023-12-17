import React from 'react'
import './GoogleSketchup.css';
import { motion } from 'framer-motion';
const GoogleSketchup = () => {
  return (
    <motion.div className='GoogleSketchup'
    initial={{width:0}}
    animate={{width:"100%"}}
    exit={{x: window.innerWidth, transition: {duration:0.3}}}
    >
        <div className='Gmain'>
        <div className="Scontact"><div className="stikybox"><h3>Google Sketch Up</h3></div></div>
        

        </div>
        
    </motion.div>
  )
}

export default GoogleSketchup