
import { Card, Image, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
function Lecdiv({ imageUrl, title, description, works, subscribers, rating }) {
    const starCount = 5;
    const filledStar = '\u2605';
    return (
        <>
            <Card className="Lecdiv" style={{ marginBottom: '2%' }}>
                <Card.Body>
                    <div style={{ marginBottom: '2%' }}>
                        <div style={{ display: 'flex' }}>
                            <Image src={imageUrl} alt="Image" roundedCircle style={{ width: '130px', height: '120px' }} />
                            <div className="Lecdiv-divs" style={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}>
                                <div style={{ display: 'flex', flexDirection: 'column', width: '23%', marginLeft: '5%' }}>
                                    <Card.Title style={{ marginTop: '15%' }}>{title}</Card.Title>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                                        <div>
                                            <Card.Text>{works} Works</Card.Text>
                                        </div>
                                        <div>
                                            <Card.Text>{subscribers} Subscribers</Card.Text>
                                        </div>
                                    </div>
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'column', width: '20%', marginLeft: '5%' ,marginTop:'3%'}}>
                                    <Button style={{ backgroundColor: '#fb4d1f', borderColor: '#fb4d1f' }}>+Subscribe</Button>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' ,marginTop:'2%'}}>
                                        <div >
                                            <Card.Title style={{ color: '#fb4d1f', fontSize: '40px', fontStyle: 'italic' }}>{rating}</Card.Title>
                                        </div>
                                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                                            <span style={{ color: '#fb4d1f', fontSize: '24px' }}>{filledStar.repeat(starCount)}</span>
                                            <span style={{ color: '#fb4d1f', fontSize: '14px' }}>11234 ratings</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="Lecbtn">
                        <Link to="/forex">Forex</Link>
                        <Link to="/trading">Trading</Link>
                        <Link to="/verified">Verified</Link>
                    </div>
                    <div>
                        <Card.Text>{description}</Card.Text>
                    </div>
                </Card.Body>
            </Card>
        </>
    )

}
export default Lecdiv;