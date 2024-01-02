import { Link } from 'react-router-dom';
import ImageDescription from './lecturer';
function Toplec() {
    const content=[
        {
            imageSrc:"https://images.pexels.com/photos/2448749/pexels-photo-2448749.jpeg?auto=compress&cs=tinysrgb&w=800",
            name:"John Doe",
            description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            followers:122
        },
        {
            imageSrc:"https://images.pexels.com/photos/2448749/pexels-photo-2448749.jpeg?auto=compress&cs=tinysrgb&w=800",
            name:"John Doe",
            description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            followers:122
        },
        {
            imageSrc:"https://images.pexels.com/photos/2448749/pexels-photo-2448749.jpeg?auto=compress&cs=tinysrgb&w=800",
            name:"John Doe",
            description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            followers:122
        },
        {
            imageSrc:"https://images.pexels.com/photos/2448749/pexels-photo-2448749.jpeg?auto=compress&cs=tinysrgb&w=800",
            name:"John Doe",
            description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            followers:122
        },
        {
            imageSrc:"https://images.pexels.com/photos/2448749/pexels-photo-2448749.jpeg?auto=compress&cs=tinysrgb&w=800",
            name:"John Doe",
            description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            followers:122
        },
        {
            imageSrc:"https://images.pexels.com/photos/2448749/pexels-photo-2448749.jpeg?auto=compress&cs=tinysrgb&w=800",
            name:"John Doe",
            description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            followers:122
        },
    ]
    let renderitems;
    if(content.length==0){
        renderitems=<h2>No Lecturers Available</h2>
    }else{
        
        const sorted_streamer = content.slice().sort((a, b) => b.followers - a.followers);

        const itemsToRender = sorted_streamer.slice(0, Math.min(content.length, 4));
        renderitems=itemsToRender.map((item)=>(
            <ImageDescription
            imageSrc={item.imageSrc}
            name={item.name}
            description={item.description}
            />
        ));
    }
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
                   {renderitems}
                </div>
            </div>
        </div>


    );
}
export default Toplec;