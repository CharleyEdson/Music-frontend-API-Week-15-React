import React, { useState, useEffect } from "react";
import axios from "axios";
import Title from "./Title/Title";
import "./App.css";
import CreateSong from "./CreateSong/CreateSong";
import MusicMapper from "./MusicMapper/MusicMapper";
import SearchBar from "./SearchBar/SearchBar";
//TO DO
//Create error handling for post/put requests. ie if I put in a non number for likes.
//Create default likes value in backend to 0. Have it show up in the likes form.

function App() {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    getAllSongs();
  }, []);

  async function getAllSongs() {
    const response = await axios.get("http://127.0.0.1:8000/music/");
    setSongs(response.data);
  }

  async function createASong(newSong) {
    let response = await axios.post("http://127.0.0.1:8000/music/", newSong);
    if (response.status === 201) {
      await getAllSongs();
    }
  }

  async function editASong(song) {
    let response = await axios.put("http://127.0.0.1:8000/music/", song);
    if (response.status === 200) {
      await getAllSongs();
    }
  }

  return (
    <div className='background'>
      <Title />
      <SearchBar setSongs={setSongs} songs={songs} resetButton={getAllSongs} />
      <div className="border-box">
        <MusicMapper songs={songs} getAllSongs={getAllSongs} />
      </div>
      <br></br>
      <CreateSong addNewSong={createASong} idNum={songs.length} />

      <div className="Title"></div>
    </div>
  );
}

export default App;
