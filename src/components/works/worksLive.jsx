import React, {useState, useEffect} from 'react'
import VideoComponent from '../videoComponent';
import { Col, Container, Row } from 'react-bootstrap';
import axios from 'axios';

const WorksLive = () => {
    const [videos, setVideos] = useState([]); 

    useEffect(() => {
        const fetchBlogsData = async () => {
            try {
                const token = localStorage.getItem('token');

                if (token) {
                    const response = await axios.get('http://localhost:5000/works/videos/mine?type=live', {
                        headers: {
                        Authorization: `Bearer ${token}`,
                        },
                    });
                    if (response.data){
                        setVideos(response.data);
                    }
                } else {
                    console.log('Token not found.');
                }
            } catch (error) {
                console.error('Error fetching blogs:', error);
            }
        };
        fetchBlogsData();
    }, []);


    return (
        <Container className='mt-3'>
            <div className="noContentFound" style={{display: videos.length > 0 ? "none" : "flex"}} >
                <img src="https://img.freepik.com/free-vector/flat-design-no-data-illustration_23-2150527142.jpg?w=740&t=st=1702639999~exp=1702640599~hmac=57eaf7377997c5ad7bc2636c7e4961d23db7764e6f2ac3fb2dd8908e33dc5237" alt="No Content Found" />
                <p>No Content Found</p>
            </div>
            <div style={{display: videos.length > 0 ? 'block' : "none"}}>
                <Row xs={1} md={2} lg={3} xl={4} className="g-4">
                    {
                        videos.map((video, index) => {
                            return (
                                <Col>
                                    <VideoComponent key={index} video={video}/>
                                </Col>
                            )
                        })
                    } 
                </Row>
            </div>
        </Container>
    )
}

export default WorksLive;