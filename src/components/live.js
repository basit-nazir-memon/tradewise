import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Image } from 'react-bootstrap';

function BasicExample({ title, name, source,imagesrc }) {
  return (
    <Card style={{ width: '25%', height: '10%', }}>
      <Card.Img
        variant="top"
        src={source}
        style={{
          width: '100%',
          height: '150px',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      />
      <Card.ImgOverlay>
        <Button variant="danger" size='sm' style={{ right: '10px' }}>Live</Button>
      </Card.ImgOverlay>
      <Card.Body style={{ display: 'flex', flexDirection: 'column', minHeight: '50px' }}>
        <div style={{ flex: 1 }}>
          <div style={{ display: 'flex', alignItems: 'center', marginRight: '10px' }}>
            <Image
              src={imagesrc}
              roundedCircle
              style={{ width: '30px', height: '30px' }}
              alt="Profile Image"
            />
          </div>
          <div>
            <Card.Text>{title}</Card.Text>
          </div>
        </div>
        <div style={{ fontSize: '12px' }}>
          <Card.Text>{name}</Card.Text>
        </div>
      </Card.Body>
    </Card>

  );
}

export default BasicExample;