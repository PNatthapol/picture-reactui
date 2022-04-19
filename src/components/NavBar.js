import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import  Nav from "react-bootstrap/Nav";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import "./NavBar.css";
//import Button from "react-bootstrap/Button";
let bannerData = {
  
  butname: "Connect Wallet"
}

function NavBar () {
   
 return (
    <Navbar bg="dark" variant="dark" sticky="top" expand="md">
      <Container>
      <img alt=""src="/logogallery.png" 
                    width="50"height="50" className="d-inline-block align-top"
                 /><Navbar.Brand href="/">
          Gallery
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav>
            <Nav.Link as={Link} to="/buy">BUY</Nav.Link>
            <Nav.Link as={Link} to="/sell">SELL</Nav.Link>
            <Nav.Link as={Link} to="/dashboard">DASHBOARD</Nav.Link>
            <button className ="btn btn-gradient btn-glow" >{ bannerData.butname }</button>
             
          </Nav>
         <div className= "rightbut">
            
            </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
