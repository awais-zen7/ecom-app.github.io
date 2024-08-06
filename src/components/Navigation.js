import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Navigation() {
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <Navbar  bg="success" expand="lg">
      <Container className="text-center" >
        <Navbar.Brand as={Link} to="/">
          E-Book Store
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/products">
              Books
            </Nav.Link>
            <Nav.Link as={Link} to="/cart">
              Cart ({cartItems.length})
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
