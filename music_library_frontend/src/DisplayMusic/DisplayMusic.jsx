import React, { useState, useEffect } from 'react';
import './DisplayMusic.css'
import '../EditModal/EditModal'
import Modal from '../EditModal/EditModal';




const DisplayMusic = ({song, getAllSongs}) => {

    
   
    
    const [likeButton, setLikeButton] = useState(song.likes) // When I click the like button, it doesn't show 1, but shows 2 and after. Need to make this an API request to 'put' a change to increment.'
    const [showModal, setShowModal] = useState(false)

    


   


    return ( 
        <tr>
                <td>{song.title}</td>
                <td>{song.artist}</td>
                <td>{song.album}</td>
                <td>{song.release_date}</td>
                <td>{song.genre}</td>
                <td>{song.likes}</td>
                <td><button type='submit' onClick={()=> setLikeButton(song.likes ++)}  style={{ cursor: "pointer" }}>Like</button></td>
                <td><button onClick={()=> setShowModal(true)}>Edit</button></td>
                <Modal open={showModal} song = {song} getAllSongs={getAllSongs} onClose={()=>setShowModal(false)}/>
                
        </tr>

    );
}
 
export default DisplayMusic;