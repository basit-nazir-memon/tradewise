import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Navbar,
  Container,
  Nav,
  Offcanvas,
  Button,
  Dropdown,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function Topnav() {
  const [showOffcanvas, setShowOffcanvas] = useState(false);
  const handleOffcanvas = () => setShowOffcanvas((prev) => !prev);

  return (
    <>
      <Navbar bg="light" expand="lg" style={{borderBottom: "1px solid lightgray"}}>
        <Container>
          <Offcanvas
            show={showOffcanvas}
            onHide={() => setShowOffcanvas(false)}
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>Menu</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <hr
                className="dropdown-divider"
                style={{ borderTop: "1px solid #e0e0e0" }}
              />
              <Nav className="flex-column">
                <Nav.Link>
                  {" "}
                  <Link to="/home">Home</Link>{" "}
                </Nav.Link>
                <Nav.Link>
                  {" "}
                  <Link to="/features">Features</Link>
                </Nav.Link>
                <Nav.Link>
                  {" "}
                  <Link to="/pricing">Pricing</Link>
                </Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Offcanvas>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            onClick={handleOffcanvas}
          />
          <Navbar.Brand href="#home">Trading Live</Navbar.Brand>

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link>
                {" "}
                <Link to="/home">Home</Link>{" "}
              </Nav.Link>
              <Dropdown>
                <Dropdown.Toggle
                  variant="success"
                  id="dropdown-basic"
                  size="sm"
                >
                  Creator Studio
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">
                    {" "}
                    Upload Video{" "}
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-2">
                    {" "}
                    Upload E-book{" "}
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3"> Stream Now</Dropdown.Item>
                  <Dropdown.Item href="#/action-4">
                    Something else
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <Button
                as={Link}
                to="/login"
                variant="outline-success"
                id="navbarbutton"
                size="sm"
              >
                Login
              </Button>{" "}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Topnav;
