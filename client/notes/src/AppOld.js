// import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import Axios from "axios";
// import Notes from './components/Notes'
import './assets/space.png';
import './assets/space2.png';
// import LoginForm from "./components/LoginForm";

 
//inline styling instead of css classes css attributes must be in camelCase 
/** JUST FOR FUTURE REFERENCE
 * 4 ways to insert css into js files 1) seperate css file eg) app.css 2) inline styling in js file 3) css modules eg) app.module.css 4) css in js libraries
 */

// var Background = "../assets/space.png";
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

const inputBarsLogin = {
  width: '40%',
  padding: '12px 15px',
  margin: '8px 0',
  boxSizing: 'border-box',
  float: 'initial',
  marginTop: '50px',
  marginLeft: '510px'
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



function App() {

    /**
     * 2 states: Registration and Login
     * Grab info from whatever we put into inputs and then validate it 
     */
    const [usernameReg, setUsernameReg] = useState('')
    const [passwordReg, setPasswordReg] = useState('')
    const[ usernameLogin, setUsernameLogin] = useState('')
    const[ passwordLogin, setPasswordLogin] = useState('')
    const[loginStatus, setLoginStatus ] = useState('') 
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

      // function when we click on the login button sends all our info to backend so we can compare if password username combo matches
      const login = () => {
       console.log("making the call client");
        Axios.post("http://localhost:3001/login", {
          username: usernameLogin, 
          password: passwordLogin
        }).then((response) => {
          if(response.data.errormessage){ //if an error exists ie) errmsg is sent then display it on webpage
            console.log('wrong user/pass')
            setLoginStatus(response.data.errormessage)
          }
          else{//if no error
            // console.log("Printing response==> "+response.data[0].username);
            console.log('sucessful login')
            setLoginStatus(response.data[0].username)
          }
          // console.log(response.data);
        });
      };

  return (
      
        <div styles={background} className = "LoginForm">
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

          <div styles={background} className = "Login">
              <h1 style = {heading}>Login</h1>
              <label style = {heading}>       </label>
              <input 
                    style = {inputBarsLogin}
                    type = "text" 
                    placeholder = "Username..."
                    onChange = {(e)=> {setUsernameLogin(e.target.value);}}
              />
              <br/>
              <input 
                    style = {inputBarsLogin}
                    type = "password" 
                    placeholder = "Password..."
                    onChange = {(e)=> {setPasswordLogin(e.target.value);}}
              />
              <br/>
              <button 
                    style = {regLogButton}
                    onClick = {login}>Login
              </button>
          </div>

          <h1>{loginStatus}</h1>

        </div >
  );
}
export default App;

