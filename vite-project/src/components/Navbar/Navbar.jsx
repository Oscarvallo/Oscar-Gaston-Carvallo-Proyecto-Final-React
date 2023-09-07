import './navbar.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';




function NavSearch() {
    return (
        <div className='navbar'>
            <Form className="d-flex">
                <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                    
                />
                <Button variant="outline-success" className='btnSearch'>Buscar</Button>
            </Form>
        </div>
    )
}

export default NavSearch;