import { useState } from 'react';
// import './works.css';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Profile from "./profile";
import PrivacySetting from "./privacySetting";
import NotificationSetting from "./notificationSetting";

function Setting() {
    const [key, setKey] = useState('Profile');

    return (
        <div className="settingContainer">
             <Tabs
                id="worksTabs"
                activeKey={key}
                onSelect={(k) => setKey(k)}
                className="mb-6"
            >
                <Tab eventKey="Profile" title="Profile">
                    <Profile userId={"6550a3f5ed0d8b0663dc8963"}/>
                </Tab>
                <Tab eventKey="PrivacySetting" title="Privacy Settings">
                    <PrivacySetting/>
                </Tab>
                <Tab eventKey="NotificationSetting" title="Notification Settings">
                    <NotificationSetting/>
                </Tab>
                
            </Tabs>
        </div>
        
    );
}

export default Setting;