import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import './navbar.scss';

class NavBar extends React.Component{
  state={
    // active:'/'
  }
  render(){
    return(
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Navbar.Brand href="/">Hack Onboarding</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="/" className={window.location.pathname === '/' ? 'active' : 'inactive'}>Home</Nav.Link>
            <Nav.Link href="/dimensions-tool" className={window.location.pathname === '/dimensions-tool' ? 'active' : 'inactive'}>Dimensions Tool</Nav.Link>
            <Nav.Link href="/inspirations-tool" className={window.location.pathname === '/inspirations-tool' ? 'active' : 'inactive'}>Inspirations Tool</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

export default NavBar;