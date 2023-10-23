import React from "react";
import "./Track.css"

function Track(props) {

    // let isRemoval = true

    let renderAction

    (props.isRemoval) ? renderAction = '-' : renderAction = '+'

  function addTrack() {
    props.onAdd(props.track)
  }

  function removeTrack() {
    props.onRemove(props.track)
  }

    let addOrRemove

    (props.isRemoval) ? addOrRemove = removeTrack : addOrRemove = addTrack

    return (
        <div className="Track">
  <div className="Track-information">
    <h3>{props.track.name}</h3>
    <p>{props.track.artist} | {props.track.album}</p>
  </div>
  <button className="Track-action" onClick={addOrRemove}>{renderAction}</button>
</div>
    )
}

export default Track