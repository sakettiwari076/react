 import React from 'react';
 import ReactDOM from 'react-dom';
//  import { Component } from 'react/cjs/react.production.min';
 import Home from './Home';
 import Contact from './Contact';
 import About from './About';
// import Service from ',/service';
  import { Navigate, useNavigate } from "react-router-dom" ;
const Appp = () => {
   return (
       <>
       <useNavigate>
          <Navigate exact path="/home" component ={Home} />
         <Navigate exact path="/about" component ={About} />
        {/* <Navigate path="/service" component ={Service} /> */}
          <Navigate exact path="/contact" component ={Contact} />
       </useNavigate>
       </>
    )}
// export default Appp ;}