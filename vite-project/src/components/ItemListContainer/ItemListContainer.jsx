import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './itemlistcontainer.css';




function ItemListContainer() {
    return (
        <div className='containerprimary'>
            <Navbar expand="lg" className="bg-body-tertiary"  >
                <Container className='container'>
                    <Navbar.Brand href="#home" className='brand'>Jaqaar</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home" className='home'>Home</Nav.Link>
                            <Nav.Link href="#link" className='quienessomos'>Quienes somos</Nav.Link>
                            <NavDropdown className='productos' title="Productos" id="basic-nav-dropdown" style={{ color: 'white' }} >
                                <NavDropdown.Item className="accesorios" href="#action/3.1">Accesorios</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2" className='cascos'>
                                    Cascos
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3" className='herramientas'>Herramientas</NavDropdown.Item>



                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>

           

            </Navbar>
          
        </div>
    );
}

//rgb(122, 81, 218);

export default ItemListContainer;