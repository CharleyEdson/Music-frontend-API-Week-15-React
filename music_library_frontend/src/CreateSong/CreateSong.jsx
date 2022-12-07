import React, { useState } from "react";
import "./CreateSong.css"

const CreateSong = (props) => {
  const [title, setTitle] = useState("");
  const [artist, setArtist] = useState("");
  const [album, setAlbum] = useState("");
  const [release_date, setRelease_Date] = useState("");
  const [genre, setGenre] = useState("");
  const [likes, setLikes] = useState("");
  const [id, setId] = useState(props.idNum);

  function handleSubmit(event) {
    event.preventDefault();

    let newSong = {
      title: title,
      artist: artist,
      album: album,
      release_date: release_date,
      genre: genre,
      likes: likes,
    };
    props.addNewSong(newSong);
    console.log(newSong.id);
  }

//Need to make all of these API 'Post' Calls.

  return (
    <div className="createsong">
      <form onSubmit={handleSubmit}>
        <div className="inputdiv">
        <div><label>Title</label></div>
          <input
            type="text"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          ></input>
        </div>
        <div className="inputdiv">
          <div><label>Artist</label></div>
          <input
            type="text"
            value={artist}
            onChange={(event) => setArtist(event.target.value)}
          ></input>
        </div>
        <div className="inputdiv">
          <div><label class>Album</label></div>
          <input
            type="text"
            value={album}
            onChange={(event) => setAlbum(event.target.value)}
          ></input>
        </div>
        <div className="inputdiv">
          <div><label >Release Date</label></div>
          <input
            type="date"
            value={release_date}
            onChange={(event) => setRelease_Date(event.target.value)}
          ></input>
        </div>
        <div className="inputdiv">
          <div><label >Genre</label></div>
          <input
            type="text"
            value={genre}
            onChange={(event) => setGenre(event.target.value)}
          ></input>
        </div>
        <div className="inputdiv">
          <div><label >Likes</label></div>
          <input
            type="text"
            value={likes}
            onChange={(event) => setLikes(parseInt(event.target.value))}
          ></input>
          <div className="inputdiv">
          <button type='submit'>Create a Song</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreateSong;
