import { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import AllOrders from "./allOrders";
import CompletedOrders from "./completedOrders";
import ClosedOrders from "./closedOrders";
import PendingOrders from "./pendingOrders";
import "./orders.css"

function Orders() {
    const [key, setKey] = useState('AllOrders');

    return (
        <div className="ordersContainer">
             <Tabs
                id="worksTabs"
                activeKey={key}
                onSelect={(k) => setKey(k)}
                className="mb-6"
            >
                <Tab
                    className="tabs"
                    eventKey="AllOrders"
                    title="All Orders"
                    style={{ color: key === "AllOrders" ? "#f57c4c" : "black" }}
                >
                    <AllOrders />
                </Tab>
                <Tab
                    className="tabs"
                    eventKey="PendingOrders"
                    title="Pending"
                    style={{ color: key === "PendingOrders" ? "#f57c4c" : "black" }}
                >
                    <PendingOrders />
                </Tab>
                <Tab
                    className="tabs"
                    eventKey="CompletedOrders"
                    title="Completed"
                    style={{ color: key === "CompletedOrders" ? "#f57c4c" : "black" }}
                >
                    <CompletedOrders />
                </Tab>
                <Tab
                    className="tabs"
                    eventKey="ClosedOrders"
                    title="Closed"
                    style={{ color: key === "ClosedOrders" ? "#f57c4c" : "black" }}
                >
                    <ClosedOrders />
                </Tab>
            </Tabs>
        </div>
    );
}

export default Orders;
