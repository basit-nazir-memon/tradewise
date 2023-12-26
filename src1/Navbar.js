import './App.css';
import Header from './header';
import Learn from './learn';
import { useState } from 'react';
import { Navbar, Container, Nav, Offcanvas, Button, Dropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Must from './must';
import Video from './video';
import Books from './books';
import Community from './comm';
import Disc from './discover';
import Toplec from './toplecturer';
import Footer from './footer';


function Topnav() {
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
            <Header /><br />
            <a
                href="YOUR_LINK_URL_HERE"
                style={{
                    textDecoration: 'none',
                    marginLeft: '7%',
                    fontSize: '24px', 
                    color: 'Black', 
                }}
                onMouseEnter={(e) => e.target.style.color = 'Red'}
                onMouseLeave={(e) => e.target.style.color = 'Black'}
            >
                Learn Forex with Dr. Lambeau &gt;
            </a>
            <div className='learndivs'>
                <Learn
                    color='#FF0000'
                    header="Videos"
                    title="Best Forex Video Course-100 lessons from novice to master trader"
                    text="1M Completed"
                />
                <Learn
                    color='#FDDA0D'
                    header="E-books"
                    title="Best Forex E-book Collection-34 series from novice to master trader"
                    text="1.1M Completed"
                />
            </div><br /><br />
            <Must/><br /><br />
            <Video/><br /><br />
            <Books/>
            <Community/>
            <Disc />
            <Toplec/>
            <Footer/>
        </>
    );
}

export default Topnav;
