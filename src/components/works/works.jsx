import { useState } from 'react';
import './works.css';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import WorksLive from './worksLive';
import WorksVideos from './worksVideos';
import WorksEbooks from './worksEbooks';
import WorksQuestion from './worksQuestion';
import WorksAnswer from './worksAnswer';

function Works() {
    const [key, setKey] = useState('live');

    return (
        <div className="worksContainer">
            <Tabs
                id="worksTabs"
                activeKey={key}
                onSelect={(k) => setKey(k)}
                className="mb-6"
            >
                <Tab eventKey="live" title="Live">
                    <WorksLive/>
                </Tab>
                <Tab eventKey="videos" title="Videos">
                    <WorksVideos/>
                </Tab>
                <Tab eventKey="ebooks" title="Ebooks">
                    <WorksEbooks/>
                </Tab>
                <Tab eventKey="question" title="Question">
                    <WorksQuestion/>
                </Tab>
                <Tab eventKey="answer" title="Answer">
                    <WorksAnswer/>
                </Tab>
            </Tabs>
        </div>
        
    );
}

export default Works;