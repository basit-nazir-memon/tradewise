import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./wallet.css";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const TopUp = () => {
  const [coins, setCoins] = useState(100); // Initial number of coins
  const [rechargeAmount, setRechargeAmount] = useState(20); // Default recharge amount
  const coinRate = 1; // Set your default coin rate


  const handleRecharge = (amount) => {
    // You can perform additional logic here, e.g., initiate a payment
    setRechargeAmount(amount);
    console.log(`Recharging ${amount} coins`);
  };

  return (
    <Container className="box">
      <h2>Top Up Your Account</h2>
      <p>Current Balance: {coins} coins</p>

      <Row className="mb-3">
        <Col>
          <h4>Recharge Coins</h4>
        </Col>
      </Row>

      <Row>
        {[20, 50, 70, 90, 180 , 360, 500].map((amount) => (
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

export default TopUp;