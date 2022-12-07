import React, { useState, useEffect } from 'react';
import './DisplayMusic.css'
import '../EditModal/EditModal'
import Modal from '../EditModal/EditModal';
import axios from 'axios';




const DisplayMusic = ({song, getAllSongs}) => {


const [showModal, setShowModal] = useState(false)
// TODO: Combine handlePut and handleClick

    const handlePut = async (s) => {
        
        try {
            await axios.put(`http://127.0.0.1:8000/music/${song.id}/`,s)
            .then(response=>{console.log(response); 
                })
        } catch (error) {
            console.log(error)
        }
    }

    const handleClick = async () => {


        let likesButton = {

        title: song.title,
        artist: song.artist,
        album: song.album,
        release_date: song.release_date,
        genre: song.genre,
        likes: song.likes + 1,
        };
        await handlePut(likesButton).then(response => getAllSongs());

    }

    


    return ( 
        <tr>
                <td>{song.title}</td>
                <td>{song.artist}</td>
                <td>{song.album}</td>
                <td>{song.release_date}</td>
                <td>{song.genre}</td>
                <td>{song.likes}</td>
                <td><button onClick={()=> handleClick()}  style={{ cursor: "pointer" }}>Like</button></td>
                <td><button onClick={()=> setShowModal(true)}>Edit</button></td>
                <Modal open={showModal} song = {song} getAllSongs={getAllSongs} onClose={()=>setShowModal(false)}/>
                
        </tr>

    );
}
 
export default DisplayMusic;