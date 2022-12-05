import React, { useState, useEffect } from "react";
import axios from "axios";
import Title from "./Title/Title";
import "./App.css";
import CreateSong from "./CreateSong/CreateSong";
import MusicMapper from "./MusicMapper/MusicMapper";
import SearchBar from "./SearchBar/SearchBar";

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


  return (
    <div>
      <Title />
      <SearchBar setSongs={setSongs} songs={songs}/>
      <div className="border-box">
        <MusicMapper songs={songs} />
      </div>
      <br></br>
      <CreateSong addNewSong={createASong} idNum={songs.length} />

      <div className="Title"></div>
    </div>
  );
}

export default App;
