import Carousel from 'react-bootstrap/Carousel';

function DarkVariantExample() {
    const content = [
        {
            imagesrc: "https://images.unsplash.com/photo-1544967082-d9d25d867d66?q=80&w=2680&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            tag: "First Slide label",
            description: "Nulla vitae elit libero, a pharetra augue mollis interdum."
        },
        {
            imagesrc: "https://images.unsplash.com/photo-1611197072011-736d9b407c8b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D",
            tag: "Second Slide label",
            description: "Nulla vitae elit libero, a pharetra augue mollis interdum."
        },
        {
            imagesrc: "https://images.unsplash.com/photo-1629788959554-ef4502a45e7d?q=80&w=2545&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            tag: "Third Slide label",
            description: "Nulla vitae elit libero, a pharetra augue mollis interdum."
        },

    ]
    let renderitems;
    renderitems = content.map((item) => (
        <Carousel.Item>
            <img
                className="d-block w-100"
                src={item.imagesrc}
                alt="loading"
                style={{ width: '100%', height: '300px' }}
            />
            <Carousel.Caption>
                <h5>{item.tag}</h5>
                <p>{item.description}</p>
            </Carousel.Caption>
        </Carousel.Item>
    ));
    return (

        <div style={{ maxWidth: '100%', maxHeight: '50%' }}>
            <Carousel >
                {renderitems}
            </Carousel>
        </div>
    );
}
export default DarkVariantExample;
