import React from 'react'
import './AdvancedExcel.css';
import { motion } from 'framer-motion';

import Accordion from '@mui/material/Accordion';
// import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
// import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import EFooter from '../HomeComponents/EFooter';

const AdvancedExcel = () => {

  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (

    <motion.div className='AdvancedExcel'
    initial={{width:0}}
    animate={{width:"100%"}}
    exit={{x: window.innerWidth, transition: {duration:0.3}}}
    >
        <div className='Edmain'>
        <div className="Scontact"><div className="stikybox"><h3>Advanced Excel</h3></div></div>

        </div>
        
        <div className="Accordionmainbox">
        <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
   <AccordionSummary
     expandIcon={<ExpandMoreIcon />}
     aria-controls="panel1bh-content"
     id="panel1bh-header"
     
   >
     
   <li>An overview of the screen, Navigation and basic spreadsheet concepts</li>
   
     {/* <Typography sx={{ color: 'text.secondary' }}>I am an accordion</Typography> */}
   </AccordionSummary>
  
      <div className='accdetails'>
      <li>Customizing the Ribbon</li> 
      <li>Worksheets</li>
      <li>Formate Cells </li>
      <li>Various Selection Technique</li>
      <li>Shortcuts Keys</li>
      <li>Protecting and un-protecting worksheets.</li>
      </div>
 </Accordion>

<Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
   <AccordionSummary
     expandIcon={<ExpandMoreIcon />}
     aria-controls="panel2bh-content"
     id="panel2bh-header"
     
   >
     {/* <Typography inline variant="body1" align="left">Choose New Support:</Typography> */}
    <li>Sorting And Filtering Data</li>
     {/* <Typography sx={{ color: 'text.secondary' }}>
       You are currently not an owner
     </Typography> */}
   </AccordionSummary>
   <div className='accdetails'>
      <li>Sorting Tables</li> 
      <li>Using multiple-level softing</li>
      <li>Using Custom sorting</li>
      <li>Filtering data for selected</li>
      <li>View (AutoFilter)</li>
      <li>Using Advanced Filter Options.</li>
    
      </div>
 </Accordion>


 <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
   <AccordionSummary
     expandIcon={<ExpandMoreIcon />}
     aria-controls="panel3bh-content"
     id="panel3bh-header"
   >
     
  <li>Data Validations</li>
    
     
   </AccordionSummary>
   <div className='accdetails'>
      <li>Specifying a Valid of Vlues For a Cell</li> 
      <li>Specifying a List of Valid Values For a Cell</li>
      <li>Specifying Custom Validations Based on Formula For a Cell.</li>
      
    
      </div>
 </Accordion>

 <Accordion expanded={expanded === 'panel12'} onChange={handleChange('panel12')}>
   <AccordionSummary
     expandIcon={<ExpandMoreIcon />}
     aria-controls="panel12bh-content"
     id="panel12bh-header"
     className='suhead'
   >
     
     <li>Text Function</li>
   
     
   </AccordionSummary>
   <div className='accdetails'>
      <li>Upper</li> 
      <li>Lower</li>
      <li>Proper</li>
      <li>Left</li>
      <li>Mid</li>
      <li>Right</li>
      <li>Trim</li>
      <li>Len</li>
      <li>Exact</li>
      <li>Concatenate</li>
      <li>Row</li>
      <li>Rows</li>
      <li>Column</li>
      <li>Columns.</li>
      
    
      </div>
 </Accordion>



 <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
   <AccordionSummary
     expandIcon={<ExpandMoreIcon />}
     aria-controls="panel4bh-content"
     id="panel4bh-header"
   >
  <li>Function & Formula</li>
   </AccordionSummary>
   <div className='accdetails'>
      <li>Sum</li>
      <li>Sumif</li>
      <li>Sumifs</li>
      <li>Dsum</li>
      <li>Average Series</li>
      <li>Max</li>
      <li>Min</li>
      <li>Count</li>
      <li>Counta</li>
      <li>Countblank</li>
      <li>Countif</li>
      <li>Dcount</li>
      <li>Conditional Format-tating</li>
      <li>Logical Functions (IF,Iferror AND, OR, NOT)</li>
      <li>Lookup And Reference Functions (VLOOKUP, HLOOKUP, MATCH, INDEX)</li>
      <li>V-lookup with Exact Match</li>
      <li>V-lookup with Tables, Dynamic Ranges</li>
      <li>Using V-lookup to consolidate Data from Multiple Sheets</li>
      <li>Mathematical Functions</li>
      <li>Date & Time Function.</li>
    </div>
 </Accordion>




 <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
   <AccordionSummary
     expandIcon={<ExpandMoreIcon />}
     aria-controls="panel5bh-content"
     id="panel5bh-header"
   >
    <li>Pivot Tables</li>
   </AccordionSummary>
   <div className='accdetails'>
      <li>Creating Simple Pivot Tables</li> 
      <li>Basic and Advanced value field setting </li>
      <li>Grouping Based on Number and Dates</li>
      <li>Calculated field and Calculated items.</li>
    </div>
 </Accordion>



 <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
   <AccordionSummary
     expandIcon={<ExpandMoreIcon />}
     aria-controls="panel6bh-content"
     id="panel6bh-header"
   >
 <li>Charts & Slicers</li>
   </AccordionSummary>
   <div className='accdetails'>
      <li>Using Charts </li> 
      <li>Formatting Charts</li>
      <li>Using 3D Graphs</li>
      <li>Using Bar and Line Chart Together</li>
      <li>Using Secondary Axis in Graphs.</li>
    </div>
 </Accordion>



  
 <Accordion expanded={expanded === 'panel7'} onChange={handleChange('panel7')}>
   <AccordionSummary
     expandIcon={<ExpandMoreIcon />}
     aria-controls="panel7bh-content"
     id="panel7bh-header"
   >
 <li>Working with Templates</li>
   </AccordionSummary>
   <div className='accdetails'>
      <li >Designing the Structure of a Template Using Templates For Standradization of Worksheets</li>
      
      
    </div>
 </Accordion>
   </div>
<EFooter/>

    </motion.div>
  );
}

export default AdvancedExcel