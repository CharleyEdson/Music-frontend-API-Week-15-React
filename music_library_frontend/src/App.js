import React, { useState, useEffect } from "react";
import axios from "axios";
import Title from "./Title/Title";
import "./App.css";
import CreateSong from "./CreateSong/CreateSong";
import MusicMapper from "./MusicMapper/MusicMapper";
import SearchBar from "./SearchBar/SearchBar";

function App() {
  const [songs, setSongs] = useState([
    {
      title: "BlackBird",
      artist: "The Beatles",
      album: "The Beatles",
      release_date: "05-03-1969",
      genre: "Folk",
      likes: 0,
    },
    {
      title: "Colder Weather",
      artist: "Zac Brown Band",
      album: "You Get What You Give",
      release_date: "05-03-2010",
      genre: "Country",
      likes: 0,
    },
  ]);

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

  function searchedItem(searchQuery){
    let tempSongs = [songs.filter(song=> songs.artist.includes(searchQuery))]
    setSongs(tempSongs);
    
  }

  return (
    <div>
      <Title />
      <SearchBar userInput={searchedItem} songs={songs}/>
      <div className="border-box">
        <MusicMapper musicArray={songs} />
      </div>
      <br></br>
      <CreateSong addNewSong={createASong} idNum={songs.length} />

      <div className="Title"></div>
    </div>
  );
}

export default App;
