import Groups from './groups';

function Disc() {
    const contents = [
        {
          name: 'XYZ',
          title: 'Golden Events',
          imageSource: "https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D",

        },
        {
          name: 'ABC',
          title: 'Silver Moments',
          imageSource: "https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D",

        },
        {
          name: 'PQR',
          title: 'Diamond Occasions',
          imageSource: "https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D",

        },
        {
          name: 'LMN',
          title: 'Platinum Gatherings',
          imageSource: "https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D",

        },
        {
          name: 'EFG',
          title: 'Sparkling Ceremonies',
          imageSource: "https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D",

        },
        {
          name: 'RST',
          title: 'Opulent Galas',
          imageSource: "https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D",

        },
        {
          name: 'UVW',
          title: 'Glimmering Functions',
          imageSource: "https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D",

        },
        {
          name: 'JKL',
          title: 'Radiant Celebrations',
          imageSource: "https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D",

        },
      ];
      
    let renderitems;
    if(contents.length==0)
    {
        renderitems=<h2>No groups Available</h2>
    }
    else{
        const itemsToRender = contents.slice(0, Math.min(contents.length, 8));
        renderitems=itemsToRender.map((items)=>(
            <Groups
            name={items.name}
            title={items.title}
            imagesrc={items.imageSource}
            />
        ));
    }
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
                   {renderitems}
                </div>
            </div>
        </div>
    );
}

export default Disc;
