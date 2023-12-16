import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

function WithHeaderExample({ header, title, text, color }) {
    return (
        <Card style={{ width: '45%' }}>
            <Card.Header style={{ height: '70px', borderBottomLeftRadius: '8px', borderBottomRightRadius: '8px', backgroundColor: `${color}`, color: 'white' }}>{header}</Card.Header>
            <Card.Body style={{ backgroundColor: '#f0f0f0' }}>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {text}
                </Card.Text>
                <Button
                    variant="primary"
                    onMouseEnter={(e) => (e.target.style.transform = 'scale(1.05)')} // Scale the button on hover
                    onMouseLeave={(e) => (e.target.style.transform = 'scale(1)')} // Revert scale on hover out
                    style={{ marginRight: '3%' ,marginTop:'1%'}} 
                >
                    Beginner
                </Button>
                <Button
                    variant="success"
                    onMouseEnter={(e) => (e.target.style.transform = 'scale(1.05)')} 
                    onMouseLeave={(e) => (e.target.style.transform = 'scale(1)')} 
                    style={{ marginRight: '3%' ,marginTop:'1%'}} 
                >
                    Intermediate
                </Button>
                <Button
                    variant="danger"
                    onMouseEnter={(e) => (e.target.style.transform = 'scale(1.05)')} 
                    onMouseLeave={(e) => (e.target.style.transform = 'scale(1)')}
                    style={{ marginTop:'2%'}} 
                >
                    Advanced
                </Button>{'           '}
            </Card.Body>
        </Card>

    );
}
export default WithHeaderExample;