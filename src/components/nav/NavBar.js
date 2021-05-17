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
            <Nav.Link href="/dimension-tool" className={window.location.pathname === '/dimension-tool' ? 'active' : 'inactive'}>Dimension Tool</Nav.Link>
            <Nav.Link href="/inspiration-tool" className={window.location.pathname === '/inspiration-tool' ? 'active' : 'inactive'}>Inspiration Tool</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

export default NavBar;