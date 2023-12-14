import Header from '../components/header';
import { useState } from 'react';
import { Navbar, Container, Nav, Offcanvas, Button, Dropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Bookdetails from '../components/bookdetails';
import { Link } from 'react-router-dom';

function Ebooks() {
    const [showOffcanvas, setShowOffcanvas] = useState(false);

    const handleOffcanvas = () => setShowOffcanvas((prev) => !prev);

    return (
        <>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Offcanvas show={showOffcanvas} onHide={() => setShowOffcanvas(false)}>
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title>Menu</Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <hr className="dropdown-divider" style={{ borderTop: '1px solid #e0e0e0' }} />
                            <Nav className="flex-column">
                                <Nav.Link href="#home">Home</Nav.Link>
                                <Nav.Link href="#features">Features</Nav.Link>
                                <Nav.Link href="#pricing">Pricing</Nav.Link>
                            </Nav>
                        </Offcanvas.Body>
                    </Offcanvas>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={handleOffcanvas} />
                    <Navbar.Brand href="#home">Trading Live</Navbar.Brand>

                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Dropdown>
                                <Dropdown.Toggle variant="success" id="dropdown-basic" size="sm">
                                    Creator Studio
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1"> Upload Video </Dropdown.Item>
                                    <Dropdown.Item href="#/action-2"> Upload E-book </Dropdown.Item>
                                    <Dropdown.Item href="#/action-3"> Stream Now</Dropdown.Item>
                                    <Dropdown.Item href="#/action-4">Something else</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                            <Button variant="outline-success" id="navbarbutton" size="sm">Login</Button>{' '}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Header />
            <div className='Books-div'>
                <Link className="books-div-link">Featured</Link>
                <Link className="books-div-link">Latest</Link>
                <Link className="books-div-link">Education</Link>
            </div>
            <div className='books-details'>
                <Bookdetails
                    bookImageUrl="https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=800" 
                    bookDescription="Description of the book goes here goes and explains nsjdbuigdfwgeu"
                    writerImageUrl="https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?auto=compress&cs=tinysrgb&w=800" 
                    writerName="Writer's Name"
                />
                <Bookdetails
                    bookImageUrl="https://images.pexels.com/photos/3747506/pexels-photo-3747506.jpeg?auto=compress&cs=tinysrgb&w=800" 
                    bookDescription="Description of the book goes here goes and explains nsjdbuigdfwgeu"
                    writerImageUrl="https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?auto=compress&cs=tinysrgb&w=800" 
                    writerName="Writer's Name"
                />
                <Bookdetails
                    bookImageUrl="https://images.pexels.com/photos/3747497/pexels-photo-3747497.jpeg?auto=compress&cs=tinysrgb&w=800" 
                    bookDescription="Description of the book goes here goes and explains nsjdbuigdfwgeu"
                    writerImageUrl="https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?auto=compress&cs=tinysrgb&w=800" 
                    writerName="Writer's Name"
                />
                <Bookdetails
                    bookImageUrl="https://images.pexels.com/photos/4238505/pexels-photo-4238505.jpeg?auto=compress&cs=tinysrgb&w=800" 
                    bookDescription="Description of the book goes here goes and explains nsjdbuigdfwgeu"
                    writerImageUrl="https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?auto=compress&cs=tinysrgb&w=800" 
                    writerName="Writer's Name"
                />
                <Bookdetails
                    bookImageUrl="https://images.pexels.com/photos/6373409/pexels-photo-6373409.jpeg?auto=compress&cs=tinysrgb&w=800" 
                    bookDescription="Description of the book goes here goes and explains nsjdbuigdfwgeu"
                    writerImageUrl="https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?auto=compress&cs=tinysrgb&w=800" 
                    writerName="Writer's Name"
                />
            </div>
        </>
    );
}


export default Ebooks;