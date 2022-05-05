import React from 'react';
import { useState } from "react";
import Axios from "axios";
import TaskList from './TaskSys/taskList';

//styles

const heading = {
  color: 'navy',
  textAlign: 'center',
  fontSize: '40px',
  fontFamily: 'Courier New '
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

const LoginPage = (props) =>{


 
  const[ usernameLogin, setUsernameLogin] = useState('')
  const[ passwordLogin, setPasswordLogin] = useState('')
  const[loginStatus, setLoginStatus ] = useState('') 
  // const [isLoggedIn, setIsLoggedIn] = useState(true);
  
  

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
         else{//if no error we will render the next component 
          console.log('sucessful login')
          setLoginStatus(response.data[0].username)
          // render(<Notes/>);
          // return <Navigate to="/notesApp" />;
        }
       });
  };

  
  if(loginStatus ==="Incorrect username/password combination" || loginStatus === ''){
    return(
      <div>
       <div className = "Login">
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
    )
  }

  else{
    return(
      <div> 
        <TaskList/>
      </div>
    )
  }

};
export default LoginPage;