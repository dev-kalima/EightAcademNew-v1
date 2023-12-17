import React from 'react'
import './DCA.css';
import { motion } from 'framer-motion';

import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import EFooter from '../HomeComponents/EFooter';

const DCA = () => {

    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <motion.div className='DCA'
    initial={{width:0}}
    animate={{width:"100%"}}
    exit={{x: window.innerWidth, transition: {duration:0.3}}}
    >
        <div className='DCmain'>
        <div className="Scontact"><div className="stikybox"><h3>DCA | 6 Months</h3></div></div>

        </div>

      
        <div className="Accordionmainbox">
 
 <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
   <AccordionSummary
     expandIcon={<ExpandMoreIcon />}
     aria-controls="panel1bh-content"
     id="panel1bh-header"
     
   >
     
     <li>Computer & Basic Concepts</li>
    
     {/* <Typography sx={{ color: 'text.secondary' }}>I am an accordion</Typography> */}
   </AccordionSummary>
   <AccordionDetails>
     <Typography >
       Nulla facilisi. 
     </Typography>
   </AccordionDetails>
 </Accordion>

<Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
   <AccordionSummary
     expandIcon={<ExpandMoreIcon />}
     aria-controls="panel2bh-content"
     id="panel2bh-header"
     
   >
     {/* <Typography inline variant="body1" align="left">Choose New Support:</Typography> */}
     <li>Operating System</li>
     {/* <Typography sx={{ color: 'text.secondary' }}>
       You are currently not an owner
     </Typography> */}
   </AccordionSummary>
   <AccordionDetails>
     <Typography>
       Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus,
       varius pulvinar diam eros in elit. Pellentesque convallis laoreet
       laoreet.
     </Typography>
   </AccordionDetails>
 </Accordion>


 <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
   <AccordionSummary
     expandIcon={<ExpandMoreIcon />}
     aria-controls="panel3bh-content"
     id="panel3bh-header"
   >
    
    <li> Basic Computer Hardware</li>
   
     
   </AccordionSummary>
   <AccordionDetails>
     <Typography>
       Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
       amet egestas eros, vitae egestas augue. Duis vel est augue.
     </Typography>
   </AccordionDetails>
 </Accordion>

 <Accordion expanded={expanded === 'panel12'} onChange={handleChange('panel12')}>
   <AccordionSummary
     expandIcon={<ExpandMoreIcon />}
     aria-controls="panel12bh-content"
     id="panel12bh-header"
   >
     
     <li>MS Word - Word Processing</li>
    
   </AccordionSummary>
   <AccordionDetails>
     <Typography>
       Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
       amet egestas eros, vitae egestas augue. Duis vel est augue.
     </Typography>
   </AccordionDetails>
 </Accordion>



 <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
   <AccordionSummary
     expandIcon={<ExpandMoreIcon />}
     aria-controls="panel4bh-content"
     id="panel4bh-header"
   >
    <li>MS Excel - Spreadsheet</li>
   </AccordionSummary>
   <AccordionDetails>
     <Typography>
       Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
       amet egestas eros, vitae egestas augue. Duis vel est augue.
     </Typography>
   </AccordionDetails>
 </Accordion>




 <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
   <AccordionSummary
     expandIcon={<ExpandMoreIcon />}
     aria-controls="panel5bh-content"
     id="panel5bh-header"
   >
     <li>PowerPoint - Presentations</li>
   </AccordionSummary>
   <AccordionDetails>
     <Typography>
       Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
       amet egestas eros, vitae egestas augue. Duis vel est augue.
     </Typography>
   </AccordionDetails>
 </Accordion>



 <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
   <AccordionSummary
     expandIcon={<ExpandMoreIcon />}
     aria-controls="panel6bh-content"
     id="panel6bh-header"
   >
    <li>Database Management Systems</li>
   </AccordionSummary>
   <AccordionDetails>
     <Typography>
       Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
       amet egestas eros, vitae egestas augue. Duis vel est augue.
     </Typography>
   </AccordionDetails>
 </Accordion>

   
 <Accordion expanded={expanded === 'panel7'} onChange={handleChange('panel7')}>
   <AccordionSummary
     expandIcon={<ExpandMoreIcon />}
     aria-controls="panel7bh-content"
     id="panel7bh-header"
   >
     <li>Cyber Security</li>
   </AccordionSummary>
   <AccordionDetails>
     <Typography>
       Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
       amet egestas eros, vitae egestas augue. Duis vel est augue.
     </Typography>
   </AccordionDetails>
 </Accordion>

 <Accordion expanded={expanded === 'panel8'} onChange={handleChange('panel8')}>
   <AccordionSummary
     expandIcon={<ExpandMoreIcon />}
     aria-controls="panel8bh-content"
     id="panel8bh-header"
   >
    <li>PC Maintanance, Security & trubleshooting</li>
   </AccordionSummary>
   <AccordionDetails>
     <Typography>
       Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
       amet egestas eros, vitae egestas augue. Duis vel est augue.
     </Typography>
   </AccordionDetails>
 </Accordion>

 <Accordion expanded={expanded === 'panel13'} onChange={handleChange('panel13')}>
   <AccordionSummary
     expandIcon={<ExpandMoreIcon />}
     aria-controls="panel13bh-content"
     id="panel13bh-header"
   >
    <li>Networking & Troubleshooting</li>
   </AccordionSummary>
   <AccordionDetails>
     <Typography>
       Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
       amet egestas eros, vitae egestas augue. Duis vel est augue.
     </Typography>
   </AccordionDetails>
 </Accordion>


 <Accordion expanded={expanded === 'panel9'} onChange={handleChange('panel9')}>
   <AccordionSummary
     expandIcon={<ExpandMoreIcon />}
     aria-controls="panel9bh-content"
     id="panel9bh-header"
   >
     <li>Latest Trends in IETC & e-Governace</li>
   </AccordionSummary>
   <AccordionDetails>
     <Typography>
       Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
       amet egestas eros, vitae egestas augue. Duis vel est augue.
     </Typography>
   </AccordionDetails>
 </Accordion>

 <Accordion expanded={expanded === 'panel10'} onChange={handleChange('panel10')}>
   <AccordionSummary
     expandIcon={<ExpandMoreIcon />}
     aria-controls="panel10bh-content"
     id="panel10bh-header"
   >
     <li>Application of Digital Financial Services</li>
   </AccordionSummary>
   <AccordionDetails>
     <Typography>
       Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
       amet egestas eros, vitae egestas augue. Duis vel est augue.
     </Typography>
   </AccordionDetails>
 </Accordion>

 <Accordion expanded={expanded === 'panel11'} onChange={handleChange('panel11')}>
   <AccordionSummary
     expandIcon={<ExpandMoreIcon />}
     aria-controls="panel11bh-content"
     id="panel11bh-header"
   >
    <li>Electronic Mail - A detailed view</li>
   </AccordionSummary>
   <AccordionDetails>
     <Typography>
       Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
       amet egestas eros, vitae egestas augue. Duis vel est augue.
     </Typography>
   </AccordionDetails>
 </Accordion>



 <Accordion expanded={expanded === 'panel14'} onChange={handleChange('panel14')}>
   <AccordionSummary
     expandIcon={<ExpandMoreIcon />}
     aria-controls="panel14bh-content"
     id="panel14bh-header"
   >
   <li>Introduction to Multimedia</li>
   </AccordionSummary>
   <AccordionDetails>
     <Typography>
       Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
       amet egestas eros, vitae egestas augue. Duis vel est augue.
     </Typography>
   </AccordionDetails>
 </Accordion>



 <Accordion expanded={expanded === 'panel15'} onChange={handleChange('panel15')}>
   <AccordionSummary
     expandIcon={<ExpandMoreIcon />}
     aria-controls="panel15bh-content"
     id="panel15bh-header"
   >
     <li>HTML Programming Basics</li>
   </AccordionSummary>
   <AccordionDetails>
     <Typography>
       Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
       amet egestas eros, vitae egestas augue. Duis vel est augue.
     </Typography>
   </AccordionDetails>
 </Accordion>



 <Accordion expanded={expanded === 'panel16'} onChange={handleChange('panel16')}>
   <AccordionSummary
     expandIcon={<ExpandMoreIcon />}
     aria-controls="panel16bh-content"
     id="panel16bh-header"
   >
     <li>Soft Skills</li>
   </AccordionSummary>
   <AccordionDetails>
     <Typography>
       Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
       amet egestas eros, vitae egestas augue. Duis vel est augue.
     </Typography>
   </AccordionDetails>
 </Accordion>


 <Accordion expanded={expanded === 'panel17'} onChange={handleChange('panel17')}>
   <AccordionSummary
     expandIcon={<ExpandMoreIcon />}
     aria-controls="panel17bh-content"
     id="panel17bh-header"
   >
     <li>Typing</li>
   </AccordionSummary>
   <AccordionDetails>
     <Typography>
       Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
       amet egestas eros, vitae egestas augue. Duis vel est augue.
     </Typography>
   </AccordionDetails>
 </Accordion>
 </div>


<EFooter/>
        
    </motion.div>
  )
}

export default DCA