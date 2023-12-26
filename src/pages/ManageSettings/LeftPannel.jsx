import React, { useState } from 'react';
import { Link } from "react-router-dom";
import './LeftPannel.css'; // Adjust the file name as needed
import { Container, Row, Col, Image, Button, Nav, NavItem, NavLink } from 'react-bootstrap';

const LeftPannel = ({totalCoins, manageActivePanel}) => {
  const profilePic = 'https://static.vecteezy.com/system/resources/previews/018/765/757/original/user-profile-icon-in-flat-style-member-avatar-illustration-on-isolated-background-human-permission-sign-business-concept-vector.jpg'; // Replace with your actual profile picture URL
  const userName = 'Mr Bilal';
  const userType = 'Primary';
  const coins = 0;

  const [activeTab, setActiveTab] = useState('myCoins');
  
  const handleTabClick = (tabKey) => {
    setActiveTab(tabKey);
  };
  const handleOrdersClick = () => {
    manageActivePanel("orders")
  };


  return (
        <div className="profileSection">
          <Image src={profilePic} className="profilePic rounded-circle" alt="Profile Picture" />
          <h3 className="userName text-nowrap">{userName}</h3>
          <span className="userType text-nowrap">{userType}</span>
          <Link to={"/wallet"}>
                <Button variant="success" className='button' >Top Up</Button>
          </Link>
          <p className="coinsBalance text-nowrap">My Coins: {totalCoins}</p>
            <Button variant="success" className='button' onClick={handleOrdersClick} >My Orders</Button>
        </div>
  );
};

export default LeftPannel;
