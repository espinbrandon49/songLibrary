import React from 'react'

const Song = ({ song }) => {
  return (
      <div className="card m-2 border border-dark-subtle" style={{ width: "18rem"}}>
        <ul className="list-group list-group-flush border border-light-subtle">
          <li className="list-group-item textColorCard border border-dark">{song.songTitle}</li>
          <li className="list-group-item textColorCard ">{song.artist}</li>
          <li className="list-group-item textColorCard border border-dark">{song.album}</li>
        </ul>
      </div>
  )
}

export default Song
