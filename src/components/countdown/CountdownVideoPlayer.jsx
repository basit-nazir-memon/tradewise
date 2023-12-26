import React, { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';

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
        paddingTop: '56.25%',
    },
    player: {
        position: 'absolute',
        top: 0,
        left: 0,
    },
};

// Countdown Timer Component
const CountdownTimer = ({ targetDate }) => {
    const calculateTimeLeft = () => {
        const difference = +new Date(targetDate) - +new Date();
        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            };
        }

        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearTimeout(timer);
    });

    const timerComponents = [];

    Object.keys(timeLeft).forEach((interval) => {
        if (!timeLeft[interval]) {
            return;
        }

        timerComponents.push(
            <span key={interval}>
                {timeLeft[interval]} {interval}{' '}
            </span>
        );
    });

    return (
        <div>
            {timerComponents.length ? timerComponents : <span>Time's up!</span>}
        </div>
    );
};

// Countdown Video Player Component (renamed from IntegratedVideoPlayer)
const CountdownVideoPlayer = ({ url, targetDate }) => {
    const [isLive, setIsLive] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLive(+new Date() >= +new Date(targetDate));
        }, 1000);

        return () => clearTimeout(timer);
    }, [targetDate]);

    return (
        <div style={styles.videoPlayer}>
            {!isLive ? (
                <CountdownTimer targetDate={targetDate} />
            ) : (
                <div style={styles.playerWrapper}>
                    <ReactPlayer
                        style={styles.player}
                        url={url}
                        playing
                        controls
                        width='100%'
                        height='100%'
                        loop
                    />
                </div>
            )}
        </div>
    );
};

const App = () => {
    const liveStreamTime = '2024-01-01T12:00:00'; // Set the target date and time for the livestream

    return (
        <div style={styles.app}>
            <h1>Video Player</h1>
            <CountdownVideoPlayer url="https://www.dailymotion.com/video/x87ufc9" targetDate={liveStreamTime} />
            <CountdownVideoPlayer url="https://www.youtube.com/watch?v=k7OvlwNCtIc" targetDate={liveStreamTime} />
        </div>
    );
};

export default App;
