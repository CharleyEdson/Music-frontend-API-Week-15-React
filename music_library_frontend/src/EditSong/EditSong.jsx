import axios from 'axios';
import React, { useState} from 'react';


const EditSong = ({song, getAllSongs}) => {
    const [title, setTitle] = useState(song.title);
    const [artist, setArtist] = useState(song.artist);
    const [album, setAlbum] = useState(song.album);
    const [release_date, setRelease_Date] = useState(song.release_date);
    const [genre, setGenre] = useState(song.genre);
    const [likes, setLikes] = useState(song.likes);
  

    const handlePut = async (s) => {
        try {
            await axios
            .put(`http://127.0.0.1:8000/music/${song.id}/`,s)
            .then(response=>{console.log(response); 
                })
        } catch (error) {
            console.log(error)
        }
    }

    const handleSubmit = async (event) => {
      event.preventDefault();
  
      let newSong = {
        title: title,
        artist: artist,
        album: album,
        release_date: release_date,
        genre: genre,
        likes: likes,
      };
      console.log(newSong);
      await handlePut(newSong).then(response => getAllSongs());

    

    }
    return ( 
        <div>
        <form onSubmit={(e)=>{handleSubmit(e)}}>
        <div>
          <label>Title</label>
          <input
            type="text"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          ></input>
        </div>
        <div>
          <label>Artist</label>
          <input
            type="text"
            value={artist}
            onChange={(event) => setArtist(event.target.value)}
          ></input>
        </div>
        <div>
          <label>Album</label>
          <input
            type="text"
            value={album}
            onChange={(event) => setAlbum(event.target.value)}
          ></input>
        </div>
        <div>
          <label>Release Date</label>
          <input
            type="date"
            value={release_date}
            onChange={(event) => setRelease_Date(event.target.value)}
          ></input>
        </div>
        <div>
          <label>Genre</label>
          <input
            type="text"
            value={genre}
            onChange={(event) => setGenre(event.target.value)}
          ></input>
        </div>
        <div>
          <label>Likes</label>
          <input
            type="text"
            value={likes}
            onChange={(event) => setLikes(parseInt(event.target.value))}
          ></input>
          <button type='submit'>Create a Song</button>
        </div>
      </form>

        </div>
     );
}
 
export default EditSong;

//I want the use state's to hold the current data.