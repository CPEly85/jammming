
import React, { useState } from 'react'
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import Playlist from '../Playlist/Playlist';
import SearchResults from '../SearchResults/SearchResults';



function App() {

  const [playlistName, setPlaylistName] = useState("Chris's playlist")
  
  const [playlistTracks, setPlaylistTracks] = useState([
    {
      name: 'P Track 1',
      artist: 'P Artist 1',
      album: 'P Album 1',
      id: '1'
    },
    {
      name: 'P Track 2',
      artist: 'P Artist 2',
      album: 'P Album 2',
      id: '2'
    },
    {
      name: 'P Track 3',
      artist: 'P Artist 3',
      album: 'P Album 3',
      id: '3'
    }])

  
  const [searchResults, setSearchResults] = useState([
    {
      name: 'Track 1',
      artist: 'Artist 1',
      album: 'Album 1',
      id: '4'
    },
    {
      name: 'Track 2',
      artist: 'Artist 2',
      album: 'Album 2',
      id: '5'
    },
    {
      name: 'Track 3',
      artist: 'Artist 3',
      album: 'Album 3',
      id: '6'
    }],
    )

  function addTrack(track) {
    const foundTrack = playlistTracks.find(
      (playlistTrack) => playlistTrack.id === track.id
    )
    
    foundTrack ? alert('Already in playlist') : setPlaylistTracks((prevTracks) => [...prevTracks, track])
  }

  function removeTrack(track) {
    setPlaylistTracks(playlistTracks.filter((playlistTrack) => playlistTrack.id !== track.id))
  }

  return (
    <div>
      <h1>JaMMMing</h1>
      <div className='App'>
        {/* <!-- Add a searchbar component --> */}
        <SearchBar />
        <div className='App-playlist'>
          {/* SearchResults component */}
          <SearchResults 
            searchResults={searchResults} 
            onAdd={addTrack} />
          {/* Playlist Component */}
          <Playlist 
            name={playlistName} 
            playlistTracks={playlistTracks} 
            onRemove={removeTrack}/>
        </div>
      
      </div>
    </div>
  );
}

export default App;
