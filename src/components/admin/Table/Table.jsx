import * as React from "react";
import {useState, useEffect} from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import coin from "./star.png";
import "./Table.css";

const makeStyle=(status)=>{
  if(status === 'completed')
  {
    return {
      background: 'rgb(145 254 159 / 47%)',
      color: 'green',
    }
  }
  else if(status === 'pending')
  {
    return{
      background: '#ffadad8f',
      color: 'red',
    }
  }
  else{
    return{
      background: '#59bfff',
      color: 'white',
    }
  }
}

export default function BasicTable() {
  
  const [orders, setOrders] = useState([]);

  useEffect(() => {
      fetchOrders();
  }, []);

  const AuthToken = localStorage.getItem('token');
  const userId = localStorage.getItem('id');

  console.log("token :"+AuthToken);
  const fetchOrders = async () => {

      try {
          const response = await fetch(`http://localhost:5000/orders/`, {
              method: 'GET',
              headers: {
                  'Content-Type': 'application/json',
                  'Authorization': `Bearer ${AuthToken}` // Replace with your actual authentication token
              },
             
          });

          if (!response.ok) {
              throw new Error('Failed to fetch orders');
          }

          const data = await response.json();
          console.log(data);
          setOrders(data);
      } catch (error) {
          console.error(error);
      }
  };

  return (
      <div className="Table">
      <h3>Recent Orders</h3>
        <TableContainer
          component={Paper}
          style={{ boxShadow: "0px 13px 20px 0px #80808029" }}
        >
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
            <TableBody style={{ color: "white" }}>
              {orders.map((order) => (
                <TableRow
                  key={order.orderNumber}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {order.numberOfCoins} Coins
                  </TableCell>
                  <TableCell align="left">{order.orderNumber}</TableCell>
                  <TableCell align="left">{order.placedDate}</TableCell>
                  <TableCell align="left">
                    <span className="status" style={makeStyle(order.status)}>{order.status}</span>
                  </TableCell>
                  <TableCell align="left" className="Details">Details</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
  );
}
