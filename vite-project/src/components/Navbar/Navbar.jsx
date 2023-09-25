import React from 'react';
import './navbar.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget';

function NavSearch() {
  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
          <Link to="/" className="navbar-brand">Jaqaar</Link> {/* Utiliza Link en lugar de href */}
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Link to="/" className="nav-link">Inicio</Link> {/* Utiliza Link en lugar de href */}
              <NavDropdown title="Productos" id="navbarScrollingDropdown">
                <Link to="/products" className="dropdown-item">Productos</Link> {/* Utiliza Link en lugar de href */}
                <Link to="/checkout" className="dropdown-item">Servicios</Link> {/* Utiliza Link en lugar de href */} 
              </NavDropdown>
              <Link to="/about" className="nav-link">¿Quienes somos?</Link> {/* Utiliza Link en lugar de href */}
            </Nav>
          </Navbar.Collapse>
          <CartWidget/>
        </Container>
      </Navbar>
 
    </div>
  );
}

export default NavSearch;
