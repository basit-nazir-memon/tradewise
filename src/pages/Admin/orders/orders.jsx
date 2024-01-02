import React, { useState, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import './orders.css';
import AdminOrderDetail from "./orderDetail/OrderDetail";

const makeStyle = (status) => {
  if (status === 'completed') {
    return {
      background: 'rgb(145 254 159 / 47%)',
      color: 'green',
    };
  } else if (status === 'pending') {
    return {
      background: '#ffadad8f',
      color: 'red',
    };
  } else {
    return {
      background: '#59bfff',
      color: 'white',
    };
  }
};

const AdminOrders = () => {
  const [orders, setOrders] = useState([]);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    fetchOrders();
  }, []);

  const AuthToken = localStorage.getItem('token');
  const fetchOrders = async () => {
    try {
      const response = await fetch(`http://localhost:5000/orders/`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${AuthToken}`,
        },
      });

      if (!response.ok) {
        throw new Error('Failed to fetch orders');
      }

      const data = await response.json();
      setOrders(data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDetailsClick = (order) => {
    setSelectedOrder(order);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedOrder(null);
    setIsModalOpen(false);
  };

  const updateStatus = async (orderId, newStatus) => {
    try {
      // Immediately update the UI
      const updatedOrders = orders.map((order) =>
        order._id === orderId ? { ...order, status: newStatus } : order
      );

      setOrders(updatedOrders);

      const AuthToken = localStorage.getItem('token');
      // Attempt to update the server
      const response = await fetch(`http://localhost:5000/orders/update-status/${orderId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${AuthToken}`, // Include your authentication token
        },
        body: JSON.stringify({ newStatus }),
      });

      if (!response.ok) {
        throw new Error('Failed to update order status');
      }
    } catch (error) {
      // Handle any errors from the server (e.g., show an error message or revert the UI)
      console.error(error);
    }
  };


  return (
    <div className="Table">
      <h3>Recent Orders</h3>
      <TableContainer component={Paper} style={{ boxShadow: '0px 13px 20px 0px #80808029', margin: '20px', padding: '10px' }}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Product</TableCell>
              <TableCell align="left">User</TableCell>
              <TableCell align="left">Date</TableCell>
              <TableCell align="left">Status</TableCell>
              <TableCell align="left">Details</TableCell>
            </TableRow>
          </TableHead>
          <TableBody style={{ color: 'white' }} className="TableBody">
            {orders.map((order) => (
              <TableRow
                key={order._id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                className="orderRow"
                onClick={() => handleDetailsClick(order)}
                style={{ marginBottom: '10px' }} // Add some margin between rows
              >
                <TableCell component="th" scope="row">
                  {order.numberOfCoins}
                </TableCell>
                <TableCell align="left">{order.orderNumber}</TableCell>
                <TableCell align="left">{order.placedDate}</TableCell>
                <TableCell align="left">
                  <span className="status" style={makeStyle(order.status)}>
                    {order.status}
                  </span>
                </TableCell>
                <TableCell align="left" className="Details">
                  Details
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {selectedOrder && (
        <AdminOrderDetail isOpen={isModalOpen} handleClose={handleCloseModal} orderDetails={selectedOrder} onUpdateStatus={updateStatus}/>
      )}
    </div>
  );
};

export default AdminOrders;
