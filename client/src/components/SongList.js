import React, { useContext, useEffect, useState } from 'react';
import Axios from "axios";
import { AuthContext } from '../helpers/AuthContext'
import Song from './Song'
import AddSong from './AddSong';

const SongList = () => {
  const [listOfSongs, setListOfSongs] = useState([])
  const { authState } = useContext(AuthContext)
  const [singleUser, setSingleUser] = useState({})
  const [userSongs, setUserSongs] = useState([{ songTitle: 'test', artist: 'test', album: 'test' }])
  let id;
  authState ? id = authState.id : id = ''

  useEffect(() => {
    Axios.get(`https://songlibrary.herokuapp.com/api/user/${id}`)
      .then((response) => {
        setSingleUser(response.data)
      })
      .then((response) => {
        setUserSongs(listOfSongs.filter((song, index) => singleUser.songList.includes(song._id)))
      })
  }, [listOfSongs])

  useEffect(() => {
    Axios.get("https://songlibrary.herokuapp.com/api/songs/listofsongs")
      .then((response) => {
        setListOfSongs(response.data)
      })
      .then((response) => {
        setUserSongs(listOfSongs.filter((song, index) => singleUser.songList.includes(song._id)))
      })
  }, [authState])

  console.log(
    {
      "listOfSongs": listOfSongs,
      "authState": authState,
      "singleUser": singleUser,
      "userSongs": userSongs,
    }
  )
  return (
    <>
      <div>
        <AddSong songList={setListOfSongs} />
      </div>
      <div className='songList container d-flex flex-wrap flex-row-reverse mt-4 justify-content-center border border-dark-subtle '>
        {
          !authState.status
            ? <div className='d-flex flex-column text-center'>
              <div className='fs-1 py-3'>
                ┏(-_-)┛┗(-_- )┓
              </div>
              <div className='display-6 text-light py-3'>
                Login to to see your songs
              </div>
            </div>
            : listOfSongs.length > 0
              ? userSongs.map((song, index) => {
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