import React, {useEffect, useState } from 'react';
import { useParams, useHistory} from 'react-router-dom';
import Comments from './Comments';
//import styled from 'styled-components';


function NoteDetail(props) {
    const {allNotes} = props;
    const [ isLoaded, setIsLoaded ] = useState(false)
    const [ loadedNote, setLoadedNote ] = useState({})
    const [ posterName, setPosterName ] = useState("")
    const [ noteComments, setNoteComments ] = useState([])
    const [newComment, setNewComment] =useState("")
    const [commentUser, setCommentUser] =useState("TESTUSER")
    const [formData, setFormData] = useState({
        note_id: "",
        user_id: 1,
        name: "",
        text: ""
    })

    const {  title, format, difficulty, user, comments, content, user_id } = loadedNote;


    const id = parseInt(useParams().id);
    let history = useHistory();

    useEffect(() => {
        fetch(`http://localhost:9292/notes/${id}`)
        .then((resp) => resp.json())
        .then(note => {
            //fetchComments(parseInt(id));
            setLoadedNote(note);
            setIsLoaded(true);
            setPosterName(note.user.name)
            setNoteComments(note.comments)
            setFormData({...formData, note_id: note.id})
        })
    }, [id]);

    const singleComment = noteComments.map((comment) => (
            <Comments 
            id={comment.id}
            note_id={comment.note_id}
            name={comment.name}
            text={comment.text}
            user_id={comment.user_id}
            />
        ))
    function handleForm(e) {
        const key = e.target.name
    } 


    function handleSubmit(e) {
        e.preventDefault();
        fetch('http://localhost:9292/comments', {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify(),
            })
        .then(resp => resp.json())
        .then(
        console.log("Added this fuckin comment")
        )
    }
    
return (
    <div className="detailed-note-obj">
        <h1>{title}</h1>
        <h3>Uploaded by: {posterName}</h3>
        <h4>Format: {format}</h4>
        <h4>Difficulty Rating: {difficulty} /10</h4>
        <br/>
        <p>{content}</p>
        <div class="ui comments">
            <br/>
            <h3 class="ui dividing header">Comments</h3>
            {singleComment}
        </div>
        <br/>
        <div class="comment form">
            <form onSubmit={handleSubmit} class="ui reply form">
                <div class="form">
                    <textarea onChange={setNewComment} rows="3"></textarea>
                </div>
                <br/>
                <button class="ui icon primary left labeled button">
                    <i aria-hidden="true" class="edit icon"></i>
                    Add Comment
                </button>
            </form>
        </div>
        <br/>
    </div>
    )
}

export default NoteDetail