import React from 'react'
import './ManageWorks.css'
import { Container } from 'react-bootstrap';
import Works from '../../components/works/works';

const ManageWorks = () => {

    return(
        <div className="mainContainer">
            <div className="mainContainerLeft">

            </div>
            <div className="mainContainerRight">
                <Works/>
            </div>
        </div>
    )
}

export default ManageWorks;