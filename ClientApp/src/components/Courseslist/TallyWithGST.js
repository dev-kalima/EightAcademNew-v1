import React from 'react'
import './TallyWithGST.css';
import { motion } from 'framer-motion';

import Accordion from '@mui/material/Accordion';
// import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
// import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import EFooter from '../HomeComponents/EFooter';


const TallyWithGST = () => {


  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <motion.div className='TallyWithGST'
    initial={{width:0}}
    animate={{width:"100%"}}
    exit={{x: window.innerWidth, transition: {duration:0.3}}}
    >
      <div className='Tmain'>
      <div className="Scontact"><div className="stikybox"><h3>Tally With GST</h3></div></div>
    </div>

   <div className="Accordionmainbox">
        <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
   <AccordionSummary
     expandIcon={<ExpandMoreIcon />}
     aria-controls="panel1bh-content"
     id="panel1bh-header"
     
   >
     
   <li>Fundamental of Accounting</li>
   
     {/* <Typography sx={{ color: 'text.secondary' }}>I am an accordion</Typography> */}
   </AccordionSummary>
  
      <div className='accdetails'>
      <li>Accounting Introduction</li> 
      <li>Principle of Accounting</li>
      <li>Manual Transaction Recording</li>
      <li>Preparing</li>
      <li>Ledgers and Reports</li>
      <li>Finalization of Accounts.</li>
      </div>
 </Accordion>

<Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
   <AccordionSummary
     expandIcon={<ExpandMoreIcon />}
     aria-controls="panel2bh-content"
     id="panel2bh-header"
     
   >
     {/* <Typography inline variant="body1" align="left">Choose New Support:</Typography> */}
    <li>Accounting in Tally Prime</li>
     {/* <Typography sx={{ color: 'text.secondary' }}>
       You are currently not an owner
     </Typography> */}
   </AccordionSummary>
   <div className='accdetails'>
      <li>Gateway of tally</li> 
      <li>Company Creation, Security, 
 Tally Vault & Configurations</li>
      <li>Masters Creations 
 & Alteration</li>
      <li>Day to Day Transaction Recording</li>
      <li>Voucher Configuration.</li>
      
    
      </div>
 </Accordion>


 <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
   <AccordionSummary
     expandIcon={<ExpandMoreIcon />}
     aria-controls="panel3bh-content"
     id="panel3bh-header"
   >
     
  <li>Inventory Management</li>
    
     
   </AccordionSummary>
   <div className='accdetails'>
      <li>Inventory with Advance Features</li> 
      <li>Order 
 Processing</li>
      <li>Purchase and Sale Management</li>
      <li>Inventory Reporting</li>
      <li>Inventory Management.</li>
    
      </div>
 </Accordion>

 <Accordion expanded={expanded === 'panel12'} onChange={handleChange('panel12')}>
   <AccordionSummary
     expandIcon={<ExpandMoreIcon />}
     aria-controls="panel12bh-content"
     id="panel12bh-header"
     className='suhead'
   >
     
     <li>Goods Services & Tax (GST) Management</li>
   
     
   </AccordionSummary>
   <div className='accdetails'>
      <li>GST Introduction</li> 
      <li>GST Features</li>
      <li>GST 
 Configuration</li>
      <li>GST Invoicing</li>
      <li>GST RCM & 
 Composition</li>
      <li>GST Adjustment</li>
      <li>GST Payment</li>
      <li>GST Reporting.</li>
      
      
    
      </div>
 </Accordion>



 <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
   <AccordionSummary
     expandIcon={<ExpandMoreIcon />}
     aria-controls="panel4bh-content"
     id="panel4bh-header"
   >
  <li>TDS/TCS Management</li>
   </AccordionSummary>
   <div className='accdetails'>
      <li>TDS Transaction</li>
      <li>TDS Payment</li>
      <li>TCS 
 Transaction</li>
      <li>TCS Payment</li>
      <li>TDS/TCS 
 Reporting.</li>
    
    </div>
 </Accordion>




 <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
   <AccordionSummary
     expandIcon={<ExpandMoreIcon />}
     aria-controls="panel5bh-content"
     id="panel5bh-header"
   >
    <li>Tally Special Features</li>
   </AccordionSummary>
   <div className='accdetails'>
      <li>Cost & Budget Management</li> 
      <li>Banking Features  </li>
      <li>Manufacturing and Production Process</li>
      <li>Advance Accounting Features.</li>
    </div>
 </Accordion>



 <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
   <AccordionSummary
     expandIcon={<ExpandMoreIcon />}
     aria-controls="panel6bh-content"
     id="panel6bh-header"
   >
 <li>Payroll Management</li>
   </AccordionSummary>
   <div className='accdetails'>
      <li>Payroll Employee Masters</li> 
      <li>Salary Configuration </li>
      <li>Benefits & Deductions</li>
      <li>Salary Calculation</li>
      <li>Attendance Management.</li>
    </div>
 </Accordion>



  
 <Accordion expanded={expanded === 'panel7'} onChange={handleChange('panel7')}>
   <AccordionSummary
     expandIcon={<ExpandMoreIcon />}
     aria-controls="panel7bh-content"
     id="panel7bh-header"
   >
 <li>Security & Audit</li>
   </AccordionSummary>
   <div className='accdetails'>
      <li >Tally Audit Features</li>
      <li>Users and Security Control </li>
      <li>Data Exporting/Importing</li>
      <li>Data Mailing </li>
      <li>Accounts Management.</li>
      
    </div>
 </Accordion>

  
 <Accordion expanded={expanded === 'panel8'} onChange={handleChange('panel8')}>
   <AccordionSummary
     expandIcon={<ExpandMoreIcon />}
     aria-controls="panel8bh-content"
     id="panel8bh-header"
   >
 <li>Reporting in Tally</li>
   </AccordionSummary>
   <div className='accdetails'>
      <li >Financial Statements</li>
      <li>Books of Accounts </li>
      <li>MIS 
 Report</li>
      <li>Printing of Reports. </li>
      
    </div>
 </Accordion>
   </div>

<EFooter/>

    </motion.div>
    
  )
}

export default TallyWithGST