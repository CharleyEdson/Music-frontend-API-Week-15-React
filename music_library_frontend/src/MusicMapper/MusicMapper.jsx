import React from 'react';
import DisplayMusic from '../DisplayMusic/DisplayMusic';

const MusicMapper = (props) => {

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
                {props.songs.map(song => <DisplayMusic key = {song.id} song = {song}/>)}
                </tbody>
            </table>
            


        </div>
    );
}
 
export default MusicMapper;

//filter(song => song[song.artist].includes({searchQuery})).