import React from 'react';
import './orderItem.css'; // Import CSS file

const OrderItem = ({ order }) => {
  return (
    <div className="order-item">
      <div className="order-info">
        <h6>Order Placed: {order.placedAt}</h6>
        <p>Order No. {order.orderNo}</p>
      </div>
      
      <div className="order-items">
        {order.items.map((item, index) => (
          <div key={index} className="item">
          </div>
        ))}
      </div>
      <div className="order-summary">
        <p>Total price: ${order.totalPrice}</p>
        <p>{order.status}</p>
        <button className="pay-btn">Pay</button>
        <button className="delete-btn">Delete Order</button>
      </div>
    </div>
  );
};

export default OrderItem;
