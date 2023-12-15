import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaypal, faCcVisa, faCcMastercard } from "@fortawesome/free-brands-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";
import "./paymentProcessing.css";

const PaymentProcessing = () => {
  const location = useLocation();
  const [accountInfo, setAccountInfo] = useState({
    cardNumber: "",
    expirationDate: "",
    cvv: "",
  });

  const [purchaseInfo, setPurchaseInfo] = useState({
    totalCoins: 0,
    coinRate: 1, // Assume the rate is $1 per coin
    totalPrice: 0,
  });

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const coins = parseInt(searchParams.get("coins")) || 0;
    console.log("coins"+ coins);
    const ttlPrice = coins * purchaseInfo.coinRate;
    console.log("ttlPrice"+ ttlPrice);
    setPurchaseInfo({ totalCoins: coins, totalPrice: ttlPrice });
  }, [location.search, purchaseInfo.coinRate]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAccountInfo((prevInfo) => ({ ...prevInfo, [name]: value }));
  };

  const handlePayment = () => {
    console.log("Payment successful!");
  };

  return (
    <Container className="payment-container">
      <Row>
        <Col xs={12} md={4}>
          <div className="purchase-info">
            <h3>Purchase Info</h3>
            <div className="payment_info">
              <p>Total Coins: {purchaseInfo.totalCoins}</p>
              <p>Coin Rate: ${purchaseInfo.coinRate}</p>
              <p>Total Price: ${purchaseInfo.totalPrice}</p>
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={8}>
          <h2 className="payment-heading">Payment Processing</h2>

          <Form className="payment-form">
            <Form.Group controlId="cardNumber">
              <Form.Label>Card Number</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter card number"
                name="cardNumber"
                value={accountInfo.cardNumber}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Row>
              <Col>
                <Form.Group controlId="expirationDate">
                  <Form.Label>Expiration Date</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="MM/YY"
                    name="expirationDate"
                    value={accountInfo.expirationDate}
                    onChange={handleInputChange}
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="cvv">
                  <Form.Label>CVV</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="CVV"
                    name="cvv"
                    value={accountInfo.cvv}
                    onChange={handleInputChange}
                  />
                </Form.Group>
              </Col>
            </Row>

            <Button variant="success" onClick={handlePayment}>
              Make Payment
            </Button>
          </Form>

          <Row className="payment-options">
            <Col>
              <h4>Payment Options</h4>
            </Col>
          </Row>

          <Row>
            <Col>
              <Button variant="primary" className="payment-option">
                <FontAwesomeIcon icon={faPaypal} />
              </Button>
            </Col>
            <Col>
              <Button variant="primary" className="payment-option">
                <FontAwesomeIcon icon={faCcVisa} />
              </Button>
            </Col>
            <Col>
              <Button variant="primary" className="payment-option">
                <FontAwesomeIcon icon={faCcMastercard} />
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default PaymentProcessing;
