import React, { useState } from 'react'
import {Alert, Container, Row} from 'react-bootstrap'
import { Button } from 'antd'
import { ControlBar, Player } from 'video-react';
import { InboxOutlined } from '@ant-design/icons';
import axios from 'axios';
import { useNavigate } from 'react-router';
import Dragger from 'antd/es/upload/Dragger';


const UploadLiveVideo = () => {
    const [serverUrl, setServerUrl] = useState("");
    const [streamKey, setStreamKey] = useState("");
    const [title, setTitle] = useState("");
    const [introduction, setIntroduction] = useState("");
    const [coverImage, setCoverImage] = useState("");
    const [error, setError] = useState("");

    const navigate = useNavigate();


    const handleSubmit = async (event) => {
        event.preventDefault();
        
        if (!title){
            setError("Title is Required!");
            return;
        }
        if (!serverUrl){
            setError("Server Url is Required!");
            return;
        }
        if (!streamKey){
            setError("Stream Key is Required!");
            return;
        }
        if (!introduction){
            setError("Introduction is Required!");
            return;
        }
        if (!coverImage){
            setError("Cover Image is Required!");
            return;
        }

        setError("");

        try {

            const response = await axios.post("http://localhost:5000/works/videos/live", {
                serverUrl: serverUrl,
                streamKey: streamKey,
                title: title,
                coverImage: coverImage,
                introduction: introduction,
            }, {
                headers: {
                    "Content-Type": "application/json", // Set content type to JSON
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                },
            });

        
            console.log("Video uploaded successfully:", response.data);
            navigate('/manage/works');
        } catch (error) {
            setError(error.message);
            console.error("Error uploading ebook:", error.message);
        }
    }

    const handleChange = async ({ file }) => {
        try {
            const formData = new FormData();
            formData.append("file", file.originFileObj);
        
            const response = await axios.post("http://localhost:5000/works/upload/image", formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
            });
        
            if (response.data && response.data.url) {
                setCoverImage(response.data.url);
                console.log(response.data.url);
                file.status = 'done';
            } else {
                console.log("Invalid response from the server");
            }
        } catch (error) {
            console.log("Error uploading image:", error.message);
        }
    };


    return (
        <>
            <Row md={3} xs={1} style={{width: '100%', '--bs-gutter-x': '0rem', border: '1px solid lightgray', padding: '10px 15px', display: 'flex', flexDirection: 'column'}}>
                <h5>Stream Settings</h5>
                <br />

                {
                    error ?
                    <Container style={{width: '90%'}} className='mt-3'>
                        <Alert variant='danger'>
                            {error}
                        </Alert>
                    </Container>
                    : ''
                }

                <Player fluid={false} width={500}>
                    <source src={`${serverUrl}/${streamKey}`} />
                </Player>
                <br />
                <hr />
                <div className="mb-3">
                    <label><strong>Server URL</strong></label>
                    <input
                        type='url'
                        className="form-control"
                        placeholder="Enter server url"
                        onChange={(e)=> setServerUrl(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label><strong>Stream Key</strong></label>
                    <input
                        type='text'
                        className="form-control"
                        placeholder="Enter stream key"
                        onChange={(e)=> setStreamKey(e.target.value)}
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
                        onChange={(e)=> setTitle(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label><strong>Introduction</strong></label>
                    <input
                        type='text'
                        className="form-control"
                        placeholder="Enter stream key"
                        onChange={(e)=> setIntroduction(e.target.value)}
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
                    <Dragger 
                            accept=".png"
                            listType="picture"
                            maxCount={1}
                            name="file" // Ensure that the field name matches the server's expected field name
                            onChange={handleChange}
                            onDrop = {(e) => {
                                console.log('Dropped files', e.dataTransfer.files)
                            }}
                        >
                            <p className="ant-upload-drag-icon">
                            <InboxOutlined />
                            </p>
                            <p className="ant-upload-text">Click or drag file to this area to upload</p>
                            <p className="ant-upload-hint">
                                Uploading high resolution image is recommended!
                            </p>
                        </Dragger>
                </div>
                <Button type='primary'onClick={handleSubmit} danger style={{alignSelf:'flex-end'}}>Publish</Button>
            </Row>
        </>
    )

}


export default UploadLiveVideo;