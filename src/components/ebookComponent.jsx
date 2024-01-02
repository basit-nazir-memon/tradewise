import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';

const EbookComponent = ({ebook, isAuthor, handleDelete}) => {
    return (
        
            <Card style={{margin: '5px'}}>
                <Card.Img
                    variant="top"
                    src={ebook.coverImage}
                    style={{
                        marginLeft: '15%',
                        width: '70%',
                        height: '150px',
                        backgroundRepeat: 'no-repeat',
                        borderRadius: '5px'
                    }}
                />
                <Button variant={ebook.type === "Free" ? "success" : "warning"} size='sm' style={{ right: '10px', position: 'absolute', top:'5px' }}>{ebook.type}</Button>
                <Card.Body>
                    <Link to={`/ebooks/${ebook.id}`} style={{textDecoration: 'none'}}>
                        <Card.Title>{ebook.title}</Card.Title>
                    </Link>
                    <div style={{ display: 'flex', margin: '5px 0'}}>
                        <Image
                            src={ebook.authorProfilePic}
                            roundedCircle
                            style={{ width: '30px', height: '30px' }}
                            alt="Profile Image"
                        />
                        &nbsp;
                        <Card.Link href={`/profile/${ebook.authorId}`}>{ebook.authorName}</Card.Link>
                    </div>
                </Card.Body>
                {
                    isAuthor? 
                        <Card.Footer style={{display: 'flex', justifyContent: 'flex-end'}}>
                            <Button style={{marginRight: '5px'}} variant='outline-danger' onClick={(e) => handleDelete(e, ebook._id)}>
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

export default EbookComponent;