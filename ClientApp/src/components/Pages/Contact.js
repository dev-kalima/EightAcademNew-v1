import React from 'react'
import './Contact.css';
import { motion } from 'framer-motion';
import EFooter from '../HomeComponents/EFooter';
const Contact = () => {
  return (
    <motion.div className='contact'
    initial={{width:0}}
    animate={{width:"100%"}}
    exit={{x: window.innerWidth, transition: {duration:0.3}}}
    >
        <h2>Enter Your Details</h2>
        <div className="maincontact">
  <div className="scontact"> 
  <div className="stikybox"><h3>Contact for Learn Skills</h3></div>

  <form action="#">
<input type="text" name="" id=""  placeholder='Name'/><br />
     <input type="email" name="" id="" placeholder='Email id'/><br />
  <input type="number" name="" id="" placeholder='Mobile No'/><br />
   <input type="text" name="" id="" placeholder='Address' /><br />
    <button>Send</button>
  </form>
  </div>
   </div>
   <EFooter/>
    </motion.div>
  )
}

export default Contact