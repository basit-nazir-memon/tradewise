import React from 'react'
import './ManageWorks.css'
import { Accordion } from 'react-bootstrap';
import Works from '../../components/works/works';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVideo, faSquareCheck, faBarsProgress } from '@fortawesome/free-solid-svg-icons';
import { useParams } from 'react-router';


const ManageWorks = () => {
    const {name} = useParams();
    console.log("name", name);

    return(
        <div className="mainContainer">
            <div className="mainContainerLeft">
                <Accordion>
                    <Accordion.Item eventKey="0" style={{border: 'none'}}>
                        <Accordion.Header>
                            <FontAwesomeIcon icon={faVideo}style={{marginRight: "10px"}}/>
                            Live Stream
                        </Accordion.Header>
                        <Accordion.Body>
                            <div className='btn'>
                                On Third Party App
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1" style={{border: 'none'}}>
                        <Accordion.Header>
                            <FontAwesomeIcon icon={faSquareCheck} style={{marginRight: "10px"}}/>
                            Creator Studio
                        </Accordion.Header>
                        <Accordion.Body >
                            <div className='btn w100'>
                                Upload Video
                            </div>
                            <div className='btn w100'>
                                Upload E-book
                            </div>
                            <div className='btn w100'>
                                Ask Questions
                            </div>
                            <div className='btn w100'>
                                Create Post
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
                <div eventKey="1" style={{border: 'none'}} className='accordionSimilarStyle'>
                    <button type="button" aria-expanded="false" className='accordion-button removeArrow'>
                            <FontAwesomeIcon icon={faBarsProgress} style={{marginRight: "10px"}}/>
                            Manage Works
                    </button>
                </div>
            </div>
            <div className="mainContainerRight">
                <Works/>
            </div>
        </div>
    )
}

export default ManageWorks;