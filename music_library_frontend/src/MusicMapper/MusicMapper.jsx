import React from 'react';
import DisplayMusic from '../DisplayMusic/DisplayMusic';

const MusicMapper = (props) => {

    return (  
        <div>
            <table className='table table-striped table-bordered table-hover '>
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
                {props.songs.map(song => <DisplayMusic key = {song.id} getAllSongs={props.getAllSongs}  song = {song}/>)}
                </tbody>
            </table>
            


        </div>
    );
}
 
export default MusicMapper;

//Not each child has a unique key.