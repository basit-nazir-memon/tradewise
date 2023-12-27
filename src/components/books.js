
import { Link } from 'react-router-dom';
import Live from './live.js';
function Books() {
    const content = [
        {
            name: 'ABC',
            imageSrc: "https://images.pexels.com/photos/3778212/pexels-photo-3778212.jpeg?auto=compress&cs=tinysrgb&w=800",
            type:"Published",
            title: 'US Trading',
            source: 'https://images.pexels.com/photos/772803/pexels-photo-772803.jpeg?auto=compress&cs=tinysrgb&w=800',
            views:120
        },
        {
            name: 'ABC',
            imageSrc: "https://images.pexels.com/photos/3778212/pexels-photo-3778212.jpeg?auto=compress&cs=tinysrgb&w=800",
            type:"Published",
            title: 'US Trading',
            source: 'https://images.unsplash.com/photo-1682695797221-8164ff1fafc9?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8',
            views:120
        },
        {
            name: 'ABC',
            imageSrc: "https://images.pexels.com/photos/3778212/pexels-photo-3778212.jpeg?auto=compress&cs=tinysrgb&w=800",
            type:"Published",
            title: 'US Trading',
            source: 'https://images.unsplash.com/photo-1701103194005-54109136c073?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8',
            views:120
        },
        {
            name: 'ABC',
            title: 'US Trading',
            imageSrc: "https://images.pexels.com/photos/3778212/pexels-photo-3778212.jpeg?auto=compress&cs=tinysrgb&w=800",
            source: 'https://images.pexels.com/photos/316398/pexels-photo-316398.jpeg?auto=compress&cs=tinysrgb&w=800',
            type:"Published",
            views:120
        },

    ]
    let renderitems;
    if (content.length == 0) {
        renderitems = <h2>No Books Available</h2>
    } else {
        const itemsToRender = content.slice(0, Math.min(content.length, 5));
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
        <div className='Booksmain'>
            <div style={{ marginLeft: '4%' }}>
                <Link to="/Ebooks" style={{ textDecoration: 'none' }}>
                    <a
                        style={{
                            textDecoration: 'none',
                            marginRight: '7%',
                            fontSize: '24px',
                            color: 'Black',
                        }}
                        onMouseEnter={(e) => e.target.style.color = 'Red'}
                        onMouseLeave={(e) => e.target.style.color = 'Black'}
                    >
                        Popular E-Books &gt;
                    </a>
                </Link>
            </div>
            <div className='Books'>
                {renderitems}
            </div>
        </div>
    )
}
export default Books;