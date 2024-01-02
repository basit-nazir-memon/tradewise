import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Image } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';

const VideoComponent = ({video, isAuthor, handleDelete}) => {

    return (
        <Card style={{margin: '5px'}}>
            <Card.Img
                variant="top"
                src={video.coverImage}
                style={{
                width: '100%',
                height: '150px',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                }}
            />
            <Button variant={video.type === "Live" ? "danger" : video.type === "Upcoming" ? "success" : "warning"} size='sm' style={{ right: '10px', position: 'absolute', top:'5px' }}>{video.type}</Button>
            <Card.Body>
                <Card.Title>{video.title}</Card.Title>
                <div style={{ display: 'flex', margin: '5px 0'}}>
                    <Image
                        src={video.authorProfilePic}
                        roundedCircle
                        style={{ width: '30px', height: '30px' }}
                        alt="Profile Image"
                    />
                    &nbsp;
                    <Card.Link href={`/profile/${video.authorId}`}>{video.authorName}</Card.Link>
                </div>
                <Card.Text>{video.views} views</Card.Text>
            </Card.Body>
            {
                isAuthor? 
                    <Card.Footer style={{display: 'flex', justifyContent: 'flex-end'}}>
                        <Button style={{marginRight: '5px'}} variant='outline-danger' onClick={() => handleDelete(video._id)}>
                            <FontAwesomeIcon icon={faTrash}/>
                        </Button>
                        <Button variant='outline-warning'>
                            <FontAwesomeIcon icon={faPenToSquare}/>
                        </Button>
                    </Card.Footer>
                : ''
            }
        </Card>
    );
}

export default VideoComponent;