
import Live from './live.js';
import Streamers from './streamers.js';
function Video(){
    return(
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
                                Trending Videos &gt;
                            </a>
                        </div>
                        <div className='mustwatchdivs'>
                            <Live
                                name='ABC'
                                title='Brokersview Investment'
                                source='https://images.unsplash.com/photo-1682695797221-8164ff1fafc9?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8'
                            />
                            <Live
                                name='LMN'
                                title='Swing trading'
                                source='https://images.unsplash.com/photo-1701103194005-54109136c073?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8'
                            />
                            <Live
                                name='XYZ'
                                title='Weekly Session Psychology'
                                source='https://images.unsplash.com/photo-1569173112611-52a7cd38bea9?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D'
                            />
                        </div>
                    </div>
                    <div className='Second'>
                        <div style={{ marginLeft: '4%' }}>
                            <a
                                href="YOUR_LINK_URL_HERE"
                                style={{
                                    textDecoration: 'none',
                                    marginRight: '7%',
                                    fontSize: '24px', // Increased font size
                                    color: 'Black', // Custom color (change to your desired color)
                                }}
                                onMouseEnter={(e) => e.target.style.color = 'Red'}
                                onMouseLeave={(e) => e.target.style.color = 'Black'}
                            >
                                Hot Videos &gt;
                            </a>
                        </div><br/>
                        <div className='streamers'>
                            <Streamers />
                        </div>
                    </div>
            </div>
    )
}
export default Video;