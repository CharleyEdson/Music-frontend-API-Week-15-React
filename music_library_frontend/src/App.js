import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Title from './Title/Title';
import "./App.css";
import DisplayMusic from './DisplayMusic/DisplayMusic';
import CreateSong from './CreateSong/CreateSong';
import MusicMapper from './MusicMapper/MusicMapper';

function App() {

  const [songs, setSongs] = useState([{ title: "BlackBird", artist: "The Beatles", album: "The Beatles", release_date: "05-03-1969", genre: "Folk", likes: 0},
    {title: "Colder Weather", artist: "Zac Brown Band", album: "You Get What You Give", release_date: "05-03-2010", genre: "Country", likes: 0},
 ]);

  

  function addNewSong(song){
    let tempsongs = [song, ...songs];
    setSongs(tempsongs);
  }

  useEffect(() => {
    getAllSongs();

  },[]);

  async function getAllSongs(){
    const response = await axios.get('http://127.0.0.1:8000/music/');
    setSongs(response.data)
  }

  return (
    <div>
      <div className='Title'>
      <Title />
      </div>
      <MusicMapper musicArray={songs} />
      <CreateSong addNewSong={addNewSong} idNum={songs.length} />
      
    </div>
  );
}

export default App;