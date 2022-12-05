import React from 'react';
import DisplayMusic from '../DisplayMusic/DisplayMusic';
import SearchBar from '../SearchBar/SearchBar';

const MusicMapper = ({musicArray}, {searchQuery}) => {
    let tempArray = [...musicArray]
    return (  
        <div>
            <table>
                <thead>
                <tr>
                    <th>Title</th>
                    <th>Artist</th>
                    <th>Album</th>
                    <th>Release Date</th>
                    <th>Genre</th>
                    <th>Likes</th>
                </tr>
                </thead>
                <tbody>
                {tempArray.filter(song => song[song.artist].includes({searchQuery})).map(song => <DisplayMusic key = {song.id} song = {song}/>)}
                </tbody>
            </table>
            


        </div>
    );
}
 
export default MusicMapper;