import './navbar.css'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';




function NavSearch() {
    return (
        <div>
        <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
          <Navbar.Brand href="#">Jaqaar</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link href="#action1">Inicio</Nav.Link>
             
              <NavDropdown title="Productos" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Todos los productos</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                Bolsos
                </NavDropdown.Item>
                
                <NavDropdown.Item href="#action5">
                  Remeras
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#action2">¿Quienes somos?</Nav.Link>
              <Nav.Link href="#" disabled>
             Usuarios
              </Nav.Link>
            </Nav>
            
          </Navbar.Collapse>
        </Container>
      </Navbar>
     
    </div>  
    )
}

export default NavSearch;