
import React from 'react'
import './ComputerDiploma.css';
import { motion } from 'framer-motion';
import '../MenuData1';
// import Diploma from './Icon/certificate.png'
// import DCA from './Icon/DCA.png'
import { useNavigate } from 'react-router-dom';
import EFooter from '../HomeComponents/EFooter';
const ComputerDiploma = () => {
  const navigate = useNavigate();


  return (
    <motion.div className='ComputerDiploma'
    initial={{width:0}}
    animate={{width:"100%"}}
    exit={{x: window.innerWidth, transition: {duration:0.3}}}
    >
      <div className='CDmain'>
      <div className="Scontact"><div className="stikybox"><h3>Computer Diploma</h3></div></div>
      <div className='sbox' onClick={()=>{navigate('/DCA');}}> <div className="subtitle"> <span> <h4>Diploma In Computer Application (DCA) </h4></span></div><div className="arro"><i className={"fa-solid fa-chevron-right"}></i></div> </div>
      <div className='sbox' onClick={()=>{navigate('/ADCA');}}> <div className="subtitle"> <span> <h4>Advanced Diploma in Computer Application (ADCA) </h4></span></div><div className="arro"><i className={"fa-solid fa-chevron-right"}></i></div> </div> 
   </div>
<EFooter/>

    </motion.div>
  )
}

export default ComputerDiploma