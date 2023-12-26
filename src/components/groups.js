import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Image } from 'react-bootstrap';

function Groups({ title, name ,imagesrc}) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <Card
      style={{ width: '23%', marginTop: '3%', backgroundColor: isHovered ? '#f9f9f9' : 'transparent' }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Card.Body style={{ display: 'flex' }}>
        <div style={{ display: 'flex', alignItems: 'center', marginRight: '10px' }}>
          <Image
            src={imagesrc}
            style={{ width: '48px', height: '48px', borderRadius: '8px' }}
            alt="Profile Image"
          />
        </div>
        <div>
          <Card.Title>{title}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{name} members</Card.Subtitle>
        </div>
        <div style={{ marginLeft: 'auto' }}>
          {isHovered && (
            <Button >
              Join
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}

export default Groups;
