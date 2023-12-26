import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import './LeftPannel.css'; // Adjust the file name as needed
import { Container, Row, Col, Image, Button, Nav, NavItem, NavLink } from 'react-bootstrap';

const LeftPannel = ({totalCoins, manageActivePanel}) => {

  const [username, setusername] = useState("");
  const [emial, setemial] = useState("");
  const [role, setrole] = useState("");
  const [profilePic, setprofilePic] = useState("");
  const [coins, setCoins] = useState("");

  const userId = localStorage.getItem("id");

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const response = await fetch(`http://localhost:5000/profile/user/${userId}`);
        if (!response.ok) {
          throw new Error('Failed to fetch user information');
        }
        const user = await response.json();
        setusername(user.username);
        setemial(user.emial);
        setrole(user.role);
        setprofilePic(user.profilePic);

      } catch (error) {
        console.log("error:" + error);
      }
      try {
        const response = await fetch("http://localhost:5000/account/balance", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch balance");
        }

        const data = await response.json();
        setCoins(data.currentBalance);
      } catch (error) {
        console.error("Error fetching balance:", error);
      }
    };

    fetchUserInfo();
  }, []);

  const handleTopup = () => {

  };

  return (
    <Container fluid className="mainContainer">
        <div className="profileRow">
          <Col sm={4} className="profileSection">
            <Image src={profilePic} className="profilePic rounded-circle" alt="Profile Picture" />
            <h3 className="userName text-nowrap">{username}</h3>
            <span className="userType text-nowrap">{role}</span>
            <Link to="/wallet">
            <Button variant="primary" size="sm" className="topUpButton" onClick={handleTopup}>
              Top Up
            </Button>
            </Link>
            <p className="coinsBalance text-nowrap">My Coins: {coins}</p>
          </Col>
      </div>
    </Container>
  );
};

export default LeftPannel;
