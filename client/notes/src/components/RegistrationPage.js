import React from 'react';
import { useState } from "react";
import Axios from "axios";

//styles
const background = {
    // backgroundImage: "url(" + { Background } + ")",
    // width: "600px",
    // height: "600px",
    // backgroundRepeat: "no-repeat"
    backgroundColor: '#003865'
}

const heading = {
  color: 'navy',
  textAlign: 'center',
  fontSize: '40px',
  fontFamily: 'Courier New '
}

const userPassText = {
  color: 'navy',
  textAlign: 'center',
  fontSize: '18px',
  fontFamily: 'Courier New',
  marginLeft: '100px'
}

const inputBarsRegistration = {
  width: '40%',
  padding: '12px 15px',
  margin: '8px 0',
  boxSizing: 'border-box',
  float: 'initial',
  marginTop: '50px',
  marginLeft: '315px'
}

const regLogButton = {
  transitionDuration:' 0.4s',
  transform: 'translateY(4px)',
  fontFamily: 'Courier New',
  marginLeft: '795px',
  width: '10%',
  padding: '8px 18px',
  fontSize: '16px'

}



const RegistrationPage = () =>{

    const [usernameReg, setUsernameReg] = useState('')
    const [passwordReg, setPasswordReg] = useState('')
    const[regStatus, setRegStatus] = useState('')
    
    // function when we click on the register button sends all our info to backend so it inserts to our db
    const register = () => {
        console.log("making the call client");
        Axios.post("http://localhost:3001/register", {
          username: usernameReg, 
          password: passwordReg
        }).then((response) => {
        if(response.data.message){
            console.log("username taken")
            setRegStatus(response.data.message)
        }
        else{
            console.log("succesfully created account")
            setRegStatus("Account Created")
        }
            console.log(response);
        });
    };

    return(
        <div>
            <div styles={background} className = "Registration">
            <h1 style = {heading}>Registration</h1>
            <label style = {userPassText}>Username</label>
            <input 
                style = {inputBarsRegistration} 
                type = "text" 
                onChange = {(e)=> {setUsernameReg(e.target.value);}}
            />
            <br/>
            <label style = {userPassText}>Password</label>
            <input
                style = {inputBarsRegistration} 
                type = "password"
                onChange = {(e) => {setPasswordReg(e.target.value);}}
            />
            <br/>
            <button 
                style = {regLogButton}
                onClick = {register}>Register
            </button>
            <br/>
            <br/>
            </div>
            <h1>{regStatus}</h1>
        </div>
    )
}
export default RegistrationPage;