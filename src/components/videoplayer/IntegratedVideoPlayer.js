import React from 'react';
import ReactPlayer from 'react-player';

// Inline CSS styles
const styles = {
    app: {
        textAlign: 'center',
        backgroundColor: '#f0f0f0',
    },
    videoPlayer: {
        maxWidth: '640px',
        width: '90%',
        margin: '20px auto',
        boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
        borderRadius: '15px',
        overflow: 'hidden',
        backgroundColor: '#fff',
    },
    playerWrapper: {
        position: 'relative',
        paddingTop: '56.25%', // Aspect ratio for 16:9
    },
    player: {
        position: 'absolute',
        top: 0,
        left: 0,
    },
};

const IntegratedVideoPlayer = ({ url }) => {
    return (
        <div style={styles.videoPlayer}>
            <div style={styles.playerWrapper}>
                <ReactPlayer
                    style={styles.player}
                    url={url}
                    playing
                    controls
                    width='100%'
                    height='100%'
                    loop
                    config={{
                        youtube: {
                            playerVars: { autoplay: 1, loop: 1 }
                        },
                        vimeo: {
                            playerOptions: { autoplay: 1, loop: 1 }
                        }
                    }}
                />
            </div>
        </div>
    );
};

const App = () => {
    return (
        <div style={styles.app}>
            <h1>Video Player</h1>
            <IntegratedVideoPlayer url="https://www.dailymotion.com/video/x87ufc9" />
            <IntegratedVideoPlayer url="https://www.youtube.com/watch?v=k7OvlwNCtIc" />
        </div>
    );
};

export default App;
