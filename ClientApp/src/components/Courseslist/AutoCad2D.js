import React from 'react'
import './AutoCad2D.css';
import { motion } from 'framer-motion';

import Accordion from '@mui/material/Accordion';
// import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
// import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import EFooter from '../HomeComponents/EFooter';

const AutoCad2D = () => {

  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };


  return (
    <motion.div className='AutoCad2D'
    initial={{width:0}}
    animate={{width:"100%"}}
    exit={{x: window.innerWidth, transition: {duration:0.3}}}
    >
        <div className='Amain'>
        <div className="Scontact"><div className="stikybox"><h3>AutoCad 2D</h3></div></div>

        </div>
        
        <div className="Accordionmainbox">
 
 <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
   <AccordionSummary
     expandIcon={<ExpandMoreIcon />}
     aria-controls="panel1bh-content"
     id="panel1bh-header"
     
   >
     
   <li> Basic Concept’s AutoCAD</li>
   
     {/* <Typography sx={{ color: 'text.secondary' }}>I am an accordion</Typography> */}
   </AccordionSummary>
  
      <div className='accdetails'>
      <li>The Command Window</li> 
      <li>The Mouse</li>
      <li>New 
 Drawings</li>
      <li>Create Your Own Drawing Template 
 File</li>
      <li>Units</li>
      <li>Units Display Settings</li>
      <li>Model Scale</li>
      
    
      </div>
 </Accordion>

<Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
   <AccordionSummary
     expandIcon={<ExpandMoreIcon />}
     aria-controls="panel2bh-content"
     id="panel2bh-header"
     
   >
     {/* <Typography inline variant="body1" align="left">Choose New Support:</Typography> */}
    <li>Viewing</li>
     {/* <Typography sx={{ color: 'text.secondary' }}>
       You are currently not an owner
     </Typography> */}
   </AccordionSummary>
   <div className='accdetails'>
      <li>Overlapping Objects</li> 
      
      
    
      </div>
 </Accordion>


 <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
   <AccordionSummary
     expandIcon={<ExpandMoreIcon />}
     aria-controls="panel3bh-content"
     id="panel3bh-header"
   >
     
  <li>Geometry</li>
    
     
   </AccordionSummary>
   <div className='accdetails'>
      <li>Line</li> 
      <li>The User Coordinate System</li>
      <li>Grid 
 Display</li>
      <li>Lines as Construction Aids</li>
      <li>Circle</li>
    <li>Polylines & Rectangles</li>
    <li>Polylines & Rectangles 
 (Continued) </li>
    <li>Hatches and Fills</li>
    <li>Hatches and 
 Fills (Continued)</li>
    <li>Precision</li>
    <li>Polar Tracking</li>
    <li>Locking Angles</li>
    <li>Object Snaps</li>
    <li>Grid Snaps</li>
    <li>Coordinate Entry</li>
    <li>Set Default Object Snaps
 Object Snap Tracking </li>
    <li>Verify Your Work</li>
    <li>Handy Function Key Reference</li>
      </div>
 </Accordion>

 <Accordion expanded={expanded === 'panel12'} onChange={handleChange('panel12')}>
   <AccordionSummary
     expandIcon={<ExpandMoreIcon />}
     aria-controls="panel12bh-content"
     id="panel12bh-header"
     className='suhead'
   >
     
     <li>Layers</li>
   
     
   </AccordionSummary>
   <div className='accdetails'>
      <li>Layers (Continued) </li> 
      <li>Layers Controls</li>
      <li>Layer 
 Settings</li>
      <li>Control in the Layer Properties 
 Manager</li>
      <li>Quick Access to Layer Settings </li>
      <li>Maintain Your Standards</li>
      <li>Summary</li>
      
    
      </div>
 </Accordion>



 <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
   <AccordionSummary
     expandIcon={<ExpandMoreIcon />}
     aria-controls="panel4bh-content"
     id="panel4bh-header"
   >
  <li>Properties</li>
   </AccordionSummary>
   <div className='accdetails'>
      <li>The Properties Palette</li> 
      <li>Verify and Change 
 Object Properties</li>
      <li>Quick Access to Property 
 Settings</li>
      <li>Match the Properties of Objects</li>
      <li>Linetypes</li>
      <li>Linetypes</li>
    </div>
 </Accordion>




 <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
   <AccordionSummary
     expandIcon={<ExpandMoreIcon />}
     aria-controls="panel5bh-content"
     id="panel5bh-header"
   >
    <li>Modifying</li>
   </AccordionSummary>
   <div className='accdetails'>
      <li>Erase</li> 
      <li>Select Multiple Objects</li>
      <li>Move and Copy</li>
      <li>Move and Copy (Continued) </li>
      <li>Create Multiple 
 Copies</li>
      <li>Offset</li>
      <li>Trim and Extend </li>
      <li>Trim and 
 Extend (Continued) </li>
      <li>Mirror</li>
      <li>Stretch</li>
      <li>Fillet</li>
      <li>Explode</li>
      <li>Edit Polylines</li>
      <li>Grips</li>
    </div>
 </Accordion>



 <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
   <AccordionSummary
     expandIcon={<ExpandMoreIcon />}
     aria-controls="panel6bh-content"
     id="panel6bh-header"
   >
 <li>Blocks</li>
   </AccordionSummary>
   <div className='accdetails'>
      <li>Insert a Block </li> 
      <li>Insert a Block (Continued)</li>
      <li>Create a Block Definition</li>
      <li>Create a Block 
 Definition (Continued)</li>
    </div>
 </Accordion>



  
 <Accordion expanded={expanded === 'panel7'} onChange={handleChange('panel7')}>
   <AccordionSummary
     expandIcon={<ExpandMoreIcon />}
     aria-controls="panel7bh-content"
     id="panel7bh-header"
   >
 <li>Layouts</li>
   </AccordionSummary>
   <div className='accdetails'>
      <li>Model Space and Paper Space</li> 
      <li>Four Methods 
 of Scaling</li>
      <li>Specifying the Paper Size of a 
 Layout</li>
      <li>Layout Viewports</li>
      <li>Scaling Views and 
 Trans-Spatial Annotation</li>
      <li>Scaling Views and 
 Trans-Spatial Annotation (Continued)</li>
      
    </div>
 </Accordion>



 <Accordion expanded={expanded === 'panel8'} onChange={handleChange('panel8')}>
   <AccordionSummary
     expandIcon={<ExpandMoreIcon />}
     aria-controls="panel8bh-content"
     id="panel8bh-header"
   >
 <li>Notes and Lables</li>
   </AccordionSummary>
   <div className='accdetails'>
      <li>Create a Text Style</li> 
      <li>Create a Multileader</li>
      <li>Create a Multileader Style</li>
      <li>Dimensions</li>
      <li>Linear 
 Dimensions </li>
      <li>Linear Dimensions (Continued) </li>
      <li>Modify Dimensions</li>
      <li>Dimensions Styles</li>
      
    </div>
 </Accordion>


 <Accordion expanded={expanded === 'panel9'} onChange={handleChange('panel9')}>
   <AccordionSummary
     expandIcon={<ExpandMoreIcon />}
     aria-controls="panel9bh-content"
     id="panel9bh-header"
   >
 <li>Printing</li>
   </AccordionSummary>
   <div className='accdetails'>
      <li>Create a Page Setup</li> 
      <li>Output to a PDF File</li>
      <li>Output to a PDF File (Continued).</li>
    
    </div>
 </Accordion>

   </div>
<EFooter/>

    </motion.div>
  )
}

export default AutoCad2D