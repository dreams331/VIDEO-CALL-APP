// src/VideoCall.js
import React, { useState, useRef, useEffect } from 'react';
import { connect, createLocalTracks } from 'twilio-video';

const VideoCall = () => {
  const [room, setRoom] = useState(null);
  const [identity, setIdentity] = useState('');
  const [token, setToken] = useState('');
  const localVideoRef = useRef();
  const remoteVideoRef = useRef();

  useEffect(() => {
    if (room) {
      const handleParticipantConnected = participant => {
        participant.tracks.forEach(publication => {
          if (publication.isSubscribed) {
            const track = publication.track;
            remoteVideoRef.current.appendChild(track.attach());
          }
        });
        participant.on('trackSubscribed', track => {
          remoteVideoRef.current.appendChild(track.attach());
        });
      };

      room.participants.forEach(handleParticipantConnected);
      room.on('participantConnected', handleParticipantConnected);

      return () => {
        room.disconnect();
      };
    }
  }, [room]);

  const handleJoin = async () => {
    const localTracks = await createLocalTracks();
    localTracks.forEach(track => {
      localVideoRef.current.appendChild(track.attach());
    });

    const room = await connect(token, {
      name: 'my-room',
      tracks: localTracks
    });
    setRoom(room);
  };

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Identity"
          value={identity}
          onChange={e => setIdentity(e.target.value)}
        />
        <button onClick={() => {
          fetch('/token', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({ identity })
          })
            .then(response => response.json())
            .then(data => setToken(data.token));
        }}>Get Token</button>
        <button onClick={handleJoin}>Join Call</button>
      </div>
      <div>
        <h2>Local Video</h2>
        <div ref={localVideoRef}></div>
        <h2>Remote Video</h2>
        <div ref={remoteVideoRef}></div>
      </div>
    </div>
  );
};

export default VideoCall;
