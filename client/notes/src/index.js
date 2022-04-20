import React from 'react';
import ReactDOM from 'react-dom';
import axios from "axios";
import App from './App';
// import Notes from './components/Notes';
 
axios.defaults.withCredentials = true;
 
ReactDOM.render(  <App/>   ,document.getElementById('root'));