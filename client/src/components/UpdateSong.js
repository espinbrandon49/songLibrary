import { useState } from "react";
import { MdSystemUpdateAlt } from "react-icons/md"
import Axios from "axios";

const UpdateSong = ({song, songList}) => {
// console.log(song)
  const allSongs = songList.map((songValue, index) => {
    return songValue
  })
  // console.log(allSongs)
  const [newSongTitle, setNewSongTitle] = useState('');
  const [newArtist, setNewArtist] = useState('');
  const [newAlbum, setNewAlbum] = useState('');

  const updateSong = (id) => {

    // Axios.put(`http://localhost:3001/update:${id}`, {
    //   id: id,
    //   newSongTitle: newSongTitle,
    //   newArtist: newArtist,
    //   newAlbum: newAlbum,
    // })
    document.getElementById("newSongTitle").value = ''
    document.getElementById("newArtist").value = ''
    document.getElementById("newAlbum").value = ''
    // window.location.reload()
    console.log(id)
  }

  const onSubmit = (e, id) => {
    e.preventDefault();

    if (newSongTitle === '' || newArtist === '' || newAlbum === '') {
      alert('Please fill in all fields')
    }

    updateSong(id);

    setNewSongTitle('');
    setNewArtist('');
    setNewAlbum('');

    console.log(e.target.value, id)
  }

  return (
    <>
      <button type="button" className="btn btn-primary rounded-end" data-bs-toggle="modal" data-bs-target="#updateSong">
        <div className="d-flex align-items-center justify-content-center">
          <div><MdSystemUpdateAlt /></div>
        </div>
      </button>

      <div className="modal fade" id="updateSong" aria-labelledby="updateSongLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="updateSongLabel">Update Song</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form >
                    <div className="mb-3">
                      <label className="form-label">New Song Title</label>
                      <input
                        type="text"
                        className="form-control"
                        id="newSongTitle"
                        value={newSongTitle}
                        onChange={(e) => setNewSongTitle(e.target.value)}
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Artist</label>
                      <input
                        type="text"
                        className="form-control"
                        id="newArtist"
                        value={newArtist}
                        onChange={(e) => setNewArtist(e.target.value)}
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Album</label>
                      <input
                        type="text"
                        className="form-control"
                        id="newAlbum"
                        value={newAlbum}
                        onChange={(e) => setNewAlbum(e.target.value)}
                      />
                    </div>
                    <button
                      onClick={(e) => {
                        updateSong(song._id)
                        e.preventDefault()
                      }}
                      className="btn btn-dark-outline w-100"
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

export default UpdateSong;
