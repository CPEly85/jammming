import React from 'react'
import './SearchResults.css';
import Tracklist from '../Tracklist/Tracklist'

function SearchResults(props) {
    return (
        <div className="SearchResults">
        <h2>Results</h2>
        {/* <!-- Add a TrackList component --> */}
        <Tracklist tracks={props.results}/>
      </div>
    )
}

export default SearchResults