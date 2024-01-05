import React, { useState } from 'react';

const JoinRoom = ({ onJoinRoom }) => {
  const [roomId, setRoomId] = useState('');

  const handleJoinRoom = () => {
    // เรียกฟังก์ชัน onJoinRoom และส่ง ID ห้องไป
    onJoinRoom(roomId);
  };

  return (
    <div>
      <label>Room ID:</label>
      <input
        type="text"
        value={roomId}
        onChange={(e) => setRoomId(e.target.value)}
      />
      <button onClick={handleJoinRoom}>Join Room</button>
    </div>
  );
};

export default JoinRoom;