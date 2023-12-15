import React from 'react';
import './LeftPannel.css'; // Adjust the file name as needed
import { Container, Row, Col, Image, Button, Nav, NavItem, NavLink } from 'react-bootstrap';

const LeftPannel = () => {
  const profilePic = 'https://static.vecteezy.com/system/resources/previews/018/765/757/original/user-profile-icon-in-flat-style-member-avatar-illustration-on-isolated-background-human-permission-sign-business-concept-vector.jpg'; // Replace with your actual profile picture URL
  const userName = 'Mr Bilal';
  const userType = 'Primary';
  const coins = 0;

  return (
    <Container fluid className="mainContainer">
        <Row className="profileRow">
        <Col sm={4} className="profileSection">
          <Image src={profilePic} className="profilePic rounded-circle" alt="Profile Picture" />
          <h3 className="userName text-nowrap">{userName}</h3>
          <span className="userType text-nowrap">{userType}</span>
          <Button variant="primary" size="sm" className="topUpButton">
            Top Up
          </Button>
          <p className="coinsBalance text-nowrap">My Coins: {coins}</p>
        </Col>
        <div className="tabSection">
          <Nav variant="tabs" defaultActiveKey="myCoins" className='tabs'>
            <NavItem className='NavItem'>
              <NavLink href="#" active={true}>
                My Coins
              </NavLink>
            </NavItem>
            <NavItem className='NavItem'>
              <NavLink href="#">My Orders</NavLink>
            </NavItem>
            <NavItem className='NavItem'>
              <NavLink href="#">Notifications</NavLink>
            </NavItem>
            <NavItem className='NavItem'>
              <NavLink href="#">Settings</NavLink>
            </NavItem>
          </Nav>
        </div>
      </Row>
    </Container>
  );
};

export default LeftPannel;
