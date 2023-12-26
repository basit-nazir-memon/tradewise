import React from 'react'
import './ManageWorks.css'
import { Accordion } from 'react-bootstrap';
import Works from '../../components/works/works';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVideo, faSquareCheck, faBarsProgress } from '@fortawesome/free-solid-svg-icons';
import { Route, Routes, useParams } from 'react-router';
import UploadVideo from '../../components/uploadVideo/uploadVideo';
import UploadEbook from '../../components/uploadEbook/uploadEbook';
import UploadLiveVideo from '../../components/uploadLiveVideo';
import { Link } from 'react-router-dom';



const ManageWorks = ({type}) => {

    return(
        <div className="mainContainer">
            <div className="mainContainerLeft">
                <Accordion className='leftAccordion'>
                    <Accordion.Item eventKey="0" style={{border: 'none'}}>
                        <Accordion.Header>
                            <FontAwesomeIcon className='iconImage' icon={faVideo} style={{marginRight: "10px"}}/>
                            Live Stream
                        </Accordion.Header>
                        <Accordion.Body>
                            <Link to={'/upload/video/live'}>
                                <div className='btn'>
                                    On Third Party App
                                </div>
                            </Link>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1" style={{border: 'none'}}>
                        <Accordion.Header>
                            <FontAwesomeIcon className='iconImage' icon={faSquareCheck} style={{marginRight: "10px"}}/>
                            Creator Studio
                        </Accordion.Header>
                        <Accordion.Body >
                            <Link to={'/upload/video'}>
                                <div className='btn w100'>
                                    Upload Video
                                </div>
                            </Link>
                            <Link to={'/upload/ebook'}>
                                <div className='btn w100'>
                                    Upload E-book
                                </div>
                            </Link>
                            <Link to={'/upload/question'}>
                                <div className='btn w100'>
                                    Ask Questions
                                </div>
                            </Link>
                            <Link to={'/upload/post'}>
                                <div className='btn w100'>
                                    Create Post
                                </div>
                            </Link>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
                <div eventKey="1" style={{border: 'none'}} className='accordionSimilarStyle'>
                    <button type="button" aria-expanded="false" className='accordion-button removeArrow'>
                            <FontAwesomeIcon className='iconImage' icon={faBarsProgress} style={{marginRight: "10px"}}/>
                            Manage Works
                    </button>
                </div>
            </div>
            <div className="mainContainerRight">
                {
                    type === "works" ?
                        <Works />
                    :   type === "uploadVideo" ? 
                        <UploadVideo/>
                    :   type === 'uploadEbook' ? 
                        <UploadEbook/>
                    :   <UploadLiveVideo/>
                }
            </div>
        </div>
    )
}

export default ManageWorks;