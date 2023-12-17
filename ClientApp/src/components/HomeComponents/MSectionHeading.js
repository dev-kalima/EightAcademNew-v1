import React from 'react'
import './MSectionHeading.css';
import Mainslider from './Mainslider';

const MSectionHeading = () => {
  return (
    <>   
     <div className="mainboxofhero">
     <div className="mainchildbox1">
     <h2> 8 Years Of Excellence, Thousands Of Happy Students!</h2>
    <article> We are one of the leading computer institutes in Chhattarpur New Delhi established in 2014 and approved by MSME</article>
      </div>
      <div className="mainchildbox">
        <Mainslider/>
      </div>
      

      <div className="loginform">
        <form action="" className='linput'>
        <input type="text" name="" id="" placeholder='Username' /><br />
        <input type="password" name="" id="" placeholder='Password'  />
        <button className='btn'>Log-in</button>
        </form>
       
      </div>
      
      </div>
      
     <div className='mhead'>
      
    
        <h2>Our Best Professional Certifications To Get a High Paying Job</h2>
    </div>
    </>
)
}

export default MSectionHeading