
import context from 'react-bootstrap/esm/AccordionContext.js';
import Live from './live.js';
import Streamers from './streamers.js';
function Must() {
    const content = [
        {
            name: 'ABC',
            title: 'Weekly Session Psychology',
            source: 'https://images.unsplash.com/photo-1682695797221-8164ff1fafc9?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8',
            imageSrc: "https://images.pexels.com/photos/1172207/pexels-photo-1172207.jpeg?auto=compress&cs=tinysrgb&w=800",
            views: 112,
            type:"Live"
        },
        {
            name: 'LMN',
            title: 'End of Week market Recap',
            source: 'https://images.unsplash.com/photo-1701103194005-54109136c073?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8',
            imageSrc: "https://images.pexels.com/photos/1172207/pexels-photo-1172207.jpeg?auto=compress&cs=tinysrgb&w=800",
            views: 132,
            type:"Live"
        },
        {
            name: 'XYZ',
            title: 'Weekly Session Psychology',
            source: 'https://images.unsplash.com/photo-1701372554658-f60c1157addd?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzN3x8fGVufDB8fHx8fA%3D%3D',
            imageSrc: "https://images.pexels.com/photos/1172207/pexels-photo-1172207.jpeg?auto=compress&cs=tinysrgb&w=800",
            views: 134,
            type:"Live"
        }
    ]
    const contents = [
        {
            name: 'Content 1',
            description: 'Description for Content 1',
            count: 13
        },
        {
            name: 'Content 2',
            description: 'Description for Content 2',
            count: 12
        },
        {
            name: 'Content 3',
            description: 'Description for Content 3',
            count: 15
        },
        {
            name: 'Content 4',
            description: 'Description for Content 4',
            count: 14
        },
        {
            name: 'Content 5',
            description: 'Description for Content 5',
            count: 121
        }

    ];
   
    const sorted_streamer = contents.slice().sort((a, b) => b.count - a.count);
    const itemsToRender2 = sorted_streamer.slice(0, Math.min(contents.length, 10));
    

    let renderitems;
    if (content.length == 0) {
        renderitems = <h2>No Live Videos Available</h2>
    } else {
        const sortedItems = content.slice().sort((a, b) => b.views - a.views);

        const itemsToRender = sortedItems.slice(0, Math.min(content.length, 3));

        renderitems = itemsToRender.map((items) => (
            <Live
                name={items.name}
                title={items.title}
                source={items.source}
                imagesrc={items.imageSrc}
                type={items.type}
            />
        ))
    }
    return (
        <div className='must'>
            <div className='First'>
                <div style={{ marginLeft: '4%' }}>
                    <a
                        href="YOUR_LINK_URL_HERE"
                        style={{
                            textDecoration: 'none',
                            marginRight: '7%',
                            fontSize: '24px',
                            color: 'Black',
                        }}
                        onMouseEnter={(e) => e.target.style.color = 'Red'}
                        onMouseLeave={(e) => e.target.style.color = 'Black'}
                    >
                        Must-Watch Live &gt;
                    </a>
                </div>
                <div className='mustwatchdivs'>
                    {renderitems}
                </div>
            </div>
            <div className='Second'>
                <div style={{ marginLeft: '4%' }}>
                    <a
                        href="YOUR_LINK_URL_HERE"
                        style={{
                            textDecoration: 'none',
                            marginRight: '7%',
                            fontSize: '24px',
                            color: 'Black',
                        }}
                        onMouseEnter={(e) => e.target.style.color = 'Red'}
                        onMouseLeave={(e) => e.target.style.color = 'Black'}
                    >
                        Top Streamers &gt;
                    </a>
                </div><br />
                <div className='streamers'>
                    <Streamers
                        content={itemsToRender2}
                    />
                </div>
            </div>
        </div>
    )
}
export default Must;