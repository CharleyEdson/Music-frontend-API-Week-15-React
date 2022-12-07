import React, { useState, useEffect } from 'react';
import './DisplayMusic.css'
import '../EditModal/EditModal'
import Modal from '../EditModal/EditModal';
import axios from 'axios';




const DisplayMusic = ({song, getAllSongs}) => {


const [showModal, setShowModal] = useState(false)

    const handlePut = async () => {
        
        let likesButton = {

            title: song.title,
            artist: song.artist,
            album: song.album,
            release_date: song.release_date,
            genre: song.genre,
            likes: song.likes + 1,
            };

        try {
            await axios.put(`http://127.0.0.1:8000/music/${song.id}/`, likesButton)
            .then(response=> getAllSongs()); 
                
        } catch (error) {
            console.log(error)
        }
    }

    const handleDelete = async () => {
        try {
            await axios.delete(`http://127.0.0.1:8000/music/${song.id}/`)
            .then(response=> getAllSongs()); 
                
        } catch (error) {
            console.log(error)
        }

    }


    return ( 
        <tr>
                <td>{song.title}</td>
                <td>{song.artist}</td>
                <td>{song.album}</td>
                <td>{song.release_date}</td>
                <td>{song.genre}</td>
                <td>{song.likes}</td>
                <td><button className='button' onClick={()=> handlePut()}  style={{ cursor: "pointer" }}>Like</button></td>
                <td><button className='button' onClick={()=> setShowModal(true)}>Edit</button></td>
                <td><button className='button' onClick={()=> handleDelete()}>Delete</button></td>
                <Modal open={showModal} song = {song} getAllSongs={getAllSongs} onClose={()=>setShowModal(false)}/>
                
        </tr>

    );
}
 
export default DisplayMusic;