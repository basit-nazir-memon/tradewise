import Header from '../components/header';
import { useState } from 'react';
import { Navbar, Container, Nav, Offcanvas, Button, Dropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Bookdetails from '../components/bookdetails';
import { Link } from 'react-router-dom';

function Ebooks() {
    const booksData = [
        {
            bookImageUrl: "https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=800",
            bookDescription: "Description of the book goes here goes and explains nsjdbuigdfwgeu",
            writerImageUrl: "https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?auto=compress&cs=tinysrgb&w=800",
            writerName: "Writer's Name"
        },
        {
            bookImageUrl: "https://images.pexels.com/photos/3747506/pexels-photo-3747506.jpeg?auto=compress&cs=tinysrgb&w=800",
            bookDescription: "Description of the book goes here goes and explains nsjdbuigdfwgeu",
            writerImageUrl: "https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?auto=compress&cs=tinysrgb&w=800",
            writerName: "Writer's Name"
        },
        {
            bookImageUrl: "https://images.pexels.com/photos/3747497/pexels-photo-3747497.jpeg?auto=compress&cs=tinysrgb&w=800",
            bookDescription: "Description of the book goes here goes and explains nsjdbuigdfwgeu",
            writerImageUrl: "https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?auto=compress&cs=tinysrgb&w=800",
            writerName: "Writer's Name"
        },
        {
            bookImageUrl: "https://images.pexels.com/photos/4238505/pexels-photo-4238505.jpeg?auto=compress&cs=tinysrgb&w=800",
            bookDescription: "Description of the book goes here goes and explains nsjdbuigdfwgeu",
            writerImageUrl: "https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?auto=compress&cs=tinysrgb&w=800",
            writerName: "Writer's Name"
        },
        {
            bookImageUrl: "https://images.pexels.com/photos/6373409/pexels-photo-6373409.jpeg?auto=compress&cs=tinysrgb&w=800",
            bookDescription: "Description of the book goes here goes and explains nsjdbuigdfwgeu",
            writerImageUrl: "https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?auto=compress&cs=tinysrgb&w=800",
            writerName: "Writer's Name"
        }
    ];
    let renderitems;
    if (booksData.length == 0) {
        renderitems = <h2>No Books Uploaded yet</h2>
    } else {
        renderitems = booksData.map((items) => (
            <Bookdetails
                bookImageUrl={items.bookImageUrl}
                bookDescription={items.bookDescription}
                writerImageUrl={items.writerImageUrl}
                writerName={items.writerName}
            />
        ))
    }
    const btnarr = [
        {
            name: 'Featured',
        },
        {
            name: 'Latest',
        },
        {
            name: 'Education',
        },
    ]
    const dropmenu=[
        {
            name: 'Upload Video',
            path:'/upload/video'
        },
        {
            name: 'Upload E-Book',
            path:'/upload/Ebook'
        },
        {
            name: 'Stream Now',
            path:'/Golive'
        },
    ]
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
                                    {dropmenu.map((item)=>(
                                        <Dropdown.Item href={item.path}> {item.name}</Dropdown.Item>
                                    ))}
                                </Dropdown.Menu>
                            </Dropdown>
                            <Button variant="outline-success" id="navbarbutton" size="sm">Login</Button>{' '}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Header />
            <div className='Books-div'>
                {btnarr.map((item) => (
                    <Link className="books-div-link">{item.name}</Link>
                ))}
            </div>
            <div className='books-details'>
                {renderitems}
            </div>
        </>
    );
}


export default Ebooks;