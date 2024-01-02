import React, { useState, useEffect } from 'react';
import './adminDashboard.css'
import Sidebar from '../../../components/admin/Sidebar';
import MainDash from '../../../components/admin/MainDash/MainDash';
import RightSide from '../../../components/admin/RigtSide/RightSide';
import AdminOrders from "../orders/orders";
import AdminUsers from "../users/users";

const AdminDashboard = ({ totalCoins, manageActivePanel }) => {
  const [adminActivePanel, setAdminActivePanel] = useState("0");

  return (
    <div className="adminDashboard">
      <div className="adminDashboardGlass">
        <Sidebar setAdminActivePanel={setAdminActivePanel} />
        
        {/* Main content based on the active panel */}
        {adminActivePanel == 0 && (
          <>
            <MainDash />
            <RightSide />
          </>
        )}

        {adminActivePanel == 1 && (
          <AdminOrders />
        )}

        {adminActivePanel == 2 && (
          <AdminUsers />
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
