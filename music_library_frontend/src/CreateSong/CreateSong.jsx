import React, { useState, useEffect } from 'react';

const CreateSong = (props) => {
    
    const [title, setTitle] = useState('');
        const [artist, setArtist] = useState('');
        const [album, setAlbum] = useState('');
        const [release_date, setRelease_Date] = useState('');
        const [genre, setGenre] = useState('');
        const [likes, setLikes] = useState('');
        const [id, setId] = useState(props.idNum)
    
    return ( 
        <

     );
}
 
export default CreateSong;