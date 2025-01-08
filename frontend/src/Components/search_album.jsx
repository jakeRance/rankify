import React, { useState } from 'react';
import axios from 'axios';

const SearchAlbums = ({ onSelectAlbum }) => {
  const [query, setQuery] = useState('');
  const [albums, setAlbums] = useState([]);
  const [error, setError] = useState(null);

  const searchAlbums = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/search_albums', {
        params: { query },
      });
      setAlbums(response.data.albums.items);
    } catch (err) {
      setError(err.message);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    searchAlbums();
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for an album"
        />
        <button type="submit">Search</button>
      </form>
      {error && <p>Error: {error}</p>}
      <ul>
        {albums.map((album) => (
          <li key={album.id} onClick={() => onSelectAlbum(album.id)}>
            {album.name} by {album.artists.map(artist => artist.name).join(', ')}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchAlbums;
