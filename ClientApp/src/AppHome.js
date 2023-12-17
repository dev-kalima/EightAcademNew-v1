import React from 'react'
//import App from './App'
import { Routes, Route } from "react-router-dom";

import Navbar1 from "./components/Navbar1";
import Home1 from './components/Pages/Home1';
import Courses from './components/Pages/Courses';
import Demo from './components/Pages/Demo';
import Contact from './components/Pages/Contact';
import Errorpage from './components/Pages/Error';
import ComputerDiploma from './components/Courseslist/ComputerDiploma';
import Accounting from './components/Courseslist/Accounting';
import GraphicDesigning from './components/Courseslist/GraphicDesigning';
import WebDesigning from './components/Courseslist/WebDesigning';
import Programming from './components/Courseslist/Programming';
import DigitalMarketing from './components/Courseslist/DigitalMarketing';
// import InteriorDesigning from './components/Courseslist/InteriorDesigning';
import SpokenEnglish from './components/Courseslist/SpokenEnglish';
import './components/Pages/Error';
import ThreeDsMaxVray from './components/Courseslist/3DsMaxVray';
import AutoCad2D from './components/Courseslist/AutoCad2D';
import BasicComputer from './components/Courseslist/BasicComupter';
import GoogleSketchup from './components/Courseslist/GoogleSketchup';
import VideoEditing from './components/Courseslist/VideoEditing';
import TallyWithGST from './components/Courseslist/TallyWithGST';
import AdvancedExcel from './components/Courseslist/AdvancedExcel';
import DCA from './components/Courseslist/DCA';
import ADCA from './components/Courseslist/ADCA';
//import Admin from './components/AdminPage/Admin';
const AppHome = () => {
  return (
    <div>
        
       
        {/* <Navbar1 />
        <Home1/> */}

{/* <Navbar1 />
        <Home1/> */}
<Routes>

  <Route index path="/" element={<Home1 />} />
  <Route index path="/Courses" element={<Courses />} />
  <Route exact path="/Demo" element={<Demo />} />
  <Route index path="/Contact" element={<Contact />} />
  <Route path='*' element={<Errorpage />} />
  <Route path="/ComputerDiploma" element={<ComputerDiploma />} />
  <Route path="/Accounting" element={<Accounting />} />
  <Route path="/GraphicDesigning" element={<GraphicDesigning />} />
  <Route path="/WebDesigning" element={<WebDesigning />} />
  <Route path="/Programming" element={<Programming />} />
  <Route path="/DigitalMarketing" element={<DigitalMarketing />} />
  <Route path="/ThreeDsMaxVray" element={<ThreeDsMaxVray />} />
  <Route path="/AutoCad2D" element={<AutoCad2D />} />
  <Route path="/BasicComputer" element={<BasicComputer />} />
  <Route path="/GoogleSketchup" element={<GoogleSketchup />} />
  <Route path="/VideoEditing" element={<VideoEditing />} />
  <Route path="/TallyWithGST" element={<TallyWithGST />} />
  <Route path="/AdvancedExcel" element={<AdvancedExcel />} />
  <Route path="/SpokenEnglish" element={<SpokenEnglish />} />
  <Route path="/DCA" element={<DCA />} />
  <Route path="/ADCA" element={<ADCA />} />



  {/* </Route> */}
</Routes>
    </div>
  )
}

export default AppHome