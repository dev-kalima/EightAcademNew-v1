import React from 'react'
import './VideoEditing.css';
import { motion } from 'framer-motion';
const VideoEditing = () => {
  return (
    <motion.div className='VideoEditing'
    initial={{width:0}}
    animate={{width:"100%"}}
    exit={{x: window.innerWidth, transition: {duration:0.3}}}
    >
      <div className='Vmain'>
      <div className="Scontact"><div className="stikybox"><h3>Video Editing</h3></div></div>
   </div>
    </motion.div>
  )
}

export default VideoEditing