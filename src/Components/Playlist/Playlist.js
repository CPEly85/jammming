import React from 'react'
import './Playlist.css';
import Tracklist from '../Tracklist/Tracklist'

function Playlist() {
    return (
        <div className="Playlist">
  <input value="New Playlist"/>
  {/* <!-- Add a TrackList component --> */}
  <Tracklist />
  <button className="Playlist-save">SAVE TO SPOTIFY</button>
</div>
    )
}

export default Playlist