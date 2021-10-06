import React, {useEffect, useState } from 'react';
import { useParams, useHistory} from 'react-router-dom';
//import styled from 'styled-components';


function NoteDetail(props) {
    const {allNotes} = props;
    const [ isLoaded, setIsLoaded ] = useState(false)
    const [ loadedNote, setLoadedNote ] = useState({})
    const [ posterName, setPosterName ] = useState("")
    const [ noteComments, setNoteComments ] = useState([])

    const { title, format, difficulty, content, user_id } = loadedNote;

    

    const id = parseInt(useParams().id);
    let history = useHistory();

    useEffect(() => {
        fetch(`http://localhost:9292/notes/${id}`)
        .then((resp) => resp.json())
        .then(note => {
            //fetchComments(parseInt(id));
            setLoadedNote(note);
            setIsLoaded(true);
        })
    }, [id]);

    // function fetchComments (noteId) {
    //     console.log('fetching comments')
    //     fetch('http://localhost:9292/comments')
    //         .then(r => r.json())
    //         .then(allComments => {
    //             const filteredComments = allComments.filter(comment => comment.noteId === noteId)
    //             console.log('filteredComments: ', filteredComments)
    //             setNoteComments(filteredComments)
    //         })
    // }

    function fetchPosterName(userid) {
        fetch(`http://localhost:9292/users/${userid}`)
        .then(resp => resp.json())
        .then(poster => {
            setPosterName(poster.name)
        })   
    }

    fetchPosterName(user_id)


return (
    <div className="detailed-note-obj">
        <h1>{title}</h1>
        <h3>Uploaded by: {posterName}</h3>
        <h4>Format: {format}</h4>
        <h4>Difficulty Rating: {difficulty} /10</h4>
        <br/>
        <p>{content}</p>
        <br/>
    </div>
    )
}

export default NoteDetail