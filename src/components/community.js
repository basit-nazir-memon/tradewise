import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Image } from 'react-bootstrap';
function Comm({ title, imagesource, description, votes }) {
    return (
        <Card style={{ width: '20%', height: 'auto' }}>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <div style={{ display: 'flex', }}>
                    <div style={{ display: 'flex', alignItems: 'center', marginRight: '10px' }}>
                        <Image

                            src={imagesource}
                            roundedCircle
                            style={{ width: '30px', height: '30px' }}
                            alt="Profile Image"
                        />
                    </div>
                    <div style={{ fontSize: '10px', marginTop: '2%' }}>{votes}</div>
                </div>
                <Card style={{ marginTop: '3%' }}>
                    <Card.Body className="multiline-ellipsis" >
                        {description}
                  
                    </Card.Body>
                </Card>

                <div className='communitybtn'>
                    <Button variant="danger" style={{ padding: '2% 25%', marginTop: '4%' }}>Answer</Button>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', marginRight: '10px' }}>

                </div>
            </Card.Body>
        </Card>
    );
}

export default Comm;