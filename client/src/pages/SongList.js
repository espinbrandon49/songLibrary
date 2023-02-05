import React, { useEffect, useState } from 'react';
import Axios from "axios";
import Song from '../components/Song';
import AddSong from '../components/AddSong';

const SongList = () => {
  const [songList, setSongList] = useState([])

  useEffect(() => {
    Axios.get("http://localhost:3001/").then((response) => {
      setSongList(response.data)
    })
  }, [])

  return (
    <>
      <div>
        <AddSong songList={setSongList}/>
      </div>
      <div className='container d-flex flex-row flex-wrap mt-4 justify-content-center border border-dark-subtle'>
        {songList.length > 0
          ? songList.map((song, index) => {
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
