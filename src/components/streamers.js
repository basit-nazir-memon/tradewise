import ListGroup from 'react-bootstrap/ListGroup';

function Streamers({ content }) {
    if (!content || content.length === 0) {
        return (
            <ListGroup as="ol" numbered style={{ width: '80%', height: '300px', overflowY: 'auto' }}>
                <ListGroup.Item
                    as="li"
                    className="d-flex justify-content-between align-items-start"
                >
                    <div className="ms-2 me-auto">
                        <div className="fw-bold">Content not Available</div>
                    </div>
                </ListGroup.Item>
            </ListGroup>
        )
    }
    return (
        <ListGroup as="ol" numbered style={{ width: '80%', height: '300px', overflowY: 'auto' }}>
            {content.map((item, index) => (
                <ListGroup.Item
                    as="li"
                    key={index} 
                    className="d-flex justify-content-between align-items-start"
                >
                    <div className="ms-2 me-auto">
                        <div className="fw-bold">{item.name}</div>
                        {item.description}
                    </div>
                </ListGroup.Item>
            ))}
        </ListGroup>
    );
}

export default Streamers;
