import React from 'react'
import './Services.css';
import fcourseadvice from './HomeImage/Artboard 1.png';
import grouptraning from './HomeImage/group 1.png'
import certification from './HomeImage/Asset 3.png';
import labparty from './HomeImage/Artboard 2.png';

const Services = () => {
  return (
    <>
    <div className='Servicesmain'>
        
        
        <h2>Services</h2>
        </div>
<div className="childservicemain">
    <div className="imginfo"><div className="serviceimg"><img src={fcourseadvice} alt="" /></div><h3>Free Course Advice</h3>A free 25-30 minutes course advice to help the student choose the ideal certification for their career and skill development.</div>
    <div className="imginfo"><div className="serviceimg"><img src={grouptraning} alt="" /></div><h3>Group Training</h3>With small groups of students, our instructors can work closely with each student, Flexible schedules (weekdays, weekend, evenings) to suit you.</div>
    <div className="imginfo"><div className="serviceimg"><img src={labparty} alt="" /></div><h3>Lab Practice & System Use</h3>Our students can use our excellent modern lab facilities 3, 6, 12 months for practical experience during.</div>
    <div className="imginfo"><div className="serviceimg"><img src={certification} alt="" /></div><h3>Certification</h3>When the student successfully completes a course. we provide a valid completion/Diploma certificate by MSME.</div>
</div>

        </>
  );
}

export default Services