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
                <Tab  className="tabs" eventKey="AllOrders" title="All Orders">
                    <AllOrders />
                </Tab>
                <Tab  className="tabs"  eventKey="PendingOrders" title="Pending">
                    <ClosedOrders />
                </Tab>
                <Tab  className="tabs" eventKey="CompletedOrders" title="Completed">
                    <ClosedOrders />
                </Tab>
                <Tab  className="tabs" eventKey="ClosedOrders" title="Closed">
                    <PendingOrders />
                </Tab>
            </Tabs>
        </div>
        
    );
}

export default Orders;