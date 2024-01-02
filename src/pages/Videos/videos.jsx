import React, {useState, useEffect} from 'react'
import Header from '../../components/header'
import { Button, Col, Container, Row } from 'react-bootstrap';
import './videos.css'
import VideoComponent from '../../components/videoComponent';
import axios from 'axios';

const Videos = () => {
    const [videos, setVideos] = useState([]);
    const [selected, setSelected] = useState('all');

    useEffect(() => {
        const fetchVideosData = async () => {
            try {
                const token = localStorage.getItem('token');
                if (token) {
                    let url;
                    
                    if (selected == 'all'){
                        url = 'http://localhost:5000/works/videos?type=other';
                    }
                    const response = await axios.get(url, {
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
                console.error('Error fetching videos:', error);
            }
        };
        fetchVideosData();
    }, [selected]);

    
    return (
        <>
            <Header/>
            <Container className='mt-3'>
                <div className='mb-3 d-flex'>
                    <Button style={{marginRight: '5px'}} variant={ selected == 'all' ? 'primary' : 'outline-primary'}>All</Button>
                    <Button style={{marginRight: '5px'}} variant={ selected == 'featured' ? 'primary' : 'outline-primary'}>Featured</Button>
                    <Button style={{marginRight: '5px'}} variant={ selected == 'published' ? 'primary' : 'outline-primary'}>Published</Button>
                    <Button style={{marginRight: '5px'}} variant={ selected == 'upcoming' ? 'primary' : 'outline-primary'}>Upcoming</Button>
                </div>
                <div className="noContentFound" style={{display: videos.length > 0 ? "none" : "flex"}} >
                    <img src="https://img.freepik.com/free-vector/flat-design-no-data-illustration_23-2150527142.jpg?w=740&t=st=1702639999~exp=1702640599~hmac=57eaf7377997c5ad7bc2636c7e4961d23db7764e6f2ac3fb2dd8908e33dc5237" alt="No Content Found" />
                    <p>No Content Found</p>
                    <br /><br /><br/><br /><br /><br/>
                </div>
                <div style={{display: videos.length > 0 ? 'block' : "none"}}>
                    <Row xs={1} md={2} lg={3} xl={4} className="g-4">
                        {
                            videos.map((video, index) => {
                                return (
                                    <Col>
                                        <VideoComponent key={index} video={video} isAuthor={false}/>
                                    </Col>
                                )
                            })
                        } 
                    </Row>
                </div>
            </Container>
        </>
    )

}


export default Videos;