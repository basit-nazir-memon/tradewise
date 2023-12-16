
import Live from './live.js';
import Streamers from './streamers.js';
function Must(){
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
                                Must-Watch Live &gt;
                            </a>
                        </div>
                        <div className='mustwatchdivs'>
                            <Live
                                name='ABC'
                                title='Weekly Session Psychology'
                                source='https://images.unsplash.com/photo-1682695797221-8164ff1fafc9?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8'
                            />
                            <Live
                                name='LMN'
                                title='End of Week market Recap'
                                source='https://images.unsplash.com/photo-1701103194005-54109136c073?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8'
                            />
                            <Live
                                name='XYZ'
                                title='Weekly Session Psychology'
                                source='https://images.unsplash.com/photo-1701372554658-f60c1157addd?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzN3x8fGVufDB8fHx8fA%3D%3D'
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
                                    fontSize: '24px', 
                                    color: 'Black',
                                }}
                                onMouseEnter={(e) => e.target.style.color = 'Red'}
                                onMouseLeave={(e) => e.target.style.color = 'Black'}
                            >
                                Top Streamers &gt;
                            </a>
                        </div><br/>
                        <div className='streamers'>
                            <Streamers />
                        </div>
                    </div>
            </div>
    )
}
export default Must;