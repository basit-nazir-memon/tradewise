import Groups from './groups';

function Disc() {
    return (
        <div className='must'>
            <div className='discover'>
                <div style={{ marginLeft: '4%' ,marginTop:'3%'}}>
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
                        Discover Groups &gt;
                    </a>
                </div>
                <div className='Disc'>
                    <Groups name='XYZ' title='Golden Events' />
                    <Groups name='XYZ' title='Golden Events' />
                    <Groups name='XYZ' title='Golden Events' />
                    <Groups name='XYZ' title='Golden Events' />
                    <Groups name='XYZ' title='Golden Events' />
                    <Groups name='XYZ' title='Golden Events' />
                    <Groups name='XYZ' title='Golden Events' />
                    <Groups name='XYZ' title='Golden Events' />
                </div>
            </div>
        </div>
    );
}

export default Disc;
