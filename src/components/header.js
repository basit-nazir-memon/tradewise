import Carousel from 'react-bootstrap/Carousel';

function DarkVariantExample() {
    const content = [
        {
            imagesrc: "https://img.trading.live/2753a7/096743/151874ef4cc9458981f1028053628d02.png",
            tag: "Trading is Live",
            description: "Buying and selling financial instruments within the same trading day"
        },
        {
            imagesrc: "https://images.pexels.com/photos/187041/pexels-photo-187041.jpeg?auto=compress&cs=tinysrgb&w=800",
            tag: "Invest Now",
            description: " Holding positions for an extended period, often based on fundamental analysis."
        },
        {
            imagesrc: "https://images.pexels.com/photos/6781273/pexels-photo-6781273.jpeg?auto=compress&cs=tinysrgb&w=800",
            tag: "Stocks",
            description: "Riding the direction of an established market trend"
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
                <p style={{color:"White"}}>{item.description}</p>
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
