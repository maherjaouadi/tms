import React, {useRef, useEffect, useState, useContext, Fragment} from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useParams,
    useHistory,
    Link
  } from "react-router-dom";

import { Navbar,Nav,NavDropdown,Form,FormControl,Button } from 'react-bootstrap'
import Signup from './signup';
import Login from './login';
import {FirebaseContext} from './Firebase';
import Home from './home';
import Welcome from './welcome';
import ContactUs from './contactUs';
import AboutUs from './aboutUs';
import Myhome from './myhome';

function Test () {
 
     
    const firebase = useContext(FirebaseContext);

    const [userSession, setUserSession] = useState(null);
    const [userData, setUserData] = useState({});
    
    const history = useHistory()

   
    useEffect ( ()=> {
        let listener = firebase.auth.onAuthStateChanged(user =>{
            user ? setUserSession(user) : history.push('/home');
        })

        if (!!userSession) {
            console.log(userSession.uid)
            console.log(userSession.email)
            firebase.user(userSession.uid)
            .get()
            .then(doc => {
                if (doc && doc.exists) {
                    const myData = doc.data();
                    console.log (myData)
                    setUserData(myData);    
                }    
                })
            .catch( error => {
                console.log(error);
            })
            
        }
        return () => {
            listener()
        }
    }, [userSession, firebase])
    
    

    const logoutUser = () => {
        firebase.signoutUser();        
    }
    
    const PrivateMenu =(
    
                    <NavDropdown title="Accès privé" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="/myhome">Mon accueil TMS</NavDropdown.Item>,
                        <NavDropdown.Item href="#action/3.2">Action2</NavDropdown.Item>
                    </NavDropdown>
                    )
        
    
    

        
    return (
        <div>
{/* <div className="container-fluid"> */}
            <div className="row">
                <div className="col-md-12">
                    <Router>                
                        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                        <Navbar.Brand href="/">TMS</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="mr-auto">
                            <Nav.Link href="/">Accueil</Nav.Link>
                            <Nav.Link href="/about-us">A propos de nous</Nav.Link>
                            <Nav.Link href="/contact-us">Nous contacter</Nav.Link>
                            
                            {/* <NavDropdown title="Accès privé" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown> */}
                            {userSession !== null ?(
                                <Fragment>
                                    {PrivateMenu}
                                </Fragment>):(
                                <Fragment></Fragment>
                                ) 
                            }
                            
                            </Nav>
                            {userSession === null ?(
                                <Fragment>
                                <Nav>
                            
                                <Nav.Link href="/login">Connexion</Nav.Link>
                                <Nav.Link href="/signup">Inscription</Nav.Link>
                            </Nav>
                            </Fragment>
                            ):
                            (
                                <Fragment>
                                    <Nav>
                                <Nav.Link onClick={logoutUser} href="/">Déconnexion</Nav.Link>
                                </Nav>
                                </Fragment>
                            )
                        }
                            
                        </Navbar.Collapse>
                        </Navbar>   
                        <br />
                            <Switch>
                                <Route exact path="/">
                                    <Home />
                                </Route>
                                <Route path="/home">
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
                                    <Login />
                                    {/* <Login history={this.props.history}/> */}
                                </Route>
                                <Route path="/signup">
                                    <Signup />
                                </Route>
                                <Route path="/myhome">
                                    <Myhome userData={userData}/>
                                </Route>
                            </Switch>       
                    </Router>
                </div>    
            </div>
        </div>
    )
}


export default Test;
