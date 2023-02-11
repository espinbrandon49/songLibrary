import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { MdOutlineLibraryMusic } from "react-icons/md";
import Axios from "axios";
import { AuthContext } from "../helpers/AuthContext";

const AddSong = () => {
  const [songTitle, setSongTitle] = useState('');
  const [artist, setArtist] = useState('');
  const [album, setAlbum] = useState('');
  const { authState } = useContext(AuthContext);

  const addSong = () => {
    Axios.post("http://localhost:3001/api/songs/insert", {
      id: authState.id,
      songTitle: songTitle,
      artist: artist,
      album: album
    })
    document.getElementById("songTitle").value = ''
    document.getElementById("artist").value = ''
    document.getElementById("album").value = ''
    window.location.reload()
  }

  const onSubmit = (e) => {
    e.preventDefault();

    // if (songTitle === '' || artist === '' || album === '') {
    //   alert('Please fill in all fields')
    // }

    addSong();

    setSongTitle('');
    setArtist('');
    setAlbum('');
  }

  return (
    <>
      {!authState.status
        ? <Link className="btn btn-primary btn-lg w-100 square" to='/login'>Add Song</Link>
        : <button type="button" className="btn btn-primary btn-lg w-100 square" data-bs-toggle="modal" data-bs-target="#addSong">
          <div className="d-flex align-items-center justify-content-center">
            <MdOutlineLibraryMusic />
            <div>Add Song</div>
          </div>
        </button>
      }

      <div className="modal fade" id="addSong" aria-labelledby="addSongLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="addSongLabel">Add Song</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form onSubmit={onSubmit}>
                <div className="mb-3">
                  <label className="form-label">Song Title</label>
                  <input
                    type="text"
                    className="form-control"
                    id="songTitle"
                    value={songTitle}
                    onChange={(e) => setSongTitle(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Artist</label>
                  <input
                    type="text"
                    className="form-control"
                    id="artist"
                    value={artist}
                    onChange={(e) => setArtist(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Album</label>
                  <input
                    type="text"
                    className="form-control"
                    id="album"
                    value={album}
                    onChange={(e) => setAlbum(e.target.value)}
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn-primary w-100"
                  data-bs-dismiss="modal"
                >Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AddSong
