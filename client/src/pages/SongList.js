import React, { useEffect, useState } from 'react';
import Axios from "axios";
import Song from '../components/Song';
import AddSong from '../components/AddSong';

const SongList = async () => {
  const [songList, setSongList] = useState([])

  useEffect(() => {
    Axios.get("https://songlibrary.herokuapp.com/").then((response) => {
      setSongList(response.data)
    })
    console.log(typeof songList)
    console.log(Array.isArray(songList))
    console.log(songList.length)
  }, [])

  return (
    <>
      <div>
        <AddSong songList={setSongList}/>
      </div>
      <div className='container d-flex flex-row flex-wrap mt-4 justify-content-center border border-dark-subtle'>
        {await songList.length > 0
          ? await songList.map((song, index) => {
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
