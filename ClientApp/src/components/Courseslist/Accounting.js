import React from 'react'
import './Accounting.css';
import { motion } from 'framer-motion';

import Accordion from '@mui/material/Accordion';
// import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
// import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import EFooter from '../HomeComponents/EFooter';


const Accounting = () => {

  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <motion.div className='Accounting'
    initial={{width:0}}
    animate={{width:"100%"}}
    exit={{x: window.innerWidth, transition: {duration:0.3}}}
    >
        <div className='Emain'>
        <div className="Scontact"><div className="stikybox"><h3>eAccounting</h3></div></div>

        </div>
        
        <div className="Accordionmainbox">
 
 <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
   <AccordionSummary
     expandIcon={<ExpandMoreIcon />}
     aria-controls="panel1bh-content"
     id="panel1bh-header"
     
   >
     
   <li> Computer Basic</li>
   
     {/* <Typography sx={{ color: 'text.secondary' }}>I am an accordion</Typography> */}
   </AccordionSummary>
  
      <div className='accdetails'>
      <li>Computer Fundamental</li> 
      <li>Operating System</li>
      <li>MS-Word</li>
      <li>MS-Excel</li>
      <li>MS-PowerPoint</li>
      <li>Network & Internet</li>
      <li>E-mail, Social Networking</li>
      <li>e-Governance Services </li>
      <li>Digital Financial Tools & Application</li>
      <li>Software Installation</li>
      <li>Typing.</li>
    
      </div>
 </Accordion>

<Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
   <AccordionSummary
     expandIcon={<ExpandMoreIcon />}
     aria-controls="panel2bh-content"
     id="panel2bh-header"
     
   >
     {/* <Typography inline variant="body1" align="left">Choose New Support:</Typography> */}
    <li>Manual Accounting</li>
     {/* <Typography sx={{ color: 'text.secondary' }}>
       You are currently not an owner
     </Typography> */}
   </AccordionSummary>
   <div className='accdetails'>
      <li>Fundamental of Accounting</li> 
      <li>Principle of Accounting</li>
      <li>Accounting Procedure</li>
      <li>Finalization of Accounting</li>
      
    
      </div>
 </Accordion>


 <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
   <AccordionSummary
     expandIcon={<ExpandMoreIcon />}
     aria-controls="panel3bh-content"
     id="panel3bh-header"
   >
     
  <li>Computerized Accounting</li>
    
     
   </AccordionSummary>
   <div className='accdetails'>
      <li>Accounting in Tally prime</li> 
      <li>Reporting in Tally Prime</li>
      <li>Accounting in Busy</li>
      <li>Reporting in Busy</li>
      <li>Overview in marg</li>
    
      </div>
 </Accordion>

 <Accordion expanded={expanded === 'panel12'} onChange={handleChange('panel12')}>
   <AccordionSummary
     expandIcon={<ExpandMoreIcon />}
     aria-controls="panel12bh-content"
     id="panel12bh-header"
     className='suhead'
   >
     
     <li>Online Return Filing</li>
   
     
   </AccordionSummary>
   <div className='accdetails'>
      <li>Income Tax Introduction</li> 
      <li>Tax Calculation & Preparing Returns</li>
      <li>Income Tax Return Filing</li>
      <li>Tax Deducation at Source</li>
      <li>TDS Accounting</li>
      <li>TDS Payment & Returns</li>
      <li>Tax Collection at Source</li>
      
    
      </div>
 </Accordion>



 <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
   <AccordionSummary
     expandIcon={<ExpandMoreIcon />}
     aria-controls="panel4bh-content"
     id="panel4bh-header"
   >
  <li>Goods and Service Tax (GST)</li>
   </AccordionSummary>
   <div className='accdetails'>
      <li>GST Introduction & Registration</li> 
      <li>GST Billing & e-Way Bill</li>
      <li>Input Tax Credit and Payment</li>
      <li>GST Return Filing</li>
      <li>GST Updates</li>
    </div>
 </Accordion>




 <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
   <AccordionSummary
     expandIcon={<ExpandMoreIcon />}
     aria-controls="panel5bh-content"
     id="panel5bh-header"
   >
    <li>Online Banking</li>
   </AccordionSummary>
   <div className='accdetails'>
      <li>Internet Banking</li> 
      <li>Using e-Wallets</li>
      <li>Digi Payments</li>
      <li>Online Shopping</li>
    </div>
 </Accordion>



 <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
   <AccordionSummary
     expandIcon={<ExpandMoreIcon />}
     aria-controls="panel6bh-content"
     id="panel6bh-header"
   >
 <li>Overview of ROC & Stock Market</li>
   </AccordionSummary>
   <div className='accdetails'>
      <li>Overview of ROC </li> 
      <li>Registration of Company</li>
      <li>Overview of stock Market</li>
      <li>Overview of Forex</li>
    </div>
 </Accordion>



  
 <Accordion expanded={expanded === 'panel7'} onChange={handleChange('panel7')}>
   <AccordionSummary
     expandIcon={<ExpandMoreIcon />}
     aria-controls="panel7bh-content"
     id="panel7bh-header"
   >
 <li>Soft Skills</li>
   </AccordionSummary>
   <div className='accdetails'>
      <li>CV and Resume Writing</li> 
      <li>Extempore</li>
      <li>Positive Attitude</li>
      <li>Mock Interview</li>
      <li>Presentation & CD</li>
      <li>Personality Development</li>
      
    </div>
 </Accordion>
   </div>
<EFooter/>

    </motion.div>
  )
}

export default Accounting