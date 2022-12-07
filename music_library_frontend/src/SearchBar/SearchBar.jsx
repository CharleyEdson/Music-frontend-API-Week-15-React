import React, { useState } from "react";
import './SearchBar.css'

const SearchBar = (props) => {

  const [searchQuery, setSearchQuery] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    let response = props.songs.filter((song) => {
      if (
        song.title.includes(searchQuery) ||
        song.artist.includes(searchQuery) ||
        song.album.includes(searchQuery) ||
        song.release_date.includes(searchQuery) ||
        song.genre.includes(searchQuery)
      ) {
        return true;
      } else {
        return false;
      }
    });
    props.setSongs(response);
  }

  return (
    <div >
      <div className="center">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={searchQuery}
            onChange={(event) => setSearchQuery(event.target.value)}
          ></input>
          <button className="searchbutton" type="submit">Search</button>
        </form>
        <form onSubmit={props.getAllSongs}>
          <button type="submit" className="searchbutton">Reset Filter</button>
        </form>

      </div>
    </div>
  );
};

export default SearchBar;


//Things to update:

//I want to make sure that if I search by a capital, or non capital, it will still search.

