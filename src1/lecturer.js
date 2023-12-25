import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Image } from 'react-bootstrap';

function ImageDescription({ imageSrc, name, description }) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <Card
      style={{ width: '23%', marginTop: '3%', textAlign: 'center' }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Card.Body>
        <div style={{ marginBottom: '10px' }}>
          <Image src={imageSrc} alt="Image" style={{ width: '150px', height: '150px', borderRadius: '50%' }} />
        </div>
        <Card.Title>{name}</Card.Title>
        <hr style={{ width: '50%', margin: 'auto' }} />
        <Card.Text style={{ maxHeight: isHovered ? 'none' : '120px', overflow: 'hidden', textOverflow: 'ellipsis', display: '-webkit-box', '-webkit-line-clamp': '6', '-webkit-box-orient': 'vertical' }}>
          {description}
        </Card.Text>
        {isHovered && (
          <Card.Text style={{ whiteSpace: 'pre-line' }}>{description}</Card.Text>
        )}
        <Button variant="danger" style={{ display: 'block', margin: 'auto', marginTop: '10px' }}>
          Subscribe
        </Button>
      </Card.Body>
    </Card>
  );
}

export default ImageDescription;
