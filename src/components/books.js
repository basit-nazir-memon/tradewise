
import { Link } from 'react-router-dom';
import Live from './live.js';
function Books() {
    return (
        <div className='Booksmain'>
            <div style={{ marginLeft: '4%' }}>
                <Link to="/Ebooks" style={{textDecoration:'none'}}>
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
                <Live 
                    name='ABC'
                    title='US Trading'
                    source='https://images.unsplash.com/photo-1682695797221-8164ff1fafc9?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8'
                />
                <Live
                    name='ABC'
                    title='US Trading'
                    source='https://images.unsplash.com/photo-1682695797221-8164ff1fafc9?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8'
                />
                <Live
                    name='LMN'
                    title='Trading Guide'
                    source='https://images.unsplash.com/photo-1701103194005-54109136c073?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8'
                />
                <Live
                    name='XYZ'
                    title='Trading Strategies'
                    source='https://images.unsplash.com/photo-1701372554658-f60c1157addd?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzN3x8fGVufDB8fHx8fA%3D%3D'
                />
                <Live
                    name='LMN'
                    title='Trading Marketing'
                    source='https://images.unsplash.com/photo-1701372554658-f60c1157addd?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzN3x8fGVufDB8fHx8fA%3D%3D'
                />
            </div>
        </div>
    )
}
export default Books;