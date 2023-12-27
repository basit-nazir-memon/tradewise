import React, { useState, useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt } from "@fortawesome/free-solid-svg-icons"; // Change the import
import "./profile.css"

const Profile = ({ userId }) => {
  const [profileInfo, setProfileInfo] = useState({
    "_id": "",
    "username": "",
    "email": "",
    "password": "",
    "role": "",
    "blocked": false,
    "__v": 0,
    "hashtag": []
  });

  const [editingInfo, setEditingInfo] = useState(null);
  const [changes, setChanges] = useState({});

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const response = await fetch(`http://localhost:5000/profile/user/${userId}`);
        if (!response.ok) {
          throw new Error('Failed to fetch user information');
        }
        const user = await response.json();
        setProfileInfo(user);
      } catch (error) {
        console.log("error:" + error);
      }
    };

    fetchUserInfo();
  }, []);

  const labelForInfoKey = (infoKey) => {
    return infoKey.charAt(0).toUpperCase() + infoKey.slice(1);
  };

  const handleEdit = (infoKey) => {
    setEditingInfo(infoKey);
    setChanges({ ...changes, [infoKey]: profileInfo[infoKey] });
  };

  const handleInputChange = (e) => {
    setChanges({ ...changes, [editingInfo]: e.target.value });
  };

  const ProfileInfoItem = ({ infoKey, label, value }) => (
    <div className='info'>
      <label>{label}:</label>
      {editingInfo === infoKey ? (
        <input
          type="text"
          value={changes[infoKey] !== undefined ? changes[infoKey] : profileInfo[infoKey]}
          onChange={handleInputChange}
        />
      ) : (
        <p>{value}</p>
      )}
      <Button variant="primary" className="payment-option" onClick={() => handleEdit(infoKey)}>
        <FontAwesomeIcon icon={faPencilAlt} />
      </Button>
    </div>
  );

  const EditButton = () => (
    <Button variant="secondary" onClick={() => setEditingInfo(null)}>Cancel Edit</Button>
  );

  const SaveButton = () => (
    <Button variant="success" onClick={handleSave} style={{ marginLeft: '10px' }}>Save Changes</Button>
  );

  const handleSave = async () => {
    try {
      // Make a PATCH request to your backend route
      const response = await fetch(`http://localhost:5000/profile/user/${userId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(changes),
      });

      if (!response.ok) {
        console.error('Failed to save changes');
        // Handle error, display a message, etc.
      } else {
        console.log('Changes saved successfully');
        // Handle success, update UI, etc.
      }
    } catch (error) {
      console.error('Error saving changes:', error);
      // Handle error, display a message, etc.
    } finally {
      setEditingInfo(null);
      setChanges({});
    }
  };

  return (
    <div className='personalInfo'>
      {Object.keys(profileInfo).map((infoKey) => (
        <ProfileInfoItem
          key={infoKey}
          infoKey={infoKey}
          label={labelForInfoKey(infoKey)}
          value={profileInfo[infoKey]}
        />
      ))}
      {editingInfo && (
        <div className="editandsavebuttons">
          <EditButton />
          <SaveButton />
        </div>
      )}
    </div>
  );
};

export default Profile;
