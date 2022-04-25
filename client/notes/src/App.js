import {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom";
// import { useState} from 'react';
import LoginPage from "./components/LoginPage";
import Notes from "./components/Notes";
// import RestrictedPage from './components/RestrictedPage';
import RegistrationPage from "./components/RegistrationPage";
// import Axios from 'axios';
import { useState } from "react";
import axios from "axios";


const heading = {
  color: 'navy',
  textAlign: 'center',
  fontSize: '40px',
  fontFamily: 'Courier New '
}



function App (){

    const [loginStatus,setLoginStatus] = useState('') 
    const renderRoutes =()=>{
      axios.get('http://localhost:3001/login').then(res =>{
        const userinfo = res.data;
        if(userinfo != null){
            setLoginStatus('logged in');
        }
        else{
          setLoginStatus('');
        }
      });
    }
   
      return(
        <div>
          <Router>
          <div>
    
              <ul style = {heading}>
                <li>
                  <Link to="/loginPage" style ={heading} onClick ={<LoginPage/>}>Login</Link>
                </li>
                <li>
                  <Link to="/registrationPage" style ={heading} onClick={<RegistrationPage/>}>Registration</Link>
                </li>
              </ul>
        
              <hr />
              <Routes>
                  <Route exact path="/loginPage" element = {<LoginPage/>} />
                  <Route path="/registrationPage" element={<RegistrationPage/>} /> 
                  <Route path="/notesApp" element={<Notes/>}/>
              </Routes> 
              
          </div>
          </Router>
  
        
          
  
        </div>
  
         
      )

};
export default App;

