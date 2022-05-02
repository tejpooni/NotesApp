import {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom";
import LoginPage from "./components/LoginPage";
import RegistrationPage from "./components/RegistrationPage";
import ToDoList from "./components/ToDoList";


const heading = {
  color: 'navy',
  textAlign: 'center',
  fontSize: '40px',
  fontFamily: 'Courier New '
}



function App (){

      return(
        <div>
          <Router>

          <div>
              <ul style = {heading}>
                <li>
                  <Link to="/loginPage" style ={heading} onClick ={<LoginPage/>}>Login</Link>
                </li>
                <br/>
                <li>
                  <Link to="/registrationPage" style ={heading} onClick={<RegistrationPage/>}>Registration</Link>
                </li>
              </ul>
        
              <hr />
              <Routes>
                  <Route exact path="/loginPage" element = {<LoginPage/>} />
                  <Route path="/registrationPage" element={<RegistrationPage/>} /> 
                  <Route path="/ToDoApp" element={<ToDoList/>}/>
              </Routes>       
          </div>

          </Router>
        </div>        
      )
};
export default App;

