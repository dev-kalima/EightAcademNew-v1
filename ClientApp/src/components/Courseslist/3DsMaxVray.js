import React from 'react'
import './3DsMaxVray.css';
import { motion } from 'framer-motion';

import Accordion from '@mui/material/Accordion';
// import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
// import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import EFooter from '../HomeComponents/EFooter';

const ThreeDsMaxVray = () => {

  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <motion.div className='ThreeDsMaxVray'
    initial={{width:0}}
    animate={{width:"100%"}}
    exit={{x: window.innerWidth, transition: {duration:0.3}}}
    >
        <div className='Threemain'>
        <div className="Scontact"><div className="stikybox"><h3>3DsMaxVray</h3></div></div>
        

        </div>
        

        <div className="Accordionmainbox">
 
 <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
   <AccordionSummary
     expandIcon={<ExpandMoreIcon />}
     aria-controls="panel1bh-content"
     id="panel1bh-header"
     
   >
    
  <li> Getting to Know 3ds Max</li>
     
     {/* <Typography sx={{ color: 'text.secondary' }}>I am an accordion</Typography> */}
   </AccordionSummary>
   <div className='accdetails'>
      <li>Touring the Interface</li> 
      <li>The Viewports</li>
      <li>Getting to 
 Know the Command Panel</li>
      <li>Working with 
 Objects</li>
      <li>Transforming Objects</li>
      <li>Copying an 
 Object</li>
      <li>Understanding the Perspective Viewing 
 Tools </li>
      <li>Using Multiple Viewports.</li>
    
      </div>
 </Accordion>

<Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
   <AccordionSummary
     expandIcon={<ExpandMoreIcon />}
     aria-controls="panel2bh-content"
     id="panel2bh-header"
     
   >
     {/* <Typography inline variant="body1" align="left">Choose New Support:</Typography> */}
     <li>Introducing 3ds Max Objects</li>
     {/* <Typography sx={{ color: 'text.secondary' }}>
       You are currently not an owner
     </Typography> */}
   </AccordionSummary>
   <div className='accdetails'>
      <li>Understanding Standard Primitives</li> 
      <li>Adjusting
 Objects' Parameters</li>
      <li>Accessing Parameters</li>
      <li>Modeling Standard Primitives with Modifiers</li>
      <li>Using the Modifier Stack Tools</li>
      <li>Making Clones
 That Share Properties</li>
      <li>Using Various Modifiers</li>
      <li>Understanding Extended Primitives</li>
    <li>Working
 with Groups.</li>
      </div>
 </Accordion>


 <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
   <AccordionSummary
     expandIcon={<ExpandMoreIcon />}
     aria-controls="panel3bh-content"
     id="panel3bh-header"
   >
     
     <li>Creating Shapes with Splines</li>
   
     
   </AccordionSummary>
   <div className='accdetails'>
      <li>Drawing using Splines</li> 
      <li>Lathing a Spline</li>
      <li>Modifying a Shape Using Sub-object Levels</li>
      <li>Flipping Surface Normals</li>
      <li>Creating Thickness 
 with a Spline</li>
      <li>Combining and Extruding Splines</li>
      <li>Introducing Other Spline Types</li>
      <li>Editing Splines.</li>
      
    
      </div>
 </Accordion>

 <Accordion expanded={expanded === 'panel12'} onChange={handleChange('panel12')}>
   <AccordionSummary
     expandIcon={<ExpandMoreIcon />}
     aria-controls="panel12bh-content"
     id="panel12bh-header"
   >
    
     <li>Editing Meshes & Creating Complex Objects</li>
  
     
   </AccordionSummary>
   <div className='accdetails'>
      <li>Polygon Modeling Techniques</li> 
      <li>Using Graphite 
 Modeling Tools</li>
      <li>Creating buildings using 
 modifiers</li>
      <li>Working with External Design Data
 Importing AutoCAD Plans into 3ds Max</li>
      <li>Extruding the Walls</li>
      
      
    
      </div>
 </Accordion>



 <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
   <AccordionSummary
     expandIcon={<ExpandMoreIcon />}
     aria-controls="panel4bh-content"
     id="panel4bh-header"
   >
     <li>Creating AEC Objects</li>
   </AccordionSummary>
   <div className='accdetails'>
      <li>Creating a Parametric Wall</li> 
      <li>Adjusting the Wall’s 
 Parameters</li>
      <li>Adding Doors and Windows to 
 Walls</li>
      <li>Creating a Parametric Window</li>
      <li>Creating 
 Stairs</li>
      <li>Creating Foliage.</li>
      
      
    
      </div>
 </Accordion>




 <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
   <AccordionSummary
     expandIcon={<ExpandMoreIcon />}
     aria-controls="panel5bh-content"
     id="panel5bh-header"
   >
     <li>Organizing and Editing Objects</li>
   </AccordionSummary>
   <div className='accdetails'>
      <li>Naming Objects</li> 
      <li>Organizing Objects by Layers</li>
      <li>Setting Up Layers </li>
      <li>Assigning Objects to Layers </li>
      <li>Assigning Color to Layers</li>
      <li>Lofting an Object</li>
      <li>Lofting a Shape Along a Path</li>
      <li>Using Different
 Shapes Along the Loft Path</li>
 <li>Extruding with the 
 Sweep Modifier</li>
 <li>Aligning Objects.</li>
      
    
      </div>
 </Accordion>



 <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
   <AccordionSummary
     expandIcon={<ExpandMoreIcon />}
     aria-controls="panel6bh-content"
     id="panel6bh-header"
   >
    <li>Light and Shadow </li>
   </AccordionSummary>
   <div className='accdetails'>
      <li>Understanding the Types of Lights</li> 
      <li>Adding a 
 Spotlight to Simulate the Sun</li>
      <li>Rendering a View</li>
      <li>Adding Shadow Effects</li>
      <li>Softening Shadow 
 Edges.</li>
    
      
    
      </div>
 </Accordion>



  
 <Accordion expanded={expanded === 'panel7'} onChange={handleChange('panel7')}>
   <AccordionSummary
     expandIcon={<ExpandMoreIcon />}
     aria-controls="panel7bh-content"
     id="panel7bh-header"
   >
    <li>Shading and Texturing</li>
   </AccordionSummary>
   <div className='accdetails'>
      <li>Understanding Bitmap Texture Maps</li> 
      <li>Diffuse
 Color Maps</li>
      <li>Understanding Surface Properties</li>
      <li>Adding Materials to Objects </li>
      <li>Understanding
 Material Libraries</li>
      <li>Editing Materials</li>
      <li>Using 
 Bump Maps</li>
 <li>Understanding Mapping Coordi 
 nates </li>
 <li>Adjusting the UVW Mapping Gizmo</li>
 <li>Assigning Materials to Parts of an Object</li>
 <li>Creating a Multi/Sub-Object Material</li>

      
    
      </div>
 </Accordion>

 <Accordion expanded={expanded === 'panel8'} onChange={handleChange('panel8')}>
   <AccordionSummary
     expandIcon={<ExpandMoreIcon />}
     aria-controls="panel8bh-content"
     id="panel8bh-header"
   >
     <li>Using the 3ds Max Camera</li>
   </AccordionSummary>
   <div className='accdetails'>
      <li>Understanding the 3ds Max Camera</li> 
      <li>Adding a 
 Camera</li>
      <li>Editing the Camera Location with the 
 Viewport Tools</li>
      <li>Setting Up an Interior View</li>
      <li>Creating an Environment</li>
      <li>Working with 
 Walkthrough-Assistant.</li>
    
      
    
      </div>
 </Accordion>

 <Accordion expanded={expanded === 'panel13'} onChange={handleChange('panel13')}>
   <AccordionSummary
     expandIcon={<ExpandMoreIcon />}
     aria-controls="panel13bh-content"
     id="panel13bh-header"
   >
     <li>Creating Animations</li>
   </AccordionSummary>
   <div className='accdetails'>
      <li>Using Animation controls</li> 
      <li>Using Keyframe 
 animation </li>
      <li>Bouncing a Ball </li>
      <li>Adding Camera 
 Motion</li>
      <li>Adjusting the Camera Path</li>
      <li>Creating 
 Preview Animation</li>
      <li>Compressing & Expanding 
 Time </li>
 <li>Rendering the Animation.</li>
      
    
      </div>
 </Accordion>


 <Accordion expanded={expanded === 'panel9'} onChange={handleChange('panel9')}>
   <AccordionSummary
     expandIcon={<ExpandMoreIcon />}
     aria-controls="panel9bh-content"
     id="panel9bh-header"
   >
     <li>Mental Ray Concepts</li>
   </AccordionSummary>
   <div className='accdetails'>
      <li>Understanding Mental Ray</li> 
      <li>Understanding 
 Global Illumination</li>
      <li>Understanding Final Gather</li>
      <li>Assigning the Mental Ray Renderer</li>
      <li>Using the 
 Rendered Frame Window Controls.</li>
     
      
    
      </div>
 </Accordion>

 <Accordion expanded={expanded === 'panel10'} onChange={handleChange('panel10')}>
   <AccordionSummary
     expandIcon={<ExpandMoreIcon />}
     aria-controls="panel10bh-content"
     id="panel10bh-header"
   >
    <li>Gamma Correction</li>
     {/* <Typography sx={{ flexShrink: 0 }}></Typography> */}
   </AccordionSummary>
   <div className='accdetails'>
      <li>Understanding Gamma and Linear Workflow</li> 
      <li>Applying gamma correction.</li>
   
      </div>
 </Accordion>

 <Accordion expanded={expanded === 'panel11'} onChange={handleChange('panel11')}>
   <AccordionSummary
     expandIcon={<ExpandMoreIcon />}
     aria-controls="panel11bh-content"
     id="panel11bh-header"
   >
     <li>Materials</li>
   </AccordionSummary>
   <div className='accdetails'>
      <li>Understanding Autodesk materials</li> 
      <li>Understanding Arch & Design materials</li>
      <li>Creating various materials.</li>
      
      </div>
 </Accordion>



 <Accordion expanded={expanded === 'panel14'} onChange={handleChange('panel14')}>
   <AccordionSummary
     expandIcon={<ExpandMoreIcon />}
     aria-controls="panel14bh-content"
     id="panel14bh-header"
   >
     <li sx={{ flexShrink: 0 }}>Rendering</li>
   </AccordionSummary>
   <div className='accdetails'>
      <li>Improving Rendering Quality </li> 
      <li>Rendering an 
 Exterior Scene</li>
      <li>Rendering an Interior Scene.</li>
   
    
      </div>
 </Accordion>



 <Accordion expanded={expanded === 'panel15'} onChange={handleChange('panel15')}>
   <AccordionSummary
     expandIcon={<ExpandMoreIcon />}
     aria-controls="panel15bh-content"
     id="panel15bh-header"
   >
    <li>VRay Introduction</li>
   </AccordionSummary>
   <div className='accdetails'>
      <li>What is VRay and how to setup VRay</li> 
      <li>VRay Image Saving Options.</li>
      
      </div>
 </Accordion>



 <Accordion expanded={expanded === 'panel18'} onChange={handleChange('panel18')}>
   <AccordionSummary
     expandIcon={<ExpandMoreIcon />}
     aria-controls="panel18bh-content"
     id="panel18bh-header"
   >
     <li>Global Illumination in VRay</li>
   </AccordionSummary>
   <div className='accdetails'>
      <li>Irradiance Map</li> 
      <li>Light Cache </li>
      <li>Quasi Monte 
 Carlo/ Brute Force</li>
      <li>Environmental Lighting.</li>
      
      
    
      </div>
 </Accordion>



 <Accordion expanded={expanded === 'panel19'} onChange={handleChange('panel19')}>
   <AccordionSummary
     expandIcon={<ExpandMoreIcon />}
     aria-controls="panel19bh-content"
     id="panel19bh-header"
   >
     <li>Image Sampling</li>
   </AccordionSummary>
   <div className='accdetails'>
      <li>Fixed</li> 
      <li>Adaptive DMC</li>
      <li>Adaptive Subdivisions.</li>
     
    
      </div>
 </Accordion>

 <Accordion expanded={expanded === 'panel20'} onChange={handleChange('panel20')}>
   <AccordionSummary
     expandIcon={<ExpandMoreIcon />}
     aria-controls="panel20bh-content"
     id="panel20bh-header"
   >
     <li>VRay Lights</li>
   </AccordionSummary>
   <div className='accdetails'>
      <li>VRayLight</li> 
      <li>VRayAmbientLight</li>
      <li>VRayIES</li>
      <li>VRay Sun.</li>
      
    
      </div>
 </Accordion>


 <Accordion expanded={expanded === 'panel16'} onChange={handleChange('panel16')}>
   <AccordionSummary
     expandIcon={<ExpandMoreIcon />}
     aria-controls="panel16bh-content"
     id="panel16bh-header"
   >
     <li>VRay Camera</li>
   </AccordionSummary>
   <div className='accdetails'>
      <li>VRayDomeCame</li> 
      <li>VRayPhysicaCam</li>
      <li>Shutter 
 Speed.</li>
     
      </div>
 </Accordion>


 <Accordion expanded={expanded === 'panel17'} onChange={handleChange('panel17')}>
   <AccordionSummary
     expandIcon={<ExpandMoreIcon />}
     aria-controls="panel17bh-content"
     id="panel17bh-header"
   >
     <li>VRay Materials</li>
   </AccordionSummary>
   <div className='accdetails'>
      <li>VRay2SidedMtl</li> 
      <li>VRayMtl</li>
      <li>VRayFastSSS2</li>
      <li>VRayMtlWrapper.</li>
    
    
      </div>
 </Accordion>



 <Accordion expanded={expanded === 'panel21'} onChange={handleChange('panel21')}>
   <AccordionSummary
     expandIcon={<ExpandMoreIcon />}
     aria-controls="panel21bh-content"
     id="panel21bh-header"
   >
     <li>Rendering Scenes</li>
   </AccordionSummary>
   <div className='accdetails'>
      <li>Rendering an interior scene using V-Ray</li> 
      <li>Rendering an exterior scene using V-Ray.</li>
     
    
    
      </div>
 </Accordion>
</div>

<EFooter/>
    </motion.div>
  )
}

export default ThreeDsMaxVray