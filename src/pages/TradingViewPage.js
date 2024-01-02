import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import React, { useState } from 'react'; // Ensure useState is imported

function KitchenSinkExample() {

    const [hoveredItemId, setHoveredItemId] = useState(null);
    // Adjusted styles for flex layout with increased width
    const cardFlexStyle = {
        display: 'flex',
        flexDirection: 'row',
        maxWidth: '75rem', // Maximum width to avoid being too wide on large screens
        margin: '0 auto', // Centers the card in the page
        boxSizing: 'border-box' // Padding and borders included in the width
    };


    const imageStyle = {
        width: '30%', // Maintain the width proportion
        height: '300px', // Set a fixed height to make the image shorter
        objectFit: 'cover' // Cover will ensure the image covers the set width and height
    };


    const contentStyle = {
        width: '100%', // Content width is proportional
        padding: '1rem',
        display: 'flex',
        flexDirection: 'column'
    };
    const profilePicStyle = {
        width: '50px', // Width for the profile picture
        height: '50px', // Height for the profile picture (same as width for a circle)
        borderRadius: '50%', // Make the image round
        objectFit: 'cover',
        alignSelf: 'flex-start', // Align the profile picture at the start of the flex container
    };

    const buttonGroupStyle = {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        overflowX: 'auto',
        marginBottom: '1rem',
        whiteSpace: 'nowrap',
        gap: '0.5rem'
    };

    // Custom button style for blue color
    const customButtonStyle = {
        margin: '0.25rem',
        color: 'blue', // Light blue text color
        backgroundColor: '#f8f9fa', // A commonly used gray that might be considered "dark white"
        borderColor: '#f8f9fa', // Matching border color
        borderRadius: '0.25rem', // Rounded corners
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', // Subtle shadow for depth
        transition: 'all 0.2s ease-in-out', // Smooth transition for hover effects
        '&:hover': {
            backgroundColor: '#e2e6ea', // Slightly darker on hover for interaction feedback
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)', // Larger shadow on hover for a "lifted" effect
        },
        '&:focus': {
            outline: 'none', // Removes the default focus outline
            boxShadow: '0 0 0 0.2rem rgba(0, 123, 255, 0.25)', // Custom focus shadow to match the light blue text
        }
    };



    const tableOfContentsStyle = {
        textAlign: 'left',
        maxWidth: '75rem',
        margin: '2rem auto', // Add some margin above and below the table of contents
        padding: '1rem',
        // Additional styles as needed to match your design
    };

    // Style for the Table of Contents title
    const titleStyle = {
        fontWeight: 'bold',
        marginBottom: '1rem',
        fontSize: '40px',
        // Additional styles as needed to match your design
    };

    // Style for the list items in the Table of Contents
    const listItemStyle = {
        listStyleType: 'none',
        cursor: 'pointer',
        fontSize: '24px',
        margin: '10px 0',
        // Your base styles here
    };

    // Additional style for when the item is hovered
    const listItemHoverStyle = {
        ...listItemStyle, // Spread the base styles
        backgroundColor: '#f0f0f0', // Example hover style
        // Any other hover styles here
    };


    // Style for the sorting buttons (Ascending/Descending)
    const sortButtonStyle = {
        border: 'none',
        backgroundColor: 'transparent',
        // Additional styles as needed to match your design
    };


    const handleNavigation = (url) => {
        window.location.href = url;
    };

    return (

        <>
            <Card style={cardFlexStyle}>
                <Card.Img style={imageStyle} variant="top" src="https://m.media-amazon.com/images/I/61usuch863L._SL1000_.jpg" />
                <div style={contentStyle}>
                    <Card.Body>
                        <Card.Title>Daily Trading View (2023/12)</Card.Title>
                        <div style={buttonGroupStyle}>
                            {/* Inline custom styles added to Button components to make them blue */}
                            <Button
                                style={customButtonStyle}
                                onClick={() => window.location.href = 'https://www.trading.live/en/labelCategory/1-1/ebook'}
                            >
                                Forex
                            </Button>

                            <Button
                                style={customButtonStyle}
                                onClick={() => window.location.href = 'https://www.trading.live/en/labelCategory/1-8/ebook'}
                            >
                                Fundamental
                            </Button>

                            <Button
                                style={customButtonStyle}
                                onClick={() => window.location.href = 'https://www.trading.live/en/labelCategory/1-9/ebook'}
                            >
                                Technical
                            </Button>

                            <Button
                                style={customButtonStyle}
                                onClick={() => window.location.href = 'https://www.trading.live/en/labelCategory/2-183/ebook'}
                            >
                                Trading Analysis
                            </Button>

                            <Button
                                style={customButtonStyle}
                                onClick={() => window.location.href = 'https://www.trading.live/en/labelCategory/2-181/ebook'}
                            >
                                Market Analysis
                            </Button>

                            <Button
                                style={customButtonStyle}
                                onClick={() => window.location.href = 'https://www.trading.live/en/labelCategory/2-185/ebook'}
                            >
                                Trading Signals
                            </Button>

                            <Button
                                style={customButtonStyle}
                                onClick={() => window.location.href = 'https://www.trading.live/en/labelCategory/2-20/ebook'}
                            >
                                XAU
                            </Button>

                            <Button
                                style={customButtonStyle}
                                onClick={() => window.location.href = 'https://www.trading.live/en/labelCategory/2-340/ebook'}
                            >
                                WTI
                            </Button>

                            <Button
                                style={customButtonStyle}
                                onClick={() => window.location.href = 'https://www.trading.live/en/labelCategory/2-105/ebook'}
                            >
                                Economic Indicators
                            </Button>

                            <Button
                                style={customButtonStyle}
                                onClick={() => window.location.href = 'https://www.trading.live/en/labelCategory/2-48/ebook'}
                            >
                                USDX
                            </Button>

                        </div>
                    </Card.Body>
                    <div style={{ padding: '1rem' }}>
                        <p>12/01/2023 10:42</p>
                        <p>Every entry is a test, test your human weakness, test your trading system, test your position holding ability, "Daily Trading Watch" makes your trading more and more easy!</p>
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/DAVID_WARNER_%2811704782453%29.jpg/734px-DAVID_WARNER_%2811704782453%29.jpg" // Replace with the actual URL
                            alt="Profile"
                            style={profilePicStyle}
                        />
                    </div>


                </div>
            </Card>

            {/* Table of Contents section */}
            <div style={tableOfContentsStyle}>
                <div style={titleStyle}>Table of Contents</div>
                <ul>
                    <li
                        style={hoveredItemId === 1 ? listItemHoverStyle : listItemStyle}
                        onMouseEnter={() => setHoveredItemId(1)}
                        onMouseLeave={() => setHoveredItemId(null)}
                        onClick={() => handleNavigation('https://www.trading.live/en/peterson/ebook/22914/37973')}
                    >
                        1.  Gold Pulls Back on Hawkish Remarks (12.01)
                    </li>
                    <li
                        style={hoveredItemId === 2 ? listItemHoverStyle : listItemStyle}
                        onMouseEnter={() => setHoveredItemId(2)}
                        onMouseLeave={() => setHoveredItemId(null)}
                        onClick={() => handleNavigation('https://www.trading.live/en/peterson/ebook/22914/38023')}
                    >
                        2.  Production cut determined and Oil Prices from High (12.01)
                    </li>


                    <li
                        style={hoveredItemId === 3 ? listItemHoverStyle : listItemStyle}
                        onMouseEnter={() => setHoveredItemId(3)}
                        onMouseLeave={() => setHoveredItemId(null)}
                        onClick={() => handleNavigation('https://www.trading.live/en/peterson/ebook/22914/38023')}
                    >
                        3.  Opening With New High, Gold Remains Strong（12.04）
                    </li>


                    <li
                        style={hoveredItemId === 4 ? listItemHoverStyle : listItemStyle}
                        onMouseEnter={() => setHoveredItemId(4)}
                        onMouseLeave={() => setHoveredItemId(null)}
                        onClick={() => handleNavigation('https://www.trading.live/en/peterson/ebook/22914/38023')}
                    >
                        4. Weak Trend Continues as Directed by Pessimistic Expectations(12.04)
                    </li>


                    <li
                        style={hoveredItemId === 5 ? listItemHoverStyle : listItemStyle}
                        onMouseEnter={() => setHoveredItemId(5)}
                        onMouseLeave={() => setHoveredItemId(null)}
                        onClick={() => handleNavigation('https://www.trading.live/en/peterson/ebook/22914/38023')}
                    >
                        5. Gold Prices Fell Sharply Due to the Adjustment of Optimistic Expectations(12.05)
                    </li>


                    <li
                        style={hoveredItemId === 6 ? listItemHoverStyle : listItemStyle}
                        onMouseEnter={() => setHoveredItemId(6)}
                        onMouseLeave={() => setHoveredItemId(null)}
                        onClick={() => handleNavigation('https://www.trading.live/en/peterson/ebook/22914/38023')}
                    >
                        6. Oil Prices Approaching Bottoms Under Weak Trends(12.05)
                    </li>


                    <li
                        style={hoveredItemId === 7 ? listItemHoverStyle : listItemStyle}
                        onMouseEnter={() => setHoveredItemId(7)}
                        onMouseLeave={() => setHoveredItemId(null)}
                        onClick={() => handleNavigation('https://www.trading.live/en/peterson/ebook/22914/38023')}
                    >
                        7. Gold Prices Weighed On by Bearish Data （12.06）
                    </li>


                    <li
                        style={hoveredItemId === 8 ? listItemHoverStyle : listItemStyle}
                        onMouseEnter={() => setHoveredItemId(8)}
                        onMouseLeave={() => setHoveredItemId(null)}
                        onClick={() => handleNavigation('https://www.trading.live/en/peterson/ebook/22914/38023')}
                    >
                        8. Accumulation Continues, Worries of Over-Supply Return(12.06)
                    </li>


                    <li
                        style={hoveredItemId === 9 ? listItemHoverStyle : listItemStyle}
                        onMouseEnter={() => setHoveredItemId(9)}
                        onMouseLeave={() => setHoveredItemId(null)}
                        onClick={() => handleNavigation('https://www.trading.live/en/peterson/ebook/22914/38023')}
                    >
                        9. Gold Prices Rise in a Narrow Range as ADP Data Fall Short of Expectations（12.07）
                    </li>


                    <li
                        style={hoveredItemId === 10 ? listItemHoverStyle : listItemStyle}
                        onMouseEnter={() => setHoveredItemId(10)}
                        onMouseLeave={() => setHoveredItemId(null)}
                        onClick={() => handleNavigation('https://www.trading.live/en/peterson/ebook/22914/38023')}
                    >
                        10. Oil Prices Fell Sharply due to the Panic of the Bulls（12.07）
                    </li>


                    <li
                        style={hoveredItemId === 11 ? listItemHoverStyle : listItemStyle}
                        onMouseEnter={() => setHoveredItemId(11)}
                        onMouseLeave={() => setHoveredItemId(null)}
                        onClick={() => handleNavigation('https://www.trading.live/en/peterson/ebook/22914/38023')}
                    >
                        11. As Oil Prices Are Weak and Stable, Bears Take Profits （12.08）
                    </li>



                    <li
                        style={hoveredItemId === 12 ? listItemHoverStyle : listItemStyle}
                        onMouseEnter={() => setHoveredItemId(12)}
                        onMouseLeave={() => setHoveredItemId(null)}
                        onClick={() => handleNavigation('https://www.trading.live/en/peterson/ebook/22914/38023')}
                    >
                        12. Major Oscillations May Be Triggered by Tonight's Non-farm Payrolls(12.08)
                    </li>


                    <li
                        style={hoveredItemId === 13 ? listItemHoverStyle : listItemStyle}
                        onMouseEnter={() => setHoveredItemId(13)}
                        onMouseLeave={() => setHoveredItemId(null)}
                        onClick={() => handleNavigation('https://www.trading.live/en/peterson/ebook/22914/38023')}
                    >
                        13 Gold Plunges Under Strong Non-Farm Payrolls Data（12.11）
                    </li>



                    <li
                        style={hoveredItemId === 14 ? listItemHoverStyle : listItemStyle}
                        onMouseEnter={() => setHoveredItemId(14)}
                        onMouseLeave={() => setHoveredItemId(null)}
                        onClick={() => handleNavigation('https://www.trading.live/en/peterson/ebook/22914/38023')}
                    >
                        14. Non-farm Payrolls Strengthens and Recession Expectation Weakens（12.11）
                    </li>


                    <li
                        style={hoveredItemId === 15 ? listItemHoverStyle : listItemStyle}
                        onMouseEnter={() => setHoveredItemId(15)}
                        onMouseLeave={() => setHoveredItemId(null)}
                        onClick={() => handleNavigation('https://www.trading.live/en/peterson/ebook/22914/38023')}
                    >
                        15. Gold Prices Are Still Weak, Waiting for Big News（12.12）
                    </li>


                    <li
                        style={hoveredItemId === 16 ? listItemHoverStyle : listItemStyle}
                        onMouseEnter={() => setHoveredItemId(16)}
                        onMouseLeave={() => setHoveredItemId(null)}
                        onClick={() => handleNavigation('https://www.trading.live/en/peterson/ebook/22914/38023')}
                    >
                        16. Bulls/Bears Are Cautious and Oil Oscillated Narrowly(12.12)
                    </li>


                    <li
                        style={hoveredItemId === 17 ? listItemHoverStyle : listItemStyle}
                        onMouseEnter={() => setHoveredItemId(17)}
                        onMouseLeave={() => setHoveredItemId(null)}
                        onClick={() => handleNavigation('https://www.trading.live/en/peterson/ebook/22914/38023')}
                    >
                        17. Gold Prices Fall from Highs as Inflation Unexpectedly Strengthens（12.13）
                    </li>


                    <li
                        style={hoveredItemId === 18 ? listItemHoverStyle : listItemStyle}
                        onMouseEnter={() => setHoveredItemId(18)}
                        onMouseLeave={() => setHoveredItemId(null)}
                        onClick={() => handleNavigation('https://www.trading.live/en/peterson/ebook/22914/38023')}
                    >
                        18. As Sluggish Demand Outweighs Inventories, Oil Prices Fall Sharply（12.13）
                    </li>

                    <li
                        style={hoveredItemId === 19 ? listItemHoverStyle : listItemStyle}
                        onMouseEnter={() => setHoveredItemId(19)}
                        onMouseLeave={() => setHoveredItemId(null)}
                        onClick={() => handleNavigation('https://www.trading.live/en/peterson/ebook/22914/38023')}
                    >
                        19. Gold Prices Surge on Dovish Signals（12.14）
                    </li>


                    <li
                        style={hoveredItemId === 20 ? listItemHoverStyle : listItemStyle}
                        onMouseEnter={() => setHoveredItemId(20)}
                        onMouseLeave={() => setHoveredItemId(null)}
                        onClick={() => handleNavigation('https://www.trading.live/en/peterson/ebook/22914/38023')}
                    >
                        20 Oil Rebounds from Lows After De-stocking and Dollar Appreciation（12.14）
                    </li>




                </ul>

            </div>
        </>


    );
}

export default KitchenSinkExample;










