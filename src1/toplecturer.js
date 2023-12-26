import { Link } from 'react-router-dom';
import ImageDescription from './lecturer';
function Toplec() {
    return (
        <div className='must'>
            <div className='discover'>
                <div style={{ marginLeft: '4%', marginTop: '3%' }}>
                    <Link to="/Lecturer" style={{textDecoration:'none'}}>
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
                        Top Lecturers &gt;
                    </a>
                    </Link>
                </div>
                <div className='lecturer'>
                    <ImageDescription
                        imageSrc="https://images.pexels.com/photos/2448749/pexels-photo-2448749.jpeg?auto=compress&cs=tinysrgb&w=800"
                        name="John Doe"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                    />
                    <ImageDescription
                        imageSrc="https://images.pexels.com/photos/2448749/pexels-photo-2448749.jpeg?auto=compress&cs=tinysrgb&w=800"
                        name="John Doe"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                    />
                    <ImageDescription
                        imageSrc="https://images.pexels.com/photos/2448749/pexels-photo-2448749.jpeg?auto=compress&cs=tinysrgb&w=800"
                        name="John Doe"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                    />
                    <ImageDescription
                        imageSrc="https://images.pexels.com/photos/2448749/pexels-photo-2448749.jpeg?auto=compress&cs=tinysrgb&w=800"
                        name="John Doe"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                    />
                </div>
            </div>
        </div>


    );
}
export default Toplec;