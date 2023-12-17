import React from 'react'
import './MSection.css';
// import EightHead from '../image/EightHead.jpg';
import Studentimg from '../image/Student.jpg'

const MSection = () => {
  return (
    <>
    <nav className='main_section'>

      <div className='mcse'><img src={Studentimg} alt="" /></div>
      <div className='mcse2'>
      {/* <div className="stikybox"><h3>EIGHT ACADEMY COMPUTER EDUCATION</h3></div> */}
        <h2 className='levelHeading'>  Eight Academy Computer Education</h2>
      <span className='ptext'> We are one of the leading computer institutes in Chhattarpur New Delhi established in 2014 and approved by MSME, Our mission is to work effectively towards enhancing skills and knowledge utilizing the existing educational and training courses to provide the needs of the job market in New Delhi. Eight Academy Computer Education & Training Institute aims to serve the private and government sectors in the fields of training and education through highly qualified trainers is our vision. Trust, commitment, smart technology, accountability, and highly qualified staff are our core values.</span>
      </div>
    </nav>
 
</>
  );
}

export default MSection
