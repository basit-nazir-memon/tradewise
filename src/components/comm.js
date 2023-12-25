
import Comm from './community';
function Community() {
    const items = [
        {
            id: 1,
            title: 'Item 1',
            description: 'The `Comm` component is a placeholder element designed to exhibit community-related content in a stylized card format. It accepts simulated data for `title`, `imagesource`, `description`, and `votes`, showcasing them within a predefined card layout. It features a simulated title section, a placeholder image, lorem ipsum text representing a brief description, a count for votes, and a placeholder button for community engagement. This dummy component serves as a visual representation of potential community-driven content within a user interface',
            votes: 10,
            imageSource: "https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D",
        },
        {
            id: 2,
            title: 'Item 2',
            description: 'The `Comm` component is a placeholder element designed to exhibit community-related content in a stylized card format. It accepts simulated data for `title`, `imagesource`, `description`, and `votes`, showcasing them within a predefined card layout. It features a simulated title section, a placeholder image, lorem ipsum text representing a brief description, a count for votes, and a placeholder button for community engagement. This dummy component serves as a visual representation of potential community-driven content within a user interface.',
            votes: 15,
            imageSource: "https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D",
        },
        {
            id: 3,
            title: 'Item 3',
            description: 'The `Comm` component is a placeholder element designed to exhibit community-related content in a stylized card format. It accepts simulated data for `title`, `imagesource`, `description`, and `votes`, showcasing them within a predefined card layout. It features a simulated title section, a placeholder image, lorem ipsum text representing a brief description, a count for votes, and a placeholder button for community engagement. This dummy component serves as a visual representation of potential community-driven content within a user interface.',
            votes: 25,
            imageSource: "https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D",
        },
        {
            id: 4,
            title: 'Item 4',
            description: 'The `Comm` component is a placeholder element designed to exhibit community-related content in a stylized card format. It accepts simulated data for `title`, `imagesource`, `description`, and `votes`, showcasing them within a predefined card layout. It features a simulated title section, a placeholder image, lorem ipsum text representing a brief description, a count for votes, and a placeholder button for community engagement. This dummy component serves as a visual representation of potential community-driven content within a user interface.',
            votes: 12,
            imageSource: "https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D",
        },
        {
            id: 5,
            title: 'Item 5',
            description: 'The `Comm` component is a placeholder element designed to exhibit community-related content in a stylized card format. It accepts simulated data for `title`, `imagesource`, `description`, and `votes`, showcasing them within a predefined card layout. It features a simulated title section, a placeholder image, lorem ipsum text representing a brief description, a count for votes, and a placeholder button for community engagement. This dummy component serves as a visual representation of potential community-driven content within a user interface.',
            votes: 124,
            imageSource: "https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D",
        },
    ];
    let renderedItems;
    if (items.length === 0) {
        renderedItems = <p>No items available.</p>;
    } else {
        const sortedItems = items.sort((a, b) => b.votes - a.votes);

        const itemsToRender = sortedItems.slice(0, Math.min(sortedItems.length, 4));

        renderedItems = itemsToRender.map((item) => (
            <Comm
                key={item.id}
                title={item.title}
                imagesource={item.imageSource}
                description={item.description}
                votes={item.votes}
            />
        ));
    }
    return (
        <div className='Booksmain' style={{ marginTop: '2%' }}>
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
                {renderedItems}
            </div>
        </div>
    )
}
export default Community;