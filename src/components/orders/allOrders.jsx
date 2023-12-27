import OrderItem from './orderItem';
import { useState, useEffect } from 'react';
import coin  from '../../assets/star.png'; // Replace with the actual path to your image

import "./allOrder.css";

function AllOrders() {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetchOrders();
    }, []);

    const AuthToken = localStorage.getItem('token');
    const userId = localStorage.getItem('id');

    console.log("token :"+AuthToken);
    const fetchOrders = async () => {

        try {
            const response = await fetch(`http://localhost:5000/orders/${userId}`, {
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
        <div className="orders-list">
        {orders && orders.length > 0 ? (
            orders.map((order, index) => (
                <div  className='orderCard' key={index}>
                    <div className='row1'>
                        <p className='orderDate '>Placed Date: {order.placedDate}</p>
                        <p className='orderNumber'>Order Number: {order.orderNumber}</p>
                    </div>
                    <div className='row2'>
                        <div className='orderCoins'>
                            <img className="coinIcon" src={coin} alt="coin icon" />
                            {order.numberOfCoins} T-Coins  
                        </div>
                        <div className='col2'>
                            <p className='totalPrice'>Total Price: {order.totalPrice}</p>
                            <p className='orderStatus'>Status: {order.status}</p>
                        </div>
                    </div>
                    
                   
                </div>
            ))
        ) : (
            <p>No orders available</p>
        )}
    </div>
    );
}

export default AllOrders;
