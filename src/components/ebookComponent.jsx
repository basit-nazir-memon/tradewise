import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const EbookComponent = ({ebook}) => {
    return (
        <Link to={`/ebooks/${ebook.id}`} style={{textDecoration: 'none'}}>
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
                    <Card.Title>{ebook.title}</Card.Title>
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
            </Card>
        </Link>
    );
}

export default EbookComponent;