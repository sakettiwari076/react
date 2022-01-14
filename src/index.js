
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import { BrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import Appp from './Appp';
import Home from './Home';
import About from './About';
import Contact from './Contact';




ReactDOM.render(
  <>
  <BrowserRouter>
 <Home/>
  </BrowserRouter>
  </>,
  

  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
