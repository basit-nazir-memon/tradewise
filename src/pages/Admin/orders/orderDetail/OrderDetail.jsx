// OrderDetailsModal.js
import React, { useState } from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

const AdminOrderDetail = ({ isOpen, handleClose, orderDetails, onUpdateStatus }) => {
  const [newStatus, setNewStatus] = useState(orderDetails.status);

  const handleToggleStatus = async (status) => {
    setNewStatus(status);
    const AuthToken= localStorage.getItem('token');
    
      onUpdateStatus(orderDetails._id, status);
  };

  return (
    <Modal
      open={isOpen}
      onClose={handleClose}
      aria-labelledby="order-details-modal"
      aria-describedby="order-details-description"
    >
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 400,
          bgcolor: 'background.paper',
          boxShadow: 24,
          p: 4,
        }}
      >
        <h2 id="order-details-modal">Order Details</h2>
        <p id="order-details-description">Order Number: {orderDetails.orderNumber}</p>
        <p id="order-details-date">Order Date: {orderDetails.placedDate}</p>
        <p id="order-details-coins">Conis Buyed: {orderDetails.numberOfCoins}</p>
        <p>Status: {newStatus}</p>
        <Button onClick={() => handleToggleStatus('completed')}>Mark as Complete</Button>
        <Button onClick={() => handleToggleStatus('canceled')}>Mark as Canceled</Button>
        <Button onClick={handleClose}>Close</Button>
      </Box>
    </Modal>
  );
};

export default AdminOrderDetail;
