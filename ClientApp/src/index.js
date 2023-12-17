import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
// import Scrollbar from 'smooth-scrollbar'

// var options ={
//   'damping':0.1,
  
// }

// Scrollbar.init(document.querySelector('#my-scrollbar'),options)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
 <BrowserRouter>
  
  <App/>
    
  </BrowserRouter>
   
);


reportWebVitals();
