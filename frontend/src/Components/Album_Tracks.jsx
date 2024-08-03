import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AlbumTracks = ({ albumId }) => {
  const [tracks, setTracks] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTracks = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/album_tracks', {
          params: { album_id: albumId },
        });
        setTracks(response.data.items);
      } catch (err) {
        setError(err.message);
      }
    };

    if (albumId) {
      fetchTracks();
    }
  }, [albumId]);

  return (
    <div>
      {error && <p>Error: {error}</p>}
      <ul>
        {tracks.map((track) => (
          <li key={track.id}>{track.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default AlbumTracks;
