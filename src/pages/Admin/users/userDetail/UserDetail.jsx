// userDetailsModal.js
import React, { useState } from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

const UserDetail = ({ isOpen, handleClose, userDetails, onUpdateStatus }) => {
  const [newStatus, setNewStatus] = useState(userDetails.status);

  const handleToggleStatus = async (status) => {
    setNewStatus(status);
    
      onUpdateStatus(userDetails._id, status);
  };

  return (
    <Modal
      open={isOpen}
      onClose={handleClose}
      aria-labelledby="user-details-modal"
      aria-describedby="user-details-description"
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
        <h2 id="user-details-modal">user Details</h2>
        <p id="user-details-description">user Name: {userDetails.username}</p>
        <p id="user-details-date">user Email: {userDetails.email}</p>
        <p id="user-details-coins">Role: {userDetails.role}</p>
        <p>Status: {newStatus}</p>
        <Button onClick={() => handleToggleStatus('true')}>Mark as Active</Button>
        <Button onClick={() => handleToggleStatus('false')}>Mark as Blocked</Button>
        <Button onClick={handleClose}>Close</Button>
      </Box>
    </Modal>
  );
};

export default UserDetail;
