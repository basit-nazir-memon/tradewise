import React, { useState } from 'react'; // Import useState from 'react'
import './ManageSetting.css';
import { Container } from 'react-bootstrap';
import Setting from '../../components/setting/setting';
import LeftPannel from './LeftPannel';
import Orders from '../../components/orders/orders';

const ManageSetting = ({ totalCoins }) => {
  const [activePanel, setActivePanel] = useState('Settings'); // Correct usage of useState

  return (
    <div className="mainContainer">
      <div className="mainContainerLeft">
        <LeftPannel totalCoins={totalCoins} manageActivePanel={setActivePanel} />
      </div>
      <div className="mainContainerRight">
        {activePanel === 'Settings' ? (
          <Setting />
        ) : (
          <Orders />
        )}
      </div>
    </div>
  );
};

export default ManageSetting;
