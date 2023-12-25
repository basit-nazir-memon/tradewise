import React, {useState} from 'react';
import { Container, Image, Form, Row, Col, InputGroup, Button as Btn } from 'react-bootstrap';
import { Upload, Button } from 'antd';
import "video-react/dist/video-react.css";
import { Player } from "video-react";
import { Link } from 'react-router-dom';
import './uploadVideo.css';
import TextArea from 'antd/es/input/TextArea';


const UploadVideo = () => {
    const [videoSrc , seVideoSrc] = useState("");

    const handleChange = ({file}) => {
        var reader = new FileReader();
        console.log(file)
        var url = URL.createObjectURL(file.originFileObj);
        seVideoSrc(url);
    };

    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };

    return (
        <Container>
            <h3 style={{color: 'tomato'}}>Upload Video</h3>
            <br/>
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
                <Upload className="mt-3 mb-3"
                    accept=".mp4"
                    action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                    listType="picture"
                    maxCount={1}
                    onChange={handleChange}>
                    <Button danger>
                        Upload
                    </Button>
                </Upload>
                {   videoSrc ? '' :
                    <p>By uploading videos, you agree to our <Link className='remove-link-style'>User Agreement</Link> and <Link className='remove-link-style'>Community Guidelines</Link></p>
                }
            </div>
            <Form noValidate validated={validated} onSubmit={handleSubmit} style={{maxWidth: '70%'}}>
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
                        />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} md="12" controlId="validationCustom02">
                        <Form.Label>Description</Form.Label>
                        <Form.Control as={TextArea} placeholder="description" required />
                        <Form.Control.Feedback type="invalid">
                            Please provide a description city.
                        </Form.Control.Feedback>
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} md="12" controlId="validationCustom03">
                    <Form.Label>Cover Image</Form.Label>
                    <Form.Control type="file" required />
                    <Form.Control.Feedback type="invalid">
                        Please provide a valid file.
                    </Form.Control.Feedback>
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} md="6" controlId="validationCustom04">
                        <Form.Label>Publish Time</Form.Label>
                        <Form.Select aria-label="Default select example">
                            <option value="1">Now</option>
                            <option value="2">Later</option>
                        </Form.Select>
                        <Form.Control.Feedback type="invalid">
                            Please select an option
                        </Form.Control.Feedback>
                    </Form.Group>
                </Row>
                <Btn type="submit" className='mt-3' variant='outline-primary' style={{width: '200px'}}>Submit form</Btn>
            </Form>


            

            

        </Container>
    )
}

export default UploadVideo;