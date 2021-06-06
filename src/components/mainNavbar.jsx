import React,{useRef, useEffect, useState, Fragment} from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useParams
  } from "react-router-dom";
  import { Navbar,Nav,NavDropdown,Form,FormControl,Button } from 'react-bootstrap'
  import Home from './home';
  import AboutUs from './aboutUs';
  import ContactUs from './contactUs';
  import Login from './login';
  import Signup from './signup';
  import Welcome from './welcome';
  
  

class MainNavbar extends React.Component{
    //const [btn, setBtn] = useState(false);

    render(){
        return(
            <div>
                <div className="row">
                    <div className="col-md-12">
                        <Router>
                            <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
                                <Navbar.Brand href="/">TMS</Navbar.Brand>
                                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                <Navbar.Collapse id="basic-navbar-nav">
                                    <Nav className="mr-auto">
                                    <Nav.Link href="/">Accueil</Nav.Link>
                                    <Nav.Link href="/about-us">A propos de TMS</Nav.Link>
                                    <Nav.Link href="/contact-us">Contact</Nav.Link>
                                    <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                        <NavDropdown.Item href="/welcome">Action</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                                    </NavDropdown>
                                    </Nav>
                                    <Form inline>
                                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                                    <Button variant="outline-success" margin-right="20px">Search</Button>
                                    
                                    </Form>
                                    <Nav.Link margin-right="20px" href="/login">Login</Nav.Link>
                                    <Nav.Link href="/signup">Signup</Nav.Link>

                                </Navbar.Collapse> 
                            </Navbar>
                            <br />
                            <Switch>
                                <Route exact path="/">
                                    <Home />
                                </Route>
                                <Route path="/about-us">
                                    <AboutUs />
                                </Route>
                                <Route path="/welcome">
                                    <Welcome />
                                </Route>
                                <Route path="/contact-us">
                                    <ContactUs />
                                    </Route>
                                <Route path="/login">
                                    <Login history={this.props.history}/>
                                </Route>
                                <Route path="/signup">
                                    <Signup />
                                </Route>
                            </Switch>
                        </Router>
                    </div>
                </div>
            </div>
        )  
    }
}

export default MainNavbar;