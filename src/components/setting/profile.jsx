import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaypal, faCcVisa, faCcMastercard } from "@fortawesome/free-brands-svg-icons";
import "./profile.css"

const Profile = () => {
  const [profileInfo, setProfileInfo] = useState({
    avatar: 'https://static.vecteezy',
    name: 'John Doe',
    username: 'John123',
    gender: 'Male',
    hashtag: 'tech  explode panicked',
    Date_of_birth:"2014-1-1",
    location:"isalamabd",
    email: 'john.doe@example.com',
    bio: 'I love coding and exploring new technologies.',
  });

  const [editingInfo, setEditingInfo] = useState(null);

  const labelForInfoKey = (infoKey) => {
    return infoKey.charAt(0).toUpperCase() + infoKey.slice(1);
  };

  const ProfileInfoItem = ({ infoKey, label, value, onEdit }) => (
    <div className='info'>
      <label>{label}:</label>
      {editingInfo === infoKey ? (
        <input
          type="text"
          value={profileInfo[infoKey]}
          onChange={(e) => setProfileInfo({ ...profileInfo, [infoKey]: e.target.value })}
        />
      ) : (
        <p>{value}</p>
      )}
      <Button variant="primary" className="payment-option" onClick={onEdit}>
        <FontAwesomeIcon icon={faPaypal} />
      </Button>
    </div>
  );

  const EditButton = ({ onEdit }) => (
    <Button variant="secondary" onClick={onEdit}>Cancel Edit</Button>
  );

  const SaveButton = ({ onSave }) => (
    <Button variant="success" onClick={onSave}>Save Changes</Button>
  );

  return (
    <div className='personalInfo'>
      {Object.keys(profileInfo).map((infoKey) => (
        <ProfileInfoItem
          key={infoKey}
          infoKey={infoKey}
          label={labelForInfoKey(infoKey)}
          value={profileInfo[infoKey]}
          onEdit={() => setEditingInfo(infoKey)}
        />
      ))}
      {editingInfo && (
        <div class="editandsavebuttons">
          <EditButton className="editbutton" onEdit={() => setEditingInfo(null)} />
          <SaveButton className="savebutton"
            onSave={() => {
              console.log('Saving changes...');
              setEditingInfo(null);
            }}
          />
        </div>
      )}
    </div>
  );
};

export default Profile;
