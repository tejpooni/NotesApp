import {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom";
// import { Redirect } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import Notes from "./components/Notes";
// import RestrictedPage from './components/RestrictedPage';
import RegistrationPage from "./components/RegistrationPage";

const heading = {
  color: 'navy',
  textAlign: 'center',
  fontSize: '40px',
  fontFamily: 'Courier New '
}

// const Notes = () =>{
//   return(
//     <div>
//       Welcome
//     </div>
//   )
// }


function App (){

  
    return(
        <Router>
        <div>
            <ul style = {heading}>
              <li>
                <Link to="/loginPage" style ={heading} onClick ={<LoginPage/>}>Login</Link>
              </li>
              <li>
                <Link to="/registrationPage" style ={heading} onClick={<RegistrationPage/>}>Registration</Link>
              </li>
              <li>
                <Link to="/notesApplication" style = {heading} onClick={<Notes/>}>Notes</Link>
              </li>
            </ul>
      
            <hr />
            <Routes>
                <Route exact path="/loginPage" element = {<LoginPage/>} />
                <Route path="/registrationPage" element={<RegistrationPage/>} /> 
                <Route path = "/notesPage" element = {<Notes/>}/>
   
                
            </Routes>
            
        </div>
        </Router>
    )
};
export default App;

