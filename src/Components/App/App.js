
import React from 'react'
import { useState } from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import Playlist from '../Playlist/Playlist';
import SearchResults from '../SearchResults/SearchResults';



function App() {

  
  const [results, setResults] = useState([
    {
      name: 'Track 1',
      artist: 'Artist 1',
      album: 'Album 1',
      id: '1'
    },
    {
      name: 'Track 2',
      artist: 'Artist 2',
      album: 'Album 2',
      id: '2'
    },
    {
      name: 'Track 3',
      artist: 'Artist 3',
      album: 'Album 3',
      id: '3'
    }])

  return (
    <div>
      <h1>JaMMMing</h1>
      <div className='App'>
        {/* <!-- Add a searchbar component --> */}
        <SearchBar />
        <div className='App-playlist'>
          {/* SearchResults component */}
          <SearchResults results={results} />
          {/* Playlist Component */}
          <Playlist />
        </div>
      
      </div>
    </div>
  );
}

export default App;
