import React from 'react'
import './ManageSetting.css'
import { Container } from 'react-bootstrap';
import Setting from '../../components/setting/setting';
import LeftPannel from './LeftPannel';

const ManageSetting = () => {

    return(
        <div className="mainContainer">
            <div className="mainContainerLeft">
                <LeftPannel />
            </div>
            <div className="mainContainerRight">
                <Setting />
            </div>
        </div>
    )
}

export default ManageSetting;