import React, { useState, useEffect } from "react";

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
      id: id + 1,
    };
    props.addNewSong(newSong);
  }

//Need to make all of these API 'Post' Calls.

  return (
    <div>
      <form onSubmit={handleSubmit}>
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
            type="text"
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
            onChange={(event) => setLikes(event.target.value)}
          ></input>
          <button type='submit'>Create a Song</button>
        </div>
      </form>
    </div>
  );
};

export default CreateSong;
