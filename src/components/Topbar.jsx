import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Button } from 'react-bootstrap';
const Topbar = () => {
  return (
    <>
      <Navbar variant='dark'>
        <Container>
          <Navbar.Brand href="#home"><strong>Brand</strong></Navbar.Brand>
          <Button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </Button>
          <Nav className="navbar-nav navbar-nav ms-auto mb-lg-0">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">About</Nav.Link>
            <Nav.Link href="#pricing">Project</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
export default Topbar;