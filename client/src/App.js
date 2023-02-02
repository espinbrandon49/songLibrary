import React, { useEffect, useState } from 'react';
import Axios from "axios";
import './App.css';

function App() {

  // const [songTitle, setSongTitle] = useState('')
  // const [artist, setDays] = useState(0)
  // const [newFoodName, setNewFoodName] = useState('')
  const [songList, setSongList] = useState([])

  useEffect(() => {
    Axios.get("http://localhost:3001").then((response) => {
      setSongList(response.data)
    })
  }, [songList])

  // const addToList = () => {
  //   Axios.post("http://localhost:3001/insert", {
  //     foodName: foodName,
  //     days: days,
  //   })
  //   document.getElementById("foodName").value = ''
  //   document.getElementById("days").value = ''
  // }

  // const updateFood = (id) => {
  //   Axios.put("http://localhost:3001/update", {
  //     id: id, newFoodName: newFoodName,
  //   })
  //   document.getElementById("updateFood").value = ''
  // }

  // const deleteFood = (id) => {
  //   Axios.delete(`http://localhost:3001/delete/${id}`)
  // }

  return (
    <div className="App">

      {/* <label>Food Name</label>
      <input
        id='foodName'
        type="text"
        onChange={(event) => {
          setFoodName(event.target.value);
        }}
      />

      <label>Days Since You Ate It</label>
      <input
        id='days'
        type="number"
        onChange={(event) => setDays(event.target.value)} />

      <button onClick={addToList} > Add To List </button> */}

      <h1> Song Library </h1>
      {songList.map((val, key) => {
        return (
          <div key={key} >
            <h1>{val.songTitle}</h1> <h1>{val.artist}</h1> <h1>{val.album}</h1>
            {/* <input
              id='updateFood'
              type="text"
              placeholder='New Food Name...'
              onChange={(event) => setNewFoodName(event.target.value)}
            />
            <button onClick={() => updateFood(val._id)}> Update </button>
            <button onClick={() => deleteFood(val._id)}> Delete </button> */}
          </div>)
      })}
    </div>
  );
}

export default App;
