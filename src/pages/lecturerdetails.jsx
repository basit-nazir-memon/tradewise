import Header from '../components/header';
import { useState } from 'react';
import { Navbar, Container, Nav, Offcanvas, Button, Dropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import Footer from '../components/footer';
import Lecdiv from '../components/lecturerdiv';

function Lecturerdetails() {
    const content = [
        {
            imageUrl: "https://images.pexels.com/photos/2088169/pexels-photo-2088169.jpeg?auto=compress&cs=tinysrgb&w=800",
            title: "Trading Live",
            description: "Description of goes here.",
            works: "29",
            subscribers: "2.7M",
            rating: '9.9'
        },
        {
            imageUrl: "https://images.pexels.com/photos/593227/pexels-photo-593227.jpeg?auto=compress&cs=tinysrgb&w=800",
            title: "Fast Bull",
            description: "Description of goes here.",
            works: "19",
            subscribers: "2.1M",
            rating: '9.4'
        }
    ]
    let renderitems;
    if (content.length === 0) {
        renderitems = <h2>No Content Available</h2>
    } else {
        renderitems = content.map((Item) => (
            <Lecdiv
                imageUrl={Item.imageUrl}
                title={Item.title}
                description={Item.description}
                works={Item.works}
                subscribers={Item.subscribers}
                rating={Item.rating}
            />
        ))
    }
    const [showOffcanvas, setShowOffcanvas] = useState(false);

    const handleOffcanvas = () => setShowOffcanvas((prev) => !prev);
    const btnarray = [
        {
            name: 'Latest',
            path: '/Latest'
        },
        {
            name: 'Education',
            path: '/Education'
        },
        {
            name: 'All',
            path: '/All'
        },
    ]
    return (
        <>
            {/* <Navbar bg="light" expand="lg">
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
            </Navbar> */}
            <Header />
            <div className='Books-div'>
                {btnarray.map((item) => (
                    <Link className="books-div-link" path={item.path}>{item.name}</Link>
                ))}
            </div>
            <div>
                {renderitems}
            </div>
            <Footer />
        </>
    )
}
export default Lecturerdetails;