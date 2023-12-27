
import OrderItem from './orderItem';
import "./allOrder.css"

function AllOrders() {
    const orders = [
        {
          "orderNo": 1234,
          "placedAt": "2023-12-25T10:30:00",
          "items": [
            { "name": "T-Shirt", "quantity": 2, "price": 19.99 },
            { "name": "Coffee Mug", "quantity": 1, "price": 9.99 }
          ],
          "totalPrice": 49.97,
          "status": "Pending"
        },
        {
          "orderNo": 5678,
          "placedAt": "2023-12-23T15:15:00",
          "items": [
            { "name": "Headphones", "quantity": 1, "price": 79.99 },
            { "name": "Phone Case", "quantity": 1, "price": 14.99 }
          ],
          "totalPrice": 94.98,
          "status": "Shipped"
        },
        {
          "orderNo": 9012,
          "placedAt": "2023-12-20T18:00:00",
          "items": [
            { "name": "Book", "quantity": 1, "price": 24.99 },
            { "name": "Notebook", "quantity": 2, "price": 5.99 }
          ],
          "totalPrice": 36.97,
          "status": "Delivered"
        },
        {
          "orderNo": 3456,
          "placedAt": "2023-12-18T12:00:00",
          "items": [
            { "name": "Watch", "quantity": 1, "price": 149.99 }
          ],
          "totalPrice": 149.99,
          "status": "Cancelled"
        },
        {
          "orderNo": 7890,
          "placedAt": "2023-12-15T09:30:00",
          "items": [
            { "name": "Backpack", "quantity": 1, "price": 39.99 },
            { "name": "Wallet", "quantity": 1, "price": 19.99 }
          ],
          "totalPrice": 59.98,
          "status": "Returned"
        }
       ]
       
    return (
        <div className="orders-list">
          {orders.map((order, index) => (
            <OrderItem key={index} order={order} />
          ))}
        </div>
      );
}

export default AllOrders; 
