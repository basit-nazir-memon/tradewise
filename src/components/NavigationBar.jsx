import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import { Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import sitelogo from "../assets/logo.png"
import "./NavigationBar.css";
 

const NavigationBar = () => {
    const isLoggedIn = localStorage.getItem('token');
    const role = localStorage.getItem('role');

    const handleLogOut = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('role');

        window.location.href = '/';
    };

    return (
        <Navbar collapseOnSelect expand="md" className="bg-body-tertiary mb-3">
            <Container>
                <Navbar.Brand>
                    <Link className='remove-link-style' to='/' style={{ textDecoration: 'none' }}>TradeWise</Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link>
                            <Link className='remove-link-style navbr' to='/live'>Live</Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link className='remove-link-style navbr' to='/videos'>Videos</Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link className='remove-link-style  navbr' to='/ebooks'>Ebooks</Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link className='remove-link-style navbr' to='/lecturers'>Lecturers</Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link className='remove-link-style navbr' to='/community'>Community</Link>
                        </Nav.Link>
                    </Nav>
                    {
                        isLoggedIn ? (
                            <Nav>
                                <NavDropdown 
                                title={
                                    <Image 
                                    src="https://gaveinjaz.com/wp-content/uploads/2019/12/opulent-profile-square-07.jpg" 
                                    roundedCircle 
                                    style={{
                                        width: '30px',
                                        height: '30px',
                                        backgroundColor: 'white'
                                    }}
                                    />
                                } 
                                id="collapsible-nav-dropdown">
                                    {
                                        role === 'admin' ? (
                                            <>
                                                <NavDropdown.Item>
                                                    <Link className='remove-link-style' to='/admin'>Dashboard</Link>
                                                </NavDropdown.Item>
                                            </>) :
                                            ''
                                    }

                                    <NavDropdown.Item>
                                        <Link className='remove-link-style' to='/profile'>Profile</Link>
                                    </NavDropdown.Item>
                                    <NavDropdown.Item>
                                        <Link className='remove-link-style' to='/manage/works'>Manage Works</Link>
                                    </NavDropdown.Item>
                                    <NavDropdown.Item>
                                        <Link className='remove-link-style' to='/wallet'>Wallet</Link>
                                    </NavDropdown.Item>
                                    <NavDropdown.Item>
                                        <Link className='remove-link-style' to='/settings'>Settings</Link>
                                    </NavDropdown.Item>
                                    <NavDropdown.Item>
                                        <Link className='remove-link-style' to='/orders'>Orders</Link>
                                    </NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item onClick={handleLogOut}>
                                        Logout
                                    </NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                        ) : (
                            <Nav>

                                <Link className='remove-link-style' to='/register'>
                                    <Button className='m-1' variant="outline-success">Register
                                    </Button>
                                </Link>

                                <Link className='remove-link-style' to='/login'>
                                    <Button className='m-1' variant="outline-primary">Login</Button>
                                </Link>
                            </Nav>
                        )
                    }
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavigationBar;