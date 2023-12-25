import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function StreamHome() {
    const [roomid, setRoomID] = useState('');
    const navigate = useNavigate();

    const handleJoin = () => {
        navigate(`/stream-room/${roomid}`); // Updated navigation path
    };

    return (
        <div>
            <input
                type='text'
                placeholder='Enter RoomID'
                value={roomid}
                onChange={e => setRoomID(e.target.value)}
            />
            <button onClick={handleJoin}>Join</button>
        </div>
    );
}

export default StreamHome;
