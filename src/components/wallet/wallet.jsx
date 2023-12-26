import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./wallet.css";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Wallet = () => {
  const [coins, setCoins] = useState(100); // Initial number of coins
  const [rechargeAmount, setRechargeAmount] = useState(20); // Default recharge amount
  const [currentBalance, setCurrentBalance] = useState(null);
  const coinRate = 1; // Set your default coin rate

  useEffect(() => {
    const fetchBalance = async () => {
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
        setCurrentBalance(data.currentBalance);
      } catch (error) {
        console.error("Error fetching balance:", error);
      }
    };

    fetchBalance();
  }, []);

  const handleRecharge = (amount) => {
    setRechargeAmount(amount);
    console.log(`Recharging ${amount} coins`);
  };

  return (
    <Container className="box">
      <h2>Your Wallet</h2>
      <p>Current Balance: {currentBalance !== null ? `${currentBalance} coins` : "Loading..."}</p>

      <Row className="mb-3">
        <Col>
          <h4>Recharge Coins</h4>
        </Col>
      </Row>

      <Row>
        {[20, 50, 70, 90, 180, 360, 500].map((amount) => (
          <Col key={amount} className="mb-2">
            <Button variant="primary" onClick={() => handleRecharge(amount)}>
              {`${amount} coins`}
            </Button>
          </Col>
        ))}
        <Col className="mb-2">
          {/* Custom recharge option */}
          <Form.Control
            type="number"
            placeholder="Enter custom amount"
            value={rechargeAmount}
            onChange={(e) => setRechargeAmount(e.target.value)}
          />
        </Col>
      </Row>

      <Row className="mt-3">
        <Col>
          {/* Link to payment processing page with coins as a query parameter */}
          <Link to={`/payment_Processing?coins=${rechargeAmount}`}>
            <Button variant="success">Proceed to Payment</Button>
          </Link>
        </Col>
      </Row>
    </Container>
  );
};

export default Wallet;
