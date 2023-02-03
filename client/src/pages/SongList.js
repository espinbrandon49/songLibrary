import React, { useEffect, useState } from 'react';
import Axios from "axios";
import Song from '../components/Song';

const SongList = () => {
  const [songList, setSongList] = useState([])

  useEffect(() => {
    Axios.get("http://localhost:3001").then((response) => {
      setSongList(response.data)
    })
  }, [])

  return (
    <div className='container'>
      {songList.length > 0
        ? songList.map((song, index) => {
          return (
            <div key={index} >
              <Song song={song} />
            </div>)
        })
        : (<p className='textColor display-6 text-center mt-5'>No songs in Library</p>)}
    </div>
  )
}

export default SongList
