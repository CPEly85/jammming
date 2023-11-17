import React from 'react'
import './Playlist.css';
import Tracklist from '../Tracklist/Tracklist'

function Playlist(props) {
    return (
        <div className="Playlist">
  <input 
    value={props.name}
    onChange={props.onChange} />
  {/* <!-- Add a TrackList component --> */}
  <Tracklist 
    tracks={props.playlistTracks} 
    onRemove={props.onRemove}
    isRemoval={true} />
  <button className="Playlist-save" onClick={props.onSave}>SAVE TO SPOTIFY</button>
</div>
    )
}

export default Playlist