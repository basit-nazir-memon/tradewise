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
import './users.css';
import UserDetail from "./userDetail/UserDetail";

const makeStyle = (status) => {
  if (status !== 'Blocked') {
    return {
      background: 'rgb(145 254 159 / 47%)',
      color: 'green',
    };
  } else if (status === 'Blocked') {
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

const AdminUsers = () => {
  const [users, setusers] = useState([]);
  const [selecteduser, setSelecteduser] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    fetchusers();
  }, []);

  const AuthToken = localStorage.getItem('token');
  const fetchusers = async () => {
    try {
      const response = await fetch(`http://localhost:5000/profile/users`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${AuthToken}`,
        },
      });

      if (!response.ok) {
        throw new Error('Failed to fetch users');
      }

      const data = await response.json();
      setusers(data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDetailsClick = (user) => {
    setSelecteduser(user);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setSelecteduser(null);
    setIsModalOpen(false);
  };

  const updateStatus = async (userId, newStatus) => {
    try {
      console.log("updateing user status");

      const updatedusers = users.map((user) =>
        user._id === userId ? { ...user, blocked: newStatus } : user
      );

      setusers(updatedusers);

      const AuthToken = localStorage.getItem('token');
      // Attempt to update the server
      const response = await fetch(`http://localhost:5000/profile/user/${userId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${AuthToken}`, // Include your authentication token
        },
        body: JSON.stringify({ "blocked":newStatus })
      });

      if (!response.ok) {
        throw new Error('Failed to update user status');
      }
      else{
        console.log("updated successfully")
      }
    } catch (error) {
      // Handle any errors from the server (e.g., show an error message or revert the UI)
      console.error(error);
    }
  };


  return (
    <div className="Table">
      <h3>Recent users</h3>
      <TableContainer component={Paper} style={{ boxShadow: '0px 13px 20px 0px #80808029', margin: '20px', padding: '10px' }}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Full Name</TableCell>
              <TableCell align="left">Email</TableCell>
              <TableCell align="left">Role</TableCell>
              <TableCell align="left">Status</TableCell>
              <TableCell align="left">Details</TableCell>
            </TableRow>
          </TableHead>
          <TableBody style={{ color: 'white' }} className="TableBody">
            {users.map((user) => (
              <TableRow
                key={user._id}
                sx={{ '&:last-child td, &:last-child th': { buser: 0 } }}
                className="userRow"
                onClick={() => handleDetailsClick(user)}
                style={{ marginBottom: '10px' }} // Add some margin between rows
              >
                <TableCell component="th" scope="row">
                  {user.fullName}
                </TableCell>
                <TableCell align="left">{user.email}</TableCell>
                <TableCell align="left">{user.role}</TableCell>
                <TableCell align="left">
                  <span className="status" style={makeStyle(user.blocked)}>
                    {user.blocked ? 'Blocked' : 'Active'}
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
      {selecteduser && (
        <UserDetail isOpen={isModalOpen} handleClose={handleCloseModal} userDetails={selecteduser} onUpdateStatus={updateStatus}/>
      )}
    </div>
  );
};

export default AdminUsers;
