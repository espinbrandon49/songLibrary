import UpdateSong from "./UpdateSong";
import { FaTrashAlt } from "react-icons/fa";

import Axios from 'axios';

const deleteSong = (id) => {
  Axios.delete(`http://localhost:3001/delete/${id}`)
}

const Song = ({ song }) => {
  return (
    <div className="card m-2 border border-dark-subtle" style={{ width: "18rem" }}>
      <ul className="list-group list-group-flush border border-light-subtle">
        <li className="list-group-item textColorCard border border-dark"><strong>{song.songTitle}</strong></li>
        <li className="list-group-item textColorCard thinWeight">{song.artist}</li>
        <li className="list-group-item textColorCard border border-dark"><i>{song.album}</i></li>
      </ul>
      <div className='card-body cardButtons'>
        <div className="btn-group d-flex " role="group" >
          <button
            type="button"
            className='btn btn-danger'
            onClick={() => deleteSong(song._id)}
          >
            <FaTrashAlt />
          </button>
          <UpdateSong song={song}/>
          </div>
      </div>
    </div>
  )
}

export default Song
