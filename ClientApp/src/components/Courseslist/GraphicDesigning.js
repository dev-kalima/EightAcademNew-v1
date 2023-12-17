
import React from 'react'
import './GraphicDesigning.css';
import { motion } from 'framer-motion';

import Accordion from '@mui/material/Accordion';
// import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
// import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import EFooter from '../HomeComponents/EFooter';

const GraphicDesigning = () => {

  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <motion.div className='GraphicDesigning'
    initial={{width:0}}
    animate={{width:"100%"}}
    exit={{x: window.innerWidth, transition: {duration:0.3}}}
    >
      <div className='Gmain'>
      <div className="Scontact"><div className="stikybox"><h3>Graphic Design</h3></div></div>
   </div>

   <div className="Accordionmainbox">
        <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
   <AccordionSummary
     expandIcon={<ExpandMoreIcon />}
     aria-controls="panel1bh-content"
     id="panel1bh-header"
     
   >
     
   <li>Graphic Design Concepts & Practices Elements 
 of design</li>
   
     {/* <Typography sx={{ color: 'text.secondary' }}>I am an accordion</Typography> */}
   </AccordionSummary>
  
      <div className='accdetails'>
      <li>Typography</li> 
      <li>Color</li>
      <li>Layout</li>
      <li>Information 
 Hierarchy</li>
      <li>Industry standard design apps:
 Adobe InDesign, Photoshop, Illustrator &
 CorelDRAW,</li>
     
      </div>
 </Accordion>

<Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
   <AccordionSummary
     expandIcon={<ExpandMoreIcon />}
     aria-controls="panel2bh-content"
     id="panel2bh-header"
     
   >
     {/* <Typography inline variant="body1" align="left">Choose New Support:</Typography> */}
    <li>CorelDRAW</li>
     {/* <Typography sx={{ color: 'text.secondary' }}>
       You are currently not an owner
     </Typography> */}
   </AccordionSummary>
   <div className='accdetails'>
      <li>The industry standard for 
 Drawings</li> 
      <li>Logos, and Graphics
 Create graphics</li>
      <li>logos, icons, patterns, 
 packaging, and more</li>
      <li>Draw vector graphics for 
 web and print.</li>
   
      
    
      </div>
 </Accordion>


 <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
   <AccordionSummary
     expandIcon={<ExpandMoreIcon />}
     aria-controls="panel3bh-content"
     id="panel3bh-header"
   >
     
  <li>Adobe Photoshop</li>
    
     
   </AccordionSummary>
   <div className='accdetails'>
      <li>The industry standard for
 Photo Retouching</li> 
      <li>Retouch photos, create graphics, and more</li>
      <li>Adjust color, contrast, and more</li>
      <li>Prepare 
 images for use on the web or in print.</li>
     
    
      </div>
 </Accordion>

 <Accordion expanded={expanded === 'panel12'} onChange={handleChange('panel12')}>
   <AccordionSummary
     expandIcon={<ExpandMoreIcon />}
     aria-controls="panel12bh-content"
     id="panel12bh-header"
     className='suhead'
   >
     
     <li>Adobe Illustrator</li>
   
     
   </AccordionSummary>
   <div className='accdetails'>
      <li>The industry standard for
 Drawing, Logos, and Graphics</li> 
      <li>Create graphics: logos, icons, patterns, 
 packaging, and more</li>
      <li>Draw vector graphics for 
 web and print.</li>
      
      
      
    
      </div>
 </Accordion>



 <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
   <AccordionSummary
     expandIcon={<ExpandMoreIcon />}
     aria-controls="panel4bh-content"
     id="panel4bh-header"
   >
  <li>Adobe InDesign</li>
   </AccordionSummary>
   <div className='accdetails'>
      <li>The industry standard for
 Page Layout</li>
      <li>Create layouts with text, color, and graphics</li>
      <li>Create multi-page documents such as 
 brochures, books, magazines, and more</li>
      <li>Prepare files for final output, such as a print or 
 PDF.</li>
     
    
    </div>
 </Accordion>




 <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
   <AccordionSummary
     expandIcon={<ExpandMoreIcon />}
     aria-controls="panel5bh-content"
     id="panel5bh-header"
   >
    <li>Create a Portfolio</li>
   </AccordionSummary>
   <div className='accdetails'>
      <li> Use InDesign, Photoshop, and Illustrator to 
 produce designs</li> 
      <li>Create projects such as logos</li>
      <li>Social media graphics</li>
      <li>Stationery, book/eBook 
 covers</li>
 <li>Album art, event posters, and email.</li>
    </div>
 </Accordion>

   </div>


   <EFooter/>
    </motion.div>
  )
}

export default GraphicDesigning