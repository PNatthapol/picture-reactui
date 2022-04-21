import {React,useState} from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import  Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
//import "../index.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from "../pages/Home"
import { Sell } from "../pages/Sell"
import { Buy } from "../pages/Buy"
import { Dashboard } from "../pages/Dashboard"
import {
  connectWallet
} from "../util/interact.js"
//import Button from "react-bootstrap/Button";


function NavBar () {
  const [walletAddress, setWallet] = useState("");
  
  const connectWalletPressed = async () => {
  const walletResponse = await connectWallet();
  
  setWallet(walletResponse.address);
};
 return (
 <BrowserRouter>
    <Navbar bg="dark" variant="dark" sticky="top" expand="md">
      <Container>
      <Navbar.Brand as={Link} to="/">
          Gallery
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="container-fluid">
          <Nav.Item>
            <Nav.Link as={Link} to="/buy">BUY</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to="/sell">SELL</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to="/dashboard">DASHBOARD</Nav.Link>
            </Nav.Item>
            
            <Nav.Item className="ms-auto">
            <Button variant="primary"onClick={connectWalletPressed} >{walletAddress.length > 0 ? (
          "Connected: " +
          String(walletAddress).substring(0, 6) +
          "..." +
          String(walletAddress).substring(38)
        ) : (
          <span>Connect Wallet</span>
        )}</Button>
            </Nav.Item>
          </Nav>
         
        </Navbar.Collapse>
      </Container>
    </Navbar>
   
  
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/sell" element={<Sell />} />
    <Route path="/buy" element={<Buy />} />
    <Route path="/dashboard" element={<Dashboard />} />
    
  </Routes>
  </BrowserRouter>
  );
}

export default NavBar;