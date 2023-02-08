import React, { useContext, useEffect, useState } from 'react';
import Axios from "axios";
import { AuthContext } from '../helpers/AuthContext'
import Song from './Song'
import AddSong from './AddSong';

const SongList = () => {
  const [listOfSongs, setListOfSongs] = useState([])
  const { authState } = useContext(AuthContext)
  const [user, setUser] = useState({})
  let id;
  authState ? id = authState.id : id = ''

  // useEffect(() => {
  //   Axios.get("http://localhost:3001/api/songs/listofsongs").then((response) => {
  //     setListOfSongs(response.data)
  //   })
  // }, [])

  useEffect(() => {
    Axios.get(`http://localhost:3001/api/user/${id}`).then((response) => {
      setUser(response.data)
      console.log(response.data)
    })
  }, [authState])

  // console.log(id)
  // console.log(user)
  // console.log(authState)

  return (
    <>
      <div>
        <AddSong songList={setListOfSongs} />
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