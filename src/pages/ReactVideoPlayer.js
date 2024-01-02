import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import { Card, Row, Col, Image, ListGroup, Form, Button, Container } from 'react-bootstrap';
const ReactVideoPlayerWithComments = ({
    url="https://www.youtube.com/watch?v=slBxM4J3BEA",
    title="Video Title : ",
    description="Video description : ",
    author="Author's Name : ",
    coverImage="your-cover-image-url",
    authorImageUrl="https://img1.hscicdn.com/image/upload/f_auto,t_ds_w_1280,q_70/lsci/db/PICTURES/CMS/331500/331576.jpg",
    disabled=false,
    type="Live",
    views=12345
}) => {
    const [comments, setComments] = useState([]);
    const [commentText, setCommentText] = useState('');
    const [rating, setRating] = useState(0); // State for rating

    const authorImageStyle = {
        width: '40px',
        height: '40px'
    };

    const playerWrapperStyle = {
        position: 'relative',
        paddingTop: '56.25%' // for 16:9 aspect ratio
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (commentText.trim()) {
            setComments([...comments, commentText]);
            setCommentText('');
        }
    };

    const handleRating = (rate) => {
        setRating(rate);
    };

    const renderRatingStars = () => {
        let stars = [];
        for (let i = 1; i <= 5; i++) {
            stars.push(
                <Button
                    key={i}
                    variant={i <= rating ? 'warning' : 'secondary'}
                    onClick={() => handleRating(i)}
                    className="me-1"
                >
                    ★
                </Button>
            );
        }
        return stars;
    };

    return (
        <Container>
            <Card className="my-3" style={{ maxWidth: '800px', margin: 'auto' }}>
                {coverImage && <Card.Img variant="top" src={coverImage} />}
                <div style={playerWrapperStyle}>
                    <ReactPlayer
                        style={{ position: 'absolute', top: 0, left: 0 }}
                        url={url}
                        playing={!disabled}
                        controls
                        width='100%'
                        height='100%'
                        loop={type === 'Live'}
                        config={{
                            youtube: { playerVars: { autoplay: 1, loop: 1 } },
                            vimeo: { playerOptions: { autoplay: 1, loop: 1 } }
                        }}
                    />
                </div>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>{description}</Card.Text>
                    <Row className="align-items-center mt-2">
                        <Col xs={2}>
                            <Image src={authorImageUrl} alt="Author" roundedCircle fluid style={authorImageStyle} />
                        </Col>
                        <Col>
                            <p className="mb-0">{author}</p>
                            <small>Type: {type} | Views: {views}</small>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>

            {/* Rating Section */}
            <Row className="justify-content-md-center my-3">
                <Col md="auto">
                    <h5>Rate this video:</h5>
                    <div>{renderRatingStars()}</div>
                </Col>
            </Row>

            {/* Comments Section */}
            <Card className="mt-3">
                <Card.Header>Comments</Card.Header>
                <ListGroup variant="flush">
                    {comments.map((comment, index) => (
                        <ListGroup.Item key={index}>{comment}</ListGroup.Item>
                    ))}
                </ListGroup>
                <Card.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="comment">
                            <Form.Control
                                as="textarea"
                                rows={3}
                                value={commentText}
                                onChange={(e) => setCommentText(e.target.value)}
                                placeholder="Write a comment..."
                            />
                        </Form.Group>
                        <Button
                            variant="primary"
                            type="submit"
                            className="mt-2"
                            style={{ backgroundColor: 'orange', borderColor: 'orange' }}
                        >
                            Submit Comment
                        </Button>

                    </Form>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default ReactVideoPlayerWithComments;
