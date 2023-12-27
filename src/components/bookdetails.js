import React from 'react';
import { Image, Card, Button } from 'react-bootstrap';

const Bookdetails = ({ bookImageUrl, bookDescription, writerImageUrl, writerName ,views}) => {
    return (
        <Card className='book-card' style={{ width: '23%', height: 'auto', minHeight: '300px', marginBottom: '4%' }}>
            <Card.Body style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Card.ImgOverlay >
                    <Button size='sm' style={{ position: 'absolute', top: '7%', right: '19%', backgroundColor: '#3ccc6d', borderColor: '#3ccc6d' }}>Free</Button>
                    <span style={{ color: 'white', position: 'absolute', top: '59%', left: '29%' }}>{views}</span>
                </Card.ImgOverlay>
                <Image src={bookImageUrl} alt="Image" style={{ width: '200px', height: '250px', borderRadius: '7%', marginBottom: '15px' }} />
                <div style={{ textAlign: 'center', overflow: 'hidden', textOverflow: 'ellipsis', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' }}>
                    {bookDescription}
                </div>
                <div style={{ display: 'flex', alignItems: 'center', marginTop: '5%' }}>
                    <Image
                        src={writerImageUrl}
                        roundedCircle
                        style={{ width: '35px', height: '35px', marginRight: '15px' }}
                        alt="Profile Image"
                    />
                    <div style={{ fontSize: '12px' }}>{writerName}</div>
                </div>
            </Card.Body>
        </Card>

    );
};

export default Bookdetails;
