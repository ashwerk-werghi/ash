import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import {Nav,NavDropdown} from 'react-bootstrap';
import "./Navbar.css"


export default function NavBar(){
    return(

        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand href="/" className="welcome"> ﹡﹡﹡ Welcome to our world ﹡﹡﹡</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      
      <Nav.Link >ARE YOU READY? </Nav.Link>
      <Nav.Link > then take a look here first  ⇟ ⇟ ⇟ ⇟ </Nav.Link>
      
    </Nav>
    <NavDropdown title="click me" id="collasible-nav-dropdown">
        <NavDropdown.Item href="Firstmonth">⓵st month</NavDropdown.Item>
        <NavDropdown.Item href="Secmonth">  ⓶nd month</NavDropdown.Item>
        <NavDropdown.Item href="Thmonth">   ⓷rd  month</NavDropdown.Item>
        <NavDropdown.Item href="Fomonth">   ⓸th month </NavDropdown.Item>
 
        <NavDropdown.Divider />
      </NavDropdown>   
  </Navbar.Collapse>
</Navbar>



    );
}