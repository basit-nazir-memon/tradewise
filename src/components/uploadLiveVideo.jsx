import React from 'react'
import {Row} from 'react-bootstrap'
import { Button } from 'antd'


const UploadLiveVideo = () => {

    return (
        <>
            <Row md={3} xs={1} style={{width: '100%', '--bs-gutter-x': '0rem', border: '1px solid lightgray', padding: '10px 15px', display: 'flex', flexDirection: 'column'}}>
                <h5>Stream Settings</h5>
                <br />
                <video width="400" controls>
                    <source
                    src={""}
                    type={""}
                    />
                    Your browser does not support HTML5 video.
                </video>
                <br />
                <hr />
                <div className="mb-3">
                    <label><strong>Server URL</strong></label>
                    <input
                        type='url'
                        className="form-control"
                        placeholder="Enter server url"
                    />
                </div>
                <div className="mb-3">
                    <label><strong>Stream Key</strong></label>
                    <input
                        type='text'
                        className="form-control"
                        placeholder="Enter stream key"
                    />
                </div>
            </Row>
            <Row md={3} xs={1} style={{width: '100%', '--bs-gutter-x': '0rem', border: '1px solid lightgray', padding: '10px 15px', display: 'flex', flexDirection: 'column'}}>
                <h5>Details</h5>
                <div className="mb-3">
                    <label><strong>Title</strong></label>
                    <input
                        type='url'
                        className="form-control"
                        placeholder="Enter server url"
                    />
                </div>
                <div className="mb-3">
                    <label><strong>Introduction</strong></label>
                    <input
                        type='text'
                        className="form-control"
                        placeholder="Enter stream key"
                    />
                </div>
                <div className="mb-3">
                    <label><strong>Notice</strong></label>
                    <input
                        type='text'
                        className="form-control"
                        placeholder="Enter stream key"
                    />
                </div>
                <div className="mb-3">
                    <label><strong>Cover</strong></label>
                    <input
                        type='file'
                        className="form-control"
                        placeholder="Enter stream key"
                    />
                </div>
                <Button type='primary' danger style={{alignSelf:'flex-end'}}>Publish</Button>
            </Row>
        </>
    )

}


export default UploadLiveVideo;