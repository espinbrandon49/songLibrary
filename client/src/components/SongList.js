import React, { useEffect, useState } from 'react';
import Axios from "axios";
import Song from './Song'
import AddSong from './AddSong';

const SongList = () => {
  const [listOfSongs, setListOfSongs] = useState([])

  useEffect(() => {
    Axios.get("http://localhost:3001/api/songs/listofsongs").then((response) => {
      setListOfSongs(response.data)
    })
  }, [])
  return (
    <>
      <div>
        <AddSong songList={setListOfSongs}/>
      </div>
      <div className='songList container d-flex flex-wrap flex-row-reverse mt-4 justify-content-center border border-dark-subtle '>
        {listOfSongs.length > 0
          ? Array.from(listOfSongs).map((song, index) => {
            return (
              <div key={index} className="">
                <Song song={song} />
              </div>)
          })
          : (<p className='textColor display-6 text-center mt-5'>No songs in Library</p>)}
      </div>
    </>
  )
}

export default SongList