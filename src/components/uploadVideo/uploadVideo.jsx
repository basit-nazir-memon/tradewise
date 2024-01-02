import React, {useState} from 'react';
import { Container, Image, Form, Row, Col, InputGroup, Button as Btn, Alert } from 'react-bootstrap';
import { Upload, Button } from 'antd';
import "video-react/dist/video-react.css";
import { Player } from "video-react";
import { Link, useNavigate } from 'react-router-dom';
import './uploadVideo.css';
import TextArea from 'antd/es/input/TextArea';
import axios from 'axios';


const UploadVideo = () => {
    const [videoSrc , seVideoSrc] = useState(null);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [coverImage, setCoverImage] = useState(null);
    const [publishTime, setPublishTime] = useState("Now");
    const [error, setError] = useState("");

    const navigate = useNavigate();

    const handleChange = async ({ file }) => {
        try {
            const formData = new FormData();
            formData.append("file", file.originFileObj);
        
            const response = await axios.post("http://localhost:5000/works/upload/video", formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
            });
        
            if (response.data && response.data.url) {
                seVideoSrc(response.data.url);
                file.status = 'done';
            } else {
            console.error("Invalid response from the server");
            }
        } catch (error) {
            console.error("Error uploading video:", error.message);
        }
    };

    const [validated, setValidated] = useState(false);

    const handleSubmit = async (event) => {
        console.log("checking Validation")
        event.preventDefault();
        
        if (!videoSrc){
            setError("Video File Not Attached");
            return;
        }
        if (!title){
            setError("Video Title is Required!");
            return;
        }
        if (!coverImage){
            setError("Cover Image is Required!");
            return;
        }
        if (!description){
            setError("Description is Required!");
            return;
        }
        if (!publishTime){
            setError("Publish Time is Required!");
            return;
        }


        console.log("validated");
        setValidated(true);
    
        try {
            const formData = new FormData();
            formData.append("videoUrl", videoSrc);
            formData.append("coverImage", coverImage);
            formData.append("title", title);
            formData.append("description", description);
            formData.append("publishTime", publishTime);
        
            const response = await axios.post("http://localhost:5000/works/videos", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                },
            });
        
            console.log("Video uploaded successfully:", response.data);
            navigate('/manage/works');
        } catch (error) {
            setError(error.message);
            console.error("Error uploading video:", error.message);
        }
    };

    const handleCoverImageChange = (event) => {
        setCoverImage(event.target.files[0]);
    };

    return (
        <Container>
            <h3 style={{color: 'tomato'}}>Upload Video</h3>
            <br/>

            {
                error? 
                <Alert variant='danger'>
                    {error}
                </Alert> : ''
            }

            <div className="videoUploadContainer">
                {   videoSrc ? '' :
                    (
                        <>
                            <Image 
                                src='https://wumardan.edu.pk/wp-content/plugins/elementor1/assets/images/placeholder.png'
                                rounded 
                                width={100} 
                            />
                            <h5>Upload your recorded video</h5>
                            <p>Videos should be less than 2G and longer than 10s. Supported file formats: MP4.</p>
                        </>
                    ) 
                }
                <Upload
                    className="mt-3 mb-3"
                    accept=".mp4"
                    listType="picture"
                    maxCount={1}
                    name="file" // Ensure that the field name matches the server's expected field name
                    onChange={handleChange}
                    
                    >
                    <Button danger>
                        Upload
                    </Button>
                </Upload>
                {   videoSrc ? '' :
                    <p>By uploading videos, you agree to our <Link className='remove-link-style'>User Agreement</Link> and <Link className='remove-link-style'>Community Guidelines</Link></p>
                }
            </div>
            
            <Form noValidate validated={validated} onSubmit={handleSubmit} className='videoUploadForm'>
                <Row>
                    <h4>Video Details</h4>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} md="8" controlId="validationCustom01">
                        <Form.Label>Title</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="title"
                            onChange={(e) => setTitle(e.target.value)}
                        />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} md="12" controlId="validationCustom02">
                        <Form.Label>Description</Form.Label>
                        <Form.Control as={TextArea} placeholder="description" required onChange={(e) => setDescription(e.target.value)}/>
                        <Form.Control.Feedback type="invalid">
                            Please provide a description.
                        </Form.Control.Feedback>
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} md="12" controlId="validationCustom03">
                    <Form.Label>Cover Image</Form.Label>
                    <Form.Control type="file" onChange={handleCoverImageChange} required />
                    <Form.Control.Feedback type="invalid">
                        Please provide a valid file.
                    </Form.Control.Feedback>
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} md="6" controlId="validationCustom04">
                        <Form.Label>Publish Time</Form.Label>
                        <Form.Select aria-label="Default select example" onChange={(e) => setPublishTime(e.target.value)}>
                            <option value="1">Now</option>
                            <option value="2">Later</option>
                        </Form.Select>
                        <Form.Control.Feedback type="invalid">
                            Please select an option
                        </Form.Control.Feedback>
                    </Form.Group>
                </Row>
                <Btn type="submit" className='mt-3' variant='outline-primary' style={{width: '200px', alignSelf: 'center'}}>Publish Video</Btn>
            </Form>
        </Container>
    )
}

export default UploadVideo;