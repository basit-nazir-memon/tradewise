import React, { useState, useEffect } from 'react';
import './adminDashboard.css'
import Sidebar from '../../../components/admin/Sidebar';
import MainDash from '../../../components/admin/MainDash/MainDash';
import RightSide from '../../../components/admin/RigtSide/RightSide';

const adminDashboard = ({totalCoins, manageActivePanel}) => {

  return (
    <div className="adminDashboard">
    <div className="adminDashboardGlass">
      <Sidebar/>
      <MainDash/>
      <RightSide/>
    </div>
  </div>
  );
};

export default adminDashboard;
