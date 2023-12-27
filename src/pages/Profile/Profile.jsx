import React, {useState, useEffect} from 'react'
import { Button, Card, Image, Tab, Tabs } from 'react-bootstrap';
import './profile.css'
import WorksLive from '../../components/works/worksLive';
import { useParams } from 'react-router-dom';
import WorksVideos from '../../components/works/worksVideos';
import WorksEbooks from '../../components/works/worksEbooks';
import axios from 'axios';

const ChannelProfile = () => {

    const starCount = 5;
    const filledStar = '\u2605';
    const [key, setKey] = useState('live');
    const { id } = useParams();

    const [profileData, setProfileData] = useState({name: ""})

    useEffect(() => {
        const fetchData = async () => {
            try {
                const token = localStorage.getItem('token');
                let url;
                if (id){
                    console.log("Id Entered");
                    url = `http://localhost:5000/users/${id}`
                }else{
                    console.log("Entered");
                    url = 'http://localhost:5000/user/me'
                }

                const response = await axios.get(url, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                if (response.data){
                    setProfileData(response.data);
                    console.log(response.data);
                }
            } catch (error) {
                console.error('Error fetching user profile:', error);
            }
        };
        fetchData();
    }, []);

    return (
        <>
            <div style={{width: '100%', height: '150px'}}>
                <Image src='https://img.trading.live/prod/image/2022/09/4EE6EDE9F8494C2FA30B8CB99F68E54F.webp' style={{width: "100%", height: '100%'}}/>
            </div>
            <div className="profileInfo">
                <div className="profileInfoLeft">
                    <div className="profileInfoLeftPic">
                        <Image width={100} roundedCircle src={profileData.profilePic}/>
                    </div>
                    <div className="profileInfoLeftDetails">
                        <div className="profileInfoLeftDetailsTop">{profileData.fullName}</div>
                        <div className="profileInfoLeftDetailsBottom"><b>{profileData.works}</b>{" work   "} <b>0</b>{" subscribers"}</div>
                    </div>
                </div>
                <div className="profileInfoRight">
                    <div style={{ display: 'flex', flexDirection: 'column'}}>
                            <div style={{ display: 'flex', justifyContent: 'space-between'}}>
                                <div >
                                    <Card.Title style={{ color: '#fb4d1f', fontSize: '40px', fontStyle: 'italic' }}>{profileData.rating}</Card.Title>
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'column' }}>
                                    <span style={{ color: '#fb4d1f', fontSize: '24px' }}>{filledStar.repeat(starCount)}</span>
                                    <span style={{ color: '#fb4d1f', fontSize: '14px' }}>{profileData.rating} ratings</span>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
            <Tabs
                id="worksTabs"
                activeKey={key}
                onSelect={(k) => setKey(k)}
                className="mb-6 mt-3"
            >
                <Tab eventKey="live" title="Live">
                    <WorksLive id={id}/>
                </Tab>
                <Tab eventKey="videos" title="Videos">
                    <WorksVideos id={id}/>
                </Tab>
                <Tab eventKey="ebooks" title="Ebooks">
                    <WorksEbooks id={id}/>
                </Tab>
            </Tabs>
        </>
    )
}

export default ChannelProfile;