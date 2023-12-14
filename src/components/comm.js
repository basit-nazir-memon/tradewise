
import Comm from './community';
function Community(){
    return(
        <div className='Booksmain' style={{marginTop:'2%'}}>
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
                    Community's Choices &gt;
                </a>
            </div>
            <div className='communitydiv'>
                <Comm/>
                <Comm/>
                <Comm/>
                <Comm/>
            </div>
        </div>
    )
}
export default Community;