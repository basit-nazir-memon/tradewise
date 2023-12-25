import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Image } from 'react-bootstrap';

function Groups({ title, name }) {
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
            src="https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D"
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
