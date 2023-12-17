import React from 'react'
import './Courses.css';
import { motion } from 'framer-motion';
import Coursebox from '../Courseslist/Coursebox';
import EFooter from '../HomeComponents/EFooter';
// import childimg from './courses.png'


const Courses = () => {
  return (
    <motion.div className='courses'
    
    initial={{width:"0%"}}
    animate={{width:"100%"}}
    exit={{transition: {duration:0.2}}}

    // initial={{ opacity: 0 }}
    //   animate={{ opacity: 1 }}
    //   exit={{ opacity: 0 }}
    //   transition={{ duration:0.5 }}
>

<div className="Scontact"><div className="stikybox"><h3>Courses</h3></div>
{/* 
<div className="childsbox"><img src={childimg} alt="" />
</div> */}


</div>


       <Coursebox/>
       <EFooter/>
      
    </motion.div>
  )
}

export default Courses