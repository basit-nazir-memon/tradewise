import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Image } from 'react-bootstrap';
function Comm() {
    return (
        <Card style={{ width: '20%', height: 'auto' }}>
            <Card.Body>
                <Card.Title>What nonsense have you heard in training</Card.Title>
                <div style={{ display: 'flex', }}>
                    <div style={{ display: 'flex', alignItems: 'center', marginRight: '10px' }}>
                        <Image
                            src="https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D"
                            roundedCircle
                            style={{ width: '30px', height: '30px' }}
                            alt="Profile Image"
                        />
                    </div>
                    <div style={{ fontSize: '10px', marginTop: '2%' }}>554 votes</div>
                </div>
                <Card style={{marginTop:'3%'}}>
                    <Card.Body className="multiline-ellipsis" >
                        Looking back at the foreign exchange market investment circle, it is like a small society without strict rules. There are all kinds of bulls, horses, snakes, gods, and ghosts. Every novice entering the foreign exchange market will always hear some "ghost stories". ? #Do you have any "hell" experience? Let's talk together
                    </Card.Body>
                </Card>

                <div className='communitybtn'>
                    <Button variant="danger" style={{ padding: '2% 25%' ,marginTop:'4%'}}>Answer</Button>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', marginRight: '10px' }}>

                </div>
            </Card.Body>
        </Card>
    );
}

export default Comm;