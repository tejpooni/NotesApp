// import { Navbar} from 'react-bootstrap/Navbar';
// import {Nav} from 'react-bootstrap/Nav';
// import {Container} from 'react-bootstrap/Container';
import { Navbar,Nav,Container } from "react-bootstrap";
// import { Button } from "react-bootstrap";
import 'bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';

// import {nav, }from 'bootstrap';
// import {Menu} from 'semantic-ui-react';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import '../node_modules/bootstrap/dist/css';


const Navigation = () =>{

    return(
        
    <div>

        <Navbar collapseOnSelect fixed = {'top'} expand = {'lg'} bg ={'dark'} variant={'dark'}>
        <Container>
        <Navbar.Toggle aria-controls={'responsive-navbar-nav'}/>
        <Navbar.Collapse id ={'responsive-navbar-nav'}>
          <Nav>
              <Nav.Link href='/taskApp'>Task Manager     </Nav.Link>
              <br/>
              <Nav.Link href='/loginPage'>Login     </Nav.Link>
              <br/>
              <Nav.Link href='/registrationPage'>Registration</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        </Container>
        </Navbar>

    </div>
      
      
    )
}
export default Navigation;


