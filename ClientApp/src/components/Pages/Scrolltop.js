import React, { useEffect } from 'react'
import { useLocation } from 'react';

const Scrolltop = () => {

    const {pathname}= useLocation();
    useEffect(()=>{
       window.scrollTo({top:0, behavior:"auto"});
     },[pathname])

  return (
    <>
    </>
  )
}

export default Scrolltop