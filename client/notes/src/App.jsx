import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
// import {Router,Routes,Route} from 'react-router-dom'
import LoginPage from "./components/LoginPage";
import RegistrationPage from "./components/RegistrationPage";
import Navigation from "./Navigation";
import TaskList from "./components/TaskSys/taskList";
// import {Navbar,Nav, Container} from 'react-bootstrap'


// const heading = {
//   color: 'navy',
//   textAlign: 'center',
//   fontSize: '40px',
//   fontFamily: 'Courier New '
// }



function App (){

  return(
    <div>
      <Navigation/>
      
      <Router>
      
      <div>
          {/* <ul style = {heading}>
            <li>
              <Link to="/loginPage" style ={heading} onClick ={<LoginPage/>}>Login</Link>
            </li>
            <br/>
            <li>
              <Link to="/registrationPage" style ={heading} onClick={<RegistrationPage/>}>Registration</Link>
            </li>
          </ul> */}
    
          <hr />
          <Routes>
              <Route exact path="/loginPage" element = {<LoginPage/>} />
              <Route path="/registrationPage" element={<RegistrationPage/>} /> 
              <Route path = "/taskApp" element={<TaskList/>}/>
              <Route path = "/" element = {<RegistrationPage/>}/>
          </Routes>       
      </div>

      </Router>
    </div>        
  )
};
export default App;



