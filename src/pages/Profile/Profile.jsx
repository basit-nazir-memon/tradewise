import React, {useState} from 'react'
import { Button, Card, Image, Tab, Tabs } from 'react-bootstrap';
import './profile.css'
import WorksLive from '../../components/works/worksLive';
import { useParams } from 'react-router-dom';
import WorksVideos from '../../components/works/worksVideos';
import WorksEbooks from '../../components/works/worksEbooks';

const ChannelProfile = () => {

    const starCount = 5;
    const filledStar = '\u2605';
    const [key, setKey] = useState('live');
    const { id } = useParams();

    return (
        <>
            <div style={{width: '100%', height: '150px'}}>
                <Image src='https://img.trading.live/prod/image/2022/09/4EE6EDE9F8494C2FA30B8CB99F68E54F.webp' style={{width: "100%", height: '100%'}}/>
            </div>
            <div className="profileInfo">
                <div className="profileInfoLeft">
                    <div className="profileInfoLeftPic">
                        <Image roundedCircle src='https://img.trading.live/2753a7/4ba8d3/f4cc88a8e28742bb96f6c6342d7df492'/>
                    </div>
                    <div className="profileInfoLeftDetails">
                        <div className="profileInfoLeftDetailsTop">Basit Nazir</div>
                        <div className="profileInfoLeftDetailsBottom"><b>0</b>{" work   "} <b>0</b>{" subscribers"}</div>
                    </div>
                </div>
                <div className="profileInfoRight">
                    <div style={{ display: 'flex', flexDirection: 'column'}}>
                            <div style={{ display: 'flex', justifyContent: 'space-between'}}>
                                <div >
                                    <Card.Title style={{ color: '#fb4d1f', fontSize: '40px', fontStyle: 'italic' }}>{'0.0'}</Card.Title>
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'column' }}>
                                    <span style={{ color: '#fb4d1f', fontSize: '24px' }}>{filledStar.repeat(starCount)}</span>
                                    <span style={{ color: '#fb4d1f', fontSize: '14px' }}>11234 ratings</span>
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